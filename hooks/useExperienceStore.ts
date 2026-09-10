"use client";

import { create } from "zustand";
import type { PanelId } from "@/data/hotspots";
import { clampScrollProgress } from "@/lib/scrollJourney";

export type ExperienceMode = "idle" | "intro" | "explore";
export type QualityTier = "high" | "balanced" | "low";

type ExperienceState = {
  mode: ExperienceMode;
  activePanel: PanelId;
  menuOpen: boolean;
  soundEnabled: boolean;
  reducedMotion: boolean;
  quality: QualityTier;
  scrollProgress: number;
  tourCompleted: boolean;
  setMode: (mode: ExperienceMode) => void;
  openPanel: (panel: PanelId) => void;
  closePanel: () => void;
  setMenuOpen: (open: boolean) => void;
  toggleSound: () => void;
  setReducedMotion: (value: boolean) => void;
  setQuality: (quality: QualityTier) => void;
  setScrollProgress: (progress: number) => void;
  completeTour: () => void;
  dismissTourResolution: () => void;
};

export const useExperienceStore = create<ExperienceState>((set) => ({
  mode: "idle",
  activePanel: "none",
  menuOpen: false,
  soundEnabled: false,
  reducedMotion: false,
  quality: "balanced",
  scrollProgress: 0,
  tourCompleted: false,
  setMode: (mode) => set(mode === "idle" ? { mode, scrollProgress: 0, tourCompleted: false, menuOpen: false } : { mode }),
  openPanel: (activePanel) => set({ activePanel, menuOpen: false }),
  closePanel: () => set({ activePanel: "none" }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setQuality: (quality) => set({ quality }),
  setScrollProgress: (scrollProgress) => set({ scrollProgress: clampScrollProgress(scrollProgress) }),
  completeTour: () => set({ tourCompleted: true }),
  dismissTourResolution: () => set({ tourCompleted: false }),
}));
