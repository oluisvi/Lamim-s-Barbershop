"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

const TOUR_POINTS = [
  new THREE.Vector3(0, 1.65, 9.2),
  new THREE.Vector3(3.35, 1.65, 8.55),
  new THREE.Vector3(3.45, 1.65, 6.2),
  new THREE.Vector3(-3.1, 1.65, 3.2),
  new THREE.Vector3(-3.0, 1.65, -0.4),
  new THREE.Vector3(0.5, 1.65, -0.8),
  new THREE.Vector3(3.6, 1.65, 2.5),
  new THREE.Vector3(4.4, 1.65, 5.2),
  new THREE.Vector3(0, 1.65, 4.9),
  new THREE.Vector3(0, 1.65, -0.1)
];

export function CameraRig() {
  const { camera, gl } = useThree();
  const mode = useExperienceStore((s) => s.mode);
  const setMode = useExperienceStore((s) => s.setMode);
  const movement = useExperienceStore((s) => s.movement);
  const reducedMotion = useExperienceStore((s) => s.reducedMotion);
  const completeTour = useExperienceStore((s) => s.completeTour);
  const keys = useRef<Record<string, boolean>>({});
  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const yaw = useRef(0);
  const pitch = useRef(0);
  const introStart = useRef<number | null>(null);
  const tourStart = useRef<number | null>(null);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(TOUR_POINTS, false, "catmullrom", 0.3), []);

  useEffect(() => {
    camera.position.set(0, 1.65, 13.2);
    camera.lookAt(0, 1.55, 7.6);
    yaw.current = 0;
    pitch.current = 0;
  }, [camera]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      keys.current[event.code] = true;
      if (event.code === "Escape" && mode === "tour") setMode("free");
    };
    const onKeyUp = (event: KeyboardEvent) => {
      keys.current[event.code] = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [mode, setMode]);

  useEffect(() => {
    const el = gl.domElement;
    const down = (event: PointerEvent) => {
      if (mode !== "free") return;
      if ((event.target as HTMLElement)?.closest?.("button, a")) return;
      dragging.current = true;
      lastPointer.current = { x: event.clientX, y: event.clientY };
      el.setPointerCapture?.(event.pointerId);
    };
    const up = (event: PointerEvent) => {
      dragging.current = false;
      el.releasePointerCapture?.(event.pointerId);
    };
    const move = (event: PointerEvent) => {
      if (!dragging.current || mode !== "free") return;
      const dx = event.clientX - lastPointer.current.x;
      const dy = event.clientY - lastPointer.current.y;
      lastPointer.current = { x: event.clientX, y: event.clientY };
      yaw.current -= dx * 0.003;
      pitch.current -= dy * 0.0025;
      pitch.current = THREE.MathUtils.clamp(pitch.current, -0.85, 0.85);
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointermove", move);
    };
  }, [gl, mode]);

  useEffect(() => {
    if (mode === "intro") introStart.current = null;
    if (mode === "tour") tourStart.current = null;
  }, [mode]);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    if (mode === "idle") return;

    if (mode === "intro") {
      const start = introStart.current ?? elapsed;
      if (introStart.current === null) introStart.current = start;
      const duration = reducedMotion ? 0.8 : 4.2;
      const raw = Math.min((elapsed - start) / duration, 1);
      const t = 1 - Math.pow(1 - raw, 3);
      camera.position.lerpVectors(new THREE.Vector3(0, 1.65, 13.2), new THREE.Vector3(0, 1.65, 9.15), t);
      camera.lookAt(0, 1.55, 1.7);
      if (raw >= 1) {
        yaw.current = 0;
        pitch.current = 0;
        setMode("free");
      }
      return;
    }

    if (mode === "tour") {
      const start = tourStart.current ?? elapsed;
      if (tourStart.current === null) tourStart.current = start;
      const duration = reducedMotion ? 8 : 23;
      const progress = Math.min((elapsed - start) / duration, 1);
      const eased = progress * progress * (3 - 2 * progress);
      const point = curve.getPointAt(Math.min(eased, 0.999));
      const ahead = curve.getPointAt(Math.min(eased + 0.025, 1));
      camera.position.lerp(point, Math.min(delta * 7, 1));
      camera.lookAt(ahead.x, 1.45, ahead.z);
      if (progress >= 1) {
        yaw.current = 0;
        pitch.current = 0;
        trackEvent("guided_tour_completed");
        completeTour();
        setMode("free");
      }
      return;
    }

    if (mode === "free") {
      camera.rotation.order = "YXZ";
      camera.rotation.y = yaw.current;
      camera.rotation.x = pitch.current;

      const keyboardX = (keys.current.KeyD || keys.current.ArrowRight ? 1 : 0) - (keys.current.KeyA || keys.current.ArrowLeft ? 1 : 0);
      const keyboardZ = (keys.current.KeyS || keys.current.ArrowDown ? 1 : 0) - (keys.current.KeyW || keys.current.ArrowUp ? 1 : 0);
      const inputX = THREE.MathUtils.clamp(keyboardX + movement.x, -1, 1);
      const inputZ = THREE.MathUtils.clamp(keyboardZ + movement.z, -1, 1);

      if (inputX !== 0 || inputZ !== 0) {
        const forward = new THREE.Vector3(Math.sin(yaw.current), 0, -Math.cos(yaw.current));
        const right = new THREE.Vector3(Math.cos(yaw.current), 0, Math.sin(yaw.current));
        const velocity = new THREE.Vector3()
          .addScaledVector(forward, -inputZ)
          .addScaledVector(right, inputX)
          .normalize()
          .multiplyScalar(delta * 2.45);
        const previousPosition = camera.position.clone();
        camera.position.add(velocity);
        const candidateX = THREE.MathUtils.clamp(camera.position.x, -5.8, 5.8);
        const candidateZ = THREE.MathUtils.clamp(camera.position.z, -3.8, 9.55);
        const blocked =
          // Three barber chairs.
          [[-3.8, -2.15], [0, -2.15], [3.8, -2.15]].some(([x, z]) => Math.hypot(candidateX - x, candidateZ - z) < 1.1) ||
          // Reception counter.
          (candidateX > -2.7 && candidateX < 2.7 && candidateZ > 6.55 && candidateZ < 8.0) ||
          // Waiting bench.
          (candidateX > 4.45 && candidateX < 5.95 && candidateZ > 2.75 && candidateZ < 5.95);

        if (blocked) {
          camera.position.copy(previousPosition);
        } else {
          camera.position.x = candidateX;
          camera.position.z = candidateZ;
        }
        camera.position.y = 1.65;
      }
    }
  });

  return null;
}
