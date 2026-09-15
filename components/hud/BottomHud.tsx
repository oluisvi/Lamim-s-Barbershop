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
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:block md:p-6">
      <div className="flex items-end justify-between gap-4 pb-4">
        <div className="min-w-0 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] px-3.5 py-2.5 text-[var(--color-text-primary)] shadow-[0_10px_30px_rgba(17,17,17,.10)] backdrop-blur-md md:px-4">
          <div className="text-[8px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] md:text-[9px]">{scene.label}</div>
          {showHint ? (
            <div className="mt-1.5 flex items-center gap-2 text-[9px] uppercase tracking-[0.17em] text-[var(--color-text-primary)] md:text-[10px]">
              <span className="hidden md:inline">Role para caminhar</span>
              <span className="md:hidden">Deslize para caminhar</span>
              <ChevronDown size={13} className="animate-bounce" />
            </div>
          ) : null}
        </div>

        <div className="hidden rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] px-3 py-2 text-[8px] font-semibold tabular-nums tracking-[0.16em] text-[var(--color-text-secondary)] backdrop-blur-md sm:block">
          {String(percent).padStart(2, "0")}%
        </div>
      </div>

      <div className="h-px overflow-hidden bg-black/10">
        <div
          className="h-full bg-[var(--color-botanical)] transition-[width] duration-150 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
