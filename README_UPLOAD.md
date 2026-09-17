# Lamim's V2.4 — Mobile Spatial Hotspots Viewport-Safe

## ⚠️ ANTES DE SUBIR

**CONFIRA QUE O GITHUB ESTÁ NA BRANCH `v2-real-space`. NÃO SUBA ESTE PATCH NA `main`.**

A `main` continua preservando a versão apresentada ao Bento e aos irmãos. Esta V2.4 é cumulativa: inclui as alterações anteriores de paridade mobile + jazz + final nas cadeiras + hotspot espacial, e acrescenta a correção de viewport descrita abaixo.

## O problema corrigido

No desktop, o hotspot 3D fica visível porque a viewport é larga. No mobile, a mesma posição 3D pode projetar o chip para fora da tela — então o hotspot existe, mas o usuário não consegue vê-lo ou clicar nele.

A V2.4 mantém o objeto 3D como âncora, porém no mobile/viewport compacta:

- projeta a posição 3D para coordenadas de tela;
- preserva a posição natural enquanto ela cabe na viewport;
- quando sair da área útil, limita o chip para dentro de uma safe area;
- reserva espaço para logo/controles no topo;
- reserva espaço para HUD/progresso e safe area no rodapé;
- considera a largura real do próprio chip;
- também ativa esse comportamento em celular landscape (`height < 520px`), mesmo quando a largura ultrapassa 640px;
- mantém o hotspot clicável e ligado ao mesmo painel;
- desktop permanece com o posicionamento espacial original.

O chip mobile também foi limitado a `min(60vw, 12rem)` para reduzir risco de overflow em 320–360 px.

## O que continua incluído

- hotspot contextual dentro da cena no mobile, não em um card gigante no rodapé;
- animação curta de entrada do hotspot;
- HUD inferior mínimo (gesto + progresso);
- botão de som e menu compactos no mobile;
- soundscape + jazz procedural original;
- início do áudio diretamente no toque para iOS/Safari;
- swipe/scroll reversível, sem joystick;
- final do tour voltado para as cadeiras;
- responsividade 320–430 px e landscape;
- não substitui `ExperienceShell.tsx`, preservando a entrada temática/loading atual.

## Upload pelo GitHub

1. Abra `oluisvi/Lamim-s-Barbershop`.
2. Selecione **`v2-real-space`**.
3. Confirme o nome da branch novamente.
4. Extraia o ZIP.
5. Entre na pasta `lamims-v2-4-mobile-hotspot`.
6. **Add file → Upload files** e envie o conteúdo interno mantendo as pastas.
7. Antes do commit, confirme outra vez **`v2-real-space`**.
8. Commit sugerido: `fix: keep mobile spatial hotspots inside viewport`
9. Aguarde o Preview Deployment da Vercel.

## QA depois do deploy

Teste em portrait e landscape:

- 320×568;
- 360×640;
- 390×844;
- 430×932;
- ~844×390 landscape.

Valide que:

- hotspot acompanha o objeto enquanto ele está naturalmente visível;
- quando a âncora sair pela lateral, o chip permanece dentro da tela;
- chip não entra embaixo do logo/menu/som;
- chip não cai atrás do HUD inferior;
- tocar no chip abre o painel correto;
- scroll/swipe continua normal;
- desktop não muda de posição;
- jazz/som e menu mobile continuam funcionais.

## Validação feita no patch

Foi criado um teste específico para a projeção/clamp de hotspots. O teste foi observado falhando antes da implementação e passando depois. O algoritmo foi exercitado nos cinco tamanhos de viewport listados acima. `SceneHotspots.tsx` e `hotspotScreenPosition.ts` também passaram por transpile sintático do TypeScript.
