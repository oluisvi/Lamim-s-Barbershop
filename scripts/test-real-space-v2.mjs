import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

test('real-space V2 defines semantic light UI tokens', async () => {
  const globals = await source('app/globals.css');
  assert.match(globals, /--color-bg-canvas:\s*#F4F0EA/i);
  assert.match(globals, /--color-surface-elevated:\s*#ECE6DD/i);
  assert.match(globals, /--color-text-primary:\s*#1C1C1C/i);
  assert.match(globals, /--color-material-chrome:\s*#A9B0B7/i);
  assert.match(globals, /--color-botanical:\s*#70806D/i);
  assert.match(globals, /color-scheme:\s*light/i);
});

test('real-space V2 centralizes WebGL material colors', async () => {
  const [tokens, environment] = await Promise.all([
    source('lib/design-tokens.ts'),
    source('components/three/BarbershopEnvironment.tsx'),
  ]);

  assert.match(tokens, /chairUpholstery:\s*"#111111"/i);
  assert.match(tokens, /chrome:\s*"#A9B0B7"/i);
  assert.match(tokens, /floor:\s*"#B8B4AE"/i);
  assert.match(tokens, /woodTrim:\s*"#9E7758"/i);
  assert.match(tokens, /botanical:\s*"#70806D"/i);
  assert.match(environment, /SPATIAL_COLORS\.chairUpholstery/);
  assert.match(environment, /SPATIAL_COLORS\.chrome/);
  assert.match(environment, /SPATIAL_COLORS\.floor/);
  assert.match(environment, /function WallMirror/);
  assert.match(environment, /function CeilingLightStrip/);
  assert.match(environment, /function Cactus/);
});

test('real-space V2 keeps the experience approximate and photo-grounded', async () => {
  const agents = await source('AGENTS.md');
  assert.match(agents, /APPROX_SPATIAL_LAYOUT/);
  assert.match(agents, /fotos reais.*referência de art direction/i);
  assert.match(agents, /não usar essas imagens para inferir medidas exatas/i);
  assert.match(agents, /Clean Spatial Premium/i);
});


test('real-space V2 uses local optimized real-photo assets instead of gallery hotlinks', async () => {
  const media = await source('data/media.ts');
  assert.doesNotMatch(media, /images\.fresha\.com/);
  for (const asset of [
    'interior-stations.webp',
    'interior-aisle.webp',
    'barbershop-in-use.webp',
    'service-closeup.webp',
  ]) {
    assert.match(media, new RegExp(asset.replace('.', '\\.')));
  }
});

test('real-space V2 HUD uses semantic color surfaces', async () => {
  const files = await Promise.all([
    source('components/hud/EntryGate.tsx'),
    source('components/hud/HeaderHud.tsx'),
    source('components/hud/BottomHud.tsx'),
    source('components/hud/MobileJourneyHud.tsx'),
    source('components/hud/InfoDrawer.tsx'),
    source('components/hud/TourResolution.tsx'),
    source('components/experience/NoWebGLFallback.tsx'),
    source('components/experience/ExperienceShell.tsx'),
  ]);

  for (const file of files) assert.match(file, /var\(--color-/);
  assert.match(files[1], /Agendar horário/);
  assert.match(files[4], /Agendar horário no Fresha/);
});

test('tour resolves facing the three-chair station wall instead of the waiting sofa', async () => {
  const path = await source('data/scroll-path.ts');
  assert.match(path, /\[1\.45,\s*1\.65,\s*0\.9\]/);
  assert.match(path, /SCROLL_LOOK_SIDE_OFFSETS[\s\S]*0,\s*0,?\s*\] as const/);
});

test('sound toggle drives a procedural barbershop ambience instead of the traffic-heavy room-tone file', async () => {
  const [shell, soundscape] = await Promise.all([
    source('components/experience/ExperienceShell.tsx'),
    source('lib/barbershopSoundscape.ts'),
  ]);

  assert.match(shell, /createBarbershopSoundscape/);
  assert.doesNotMatch(shell, /room-tone\.wav|<audio/);
  assert.match(soundscape, /AudioContext/);
  assert.match(soundscape, /createBufferSource/);
  assert.match(soundscape, /scheduleScissorClicks/);
});

test('environment adds restrained atmosphere props while preserving the real-space anchors', async () => {
  const environment = await source('components/three/BarbershopEnvironment.tsx');
  assert.match(environment, /function WallArtGallery/);
  assert.match(environment, /function WaitingSideTable/);
  assert.match(environment, /function FoldedTowels/);
  assert.match(environment, /<WallArtGallery/);
  assert.match(environment, /<WaitingSideTable/);
  assert.match(environment, /<WaitingArea/);
  assert.match(environment, /<Cactus/);
  assert.match(environment, /<ToolTrolley/);
});

