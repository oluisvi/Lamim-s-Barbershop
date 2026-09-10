"use client";

import { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { hotspots, type HotspotConfig } from "@/data/hotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

function HotspotMarker({ hotspot }: { hotspot: HotspotConfig }) {
  const { camera } = useThree();
  const openPanel = useExperienceStore((s) => s.openPanel);
  const [nearby, setNearby] = useState(false);
  const frame = useRef(0);
  const point = useRef(new THREE.Vector3(...hotspot.position));

  useFrame(() => {
    frame.current += 1;
    if (frame.current % 8 !== 0) return;
    const next = camera.position.distanceTo(point.current) < 6.2;
    setNearby((current) => (current === next ? current : next));
  });

  if (!nearby) return null;

  return (
    <Html position={hotspot.position} center distanceFactor={6.5} occlude={false} zIndexRange={[20, 0]}>
      <button
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          trackEvent("hotspot_opened", { hotspot: hotspot.id });
          openPanel(hotspot.panel);
        }}
        aria-label={hotspot.label}
        className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/55 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#f3eadb] shadow-2xl backdrop-blur-md transition hover:border-[#c79d5f]/70 hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79d5f]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#c79d5f] shadow-[0_0_14px_rgba(199,157,95,.8)]" />
        <span>{hotspot.label}</span>
      </button>
    </Html>
  );
}

export function SceneHotspots() {
  const mode = useExperienceStore((s) => s.mode);
  if (mode !== "free") return null;

  return <>{hotspots.map((hotspot) => <HotspotMarker key={hotspot.id} hotspot={hotspot} />)}</>;
}
