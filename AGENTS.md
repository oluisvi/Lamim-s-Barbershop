# AGENTS.md — Lamim's

## North Star
A Lamim's não tem uma página na internet; tem uma porta digital.

## Arquitetura
- Next.js App Router + TypeScript.
- R3F/Drei para experiência espacial.
- Zustand em `hooks/useExperienceStore.ts`.
- Dados de negócio em `/data`; não duplicar conteúdo em componentes.
- Coordenadas de hotspots em `data/hotspots.ts`.
- Caminho cinematográfico em `data/scroll-path.ts`.
- Progressão narrativa em `lib/scrollJourney.ts`.

## Regras persistentes
- Conversão principal: Fresha, sempre acessível.
- Entrada cinematográfica → exploração controlada por scroll.
- Não usar WASD, setas, joystick virtual ou navegação FPS no fluxo principal.
- Scroll/trackpad no desktop e swipe vertical no mobile controlam o mesmo caminho pré-programado e reversível.
- A câmera orienta o olhar automaticamente ao longo do percurso; hotspots aparecem contextualmente, um por vez.
- 3D é interface, não decoração.
- Mobile é experiência própria: menos chrome, movimento estável, DPR adaptativo e touch nativo para rolagem vertical.
- Sempre manter versão DOM em `/info` e fallback sem WebGL.
- `NEXT_PUBLIC_DEMO_MODE=true` enquanto o espaço for aproximado.
- Não inventar medidas, logo, especialidades, história ou conteúdo crítico.
- Fotos públicas reais da Lamim's têm prioridade sobre stock, mas exigem validação/autorização antes da publicação final.
- Preservar Performance Ceiling Rule.

## Estado atual do 3D
Environment prototype procedural classificado como `APPROX_SPATIAL_LAYOUT`. Não existe modelo real. Quando o levantamento físico chegar, substituir o ambiente e recalibrar `data/scroll-path.ts` + `data/hotspots.ts`, preservando HUD, narrativa, dados e conversão.

## Comandos
- `npm run dev`
- `npm run typecheck`
- `npm run test:scroll`
- `npm run validate:source`
- `npm run build`

## Próxima evolução recomendada
Levantamento do espaço real → GLB/GLTF otimizado → recalibrar percurso/hotspots → profiling desktop/mobile → desligar demo mode após aprovação do cliente.
