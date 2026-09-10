"use client";

import { ChevronDown, Compass } from "lucide-react";
import { business } from "@/data/business";
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
      <div className="absolute bottom-[max(.8rem,env(safe-area-inset-bottom))] left-4 right-4 h-px overflow-hidden bg-white/10 md:left-6 md:right-6">
        <div className="h-full bg-[#c79d5f] transition-[width] duration-150 ease-out" style={{ width: `${percent}%` }} />
      </div>

      <div className="flex items-end justify-between gap-3 pb-3">
        <div className="min-w-0">
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#746958] md:text-[9px]">{scene.label}</div>
          {showHint && (
            <div className="mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.17em] text-[#b4a58f] md:text-[10px]">
              <span className="hidden md:inline">Role para caminhar</span>
              <span className="md:hidden">Deslize para caminhar</span>
              <ChevronDown size={13} className="animate-bounce" />
            </div>
          )}
        </div>

        <a
          href={business.fresha.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring pointer-events-auto inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-[#f3eadb] px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0e0c0a] sm:hidden"
        >
          <Compass size={13} /> Agendar
        </a>
      </div>
    </div>
  );
}
