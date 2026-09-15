export type PanelId = "services" | "team" | "story" | "reviews" | "location" | "gallery" | "none";

export type HotspotConfig = {
  id: string;
  label: string;
  eyebrow: string;
  panel: PanelId;
  position: [number, number, number];
  cameraTarget: [number, number, number];
};

// APPROX_SPATIAL_LAYOUT — coordinates are calibrated to the V2 procedural set.
// Recalibrate again when a measured GLB/GLTF of the real shop replaces the prototype.
export const hotspots: HotspotConfig[] = [
  { id: "services", label: "Conheça os serviços", eyebrow: "Estação lateral", panel: "services", position: [-5.08, 1.8, 1.9], cameraTarget: [-5.35, 1.42, 1.9] },
  { id: "team", label: "Quem faz a Lamim's", eyebrow: "No centro da casa", panel: "team", position: [0, 1.82, -1.85], cameraTarget: [0, 1.45, -1.85] },
  { id: "gallery", label: "Veja o ambiente real", eyebrow: "Espelhos e cadeiras", panel: "gallery", position: [5.18, 2.05, 0.55], cameraTarget: [5.42, 1.55, 0.55] },
  { id: "story", label: "Mais de 10 anos de história", eyebrow: "A casa", panel: "story", position: [-5.18, 2.0, 5.35], cameraTarget: [-5.38, 1.5, 5.35] },
  { id: "reviews", label: "5.0 no Fresha", eyebrow: "Primeira cadeira", panel: "reviews", position: [5.12, 1.8, 4.25], cameraTarget: [5.35, 1.42, 4.25] },
  { id: "location", label: "Como chegar", eyebrow: "Entrada", panel: "location", position: [0, 1.7, 7.3], cameraTarget: [0, 1.3, 7.3] }
];
