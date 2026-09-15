"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { business } from "@/data/business";

export function NoWebGLFallback() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-canvas)] px-5 py-24 text-[var(--color-text-primary)] md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-botanical)]">Experiência leve</div>
        <h1 className="max-w-4xl font-display text-6xl leading-[.88] tracking-[-0.055em] md:text-8xl">A porta continua aberta.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">Seu dispositivo não iniciou o ambiente 3D, então carregamos a versão acessível. Serviços, equipe, avaliações, endereço e agendamento continuam disponíveis.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/info" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-action-primary)] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)]">Ver informações <ArrowRight size={14} /></Link>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center rounded-full border border-[var(--color-border-default)] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-primary)]">Agendar no Fresha</a>
        </div>
      </div>
    </main>
  );
}
