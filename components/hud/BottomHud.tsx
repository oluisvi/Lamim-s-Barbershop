"use client";

import { Compass, Play, X } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

export function BottomHud() {
  const mode = useExperienceStore((s) => s.mode);
  const setMode = useExperienceStore((s) => s.setMode);

  if (mode === "idle" || mode === "intro") return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-3 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:p-6">
      <div className="pointer-events-auto hidden rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[9px] uppercase tracking-[0.17em] text-[#a99984] backdrop-blur md:block">
        {mode === "tour" ? "Tour guiado em andamento · ESC para sair" : "WASD / setas para andar · arraste para olhar"}
      </div>

      <div className="pointer-events-auto ml-auto flex gap-2">
        {mode === "tour" ? (
          <button
            type="button"
            onClick={() => setMode("free")}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 text-[10px] uppercase tracking-[0.14em] text-[#eee4d6] backdrop-blur"
          >
            <X size={14} /> Sair do tour
          </button>
        ) : (
          <button
            type="button"
            onClick={() => { trackEvent("guided_tour_started"); setMode("tour"); }}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 text-[10px] uppercase tracking-[0.14em] text-[#eee4d6] backdrop-blur transition hover:border-white/30"
          >
            <Play size={13} /> Fazer o tour
          </button>
        )}
        <a
          href={business.fresha.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f3eadb] px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0e0c0a] sm:hidden"
        >
          <Compass size={13} /> Agendar
        </a>
      </div>
    </div>
  );
}
