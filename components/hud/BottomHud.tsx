"use client";

import { ChevronDown } from "lucide-react";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { getJourneyScene } from "@/lib/scrollJourney";

export function BottomHud() {
  const mode = useExperienceStore((s) => s.mode);
  const progress = useExperienceStore((s) => s.scrollProgress);

  if (mode === "idle" || mode === "intro") return null;

  const scene = getJourneyScene(progress);
  const percent = Math.round(progress * 100);
  const showHint = progress < 0.14;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:p-6">
      <div className="absolute bottom-[max(.8rem,env(safe-area-inset-bottom))] left-4 right-4 h-px overflow-hidden bg-[#fff8ec]/18 md:left-6 md:right-6">
        <div className="h-full bg-[#c69b63] transition-[width] duration-150 ease-out" style={{ width: `${percent}%` }} />
      </div>

      <div className="flex items-end justify-between gap-3 pb-3">
        <div className="min-w-0 rounded-full bg-[#2b241e]/48 px-3 py-2 backdrop-blur-[3px] sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#eadbc6] md:text-[9px]">{scene.label}</div>
          {showHint && (
            <div className="mt-1.5 flex items-center gap-2 text-[9px] uppercase tracking-[0.17em] text-[#fff8ec] md:mt-2 md:text-[10px]">
              <span className="hidden md:inline">Role para caminhar</span>
              <span className="md:hidden">Deslize para caminhar</span>
              <ChevronDown size={13} className="animate-bounce" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
