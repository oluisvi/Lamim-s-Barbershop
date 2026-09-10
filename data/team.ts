export const team = [
  { id: "luiz", name: "Luiz" },
  { id: "pedro", name: "Pedro Barbeiro" },
  { id: "bento", name: "Bento Barbeiro" },
  { id: "gustavo", name: "Gustavo Barbeiro" },
  { id: "rhyan", name: "Rhyan Barbeiro" },
  { id: "kaique", name: "Kaique Barbeiro" }
].map((member) => ({ ...member, source: "Fresha" as const, verifiedAt: "2026-09-10" }));
