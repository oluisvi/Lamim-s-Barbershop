import { hotspots, type HotspotConfig } from "@/data/hotspots";

export type HotspotWindow = {
  id: HotspotConfig["id"];
  from: number;
  to: number;
};

// Shared authored windows for desktop spatial labels and the mobile journey HUD.
// They are aligned to the forward-facing V5.2 camera path so the action is offered
// while the related object is still in front of the visitor.
export const HOTSPOT_WINDOWS: HotspotWindow[] = [
  { id: "location", from: 0, to: 0.07 },
  { id: "reviews", from: 0.08, to: 0.23 },
  { id: "gallery", from: 0.28, to: 0.39 },
  { id: "team", from: 0.39, to: 0.49 },
  { id: "services", from: 0.5, to: 0.61 },
  { id: "story", from: 0.61, to: 0.75 },
];

export function getActiveHotspot(progress: number) {
  const window = HOTSPOT_WINDOWS.find((item) => progress >= item.from && progress < item.to);
  return window ? hotspots.find((item) => item.id === window.id) : undefined;
}
