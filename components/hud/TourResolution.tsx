"use client";

import { ArrowRight, X } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";

export function TourResolution() {
  const completed = useExperienceStore((s) => s.tourCompleted);
  const dismiss = useExperienceStore((s) => s.dismissTourResolution);
  if (!completed) return null;

  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-black/40 p-5 backdrop-blur-[2px]">
      <div className="relative w-full max-w-xl rounded-[32px] border border-white/10 bg-[#11100d]/95 p-6 shadow-2xl md:p-9">
        <button onClick={dismiss} className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#c4b6a4]" aria-label="Fechar"><X size={16} /></button>
        <div className="mb-5 text-[9px] uppercase tracking-[0.24em] text-[#a68a66]">Fim do percurso</div>
        <h2 className="font-display text-5xl leading-[.95] tracking-[-0.05em] text-[#f3eadb] md:text-6xl">Agora só<br />falta você.</h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-[#a99b88]">A cadeira está vazia. Escolha seu horário e transforme a visita virtual na próxima visita real.</p>
        <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f3eadb] px-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#0d0c0a]">Agendar meu horário <ArrowRight size={15} /></a>
      </div>
    </div>
  );
}
