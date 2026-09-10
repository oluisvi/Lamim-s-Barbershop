# AGENTS.md — Lamim's

## North Star
A Lamim's não tem uma página na internet; tem uma porta digital.

## Arquitetura
- Next.js App Router + TypeScript.
- R3F/Drei para experiência espacial.
- Zustand em `hooks/useExperienceStore.ts`.
- Dados de negócio em `/data`; não duplicar conteúdo em componentes.
- Coordenadas espaciais em `data/hotspots.ts`.

## Regras persistentes
- Conversão principal: Fresha, sempre acessível.
- Guided first → free exploration second.
- 3D é interface, não decoração.
- Mobile é experiência própria.
- Sempre manter versão DOM em `/info` e fallback sem WebGL.
- `NEXT_PUBLIC_DEMO_MODE=true` enquanto o espaço for aproximado.
- Não inventar medidas, logo, especialidades, história ou conteúdo crítico.
- Fotos públicas reais da Lamim's têm prioridade sobre stock, mas exigem validação/autorização antes da publicação final.
- Preservar Performance Ceiling Rule.

## Estado atual do 3D
Environment prototype procedural classificado como `APPROX_SPATIAL_LAYOUT`. Não existe modelo real. Substituir apenas o ambiente quando o levantamento físico chegar; manter câmera, tour, HUD, hotspots e dados sempre que possível.

## Comandos
- `npm run dev`
- `npm run typecheck`
- `npm run build`

## Próxima evolução recomendada
Levantamento do espaço real → GLB/GLTF otimizado → calibrar coordenadas dos hotspots → profiling desktop/mobile → desligar demo mode após aprovação do cliente.
