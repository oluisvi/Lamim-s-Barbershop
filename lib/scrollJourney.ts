export type JourneyScene = {
  id: "entrance" | "reception" | "social" | "gallery" | "team" | "services" | "story" | "chair";
  label: string;
  from: number;
  to: number;
};

export const JOURNEY_SCENES: JourneyScene[] = [
  { id: "entrance", label: "Entrada", from: 0, to: 0.11 },
  { id: "reception", label: "Recepção", from: 0.11, to: 0.23 },
  { id: "social", label: "Ambiente", from: 0.23, to: 0.36 },
  { id: "gallery", label: "Resultados", from: 0.36, to: 0.49 },
  { id: "team", label: "Profissionais", from: 0.49, to: 0.62 },
  { id: "services", label: "Serviços", from: 0.62, to: 0.75 },
  { id: "story", label: "História", from: 0.75, to: 0.89 },
  { id: "chair", label: "Sua cadeira", from: 0.89, to: 1.001 },
];

export function clampScrollProgress(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

export function getJourneyScene(progress: number) {
  const normalized = clampScrollProgress(progress);
  return JOURNEY_SCENES.find((scene) => normalized >= scene.from && normalized < scene.to) ?? JOURNEY_SCENES[JOURNEY_SCENES.length - 1];
}
