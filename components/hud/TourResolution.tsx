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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#201a15]/45 via-[#201a15]/10 to-transparent" />
      <div className="tour-resolution__card pointer-events-auto relative mx-auto w-full max-w-3xl overflow-hidden rounded-[26px] border border-[#2a211a]/10 bg-[#f1e7d7]/[.97] p-5 text-[#2a211a] shadow-[0_24px_80px_rgba(26,20,15,.28)] backdrop-blur-xl sm:rounded-[30px] sm:p-7">
        <button
          onClick={dismiss}
          className="focus-ring absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-[#2a211a]/12 text-[#3b3027] transition hover:bg-[#e7dccb] sm:right-4 sm:top-4"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        <div className="pr-12">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#805c3c]">
            <span>Fim do percurso</span>
            <span className="flex items-center gap-1.5 tracking-[0.08em] text-[#6b594c]">
              <Star size={11} fill="currentColor" className="text-[#a77543]" />
              {business.fresha.rating.toFixed(1)} · {business.fresha.reviewCount} avaliações
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.6rem,7vw,4.4rem)] leading-[.88] tracking-[-0.05em] text-[#2a211a]">Agora só falta você.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#645448] sm:mt-4">
            Você chegou à cadeira final. Pode agendar agora, abrir os serviços ou simplesmente rolar para cima e revisitar o ambiente.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
          <a
            href={business.fresha.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#2a211a] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fff8ec] transition hover:bg-[#3a2e25] sm:flex-none sm:text-xs"
          >
            Agendar meu horário <ArrowRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => { dismiss(); openPanel("services"); }}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#2a211a]/15 px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2a211a] transition hover:bg-[#e7dccb] sm:px-5"
          >
            <Scissors size={13} /> Ver serviços
          </button>
          <button
            type="button"
            onClick={replay}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#2a211a]/15 px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2a211a] transition hover:bg-[#e7dccb] sm:px-5"
          >
            <RotateCcw size={13} /> Rever percurso
          </button>
        </div>
      </div>
    </div>
  );
}
