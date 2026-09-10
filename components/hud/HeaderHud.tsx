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
  const experienceActive = mode !== "idle";

  return (
    <>
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 flex items-center justify-between p-4 md:p-6">
        <div className="pointer-events-auto flex items-center gap-4">
          {experienceActive ? (
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "auto" });
                useExperienceStore.getState().setScrollProgress(0);
                useExperienceStore.getState().setMode("idle");
              }}
              className="focus-ring text-left"
              aria-label="Voltar ao início"
            >
              <Brand />
            </button>
          ) : (
            <div aria-label="Barbearia Lamim's">
              <Brand />
            </div>
          )}
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          {experienceActive && (
            <>
              <button
                type="button"
                onClick={toggleSound}
                className="focus-ring hidden h-11 w-11 place-items-center rounded-full border border-[#eadfce]/20 bg-[#29231d]/78 text-[#fff8ec] shadow-[0_8px_28px_rgba(0,0,0,.22)] backdrop-blur-md transition hover:border-[#eadfce]/40 hover:bg-[#342b23]/90 sm:grid"
                aria-label={soundEnabled ? "Desativar som" : "Ativar som"}
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus-ring hidden h-11 w-11 place-items-center rounded-full border border-[#eadfce]/20 bg-[#29231d]/78 text-[#fff8ec] shadow-[0_8px_28px_rgba(0,0,0,.22)] backdrop-blur-md transition hover:border-[#eadfce]/40 hover:bg-[#342b23]/90 sm:grid"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </>
          )}

          <a
            href={business.fresha.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden min-h-11 items-center rounded-full bg-[#f4e8d6] px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#211b16] shadow-[0_8px_24px_rgba(30,24,18,.16)] transition hover:bg-white sm:inline-flex"
          >
            Agendar horário
          </a>
        </div>
      </header>

      {experienceActive && menuOpen && (
        <nav className="absolute right-6 top-24 z-[60] hidden w-[min(340px,calc(100vw-48px))] rounded-[24px] border border-[#eadfce]/16 bg-[#29231d]/95 p-3 shadow-2xl backdrop-blur-xl sm:block">
          <div className="px-3 pb-3 pt-2 text-[9px] uppercase tracking-[0.24em] text-[#c9b89f]">Navegação</div>
          {items.map(([label, panel]) => (
            <button
              key={panel}
              type="button"
              onClick={() => openPanel(panel)}
              className="focus-ring flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm text-[#fff8ec] transition hover:bg-white/[.07]"
            >
              <span>{label}</span>
              <span className="text-[#c69b63]">↗</span>
            </button>
          ))}
          <div className="mt-2 border-t border-[#eadfce]/14 pt-2">
            <Link href="/info" className="focus-ring flex rounded-2xl px-3 py-3 text-sm text-[#d7c7b1] transition hover:bg-white/[.07]">
              Ver versão acessível / SEO
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

function Brand() {
  return (
    <>
      <span className="block font-display text-xl tracking-[-0.03em] text-[#fff8ec] drop-shadow-[0_2px_8px_rgba(0,0,0,.35)] md:text-2xl">LAMIM&apos;S</span>
      <span className="block text-[8px] uppercase tracking-[0.28em] text-[#dfcfb9] drop-shadow-[0_1px_5px_rgba(0,0,0,.45)]">Barbearia · Jacareí</span>
    </>
  );
}
