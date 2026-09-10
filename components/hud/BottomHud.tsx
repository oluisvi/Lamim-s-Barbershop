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
      <div className="flex items-end justify-between gap-4 pb-4">
        <div className="min-w-0 rounded-full border border-white/10 bg-[#17130f]/55 px-3.5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,.16)] backdrop-blur-md md:px-4">
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#d7c7b1] md:text-[9px]">{scene.label}</div>
          {showHint ? (
            <div className="mt-1.5 flex items-center gap-2 text-[9px] uppercase tracking-[0.17em] text-[#fff8ec] md:text-[10px]">
              <span className="hidden md:inline">Role para caminhar</span>
              <span className="md:hidden">Deslize para caminhar</span>
              <ChevronDown size={13} className="animate-bounce" />
            </div>
          ) : null}
        </div>

        <div className="hidden rounded-full border border-white/10 bg-[#17130f]/45 px-3 py-2 text-[8px] font-semibold tabular-nums tracking-[0.16em] text-[#e7d8c3] backdrop-blur-md sm:block">
          {String(percent).padStart(2, "0")}%
        </div>
      </div>

      <div className="h-px overflow-hidden bg-[#fff8ec]/16">
        <div
          className="h-full bg-[#c69b63] transition-[width] duration-150 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
