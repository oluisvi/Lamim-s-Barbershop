"use client";

import { ArrowRight, RotateCcw, Scissors, Star, X } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";

export function TourResolution() {
  const completed = useExperienceStore((s) => s.tourCompleted);
  const dismiss = useExperienceStore((s) => s.dismissTourResolution);
  const openPanel = useExperienceStore((s) => s.openPanel);

  if (!completed) return null;

  const replay = () => {
    dismiss();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[85] px-3 pb-[max(.75rem,env(safe-area-inset-bottom))] sm:px-5 sm:pb-5">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/10 via-black/[.03] to-transparent" />
      <div className="tour-resolution__card pointer-events-auto relative mx-auto max-h-[82dvh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-[26px] border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] p-5 text-[var(--color-text-primary)] shadow-[0_24px_80px_rgba(17,17,17,.18)] backdrop-blur-xl sm:rounded-[30px] sm:p-7">
        <button
          onClick={dismiss}
          className="focus-ring absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-subtle)] sm:right-4 sm:top-4"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        <div className="pr-12">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-botanical)]">
            <span>Fim do percurso</span>
            <span className="flex items-center gap-1.5 tracking-[0.08em] text-[var(--color-text-muted)]">
              <Star size={11} fill="currentColor" className="text-[var(--color-botanical)]" />
              {business.fresha.rating.toFixed(1)} · {business.fresha.reviewCount} avaliações
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.6rem,7vw,4.4rem)] leading-[.88] tracking-[-0.05em] text-[var(--color-text-primary)]">Agora só falta você.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] sm:mt-4">
            Você terminou o percurso de frente para as cadeiras. Pode agendar agora, abrir os serviços ou simplesmente rolar para cima e revisitar o ambiente.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
          <a
            href={business.fresha.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--color-action-primary)] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)] transition hover:bg-[var(--color-action-primary-hover)] sm:flex-none sm:text-xs"
          >
            Agendar meu horário <ArrowRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => { dismiss(); openPanel("services"); }}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--color-border-default)] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-subtle)] sm:px-5"
          >
            <Scissors size={13} /> Ver serviços
          </button>
          <button
            type="button"
            onClick={replay}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--color-border-default)] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-subtle)] sm:px-5"
          >
            <RotateCcw size={13} /> Rever percurso
          </button>
        </div>
      </div>
    </div>
  );
}
