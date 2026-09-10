import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

test('hybrid preserves FIX COMPLETE content destinations', async () => {
  const [header, drawer, info] = await Promise.all([
    source('components/hud/HeaderHud.tsx'),
    source('components/hud/InfoDrawer.tsx'),
    source('app/info/page.tsx'),
  ]);
  for (const label of ['Serviços', 'Profissionais', 'História', 'Avaliações', 'Localização']) {
    assert.match(header, new RegExp(label));
  }
  for (const panel of ['services', 'team', 'story', 'reviews', 'location', 'gallery']) {
    assert.match(drawer, new RegExp(panel));
  }
  for (const section of ['Escolha o ritual', "Quem faz a Lamim", 'Ambiente real', 'Avaliações', 'Onde a visita vira real', 'A cadeira está esperando']) {
    assert.match(info, new RegExp(section));
  }
});

test('hybrid keeps dark premium shell and warm readable surfaces', async () => {
  const [shell, drawer, info, resolution] = await Promise.all([
    source('components/experience/ExperienceShell.tsx'),
    source('components/hud/InfoDrawer.tsx'),
    source('app/info/page.tsx'),
    source('components/hud/TourResolution.tsx'),
  ]);
  assert.match(shell, /#201a15/);
  assert.match(drawer, /#f1e7d7/);
  assert.match(info, /#f1e7d7/);
  assert.match(info, /#17130f/);
  assert.match(resolution, /#f1e7d7/);
});

test('hybrid uses V4 enriched 3D and scroll-only movement', async () => {
  const [environment, camera, mobile, bottom] = await Promise.all([
    source('components/three/BarbershopEnvironment.tsx'),
    source('components/three/CameraRig.tsx'),
    source('components/hud/MobileControls.tsx'),
    source('components/hud/BottomHud.tsx'),
  ]);
  assert.match(environment, /function ProductShelf/);
  assert.match(environment, /function ToolTrolley/);
  assert.match(environment, /function Plant/);
  assert.match(camera, /getPointAt/);
  assert.match(camera, /getTangentAt/);
  assert.match(camera, /scrollProgress/);
  assert.doesNotMatch(camera, /KeyW|KeyA|KeyS|KeyD|ArrowUp|ArrowDown|setMovement/);
  assert.doesNotMatch(mobile, /<button|onPointer|onTouch|setMovement/);
  assert.match(bottom, /Role para caminhar/);
  assert.match(bottom, /Deslize para caminhar/);
});
