"use client";

import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import type { HotspotConfig } from "@/data/hotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { getActiveHotspot } from "@/lib/hotspotJourney";
import { trackEvent } from "@/lib/analytics";

function HotspotMarker({ hotspot }: { hotspot: HotspotConfig }) {
  const openPanel = useExperienceStore((s) => s.openPanel);
  const width = useThree((state) => state.size.width);
  const isMobile = width < 640;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, [hotspot.id]);

  const mobilePosition: [number, number, number] = [
    hotspot.position[0],
    hotspot.position[1] + 0.16,
    hotspot.position[2],
  ];

  return (
    <Html
      position={isMobile ? mobilePosition : hotspot.position}
      center
      distanceFactor={isMobile ? 5.15 : 6.5}
      occlude={false}
      zIndexRange={[30, 0]}
    >
      <button
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          trackEvent("hotspot_opened", {
            hotspot: hotspot.id,
            surface: isMobile ? "mobile_spatial_hotspot" : "desktop_spatial_hotspot",
          });
          openPanel(hotspot.panel);
        }}
        aria-label={hotspot.label}
        className={`group pointer-events-auto flex min-h-11 max-w-[min(68vw,13rem)] touch-manipulation items-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-primary)] shadow-[0_12px_32px_rgba(17,17,17,.14)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] sm:max-w-[min(78vw,18rem)] sm:text-[9px] sm:tracking-[0.16em] md:text-[10px] md:tracking-[0.18em] ${visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"}`}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-botanical)] shadow-[0_0_14px_rgba(112,128,109,.42)]" />
        <span className="truncate">{hotspot.label}</span>
      </button>
    </Html>
  );
}

export function SceneHotspots() {
  const mode = useExperienceStore((s) => s.mode);
  const scrollProgress = useExperienceStore((s) => s.scrollProgress);
  if (mode !== "explore") return null;

  const hotspot = getActiveHotspot(scrollProgress);
  return hotspot ? <HotspotMarker key={hotspot.id} hotspot={hotspot} /> : null;
}
