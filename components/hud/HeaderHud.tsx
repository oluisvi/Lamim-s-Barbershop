"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
import { business } from "@/data/business";
import { useExperienceStore } from "@/hooks/useExperienceStore";
import { startBarbershopSoundscape, stopBarbershopSoundscape } from "@/lib/barbershopSoundscape";
import { trackEvent } from "@/lib/analytics";

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
  const experienceReady = mode === "explore";
  const showBooking = mode !== "intro";

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, setMenuOpen]);

  const handleSoundToggle = async () => {
    if (soundEnabled) {
      stopBarbershopSoundscape();
      toggleSound();
      trackEvent("sound_toggled", { enabled: false, mix: "barbershop_jazz" });
      return;
    }

    try {
      // Starts directly inside the tap/click handler so iOS Safari treats it as
      // a user gesture and permits AudioContext playback.
      await startBarbershopSoundscape();
      toggleSound();
      trackEvent("sound_toggled", { enabled: true, mix: "barbershop_jazz" });
    } catch {
      // Keep the UI muted if the browser refuses audio playback.
    }
  };

  const returnToStart = () => {
    if (soundEnabled) {
      stopBarbershopSoundscape();
      toggleSound();
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    useExperienceStore.getState().setScrollProgress(0);
    useExperienceStore.getState().setMode("idle");
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[70] flex items-center justify-between gap-3 px-3 pb-3 pt-[max(.75rem,env(safe-area-inset-top))] min-[380px]:px-4 min-[380px]:pt-[max(1rem,env(safe-area-inset-top))] md:p-6">
        <div className="pointer-events-auto min-w-0 max-w-[46vw] sm:max-w-none">
          {experienceActive ? (
            <button
              type="button"
              onClick={returnToStart}
              className="focus-ring min-w-0 text-left"
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

        <div className="pointer-events-auto flex shrink-0 items-center gap-1.5 min-[380px]:gap-2">
          {experienceReady && (
            <>
              <button
                type="button"
                onClick={() => void handleSoundToggle()}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] text-[var(--color-text-primary)] shadow-[0_8px_28px_rgba(17,17,17,.10)] backdrop-blur-md transition hover:bg-[var(--color-bg-subtle)] sm:h-11 sm:w-11"
                aria-label={soundEnabled ? "Desativar ambiente + jazz" : "Ativar ambiente + jazz"}
                aria-pressed={soundEnabled}
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] text-[var(--color-text-primary)] shadow-[0_8px_28px_rgba(17,17,17,.10)] backdrop-blur-md transition hover:bg-[var(--color-bg-subtle)] sm:h-11 sm:w-11"
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
            className={`focus-ring hidden min-h-11 items-center rounded-full bg-[var(--color-action-primary)] px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-inverse)] shadow-[0_8px_24px_rgba(17,17,17,.15)] transition-all duration-500 hover:bg-[var(--color-action-primary-hover)] sm:inline-flex ${showBooking ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-1 opacity-0"}`}
          >
            Agendar horário
          </a>
        </div>
      </header>

      {experienceReady && menuOpen && (
        <>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[60] cursor-default bg-[var(--color-surface-overlay)] backdrop-blur-[1px]"
            aria-label="Fechar menu"
          />
          <nav className="fixed inset-x-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[80] max-h-[min(70dvh,36rem)] overflow-y-auto rounded-[24px] border border-[var(--color-border-default)] bg-[var(--color-surface-floating)] p-3 text-[var(--color-text-primary)] shadow-[0_24px_70px_rgba(17,17,17,.16)] backdrop-blur-xl sm:inset-x-auto sm:bottom-auto sm:right-6 sm:top-24 sm:w-[min(340px,calc(100vw-48px))]">
            <div className="px-3 pb-3 pt-2 text-[9px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">Navegação</div>
            {items.map(([label, panel]) => (
              <button
                key={panel}
                type="button"
                onClick={() => openPanel(panel)}
                className="focus-ring flex min-h-12 w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm text-[var(--color-text-primary)] transition hover:bg-black/[.05]"
              >
                <span>{label}</span>
                <span className="text-[var(--color-botanical)]">↗</span>
              </button>
            ))}
            <div className="mt-2 border-t border-[var(--color-border-subtle)] pt-2">
              <a
                href={business.fresha.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mb-1 flex min-h-12 items-center justify-center rounded-2xl bg-[var(--color-action-primary)] px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)] sm:hidden"
              >
                Agendar horário
              </a>
              <Link href="/info" className="focus-ring flex min-h-12 items-center rounded-2xl px-3 py-3 text-sm text-[var(--color-text-secondary)] transition hover:bg-black/[.05]">
                Ver versão acessível / SEO
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

function Brand() {
  return (
    <>
      <span className="block truncate font-display text-base tracking-[-0.03em] text-[var(--color-text-primary)] drop-shadow-[0_1px_8px_rgba(255,255,255,.9)] min-[380px]:text-lg sm:text-xl md:text-2xl">LAMIM&apos;S</span>
      <span className="block truncate text-[7px] uppercase tracking-[0.22em] text-[var(--color-text-secondary)] drop-shadow-[0_1px_6px_rgba(255,255,255,.9)] min-[380px]:text-[8px] min-[380px]:tracking-[0.28em]">Barbearia · Jacareí</span>
    </>
  );
}
