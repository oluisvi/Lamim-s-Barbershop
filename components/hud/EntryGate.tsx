"use client";

import { ArrowRight, Star } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

export function EntryGate() {
  const mode = useExperienceStore((s) => s.mode);
  const setMode = useExperienceStore((s) => s.setMode);
  const openPanel = useExperienceStore((s) => s.openPanel);

  if (mode !== "idle") return null;

  return (
    <section className="absolute inset-0 z-40 flex items-end bg-[radial-gradient(circle_at_50%_24%,rgba(239,210,168,.16),transparent_34%),linear-gradient(180deg,rgba(31,25,20,.08),rgba(39,30,23,.82)_84%)] px-5 pb-8 pt-24 md:items-center md:px-12 md:pb-0 lg:px-20">
      <div className="max-w-4xl">
        <div className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#eadbc6]">
          <span className="h-px w-9 bg-[#c79d5f]" />
          Jacareí · SP
        </div>
        <h1 className="max-w-4xl font-display text-[clamp(3.5rem,9.2vw,9rem)] font-normal leading-[.78] tracking-[-0.055em] text-[#f3eadb]">
          Entre na<br />Lamim&apos;s.
        </h1>
        <div className="mt-7 grid max-w-3xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-xl text-sm leading-6 text-[#efe3d2] md:text-base md:leading-7">
              Uma porta digital para conhecer o ambiente, a equipe e a energia da barbearia antes mesmo do seu horário.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#e8dece]">
              <Star size={14} fill="currentColor" className="text-[#c79d5f]" />
              <strong>{business.fresha.rating.toFixed(1)}</strong>
              <span className="text-[#d9c7ae]">· {business.fresha.reviewCount} avaliações no Fresha</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <button
              type="button"
              onClick={() => { trackEvent("experience_entered"); setMode("intro"); }}
              className="focus-ring group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#f3eadb] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#0d0c0a] transition hover:bg-white"
            >
              Entrar na barbearia
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => openPanel("story")}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[#f2e5d2]/25 bg-[#2c241e]/38 px-6 text-xs uppercase tracking-[0.16em] text-[#f3eadb] backdrop-blur transition hover:border-white/30"
            >
              Explorar sem 3D
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
