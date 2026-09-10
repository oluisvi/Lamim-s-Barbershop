# Barbearia Lamim's — Immersive 3D MVP

MVP imersivo para a **Barbearia Lamim's**, em Jacareí — SP. O conceito do projeto é transformar o site em uma **porta digital**: o visitante entra na barbearia, recebe uma introdução guiada, assume o controle do ambiente 3D, encontra pontos interativos e pode agendar pelo Fresha a qualquer momento.

> **North Star:** “A Barbearia Lamim's não tem uma página na internet. Ela tem uma porta digital.”

## O que já está implementado

- Entrada cinematográfica **guided-first → free exploration**.
- Ambiente 3D procedural e modular, construído para ser substituído por um modelo real posteriormente.
- Navegação cinematográfica por scroll, com caminho de câmera pré-programado e reversível.
- Controles próprios para mobile.
- Hotspots espaciais para serviços, equipe, história, reviews, ambiente real e localização.
- Tour guiado opcional com resolução final **“Agora só falta você”**.
- CTA de agendamento Fresha persistente.
- Modo informativo acessível em `/info` com conteúdo em DOM real.
- Fallback para dispositivos sem WebGL.
- Quality tiers `high`, `balanced` e `low` escolhidos de forma adaptativa.
- Suporte a `prefers-reduced-motion`.
- Áudio ambiente opcional e controlável.
- SEO local, metadata, sitemap, robots e JSON-LD `BarberShop`.
- Estrutura de analytics via eventos `lamims:analytics` / `dataLayer`.
- Conteúdo real centralizado em `/data`.
- Modo demonstrativo controlado por `NEXT_PUBLIC_DEMO_MODE`.

## Stack

- Next.js + App Router
- React + TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- Zustand
- Lucide React

## Rodando localmente

Requisitos recomendados:

- Node.js 20+
- npm 10+

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
npm run validate:source
npm run typecheck
npm run build
npm run start
```

## Variáveis de ambiente

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### `NEXT_PUBLIC_DEMO_MODE`

Use `true` enquanto o ambiente 3D ainda for uma aproximação de proposta. Nesse modo o projeto mantém avisos discretos de que a reconstrução final depende dos assets oficiais.

Quando fotos, vídeo 360°, planta, LiDAR ou modelo final forem aprovados pelo cliente, troque para:

```env
NEXT_PUBLIC_DEMO_MODE=false
```

A troca do ambiente demonstrativo pelo ambiente real deve preservar a arquitetura de câmera, percurso por scroll, hotspots, HUD, conteúdo e conversão.

## Controles

### Desktop

- Scroll do mouse / trackpad: avançar e recuar pelo percurso 3D
- Hotspots contextuais: aparecem conforme a câmera chega a cada ponto da experiência
- CTA de agendamento permanece acessível durante todo o percurso

### Mobile

- Swipe vertical no mobile: controla o mesmo percurso de câmera, sem joystick
- Movimento e rotação são suavizados para reduzir desconforto e evitar sensação de jogo
- Interface reduzida: hotspot contextual + agendamento, sem controles extras ocupando a tela

## Estrutura principal

```text
app/
  page.tsx                  experiência principal
  info/page.tsx             versão acessível / SEO
components/
  experience/               shell, fallback e inicialização
  hud/                      entrada, menus, drawers e controles
  three/                    ambiente, câmera, hotspots e Canvas
data/
  business.ts               negócio e links centrais
  services.ts               serviços/preços/tempos
  team.ts                   equipe pública
  reviews.ts                reviews públicos
  media.ts                  referências visuais reais
  hotspots.ts               posições e ações espaciais
hooks/
  useExperienceStore.ts     estado global da experiência
lib/
  analytics.ts              eventos preparados para analytics
  constants.ts              demo mode / site URL
  webgl.ts                  detecção de fallback
docs/
  BARBEARIA_LAMIMS_HYPER_MASTER_v4_MVP.md
  ASSET_SOURCES.md
  LAMIMS_3D_RECONSTRUCTION.md
public/
  audio/room-tone.wav
```

## Fontes de conteúdo

O conteúdo público do MVP foi consolidado a partir do Discovery/Hyper Master e da página pública atual da Lamim's no Fresha, verificada em **10/09/2026**.

Dados centralizados atualmente incluem:

- avaliação Fresha: **5.0 / 90 avaliações**;
- endereço público;
- descrição institucional com mais de 10 anos de tradição;
- serviços, preços e duração;
- equipe pública;
- horários públicos;
- trechos de avaliações públicas.

O snapshot informado pelo Discovery de **5.0 / 34 avaliações no Google Maps** permanece separado e não é misturado com o Fresha.

## Assets reais e modo de proposta

A arquitetura prioriza as fotos públicas reais da Lamim's encontradas no Fresha como referência visual. Elas estão catalogadas em `data/media.ts` e `docs/ASSET_SOURCES.md`.

O ambiente 3D atual é uma **`APPROX_SPATIAL_LAYOUT`**: ele serve para vender e validar a experiência antes de um levantamento espacial completo. Ele não deve ser apresentado como planta exata do estabelecimento.

Antes de uma publicação comercial definitiva:

1. obter autorização do cliente para uso das imagens;
2. receber os arquivos originais em alta resolução;
3. capturar o espaço com fotos/vídeos/planta/360° quando possível;
4. reconstruir ou importar o ambiente final em GLB/GLTF, photogrammetry, LiDAR ou solução equivalente;
5. recalibrar materiais, iluminação, colisões e hotspots;
6. desligar o demo mode.

## Substituindo o protótipo pelo ambiente real

O núcleo foi separado para evitar reescrever o site. O fluxo recomendado é:

1. colocar o modelo otimizado em `public/models/`;
2. substituir o conteúdo procedural de `BarbershopEnvironment.tsx` por um componente de modelo real;
3. manter `CameraRig`, `SceneHotspots`, HUD e conteúdo;
4. ajustar somente coordenadas em `data/hotspots.ts`;
5. aplicar Draco/Meshopt/KTX2 e baked lighting conforme necessidade;
6. validar HIGH/BALANCED/LOW e mobile.

## Performance

O MVP aplica a **Performance Ceiling Rule**: a identidade não pode depender de hardware topo de linha.

O projeto já reduz DPR/antialias/shadows conforme capacidade estimada. Para o modelo real, medir antes de otimizar e controlar principalmente:

- peso do GLB/GLTF;
- quantidade de triângulos;
- draw calls;
- texturas e memória GPU;
- reflexos/espelhos;
- sombras dinâmicas;
- DPR;
- scripts carregados antes da experiência útil.

## Analytics preparados

Eventos previstos em `lib/analytics.ts`:

```text
experience_entered
guided_tour_started
guided_tour_completed
hotspot_opened
service_viewed
team_member_viewed
instagram_clicked
directions_clicked
booking_clicked
```

A implementação dispara eventos principais como `CustomEvent("lamims:analytics")` e também envia para `window.dataLayer` se ele existir. Isso permite conectar GA4/GTM posteriormente sem acoplar o MVP a um provedor agora.

## Deploy

### Vercel

1. extraia o ZIP e envie **todo o conteúdo da raiz** para o GitHub;
2. confirme no GitHub que existem, no mínimo, as pastas `app/`, `components/`, `data/`, `hooks/`, `lib/`, `public/` e `scripts/`;
3. antes do push, rode `npm run validate:source`;
4. importe o repositório na Vercel;
5. configure `NEXT_PUBLIC_SITE_URL` com a URL final;
6. mantenha `NEXT_PUBLIC_DEMO_MODE=true` enquanto for proposta/MVP;
7. execute o deploy.

Nenhum backend ou banco é necessário para o MVP atual. O validador falha se algum arquivo essencial ou import `@/` estiver ausente, justamente para evitar deploys incompletos.

## Pendências intencionais

- `TODO_REAL_MODEL`: reconstrução física fiel da Lamim's.
- `TODO_CLIENT_ASSET`: arquivos oficiais em alta resolução.
- `TODO_CLIENT_CONTENT`: especialidades individuais, história detalhada e demais informações que o cliente desejar validar.
- validação/cessão de uso de fotos públicas para publicação externa definitiva.
- profiling de GPU e Core Web Vitals após o modelo final existir.

## Referência criativa principal

A referência conceitual é `home-3d-three.vercel.app`, usada para estudar o princípio de **entrar no espaço e receber controle**, sem copiar design ou assets.

## Status

**MVP demonstrativo / proposta.** A arquitetura, experiência, conversão e caminho de substituição do 3D estão implementados. O build final deve ser validado no ambiente com dependências instaladas antes de publicação definitiva.
