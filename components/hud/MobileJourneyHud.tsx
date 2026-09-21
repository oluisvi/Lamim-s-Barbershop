"use client";

import { ChevronDown } from "lucide-react";
import { useExperienceStore } from "@/hooks/useExperienceStore";

export function MobileJourneyHud() {
  const mode = useExperienceStore((s) => s.mode);
  const progress = useExperienceStore((s) => s.scrollProgress);
  const activePanel = useExperienceStore((s) => s.activePanel);
  const completed = useExperienceStore((s) => s.tourCompleted);

  if (mode !== "explore" || activePanel !== "none" || completed) return null;

  const percent = Math.round(progress * 100);
  const showHint = progress < 0.055;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] px-3 pb-[max(.65rem,env(safe-area-inset-bottom))] sm:hidden">
      <div className="mx-auto flex max-w-[32rem] items-center gap-3">
        {showHint ? (
          <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-primary)] shadow-[0_10px_28px_rgba(17,17,17,.12)] backdrop-blur-xl">
            Deslize para caminhar <ChevronDown size={11} className="animate-bounce" />
          </div>
        ) : null}

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)]/90 px-3 py-2 shadow-[0_10px_28px_rgba(17,17,17,.09)] backdrop-blur-lg">
          <div className="h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-[var(--color-botanical)] transition-[width] duration-150 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="shrink-0 text-[8px] font-semibold tabular-nums tracking-[0.14em] text-[var(--color-text-secondary)]">
            {String(percent).padStart(2, "0")}%
          </div>
        </div>
      </div>
    </div>
  );
}
