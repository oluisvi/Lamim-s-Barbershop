export type Service = {
  id: string;
  name: string;
  duration: string;
  price: string;
  source: "Fresha";
  verifiedAt: string;
};

export const services: Service[] = [
  { id: "barba", name: "Barba", duration: "30 min", price: "R$ 35", source: "Fresha", verifiedAt: "2026-09-10" },
  { id: "corte-barba", name: "Corte e Barba", duration: "45 min", price: "R$ 70", source: "Fresha", verifiedAt: "2026-09-10" },
  { id: "corte", name: "Corte de cabelo", duration: "30 min", price: "R$ 45", source: "Fresha", verifiedAt: "2026-09-10" },
  { id: "corte-sobrancelha", name: "Corte e sobrancelha", duration: "30 min", price: "R$ 50", source: "Fresha", verifiedAt: "2026-09-10" },
  { id: "corte-cavanhaque", name: "Corte e Cavanhaque", duration: "45 min", price: "R$ 60", source: "Fresha", verifiedAt: "2026-09-10" },
  { id: "sobrancelha", name: "Sobrancelha", duration: "15 min", price: "R$ 15", source: "Fresha", verifiedAt: "2026-09-10" },
  { id: "pezinho", name: "Pézinho", duration: "10 min", price: "R$ 15", source: "Fresha", verifiedAt: "2026-09-10" }
];
