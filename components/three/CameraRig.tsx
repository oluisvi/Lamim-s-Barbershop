"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SCROLL_CAMERA_POINTS, SCROLL_FOCUS_POINTS } from "@/data/scroll-path";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

const INTRO_FROM = new THREE.Vector3(0, 1.65, 13.2);
const INTRO_LOOK = new THREE.Vector3(0, 1.5, 5.8);

function toVectors(points: [number, number, number][]) {
  return points.map((point) => new THREE.Vector3(...point));
}

export function CameraRig() {
  const { camera } = useThree();
  const mode = useExperienceStore((s) => s.mode);
  const setMode = useExperienceStore((s) => s.setMode);
  const scrollProgress = useExperienceStore((s) => s.scrollProgress);
  const reducedMotion = useExperienceStore((s) => s.reducedMotion);
  const completeTour = useExperienceStore((s) => s.completeTour);
  const introStart = useRef<number | null>(null);
  const endTriggered = useRef(false);
  const smoothedProgress = useRef(0);
  const orientationHelper = useMemo(() => new THREE.Object3D(), []);
  const cameraCurve = useMemo(
    () => new THREE.CatmullRomCurve3(toVectors(SCROLL_CAMERA_POINTS), false, "catmullrom", 0.24),
    [],
  );
  const focusCurve = useMemo(
    () => new THREE.CatmullRomCurve3(toVectors(SCROLL_FOCUS_POINTS), false, "catmullrom", 0.3),
    [],
  );

  useEffect(() => {
    camera.position.copy(INTRO_FROM);
    camera.lookAt(INTRO_LOOK);
    smoothedProgress.current = 0;
  }, [camera]);

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
      const duration = reducedMotion ? 0.7 : 3.2;
      const raw = Math.min((elapsed - start) / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      const firstPoint = cameraCurve.getPoint(0);
      const firstFocus = focusCurve.getPoint(0);

      camera.position.lerpVectors(INTRO_FROM, firstPoint, eased);
      camera.lookAt(firstFocus);

      if (raw >= 1) setMode("explore");
      return;
    }

    if (mode !== "explore") return;

    const progressLambda = reducedMotion ? 18 : 7.5;
    smoothedProgress.current = THREE.MathUtils.damp(
      smoothedProgress.current,
      scrollProgress,
      progressLambda,
      delta,
    );

    const progress = THREE.MathUtils.clamp(smoothedProgress.current, 0, 0.9999);
    const targetPosition = cameraCurve.getPoint(progress);
    const targetFocus = focusCurve.getPoint(progress);
    const positionMix = 1 - Math.exp(-delta * (reducedMotion ? 20 : 11));
    const rotationMix = 1 - Math.exp(-delta * (reducedMotion ? 22 : 9));

    camera.position.lerp(targetPosition, positionMix);
    orientationHelper.position.copy(camera.position);
    orientationHelper.lookAt(targetFocus);
    camera.quaternion.slerp(orientationHelper.quaternion, rotationMix);

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
