export const reviews = [
  { id: "r1", author: "Leandro A.", rating: 5, text: "Excelente local e ótimo atendimento." },
  { id: "r2", author: "Israel F.", rating: 5, text: "É a melhor, não tem nada igual 🔥🔥🔥" },
  { id: "r3", author: "Matheus A.", rating: 5, text: "Qualidade" },
  { id: "r4", author: "João G.", rating: 5, text: "muito bom o atendimento" },
  {
    id: "r5",
    author: "Rosani D.",
    rating: 5,
    text: "Excelente! Ótimos profissionais. Recepção maravilhosa. Ambiente super agradável super recomendo."
  }
].map((review) => ({ ...review, source: "Fresha" as const, verifiedAt: "2026-09-10" }));
