"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "lamims:thematic-entry-seen:v2";
const READY_SETTLE_MS = 260;
const MAX_WAIT_MS = 8000;
const SAFE_EXIT_MS = 2100;

type ThematicEntryProps = {
  ready: boolean;
};

type EntryPhase = "hidden" | "waiting" | "opening";

export function ThematicEntry({ ready }: ThematicEntryProps) {
  const [phase, setPhase] = useState<EntryPhase>("hidden");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Storage can be unavailable in restrictive browsing modes. The safe
      // timeout still guarantees that the decorative threshold releases.
    }

    if (reducedMotion) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
      return;
    }

    setPhase("waiting");
  }, []);

  useEffect(() => {
    if (phase !== "waiting") return;

    const open = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
      setPhase("opening");
    };

    const wait = window.setTimeout(open, ready ? READY_SETTLE_MS : MAX_WAIT_MS);
    return () => window.clearTimeout(wait);
  }, [phase, ready]);

  useEffect(() => {
    if (phase !== "opening") return;

    const safeExit = window.setTimeout(() => setPhase("hidden"), SAFE_EXIT_MS);
    return () => window.clearTimeout(safeExit);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className={`thematic-entry thematic-entry--${phase} pointer-events-none fixed inset-0 z-[100] overflow-hidden`}
    >
      <div className="thematic-entry__panel thematic-entry__panel--left" />
      <div className="thematic-entry__panel thematic-entry__panel--right" />
      <div className="thematic-entry__panel thematic-entry__panel--top" />
      <div className="thematic-entry__panel thematic-entry__panel--bottom" />
      <div className="thematic-entry__seam" />
      <div className="thematic-entry__status">
        <span>Preparando a entrada</span>
        <span className="thematic-entry__status-line" />
      </div>
    </div>
  );
}
