# Lamim's V2.3 — Mobile Spatial Hotspots + Mobile Parity + Jazz

## ⚠️ ANTES DE SUBIR

**CONFIRA QUE O GITHUB ESTÁ NA BRANCH `v2-real-space`. NÃO SUBA ESTE PATCH NA `main`.**

A `main` deve continuar preservando a versão apresentada ao Bento e aos irmãos enquanto a V2 estiver em avaliação.

## O que muda

- No mobile, as informações contextuais deixam de aparecer como um card grande no rodapé.
- O mesmo hotspot espacial usado no desktop passa a aparecer sobre a cadeira/espelho/objeto também no mobile.
- O hotspot ganha escala própria para telas pequenas e animação curta de entrada.
- O hotspot continua clicável e abre o mesmo painel de conteúdo.
- O HUD inferior mobile fica mínimo: gesto inicial + progresso, sem duplicar informação contextual.
- Mantém navegação por swipe/scroll, sem joystick.
- Inclui paridade mobile pendente: botão de som e menu compactos no topo.
- Inclui ambiente + jazz procedural original, com início diretamente no toque para compatibilidade com iOS/Safari.
- Mantém final do tour voltado para as cadeiras e melhora o card final em 320–360 px.
- Preserva a entrada temática/loading atualmente existente no projeto: este patch NÃO substitui `ExperienceShell.tsx`.

## Upload pelo GitHub

1. Abra `oluisvi/Lamim-s-Barbershop`.
2. Selecione **`v2-real-space`**.
3. Confirme o nome da branch mais uma vez.
4. Extraia o ZIP.
5. Entre na pasta extraída `lamims-v2-3-mobile-spatial-patch`.
6. Use **Add file → Upload files** no GitHub e arraste o conteúdo interno mantendo as pastas.
7. Antes do commit, confirme novamente **`v2-real-space`**.
8. Commit sugerido: `feat: bring spatial hotspots and jazz parity to mobile`
9. Aguarde o Preview Deployment da Vercel.

## QA depois do deploy

No celular real, valide:

- o hotspot aparece visualmente sobre o objeto em foco;
- não existe mais o grande card contextual na ilha inferior;
- tocar no hotspot abre o painel correto;
- hotspot não fica cortado nas bordas em portrait;
- 320 px, 360 px, 390–430 px e landscape;
- botão de som ativa/desativa ambiente + jazz;
- menu mobile abre como bottom sheet;
- swipe continua movendo o tour e scroll para cima continua reversível;
- final do tour continua olhando para as cadeiras.

O desktop mantém o mesmo modelo de hotspot espacial.
