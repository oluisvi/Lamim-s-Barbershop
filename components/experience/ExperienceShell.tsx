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
  loading: () => <div className="absolute inset-0 bg-[#201a15]" />
});

export function ExperienceShell() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const journeyRef = useRef<HTMLElement | null>(null);
  const scrollDistanceRef = useRef(1);
  const soundEnabled = useExperienceStore((s) => s.soundEnabled);
  const setReducedMotion = useExperienceStore((s) => s.setReducedMotion);
  const setQuality = useExperienceStore((s) => s.setQuality);
  const setScrollProgress = useExperienceStore((s) => s.setScrollProgress);
  const mode = useExperienceStore((s) => s.mode);
  const activePanel = useExperienceStore((s) => s.activePanel);
  const menuOpen = useExperienceStore((s) => s.menuOpen);
  const tourCompleted = useExperienceStore((s) => s.tourCompleted);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lockedScrollY = useRef(0);
  const scrollLockActive = useRef(false);
  const originalPageStyles = useRef<{ htmlOverflow: string; bodyOverflow: string; overscroll: string } | null>(null);

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
    else if (coarsePointer || cores <= 4 || memory <= 3) setQuality("low");
    else setQuality("balanced");

    return () => media.removeEventListener?.("change", listener);
  }, [setQuality, setReducedMotion]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundEnabled) {
      audio.volume = 0.12;
      audio.play().catch(() => undefined);
    } else {
      audio.pause();
    }
  }, [soundEnabled]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const lockPage = mode !== "explore" || menuOpen || activePanel !== "none" || tourCompleted;

    if (!originalPageStyles.current) {
      originalPageStyles.current = {
        htmlOverflow: root.style.overflow,
        bodyOverflow: body.style.overflow,
        overscroll: body.style.overscrollBehaviorY,
      };
    }

    if (lockPage && !scrollLockActive.current) {
      lockedScrollY.current = window.scrollY;
      scrollLockActive.current = true;
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.overscrollBehaviorY = "none";
      return;
    }

    if (!lockPage && scrollLockActive.current) {
      root.style.overflow = originalPageStyles.current.htmlOverflow;
      body.style.overflow = originalPageStyles.current.bodyOverflow;
      body.style.overscrollBehaviorY = "none";
      scrollLockActive.current = false;

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: lockedScrollY.current, behavior: "auto" });
      });
      return;
    }

    if (!lockPage) body.style.overscrollBehaviorY = "none";
  }, [mode, menuOpen, activePanel, tourCompleted]);

  useEffect(() => {
    return () => {
      const styles = originalPageStyles.current;
      if (!styles) return;
      document.documentElement.style.overflow = styles.htmlOverflow;
      document.body.style.overflow = styles.bodyOverflow;
      document.body.style.overscrollBehaviorY = styles.overscroll;
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const element = journeyRef.current;
      if (!element) return;
      scrollDistanceRef.current = Math.max(element.offsetHeight - window.innerHeight, 1);
    };

    measure();
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (journeyRef.current) observer?.observe(journeyRef.current);
    window.addEventListener("resize", measure, { passive: true });
    window.visualViewport?.addEventListener("resize", measure, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
      window.visualViewport?.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (mode !== "explore") return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = clampScrollProgress(window.scrollY / scrollDistanceRef.current);
      setScrollProgress(progress);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mode, setScrollProgress]);

  if (webgl === null) {
    return <div className="grid min-h-[100dvh] place-items-center bg-[#201a15] text-[9px] uppercase tracking-[0.22em] text-[#d4c3ac]">Preparando a entrada…</div>;
  }
  if (!webgl) return <NoWebGLFallback />;

  return (
    <main ref={journeyRef} className="relative h-[540vh] w-full bg-[#201a15] sm:h-[600vh] lg:h-[680vh]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#201a15]">
        <SceneCanvas />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,transparent_52%,rgba(38,29,22,.22)_100%)]" />
        <HeaderHud />
        <EntryGate />
        <BottomHud />
        <InfoDrawer />
        <TourResolution />

        {mode === "intro" && (
          <div className="cinematic-entry pointer-events-none absolute inset-0 z-40" aria-hidden="true">
            <div className="cinematic-entry__veil absolute inset-0 bg-[#17120e]" />
            <div className="cinematic-entry__bar cinematic-entry__bar--top absolute inset-x-0 top-0 bg-[#120f0c]" />
            <div className="cinematic-entry__bar cinematic-entry__bar--bottom absolute inset-x-0 bottom-0 bg-[#120f0c]" />
            <div className="cinematic-entry__caption absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <div className="mx-auto mb-3 h-px w-24 overflow-hidden bg-white/15">
                <div className="cinematic-entry__line h-full bg-[#d1a36a]" />
              </div>
              <div className="text-[9px] uppercase tracking-[0.26em] text-[#f0dfc9]">Entrando na Lamim&apos;s</div>
            </div>
          </div>
        )}

        {DEMO_MODE && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[8px] uppercase tracking-[0.14em] text-[#bba88f] backdrop-blur lg:block">
            Ambiente demonstrativo · assets oficiais pendentes
          </div>
        )}

        <audio ref={audioRef} src="/audio/room-tone.wav" loop preload="none" />
      </div>
    </main>
  );
}
