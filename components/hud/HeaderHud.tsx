"use client";

import Link from "next/link";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";

const items = [
  ["Serviços", "services"],
  ["Profissionais", "team"],
  ["História", "story"],
  ["Avaliações", "reviews"],
  ["Localização", "location"]
] as const;

export function HeaderHud() {
  const mode = useExperienceStore((s) => s.mode);
  const menuOpen = useExperienceStore((s) => s.menuOpen);
  const setMenuOpen = useExperienceStore((s) => s.setMenuOpen);
  const soundEnabled = useExperienceStore((s) => s.soundEnabled);
  const toggleSound = useExperienceStore((s) => s.toggleSound);
  const openPanel = useExperienceStore((s) => s.openPanel);

  return (
    <>
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between p-4 md:p-6">
        <div className="pointer-events-auto flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              if (mode === "idle") return;
              window.scrollTo({ top: 0, behavior: "auto" });
              useExperienceStore.getState().setScrollProgress(0);
              useExperienceStore.getState().setMode("idle");
            }}
            className="focus-ring text-left"
            aria-label="Voltar ao início"
          >
            <span className="block font-display text-xl tracking-[-0.03em] text-[#f3eadb] md:text-2xl">LAMIM&apos;S</span>
            <span className="block text-[8px] uppercase tracking-[0.28em] text-[#a99882]">Barbearia · Jacareí</span>
          </button>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/35 text-[#f3eadb] backdrop-blur-md transition hover:border-white/25"
            aria-label={soundEnabled ? "Desativar som" : "Ativar som"}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/35 text-[#f3eadb] backdrop-blur-md transition hover:border-white/25"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
          <a
            href={business.fresha.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden min-h-11 items-center rounded-full bg-[#f3eadb] px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0c0b09] transition hover:bg-white sm:inline-flex"
          >
            Agendar horário
          </a>
        </div>
      </header>

      {menuOpen && (
        <nav className="absolute right-4 top-20 z-50 w-[min(340px,calc(100vw-32px))] rounded-[24px] border border-white/10 bg-[#100f0d]/95 p-3 shadow-2xl backdrop-blur-xl md:right-6 md:top-24">
          <div className="px-3 pb-3 pt-2 text-[9px] uppercase tracking-[0.24em] text-[#8f806d]">Navegação</div>
          {items.map(([label, panel]) => (
            <button
              key={panel}
              type="button"
              onClick={() => openPanel(panel)}
              className="focus-ring flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm text-[#eae0d1] transition hover:bg-white/[.05]"
            >
              <span>{label}</span>
              <span className="text-[#6e6253]">↗</span>
            </button>
          ))}
          <div className="mt-2 border-t border-white/10 pt-2">
            <Link href="/info" className="focus-ring flex rounded-2xl px-3 py-3 text-sm text-[#b8aa98] transition hover:bg-white/[.05]">
              Ver versão acessível / SEO
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
