"use client";

import { ArrowRight, X } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";

export function TourResolution() {
  const completed = useExperienceStore((s) => s.tourCompleted);
  const dismiss = useExperienceStore((s) => s.dismissTourResolution);
  if (!completed) return null;

  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-[#241c16]/40 p-5 backdrop-blur-[3px]">
      <div className="relative w-full max-w-xl rounded-[32px] border border-[#2a211a]/10 bg-[#f1e7d7] p-6 text-[#2a211a] shadow-2xl md:p-9">
        <button onClick={dismiss} className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-[#2a211a]/15 text-[#3b3027] transition hover:bg-[#e7dccb]" aria-label="Fechar"><X size={16} /></button>
        <div className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#805c3c]">Fim do percurso</div>
        <h2 className="font-display text-5xl leading-[.95] tracking-[-0.05em] text-[#2a211a] md:text-6xl">Agora só<br />falta você.</h2>
        <p className="mt-5 max-w-md text-sm leading-6 text-[#645448]">A cadeira está vazia. Escolha seu horário e transforme a visita virtual na próxima visita real.</p>
        <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#2a211a] px-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#fff8ec] transition hover:bg-[#3a2e25]">Agendar meu horário <ArrowRight size={15} /></a>
      </div>
    </div>
  );
}
