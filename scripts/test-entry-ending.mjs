import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

test('entry is a UI-only handoff and keeps the camera on the first interior tour frame', async () => {
  const [entry, camera, canvas, path] = await Promise.all([
    source('components/hud/EntryGate.tsx'),
    source('components/three/CameraRig.tsx'),
    source('components/three/SceneCanvas.tsx'),
    source('data/scroll-path.ts'),
  ]);

  assert.match(entry, /mode !== "idle" && mode !== "intro"/);
  assert.match(entry, /entry-gate--leaving/);
  assert.doesNotMatch(camera, /introCurve|INTRO_CAMERA_POINTS/);
  assert.match(camera, /frameCameraAt\(0\)/);
  assert.match(camera, /mode === "intro"/);
  assert.match(canvas, /position: \[0, 1\.7, 9\.2\]/);
  assert.doesNotMatch(path, /INTRO_CAMERA_POINTS/);
});

test('tour completion never locks document scroll or replaces the 3D scene with a blocking fullscreen layer', async () => {
  const [shell, resolution] = await Promise.all([
    source('components/experience/ExperienceShell.tsx'),
    source('components/hud/TourResolution.tsx'),
  ]);

  assert.doesNotMatch(shell, /\|\| tourCompleted/);
  assert.match(shell, /scrollProgress < 0\.96/);
  assert.match(resolution, /pointer-events-none fixed/);
  assert.doesNotMatch(resolution, /absolute inset-0/);
  assert.match(resolution, /Rever percurso/);
  assert.match(resolution, /Ver serviços/);
});

test('old physical-door cinematic overlay is removed from the experience shell', async () => {
  const [shell, css] = await Promise.all([
    source('components/experience/ExperienceShell.tsx'),
    source('app/globals.css'),
  ]);
  assert.doesNotMatch(shell, /cinematic-entry/);
  assert.doesNotMatch(shell, /Entrando na Lamim/);
  assert.match(css, /entry-gate--leaving/);
});
