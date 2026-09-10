export type PanelId = "services" | "team" | "story" | "reviews" | "location" | "gallery" | "none";

export type HotspotConfig = {
  id: string;
  label: string;
  eyebrow: string;
  panel: PanelId;
  position: [number, number, number];
  cameraTarget: [number, number, number];
};

export const hotspots: HotspotConfig[] = [
  { id: "services", label: "Conheça os serviços", eyebrow: "Cadeira 01", panel: "services", position: [-3.9, 1.8, -1.7], cameraTarget: [-3.9, 1.4, -1.7] },
  { id: "team", label: "Quem faz a Lamim's", eyebrow: "Cadeira 02", panel: "team", position: [0, 1.8, -2.0], cameraTarget: [0, 1.4, -2.0] },
  { id: "gallery", label: "Veja o ambiente real", eyebrow: "Espelho central", panel: "gallery", position: [3.8, 2.0, -1.7], cameraTarget: [3.8, 1.5, -1.7] },
  { id: "story", label: "Mais de 10 anos de história", eyebrow: "Parede da família", panel: "story", position: [-5.2, 2.0, 4.0], cameraTarget: [-5.2, 1.5, 4.0] },
  { id: "reviews", label: "5.0 no Fresha", eyebrow: "Área de espera", panel: "reviews", position: [4.8, 1.8, 4.6], cameraTarget: [4.8, 1.3, 4.6] },
  { id: "location", label: "Como chegar", eyebrow: "Recepção", panel: "location", position: [0, 1.7, 7.3], cameraTarget: [0, 1.3, 7.3] }
];
