import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

test('header keeps initial booking usable while hiding experience controls until entry', async () => {
  const [header, entry] = await Promise.all([
    source('components/hud/HeaderHud.tsx'),
    source('components/hud/EntryGate.tsx'),
  ]);

  assert.match(header, /experienceActive = mode !== "idle"/);
  assert.match(header, /<header className="pointer-events-none fixed[^"]*z-\[70\]/);
  assert.match(header, /className="fixed inset-0 z-\[60\]/);
  assert.match(header, /hidden[^\n]*sm:grid/);
  assert.match(entry, /z-40/);
});

test('mobile exploration contains no persistent action or movement buttons', async () => {
  const [header, bottom, shell] = await Promise.all([
    source('components/hud/HeaderHud.tsx'),
    source('components/hud/BottomHud.tsx'),
    source('components/experience/ExperienceShell.tsx'),
  ]);

  assert.doesNotMatch(bottom, /business\.fresha|Compass|Agendar/);
  const hotspots = await source('components/three/SceneHotspots.tsx');
  assert.doesNotMatch(shell, /MobileControls/);
  assert.match(header, /hidden[^\n]*sm:grid/);
  assert.match(hotspots, /hidden[^\n]*sm:flex/);
  assert.match(header, /hidden min-h-11[\s\S]*sm:inline-flex/);
});

test('environment uses a brighter material palette and richer physical set dressing', async () => {
  const environment = await source('components/three/BarbershopEnvironment.tsx');

  assert.match(environment, /ProductShelf/);
  assert.match(environment, /ToolTrolley/);
  assert.match(environment, /Plant/);
  assert.match(environment, /SideTable/);
  assert.match(environment, /EntryGlass/);
  assert.match(environment, /FramedPhoto/);
  assert.match(environment, /#c8b79f|#b8a68e|#a99175/i);
  assert.match(environment, /#8a4f2d|#8b5738|#7a452c/i);
});


test('information surfaces use high-contrast warm light panels instead of all-black chrome', async () => {
  const [drawer, resolution, fallback] = await Promise.all([
    source('components/hud/InfoDrawer.tsx'),
    source('components/hud/TourResolution.tsx'),
    source('components/experience/NoWebGLFallback.tsx'),
  ]);

  assert.match(drawer, /bg-\[#f1e7d7\]/i);
  assert.match(drawer, /text-\[#2a211a\]/i);
  assert.match(resolution, /bg-\[#f1e7d7\]/i);
  assert.match(fallback, /bg-\[#efe4d3\]/i);
});

test('scroll remains the only spatial navigation model on every breakpoint', async () => {
  const [camera, shell] = await Promise.all([
    source('components/three/CameraRig.tsx'),
    source('components/experience/ExperienceShell.tsx'),
  ]);

  assert.doesNotMatch(camera, /KeyW|KeyA|KeyS|KeyD|ArrowUp|ArrowDown|ArrowLeft|ArrowRight/);
  assert.match(camera, /scrollProgress/);
  assert.match(shell, /window\.addEventListener\("scroll"/);
  assert.match(shell, /h-\[540vh\]/);
  assert.match(shell, /sm:h-\[600vh\]/);
  assert.match(shell, /lg:h-\[680vh\]/);
});
