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
        className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/55 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#f3eadb] shadow-2xl backdrop-blur-md transition hover:border-[#c79d5f]/70 hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79d5f] md:text-[10px] md:tracking-[0.18em]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#c79d5f] shadow-[0_0_14px_rgba(199,157,95,.8)]" />
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
