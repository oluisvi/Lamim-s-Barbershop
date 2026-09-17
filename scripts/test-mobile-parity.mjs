import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

test('mobile exposes compact sound and menu controls while desktop booking stays desktop-sized', async () => {
  const header = await source('components/hud/HeaderHud.tsx');
  assert.match(header, /Ativar ambiente \+ jazz|Desativar ambiente \+ jazz/);
  assert.match(header, /grid h-10 w-10[\s\S]*sm:h-11 sm:w-11/);
  assert.match(header, /bottom-\[max\(1rem,env\(safe-area-inset-bottom\)\)\]/);
  assert.match(header, /sm:right-6 sm:top-24/);
  assert.match(header, /Agendar horário[\s\S]*sm:hidden|sm:hidden[\s\S]*Agendar horário/);
  assert.match(header, /hidden min-h-11[\s\S]*sm:inline-flex/);
});

test('mobile sound start happens directly from the user gesture for iOS compatibility', async () => {
  const header = await source('components/hud/HeaderHud.tsx');
  assert.match(header, /startBarbershopSoundscape/);
  assert.match(header, /stopBarbershopSoundscape/);
  assert.match(header, /await startBarbershopSoundscape\(\)/);
});

test('soundscape layers original procedural jazz over barbershop ambience', async () => {
  const soundscape = await source('lib/barbershopSoundscape.ts');
  assert.match(soundscape, /scheduleJazzBar/);
  assert.match(soundscape, /playRhodesChord/);
  assert.match(soundscape, /playWalkingBass/);
  assert.match(soundscape, /playBrushHit/);
  assert.match(soundscape, /JAZZ_BPM/);
  assert.match(soundscape, /startBarbershopSoundscape/);
  assert.match(soundscape, /createBarbershopSoundscape/);
});

test('mobile contextual information is spatial while bottom HUD stays minimal', async () => {
  const [mobileHud, spatial] = await Promise.all([
    source('components/hud/MobileJourneyHud.tsx'),
    source('components/three/SceneHotspots.tsx'),
  ]);
  assert.match(mobileHud, /safe-area-inset-bottom/);
  assert.match(mobileHud, /max-w-\[32rem\]/);
  assert.doesNotMatch(mobileHud, /getActiveHotspot|openPanel\(hotspot\.panel\)/);
  assert.match(spatial, /mobile_spatial_hotspot/);
  assert.match(spatial, /max-w-\[min\(60vw,12rem\)\]/);
});

test('small mobile layouts keep final actions single-column before 380px', async () => {
  const [resolution, drawer] = await Promise.all([
    source('components/hud/TourResolution.tsx'),
    source('components/hud/InfoDrawer.tsx'),
  ]);
  assert.match(resolution, /grid-cols-1/);
  assert.match(resolution, /min-\[380px\]:grid-cols-2/);
  assert.match(drawer, /max-h-\[84dvh\]/);
});
