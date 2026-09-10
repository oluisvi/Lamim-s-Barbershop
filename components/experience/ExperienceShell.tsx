"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { EntryGate } from "@/components/hud/EntryGate";
import { HeaderHud } from "@/components/hud/HeaderHud";
import { BottomHud } from "@/components/hud/BottomHud";
import { InfoDrawer } from "@/components/hud/InfoDrawer";
import { TourResolution } from "@/components/hud/TourResolution";
import { NoWebGLFallback } from "./NoWebGLFallback";
import { supportsWebGL } from "@/lib/webgl";
import { DEMO_MODE } from "@/lib/constants";
import { clampScrollProgress } from "@/lib/scrollJourney";
import { useExperienceStore } from "@/hooks/useExperienceStore";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas").then((mod) => mod.SceneCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0d0c0a]" />
});

export function ExperienceShell() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const journeyRef = useRef<HTMLElement | null>(null);
  const soundEnabled = useExperienceStore((s) => s.soundEnabled);
  const setReducedMotion = useExperienceStore((s) => s.setReducedMotion);
  const setQuality = useExperienceStore((s) => s.setQuality);
  const setScrollProgress = useExperienceStore((s) => s.setScrollProgress);
  const mode = useExperienceStore((s) => s.mode);
  const activePanel = useExperienceStore((s) => s.activePanel);
  const tourCompleted = useExperienceStore((s) => s.tourCompleted);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setWebgl(supportsWebGL());
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = () => setReducedMotion(media.matches);
    media.addEventListener?.("change", listener);

    const nav = navigator as Navigator & { deviceMemory?: number };
    const cores = navigator.hardwareConcurrency || 4;
    const memory = nav.deviceMemory || 4;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (cores >= 8 && memory >= 6 && !coarsePointer) setQuality("high");
    else if (cores <= 4 || memory <= 3) setQuality("low");
    else setQuality("balanced");

    return () => media.removeEventListener?.("change", listener);
  }, [setQuality, setReducedMotion]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundEnabled) {
      audio.volume = 0.14;
      audio.play().catch(() => undefined);
    } else {
      audio.pause();
    }
  }, [soundEnabled]);

  useEffect(() => {
    const lockPage = mode !== "explore" || activePanel !== "none" || tourCompleted;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = lockPage ? "hidden" : "";
    document.body.style.overflow = lockPage ? "hidden" : "";

    if (mode === "explore" && activePanel === "none" && !tourCompleted) {
      requestAnimationFrame(() => window.scrollTo({ top: window.scrollY, behavior: "auto" }));
    }

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [mode, activePanel, tourCompleted]);

  useEffect(() => {
    if (mode !== "explore") return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const element = journeyRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const scrollableDistance = Math.max(element.offsetHeight - window.innerHeight, 1);
      const progress = clampScrollProgress(-rect.top / scrollableDistance);
      setScrollProgress(progress);

    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mode, setScrollProgress]);

  if (webgl === null) {
    return <div className="grid min-h-[100dvh] place-items-center bg-[#0d0c0a] text-[9px] uppercase tracking-[0.22em] text-[#7e705e]">Preparando a entrada…</div>;
  }
  if (!webgl) return <NoWebGLFallback />;

  return (
    <main ref={journeyRef} className="relative h-[650vh] w-full bg-[#0d0c0a] md:h-[700vh]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#0d0c0a]">
        <SceneCanvas />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_34%,rgba(0,0,0,.44)_100%)]" />
        <HeaderHud />
        <EntryGate />
        <BottomHud />
        <InfoDrawer />
        <TourResolution />

        {mode === "intro" && (
          <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center">
            <div className="mx-auto mb-3 h-px w-28 overflow-hidden bg-white/10"><div className="h-full w-1/2 animate-[pulse_1.3s_ease-in-out_infinite] bg-[#c79d5f]" /></div>
            <div className="text-[9px] uppercase tracking-[0.24em] text-[#a99b88]">Atravessando a entrada</div>
          </div>
        )}

        {DEMO_MODE && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[8px] uppercase tracking-[0.14em] text-[#81735f] backdrop-blur lg:block">
            Ambiente demonstrativo · assets oficiais pendentes
          </div>
        )}

        <audio ref={audioRef} src="/audio/room-tone.wav" loop preload="none" />
      </div>
    </main>
  );
}
