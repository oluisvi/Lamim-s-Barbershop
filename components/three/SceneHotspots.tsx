"use client";

import { Html } from "@react-three/drei";
import type { HotspotConfig } from "@/data/hotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { getActiveHotspot } from "@/lib/hotspotJourney";
import { trackEvent } from "@/lib/analytics";

function HotspotMarker({ hotspot }: { hotspot: HotspotConfig }) {
  const openPanel = useExperienceStore((s) => s.openPanel);

  return (
    <Html position={hotspot.position} center distanceFactor={6.5} occlude={false} zIndexRange={[30, 0]}>
      <button
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          trackEvent("hotspot_opened", { hotspot: hotspot.id });
          openPanel(hotspot.panel);
        }}
        aria-label={hotspot.label}
        className="group hidden pointer-events-auto max-w-[min(78vw,18rem)] items-center gap-2 whitespace-nowrap rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-primary)] shadow-[0_12px_32px_rgba(17,17,17,.12)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] sm:flex md:text-[10px] md:tracking-[0.18em]"
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
  return hotspot ? <HotspotMarker hotspot={hotspot} /> : null;
}
