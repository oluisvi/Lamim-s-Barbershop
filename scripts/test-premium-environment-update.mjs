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
  assert.match(header, /<header className="pointer-events-none fixed[^\"]*z-\[70\]/);
  assert.match(header, /className="fixed inset-0 z-\[60\]/);
  assert.match(header, /hidden[^\n]*sm:grid/);
  assert.match(entry, /z-40/);
});

test('mobile exploration contains no persistent movement controls and keeps utility chrome restrained', async () => {
  const [header, bottom, shell] = await Promise.all([
    source('components/hud/HeaderHud.tsx'),
    source('components/hud/BottomHud.tsx'),
    source('components/experience/ExperienceShell.tsx'),
  ]);

  assert.doesNotMatch(bottom, /business\.fresha|Compass|Agendar|WASD|joystick|setMovement/i);
  const hotspots = await source('components/three/SceneHotspots.tsx');
  assert.doesNotMatch(shell, /<MobileControls/);
  assert.match(header, /hidden[^\n]*sm:grid/);
  assert.match(hotspots, /hidden[^\n]*sm:flex/);
  assert.match(header, /hidden min-h-11[\s\S]*sm:inline-flex/);
});

test('environment matches the real-space clean palette and material language', async () => {
  const [environment, tokens] = await Promise.all([
    source('components/three/BarbershopEnvironment.tsx'),
    source('lib/design-tokens.ts'),
  ]);

  assert.match(environment, /WallMirror/);
  assert.match(environment, /ToolTrolley/);
  assert.match(environment, /Cactus/);
  assert.match(environment, /EntryGlass/);
  assert.match(environment, /CeilingLightStrip/);
  assert.match(environment, /SPATIAL_COLORS\.chairUpholstery/);
  assert.match(environment, /SPATIAL_COLORS\.chrome/);
  assert.match(tokens, /wall:\s*"#F4F0EA"/i);
  assert.match(tokens, /floor:\s*"#B8B4AE"/i);
  assert.match(tokens, /chairUpholstery:\s*"#111111"/i);
});

test('information surfaces use semantic light surfaces instead of dark-only chrome', async () => {
  const [drawer, resolution, fallback, globals] = await Promise.all([
    source('components/hud/InfoDrawer.tsx'),
    source('components/hud/TourResolution.tsx'),
    source('components/experience/NoWebGLFallback.tsx'),
    source('app/globals.css'),
  ]);

  assert.match(drawer, /bg-\[var\(--color-surface-floating\)\]/i);
  assert.match(drawer, /text-\[var\(--color-text-primary\)\]/i);
  assert.match(resolution, /bg-\[var\(--color-surface-floating\)\]/i);
  assert.match(fallback, /bg-\[var\(--color-bg-canvas\)\]/i);
  assert.match(globals, /color-scheme:\s*light/i);
});

test('scroll remains the spatial navigation timeline on every breakpoint', async () => {
  const shell = await source('components/experience/ExperienceShell.tsx');

  assert.doesNotMatch(shell, /<MobileControls/);
  assert.match(shell, /window\.addEventListener\("scroll"/);
  assert.match(shell, /h-\[500vh\]/);
  assert.match(shell, /sm:h-\[600vh\]/);
  assert.match(shell, /lg:h-\[680vh\]/);
});
