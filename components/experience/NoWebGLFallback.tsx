"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { business } from "@/data/business";

export function NoWebGLFallback() {
  return (
    <main className="min-h-screen bg-[#efe4d3] px-5 py-24 text-[#2a211a] md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#805c3c]">Experiência leve</div>
        <h1 className="max-w-4xl font-display text-6xl leading-[.88] tracking-[-0.055em] md:text-8xl">A porta continua aberta.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[#5f5045]">Seu dispositivo não iniciou o ambiente 3D, então carregamos a versão acessível. Serviços, equipe, avaliações, endereço e agendamento continuam disponíveis.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/info" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#2a211a] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#fff8ec]">Ver informações <ArrowRight size={14} /></Link>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center rounded-full border border-[#2a211a]/25 px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#2a211a]">Agendar no Fresha</a>
        </div>
      </div>
    </main>
  );
}
