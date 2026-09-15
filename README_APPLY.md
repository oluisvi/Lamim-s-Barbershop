# Lamim's — Real Space V2 patch

Este pacote é um **delta** sobre `oluisvi/Lamim-s-Barbershop` / `main`.
Ele não recria o projeto: substitui apenas os arquivos ligados à direção visual, ambiente 3D, mídia real, tokens e testes afetados.

## O que muda

- Creative Direction: **Clean Spatial Premium**.
- Paleta clara baseada nas fotos reais: off-white, cinza, preto, chrome, madeira discreta e verde botânico.
- Ambiente procedural rearticulado com:
  - paredes claras;
  - piso cinza amadeirado;
  - cadeiras pretas/cromadas;
  - espelhos verticais;
  - carrinhos pretos;
  - circulação central;
  - área de espera sugerida ao fundo;
  - cacto/vegetação;
  - teto claro com linhas de luz;
  - iluminação mais clara e neutra-quente.
- UI/HUD migrados para tokens semânticos.
- Galeria usa as quatro fotos reais fornecidas ao projeto, convertidas para WebP local otimizado.
- `data/hotspots.ts` recalibrado para o V2 procedural sem alterar a arquitetura de scroll/câmera.
- `HYPER_MASTER_v4` e `UNIVERSAL_ADAPTIVE_DESIGN_SYSTEM` adicionados em `docs/standards/` como guardrails permanentes.
- Testes de regressão visual/arquitetural atualizados e novo `test:real-space`.

## O que NÃO muda

- `CameraRig` e seu Catmull-Rom/scroll progress.
- scroll para baixo avança / scroll para cima retorna.
- mobile por swipe vertical, sem joystick.
- Zustand / fluxo de estado.
- Fresha como CTA principal.
- analytics.
- quality tiers.
- reduced motion.
- fallback sem WebGL.
- SEO/metadata core.
- `NEXT_PUBLIC_DEMO_MODE=true` enquanto não houver levantamento real.

## Aplicação

Extraia este pacote e copie seu conteúdo sobre a raiz do repositório Lamim-s-Barbershop, preservando a estrutura de pastas. Arquivos com o mesmo caminho devem ser substituídos; arquivos novos devem ser adicionados.

Se preferir, no Windows execute `APPLY_V2.ps1` apontando para a raiz local do repositório.

## Verificação após aplicar no repositório completo

```bash
npm run test:real-space
npm run test:experience
npm run validate:source
npm run typecheck
npm run build
```

Depois rode `npm run dev` e valide desktop + mobile visualmente contra as fotos reais.

## Estado de verificação deste pacote

No ambiente de geração do patch:

- 16 arquivos TypeScript/TSX alterados passaram por parse/transpile de sintaxe.
- testes locais específicos de V2 + premium environment: **9/9 passaram**.
- 4 assets WebP foram decodificados/validados e ficaram entre ~108 KB e ~153 KB.

O build Next.js completo precisa ser executado depois que o patch estiver sobre o repositório inteiro, porque a integração GitHub disponível neste chat permitiu leitura do repo mas retornou HTTP 403 para operações de escrita, e o repo completo não ficou montado no runtime local.
