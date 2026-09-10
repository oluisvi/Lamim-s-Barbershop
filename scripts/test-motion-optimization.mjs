import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

function length3(a, b) {
  return Math.hypot(a[0]-b[0], a[1]-b[1], a[2]-b[2]);
}

function dot2(a, b) {
  const al = Math.hypot(a[0], a[2]) || 1;
  const bl = Math.hypot(b[0], b[2]) || 1;
  return (a[0]*b[0] + a[2]*b[2]) / (al*bl);
}

test('camera motion is arc-length based, forward-facing, and only smooths progress once', async () => {
  const camera = await source('components/three/CameraRig.tsx');
  assert.match(camera, /getPointAt\(/);
  assert.match(camera, /getTangentAt\(/);
  assert.match(camera, /centripetal/);
  assert.match(camera, /smoothedProgress/);
  assert.doesNotMatch(camera, /focusCurve/);
  assert.doesNotMatch(camera, /camera\.position\.lerp\(/);
});

test('authored path has a cinematic exterior entry and avoids abrupt reversals', async () => {
  const { SCROLL_CAMERA_POINTS, INTRO_CAMERA_POINTS } = await import('../data/scroll-path.ts');
  assert.ok(INTRO_CAMERA_POINTS.length >= 4);
  assert.ok(INTRO_CAMERA_POINTS[0][2] > 11, 'intro should begin outside the storefront');
  assert.deepEqual(INTRO_CAMERA_POINTS.at(-1), SCROLL_CAMERA_POINTS[0]);

  for (let i = 1; i < SCROLL_CAMERA_POINTS.length; i++) {
    assert.ok(length3(SCROLL_CAMERA_POINTS[i - 1], SCROLL_CAMERA_POINTS[i]) < 4.25, `segment ${i} is too long`);
  }
  for (let i = 1; i < SCROLL_CAMERA_POINTS.length - 1; i++) {
    const incoming = [
      SCROLL_CAMERA_POINTS[i][0] - SCROLL_CAMERA_POINTS[i - 1][0], 0,
      SCROLL_CAMERA_POINTS[i][2] - SCROLL_CAMERA_POINTS[i - 1][2],
    ];
    const outgoing = [
      SCROLL_CAMERA_POINTS[i + 1][0] - SCROLL_CAMERA_POINTS[i][0], 0,
      SCROLL_CAMERA_POINTS[i + 1][2] - SCROLL_CAMERA_POINTS[i][2],
    ];
    assert.ok(dot2(incoming, outgoing) > -0.45, `turn ${i} reverses too sharply`);
  }
});

test('scroll sampling avoids layout work on every scroll event and journey height is responsive', async () => {
  const shell = await source('components/experience/ExperienceShell.tsx');
  assert.match(shell, /scrollDistanceRef/);
  assert.match(shell, /window\.scrollY/);
  assert.doesNotMatch(shell, /getBoundingClientRect\(\)/);
  assert.match(shell, /h-\[540vh\]/);
  assert.match(shell, /sm:h-\[600vh\]/);
  assert.match(shell, /lg:h-\[680vh\]/);
});

test('canvas keeps mobile GPU cost bounded while preserving adaptive quality', async () => {
  const canvas = await source('components/three/SceneCanvas.tsx');
  assert.match(canvas, /performance=\{\{/);
  assert.match(canvas, /antialias: quality === "high"/);
  assert.match(canvas, /\[1, 1\.5\]/);
  assert.doesNotMatch(canvas, /Preload all/);
  assert.doesNotMatch(canvas, /pixelated/);
});

test('intro overlay is cinematic but interaction-free and the route remains scroll-only', async () => {
  const [shell, mobile] = await Promise.all([
    source('components/experience/ExperienceShell.tsx'),
    source('components/hud/MobileControls.tsx'),
  ]);
  assert.match(shell, /cinematic-entry/);
  assert.doesNotMatch(mobile, /button|onPointer|onTouch|setMovement/);
  assert.match(mobile, /return null/);
});


test('environment scales dynamic lighting by quality tier instead of paying full point-light cost on mobile', async () => {
  const environment = await source('components/three/BarbershopEnvironment.tsx');
  assert.match(environment, /quality === "high"/);
  assert.match(environment, /quality === "balanced"/);
  assert.match(environment, /showStationAccent/);
  assert.match(environment, /shadowMapSize/);
  assert.doesNotMatch(environment, /<CeilingLights lowQuality=/);
});


test('responsive FOV changes do not reset camera position after initial mount', async () => {
  const camera = await source('components/three/CameraRig.tsx');
  assert.match(camera, /initializedRef/);
  assert.match(camera, /if \(initializedRef\.current\) return/);
});

test('camera look tracks stay aligned with authored path points', async () => {
  const path = await import('../data/scroll-path.ts');
  assert.equal(path.SCROLL_LOOK_SIDE_OFFSETS.length, path.SCROLL_CAMERA_POINTS.length);
  assert.equal(path.SCROLL_LOOK_HEIGHT_OFFSETS.length, path.SCROLL_CAMERA_POINTS.length);
});


test('cinematic intro keeps navigation chrome out of the camera handoff', async () => {
  const header = await source('components/hud/HeaderHud.tsx');
  assert.match(header, /experienceReady = mode === "explore"/);
  assert.match(header, /showBooking = mode !== "intro"/);
});
