"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  SCROLL_CAMERA_POINTS,
  SCROLL_LOOK_HEIGHT_OFFSETS,
  SCROLL_LOOK_SIDE_OFFSETS,
} from "@/data/scroll-path";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

const UP = new THREE.Vector3(0, 1, 0);
const LOOK_DISTANCE = 4.6;
const INTRO_UI_DURATION = 0.95;

function toVectors(points: [number, number, number][]) {
  return points.map((point) => new THREE.Vector3(...point));
}

function sampleTrack(values: readonly number[], progress: number) {
  const scaled = THREE.MathUtils.clamp(progress, 0, 0.999999) * (values.length - 1);
  const index = Math.floor(scaled);
  const next = Math.min(index + 1, values.length - 1);
  return THREE.MathUtils.lerp(values[index], values[next], scaled - index);
}

export function CameraRig() {
  const { camera, size } = useThree();
  const mode = useExperienceStore((s) => s.mode);
  const setMode = useExperienceStore((s) => s.setMode);
  const reducedMotion = useExperienceStore((s) => s.reducedMotion);
  const completeTour = useExperienceStore((s) => s.completeTour);
  const introStart = useRef<number | null>(null);
  const initializedRef = useRef(false);
  const endTriggered = useRef(false);
  const smoothedProgress = useRef(0);
  const lookMatrix = useMemo(() => new THREE.Matrix4(), []);
  const targetQuaternion = useMemo(() => new THREE.Quaternion(), []);
  const forward = useMemo(() => new THREE.Vector3(), []);
  const right = useMemo(() => new THREE.Vector3(), []);
  const lookTarget = useMemo(() => new THREE.Vector3(), []);

  const cameraCurve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(toVectors(SCROLL_CAMERA_POINTS), false, "centripetal");
    curve.arcLengthDivisions = 320;
    return curve;
  }, []);

  const perspectiveCamera = camera as THREE.PerspectiveCamera;
  const isMobile = size.width < 640;
  const isPortrait = size.height >= size.width;
  const baseFov = isMobile ? (isPortrait ? 73 : 68) : size.width < 1024 ? 64 : 60;
  const sideScale = isMobile ? (isPortrait ? 0.48 : 0.68) : 1;
  const heightScale = isMobile ? 0.82 : 1;
  const lookDistance = isMobile ? (isPortrait ? 4.0 : 4.25) : LOOK_DISTANCE;

  const frameCameraAt = (progress: number) => {
    const p = THREE.MathUtils.clamp(progress, 0, 0.9999);
    const targetPosition = cameraCurve.getPointAt(p);
    camera.position.copy(targetPosition);

    forward.copy(cameraCurve.getTangentAt(p)).normalize();
    right.crossVectors(forward, UP).normalize();

    const sideOffset = sampleTrack(SCROLL_LOOK_SIDE_OFFSETS, p);
    const heightOffset = sampleTrack(SCROLL_LOOK_HEIGHT_OFFSETS, p);
    lookTarget
      .copy(targetPosition)
      .addScaledVector(forward, lookDistance)
      .addScaledVector(right, sideOffset * sideScale);
    lookTarget.y += heightOffset * heightScale;

    // Matrix4.lookAt builds a camera-style orientation (-Z faces the target).
    // Using Object3D.lookAt here would flip the camera 180° because regular
    // objects face +Z while cameras look down -Z.
    lookMatrix.lookAt(targetPosition, lookTarget, UP);
    targetQuaternion.setFromRotationMatrix(lookMatrix);
    camera.quaternion.copy(targetQuaternion);
  };

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    frameCameraAt(0);
    perspectiveCamera.fov = baseFov;
    perspectiveCamera.updateProjectionMatrix();
    smoothedProgress.current = 0;
  }, [camera, perspectiveCamera]);

  useEffect(() => {
    if (mode === "intro") introStart.current = null;
    if (mode === "explore") smoothedProgress.current = useExperienceStore.getState().scrollProgress;
  }, [mode]);

  useEffect(() => {
    if (mode !== "idle") return;
    perspectiveCamera.fov = baseFov;
    perspectiveCamera.updateProjectionMatrix();
  }, [baseFov, mode, perspectiveCamera]);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    if (mode === "idle") return;

    if (mode === "intro") {
      const start = introStart.current ?? elapsed;
      if (introStart.current === null) introStart.current = start;

      // UI-only intro: keep the exact initial interior composition while the
      // landing content exits upward. No physical walk through the glass door.
      frameCameraAt(0);

      const duration = reducedMotion ? 0.28 : INTRO_UI_DURATION;
      if (elapsed - start >= duration) setMode("explore");
      return;
    }

    if (mode !== "explore") return;

    const scrollProgress = useExperienceStore.getState().scrollProgress;
    smoothedProgress.current = THREE.MathUtils.damp(
      smoothedProgress.current,
      scrollProgress,
      reducedMotion ? 22 : isMobile ? 12.5 : 10.5,
      delta,
    );

    const progress = THREE.MathUtils.clamp(smoothedProgress.current, 0, 0.9999);
    const targetPosition = cameraCurve.getPointAt(progress);
    camera.position.copy(targetPosition);

    forward.copy(cameraCurve.getTangentAt(progress)).normalize();
    right.crossVectors(forward, UP).normalize();

    const sideOffset = sampleTrack(SCROLL_LOOK_SIDE_OFFSETS, progress);
    const heightOffset = sampleTrack(SCROLL_LOOK_HEIGHT_OFFSETS, progress);
    lookTarget
      .copy(targetPosition)
      .addScaledVector(forward, lookDistance)
      .addScaledVector(right, sideOffset * sideScale);
    lookTarget.y += heightOffset * heightScale;

    lookMatrix.lookAt(targetPosition, lookTarget, UP);
    targetQuaternion.setFromRotationMatrix(lookMatrix);
    camera.quaternion.slerp(
      targetQuaternion,
      1 - Math.exp(-delta * (reducedMotion ? 30 : isMobile ? 16.5 : 14.5)),
    );

    if (Math.abs(perspectiveCamera.fov - baseFov) > 0.02) {
      perspectiveCamera.fov = THREE.MathUtils.damp(perspectiveCamera.fov, baseFov, 12, delta);
      perspectiveCamera.updateProjectionMatrix();
    }

    if (scrollProgress >= 0.995 && smoothedProgress.current >= 0.988 && !endTriggered.current) {
      endTriggered.current = true;
      trackEvent("guided_tour_completed", { navigation: "scroll" });
      completeTour();
    } else if (scrollProgress < 0.94) {
      endTriggered.current = false;
    }
  });

  return null;
}
