"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { business } from "@/data/business";

export function NoWebGLFallback() {
  return (
    <main className="min-h-screen bg-[#0d0c0a] px-5 py-24 text-[#f3eadb] md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-[10px] uppercase tracking-[0.22em] text-[#9a876f]">Experiência leve</div>
        <h1 className="max-w-4xl font-display text-6xl leading-[.88] tracking-[-0.055em] md:text-8xl">A porta continua aberta.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[#aa9b87]">Seu dispositivo não iniciou o ambiente 3D, então carregamos a versão acessível. Serviços, equipe, avaliações, endereço e agendamento continuam disponíveis.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/info" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f3eadb] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d0c0a]">Ver informações <ArrowRight size={14} /></Link>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-xs uppercase tracking-[0.14em]">Agendar no Fresha</a>
        </div>
      </div>
    </main>
  );
}
