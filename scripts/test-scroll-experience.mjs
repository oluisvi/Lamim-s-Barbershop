import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());

async function source(path) {
  return readFile(resolve(root, path), 'utf8');
}

test('scroll journey helpers clamp and smooth normalized progress', async () => {
  const journey = await import('../lib/scrollJourney.ts');
  assert.equal(journey.clampScrollProgress(-0.25), 0);
  assert.equal(journey.clampScrollProgress(0.42), 0.42);
  assert.equal(journey.clampScrollProgress(1.4), 1);
  assert.equal(journey.getJourneyScene(0.01).id, 'entrance');
  assert.equal(journey.getJourneyScene(0.99).id, 'chair');
});

test('experience uses scroll navigation instead of keyboard or mobile joystick controls', async () => {
  const [camera, shell, hud] = await Promise.all([
    source('components/three/CameraRig.tsx'),
    source('components/experience/ExperienceShell.tsx'),
    source('components/hud/BottomHud.tsx'),
  ]);

  assert.doesNotMatch(camera, /KeyW|KeyA|KeyS|KeyD|ArrowUp|ArrowDown|ArrowLeft|ArrowRight/);
  assert.doesNotMatch(shell, /MobileControls/);
  assert.doesNotMatch(hud, /WASD|Fazer o tour|Sair do tour/);
  assert.match(shell, /setScrollProgress/);
  assert.match(camera, /scrollProgress/);
});


test('scroll journey keeps contextual UI clean and mobile-first', async () => {
  const [hotspots, readme] = await Promise.all([
    source('components/three/SceneHotspots.tsx'),
    source('README.md'),
  ]);

  assert.match(hotspots, /getJourneyScene/);
  assert.match(hotspots, /scrollProgress/);
  assert.doesNotMatch(readme, /WASD|direcional virtual|arrastar a cena|ESC/);
  assert.match(readme, /Swipe vertical no mobile|Scroll do mouse/);
});


test('end conversion waits for the camera to reach the final chair', async () => {
  const [camera, shell] = await Promise.all([
    source('components/three/CameraRig.tsx'),
    source('components/experience/ExperienceShell.tsx'),
  ]);
  assert.match(camera, /smoothedProgress\.current >= 0\.988/);
  assert.match(camera, /completeTour/);
  assert.doesNotMatch(shell, /progress >= 0\.985/);
});
