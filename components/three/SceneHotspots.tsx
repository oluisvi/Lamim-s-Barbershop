"use client";

import { Html } from "@react-three/drei";
import { hotspots, type HotspotConfig } from "@/data/hotspots";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { getJourneyScene } from "@/lib/scrollJourney";
import { trackEvent } from "@/lib/analytics";

const SCENE_HOTSPOT: Partial<Record<ReturnType<typeof getJourneyScene>["id"], string>> = {
  reception: "location",
  social: "reviews",
  gallery: "gallery",
  team: "team",
  services: "services",
  story: "story",
};

function HotspotMarker({ hotspot }: { hotspot: HotspotConfig }) {
  const openPanel = useExperienceStore((s) => s.openPanel);

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
        className="group hidden items-center gap-2 whitespace-nowrap rounded-full border border-[#2a211a]/10 bg-[#f1e7d7]/94 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#2a211a] shadow-2xl backdrop-blur-md transition hover:bg-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9b6737] sm:flex md:text-[10px] md:tracking-[0.18em]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#9b6737] shadow-[0_0_14px_rgba(155,103,55,.45)]" />
        <span>{hotspot.label}</span>
      </button>
    </Html>
  );
}

export function SceneHotspots() {
  const mode = useExperienceStore((s) => s.mode);
  const scrollProgress = useExperienceStore((s) => s.scrollProgress);
  if (mode !== "explore") return null;

  const scene = getJourneyScene(scrollProgress);
  const hotspotId = SCENE_HOTSPOT[scene.id];
  const hotspot = hotspotId ? hotspots.find((item) => item.id === hotspotId) : undefined;
  return hotspot ? <HotspotMarker hotspot={hotspot} /> : null;
}
