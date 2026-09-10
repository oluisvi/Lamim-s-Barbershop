"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { BarbershopEnvironment } from "./BarbershopEnvironment";
import { CameraRig } from "./CameraRig";
import { SceneHotspots } from "./SceneHotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";

function SceneLoading() {
  return null;
}

export function SceneCanvas() {
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
      </Suspense>
    </Canvas>
  );
}
