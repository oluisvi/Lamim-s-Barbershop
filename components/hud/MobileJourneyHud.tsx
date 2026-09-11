"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { getActiveHotspot } from "@/lib/hotspotJourney";
import { getJourneyScene } from "@/lib/scrollJourney";
import { trackEvent } from "@/lib/analytics";

export function MobileJourneyHud() {
  const mode = useExperienceStore((s) => s.mode);
  const progress = useExperienceStore((s) => s.scrollProgress);
  const activePanel = useExperienceStore((s) => s.activePanel);
  const completed = useExperienceStore((s) => s.tourCompleted);
  const openPanel = useExperienceStore((s) => s.openPanel);

  if (mode !== "explore" || activePanel !== "none" || completed) return null;

  const scene = getJourneyScene(progress);
  const hotspot = getActiveHotspot(progress);
  const percent = Math.round(progress * 100);
  const showHint = progress < 0.055;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] px-3 pb-[max(.7rem,env(safe-area-inset-bottom))] sm:hidden">
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#17130f]/82 shadow-[0_18px_50px_rgba(0,0,0,.28)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5">
          <div className="min-w-0">
            <div className="truncate text-[8px] font-semibold uppercase tracking-[0.2em] text-[#d8c8b2]">{scene.label}</div>
            {showHint ? (
              <div className="mt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-[#fff8ec]">
                Deslize para caminhar <ChevronDown size={12} className="animate-bounce" />
              </div>
            ) : null}
          </div>
          <div className="shrink-0 text-[8px] font-semibold tabular-nums tracking-[0.16em] text-[#d9c8b0]">{String(percent).padStart(2, "0")}%</div>
        </div>

        {hotspot ? (
          <button
            type="button"
            onClick={() => {
              trackEvent("hotspot_opened", { hotspot: hotspot.id, surface: "mobile_journey_hud" });
              openPanel(hotspot.panel);
            }}
            className="focus-ring pointer-events-auto flex min-h-[54px] w-full items-center justify-between gap-3 border-t border-white/10 bg-[#f1e7d7] px-4 text-left text-[#2a211a] active:bg-[#e6dac8]"
            aria-label={hotspot.label}
          >
            <span className="min-w-0">
              <span className="block truncate text-[8px] font-semibold uppercase tracking-[0.18em] text-[#805c3c]">{hotspot.eyebrow}</span>
              <span className="mt-0.5 block truncate font-display text-[1.15rem] leading-none tracking-[-0.025em]">{hotspot.label}</span>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#2a211a] text-[#fff8ec]">
              <ArrowUpRight size={15} />
            </span>
          </button>
        ) : null}

        <div className="h-[2px] bg-white/10">
          <div className="h-full bg-[#c69b63] transition-[width] duration-150 ease-out" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
}
