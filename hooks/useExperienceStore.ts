"use client";

import { create } from "zustand";
import type { PanelId } from "@/data/hotspots";

export type ExperienceMode = "idle" | "intro" | "free" | "tour";
export type QualityTier = "high" | "balanced" | "low";

type ExperienceState = {
  mode: ExperienceMode;
  activePanel: PanelId;
  menuOpen: boolean;
  soundEnabled: boolean;
  reducedMotion: boolean;
  quality: QualityTier;
  movement: { x: number; z: number };
  tourCompleted: boolean;
  setMode: (mode: ExperienceMode) => void;
  openPanel: (panel: PanelId) => void;
  closePanel: () => void;
  setMenuOpen: (open: boolean) => void;
  toggleSound: () => void;
  setReducedMotion: (value: boolean) => void;
  setQuality: (quality: QualityTier) => void;
  setMovement: (movement: { x: number; z: number }) => void;
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
  movement: { x: 0, z: 0 },
  tourCompleted: false,
  setMode: (mode) => set({ mode }),
  openPanel: (activePanel) => set({ activePanel, menuOpen: false }),
  closePanel: () => set({ activePanel: "none" }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setQuality: (quality) => set({ quality }),
  setMovement: (movement) => set({ movement }),
  completeTour: () => set({ tourCompleted: true }),
  dismissTourResolution: () => set({ tourCompleted: false })
}));
