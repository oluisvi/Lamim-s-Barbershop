"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { BarbershopEnvironment } from "./BarbershopEnvironment";
import { CameraRig } from "./CameraRig";
import { SceneHotspots } from "./SceneHotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";

function SceneLoading() {
  return null;
}

export function SceneCanvas() {
  const quality = useExperienceStore((s) => s.quality);
  const dpr: [number, number] = quality === "high" ? [1, 1.75] : quality === "low" ? [0.75, 1] : [0.85, 1.35];

  return (
    <Canvas
      shadows={quality !== "low"}
      dpr={dpr}
      camera={{ position: [0, 1.65, 13.2], fov: 64, near: 0.1, far: 60 }}
      gl={{ antialias: quality !== "low", alpha: false, powerPreference: "high-performance" }}
      className="!absolute !inset-0"
      style={{ touchAction: "none" }}
    >
      <Suspense fallback={<SceneLoading />}>
        <BarbershopEnvironment />
        <CameraRig />
        <SceneHotspots />
        <AdaptiveDpr pixelated />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
