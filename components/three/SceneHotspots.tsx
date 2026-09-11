"use client";

import { Html } from "@react-three/drei";
import { hotspots, type HotspotConfig } from "@/data/hotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

type HotspotWindow = {
  id: HotspotConfig["id"];
  from: number;
  to: number;
};

// These windows are authored against the FORWARD-facing camera path.
// Each action appears while its anchored object is still in front of the viewer,
// instead of being tied to a later journey label after the camera has passed it.
const HOTSPOT_WINDOWS: HotspotWindow[] = [
  { id: "location", from: 0, to: 0.07 },
  { id: "reviews", from: 0.08, to: 0.23 },
  { id: "gallery", from: 0.28, to: 0.39 },
  { id: "team", from: 0.39, to: 0.49 },
  { id: "services", from: 0.5, to: 0.61 },
  { id: "story", from: 0.61, to: 0.75 },
];

function getActiveHotspot(progress: number) {
  const window = HOTSPOT_WINDOWS.find((item) => progress >= item.from && progress < item.to);
  return window ? hotspots.find((item) => item.id === window.id) : undefined;
}

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
        className="group hidden pointer-events-auto max-w-[min(78vw,18rem)] items-center gap-2 whitespace-nowrap rounded-full border border-[#2a211a]/10 bg-[#f1e7d7]/94 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#2a211a] shadow-2xl backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9b6737] sm:flex md:text-[10px] md:tracking-[0.18em]"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b6737] shadow-[0_0_14px_rgba(155,103,55,.45)]" />
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
