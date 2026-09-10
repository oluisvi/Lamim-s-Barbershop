"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  INTRO_CAMERA_POINTS,
  SCROLL_CAMERA_POINTS,
  SCROLL_LOOK_HEIGHT_OFFSETS,
  SCROLL_LOOK_SIDE_OFFSETS,
} from "@/data/scroll-path";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

const UP = new THREE.Vector3(0, 1, 0);
const LOOK_DISTANCE = 4.2;

function toVectors(points: [number, number, number][]) {
  return points.map((point) => new THREE.Vector3(...point));
}

function smoothstep(value: number) {
  const t = THREE.MathUtils.clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
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
  const orientationHelper = useMemo(() => new THREE.Object3D(), []);
  const forward = useMemo(() => new THREE.Vector3(), []);
  const right = useMemo(() => new THREE.Vector3(), []);
  const lookTarget = useMemo(() => new THREE.Vector3(), []);

  const cameraCurve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(toVectors(SCROLL_CAMERA_POINTS), false, "centripetal");
    curve.arcLengthDivisions = 320;
    return curve;
  }, []);

  const introCurve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(toVectors(INTRO_CAMERA_POINTS), false, "centripetal");
    curve.arcLengthDivisions = 120;
    return curve;
  }, []);

  const perspectiveCamera = camera as THREE.PerspectiveCamera;
  const baseFov = size.width < 640 ? 69 : size.width < 1024 ? 64 : 60;

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    camera.position.copy(introCurve.getPointAt(0));
    const tangent = introCurve.getTangentAt(0).normalize();
    camera.lookAt(camera.position.clone().addScaledVector(tangent, LOOK_DISTANCE));
    perspectiveCamera.fov = size.width < 640 ? 71 : size.width < 1024 ? 66 : 62;
    perspectiveCamera.updateProjectionMatrix();
    smoothedProgress.current = 0;
  }, [camera, introCurve, perspectiveCamera]);

  useEffect(() => {
    if (mode === "intro") introStart.current = null;
    if (mode === "explore") smoothedProgress.current = useExperienceStore.getState().scrollProgress;
  }, [mode]);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    if (mode === "idle") return;

    if (mode === "intro") {
      const start = introStart.current ?? elapsed;
      if (introStart.current === null) introStart.current = start;
      const duration = reducedMotion ? 0.85 : 3.8;
      const raw = Math.min((elapsed - start) / duration, 1);
      const eased = reducedMotion ? raw : smoothstep(raw);
      const targetPosition = introCurve.getPointAt(eased);
      const tangent = introCurve.getTangentAt(Math.min(eased + 0.006, 1)).normalize();

      camera.position.copy(targetPosition);
      lookTarget.copy(targetPosition).addScaledVector(tangent, LOOK_DISTANCE);
      orientationHelper.position.copy(targetPosition);
      orientationHelper.lookAt(lookTarget);
      camera.quaternion.slerp(
        orientationHelper.quaternion,
        1 - Math.exp(-delta * (reducedMotion ? 30 : 10.5)),
      );

      const introFov = THREE.MathUtils.lerp(baseFov + 3, baseFov, smoothstep(raw));
      if (Math.abs(perspectiveCamera.fov - introFov) > 0.02) {
        perspectiveCamera.fov = introFov;
        perspectiveCamera.updateProjectionMatrix();
      }

      if (raw >= 1) {
        perspectiveCamera.fov = baseFov;
        perspectiveCamera.updateProjectionMatrix();
        setMode("explore");
      }
      return;
    }

    if (mode !== "explore") return;

    // One smoothing layer only: scroll progress is damped, then position is sampled
    // directly from the curve. This keeps forward/reverse movement responsive and
    // eliminates the delayed "floating" produced by double position smoothing.
    const scrollProgress = useExperienceStore.getState().scrollProgress;
    smoothedProgress.current = THREE.MathUtils.damp(
      smoothedProgress.current,
      scrollProgress,
      reducedMotion ? 22 : 9.5,
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
      .addScaledVector(forward, LOOK_DISTANCE)
      .addScaledVector(right, sideOffset);
    lookTarget.y += heightOffset;

    orientationHelper.position.copy(targetPosition);
    orientationHelper.lookAt(lookTarget);
    camera.quaternion.slerp(
      orientationHelper.quaternion,
      1 - Math.exp(-delta * (reducedMotion ? 28 : 12.5)),
    );

    if (Math.abs(perspectiveCamera.fov - baseFov) > 0.02) {
      perspectiveCamera.fov = THREE.MathUtils.damp(perspectiveCamera.fov, baseFov, 12, delta);
      perspectiveCamera.updateProjectionMatrix();
    }

    if (scrollProgress >= 0.995 && smoothedProgress.current >= 0.985 && !endTriggered.current) {
      endTriggered.current = true;
      trackEvent("guided_tour_completed", { navigation: "scroll" });
      completeTour();
    } else if (scrollProgress < 0.9) {
      endTriggered.current = false;
    }
  });

  return null;
}
