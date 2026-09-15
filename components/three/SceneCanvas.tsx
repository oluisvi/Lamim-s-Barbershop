"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { BarbershopEnvironment } from "./BarbershopEnvironment";
import { CameraRig } from "./CameraRig";
import { SceneHotspots } from "./SceneHotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";

function SceneLoading() {
  return null;
}

function SceneReady({ onReady }: { onReady: () => void }) {
  const { gl, scene, camera } = useThree();
  const renderedFrames = useRef(0);
  const notified = useRef(false);

  useEffect(() => {
    gl.compile(scene, camera);
  }, [camera, gl, scene]);

  useFrame(() => {
    if (notified.current) return;
    renderedFrames.current += 1;
    if (renderedFrames.current < 3) return;
    notified.current = true;
    onReady();
  });

  return null;
}

export function SceneCanvas({ onReady }: { onReady: () => void }) {
  const quality = useExperienceStore((s) => s.quality);
  const dpr: [number, number] = quality === "high" ? [1, 1.5] : quality === "low" ? [0.7, 0.9] : [0.85, 1.15];

  return (
    <Canvas
      shadows={quality !== "low"}
      dpr={dpr}
      camera={{ position: [0, 1.7, 9.2], fov: 60, near: 0.1, far: 52 }}
      gl={{ antialias: quality === "high", alpha: false, powerPreference: "high-performance" }}
      performance={{ min: 0.65, max: 1, debounce: 220 }}
      className="!absolute !inset-0"
      style={{ touchAction: "pan-y" }}
    >
      <Suspense fallback={<SceneLoading />}>
        <BarbershopEnvironment />
        <CameraRig />
        <SceneHotspots />
        <AdaptiveDpr />
        <SceneReady onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
