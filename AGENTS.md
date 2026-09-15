# AGENTS.md — Lamim's

## North Star
A Lamim's não tem uma página na internet; tem uma porta digital.

## Arquitetura
- Next.js App Router + TypeScript.
- R3F/Drei para experiência espacial.
- Zustand em `hooks/useExperienceStore.ts`.
- Dados de negócio em `/data`; não duplicar conteúdo em componentes.
- Coordenadas espaciais em `data/hotspots.ts`.
- UI usa tokens semânticos em `app/globals.css`; cores/materiais WebGL usam `lib/design-tokens.ts`.
- Padrões de execução/design: `docs/standards/HYPER_MASTER_v4.txt` + `docs/standards/UNIVERSAL_ADAPTIVE_DESIGN_SYSTEM.md`; aplicar por delta, sem sobrepor decisões específicas do projeto.

## Regras persistentes
- Conversão principal: Fresha, sempre acessível.
- Guided first → free exploration second.
- 3D é interface, não decoração.
- Mobile é experiência própria.
- Sempre manter versão DOM em `/info` e fallback sem WebGL.
- `NEXT_PUBLIC_DEMO_MODE=true` enquanto o espaço for aproximado.
- Não inventar medidas, logo, especialidades, história ou conteúdo crítico.
- Fotos públicas reais da Lamim's têm prioridade sobre stock, mas exigem validação/autorização antes da publicação final.
- As fotos reais recebidas do cliente/usuário são referência de art direction para materiais, luz, mobiliário, atmosfera e proporções percebidas; não usar essas imagens para inferir medidas exatas ou alegar digital twin.
- Preservar Performance Ceiling Rule.
- Preservar a separação: primitive/semantic tokens → component usage → contexto espacial. Evitar espalhar hex literals novos pelos componentes.

## Creative Direction V2 — Clean Spatial Premium
- Base clara: off-white, ivory e cinza claro.
- Contraste: graphite/soft black.
- Materiais protagonistas: estofado preto + chrome/prata + piso cinza amadeirado.
- Madeira é detalhe de rodapé, não material dominante.
- Luz arquitetônica clara com temperatura quente-neutra; evitar lounge dark.
- Verde botânico é acento discreto.
- Sofisticação deve vir de proporção, material, luz, movimento e microdetalhes — não de escurecer a interface.

## Estado atual do 3D
Environment prototype procedural classificado como `APPROX_SPATIAL_LAYOUT`. Não existe modelo real. O V2 usa fotos reais como referência visual e aproxima melhor paredes claras, piso cinza, cadeiras pretas/cromadas, espelhos verticais, circulação central e iluminação. Substituir apenas o ambiente quando o levantamento físico chegar; manter câmera, tour, HUD, hotspots e dados sempre que possível.

## Comandos
- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm run test:experience`

## Próxima evolução recomendada
Levantamento do espaço real → GLB/GLTF otimizado → calibrar coordenadas dos hotspots → profiling desktop/mobile → desligar demo mode após aprovação do cliente.
