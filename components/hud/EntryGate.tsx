"use client";

import { ArrowRight, Star } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { trackEvent } from "@/lib/analytics";

export function EntryGate() {
  const mode = useExperienceStore((s) => s.mode);
  const setMode = useExperienceStore((s) => s.setMode);
  const openPanel = useExperienceStore((s) => s.openPanel);

  if (mode !== "idle" && mode !== "intro") return null;
  const leaving = mode === "intro";

  return (
    <section
      className={`entry-gate absolute inset-0 z-40 flex items-end overflow-y-auto px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,env(safe-area-inset-top))] sm:px-5 sm:pb-8 sm:pt-24 md:items-center md:px-12 md:pb-0 lg:px-20 ${leaving ? "entry-gate--leaving pointer-events-none" : ""}`}
      aria-hidden={leaving}
    >
      <div className="entry-gate__backdrop pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(255,255,255,.15),transparent_36%),linear-gradient(180deg,rgba(244,240,234,.04),rgba(244,240,234,.88)_86%)]" />

      <div className="entry-gate__content relative max-w-4xl">
        <div className="entry-gate__eyebrow mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-secondary)]">
          <span className="h-px w-9 bg-[var(--color-botanical)]" />
          Jacareí · SP
        </div>
        <h1 className="entry-gate__title max-w-4xl font-display text-[clamp(3.1rem,17vw,5.4rem)] font-normal leading-[.8] tracking-[-0.055em] text-[var(--color-text-primary)] drop-shadow-[0_2px_12px_rgba(255,255,255,.75)] sm:text-[clamp(3.5rem,9.2vw,9rem)] sm:leading-[.78]">
          Entre na<br />Lamim&apos;s.
        </h1>
        <div className="entry-gate__body mt-7 grid max-w-3xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="entry-gate__copy">
            <p className="max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] md:text-base md:leading-7">
              Uma porta digital para conhecer o ambiente, a equipe e a energia da barbearia antes mesmo do seu horário.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <Star size={14} fill="currentColor" className="text-[var(--color-botanical)]" />
              <strong>{business.fresha.rating.toFixed(1)}</strong>
              <span className="text-[var(--color-text-muted)]">· {business.fresha.reviewCount} avaliações no Fresha</span>
            </div>
          </div>
          <div className="entry-gate__actions flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <button
              type="button"
              onClick={() => {
                trackEvent("experience_entered");
                setMode("intro");
              }}
              className="focus-ring group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[var(--color-action-primary)] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-inverse)] shadow-[0_12px_32px_rgba(17,17,17,.15)] transition hover:bg-[var(--color-action-primary-hover)]"
            >
              Entrar na barbearia
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => openPanel("story")}
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] px-6 text-xs uppercase tracking-[0.16em] text-[var(--color-text-primary)] shadow-[0_10px_30px_rgba(17,17,17,.08)] backdrop-blur-md transition hover:bg-[var(--color-bg-subtle)]"
            >
              Explorar sem 3D
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
