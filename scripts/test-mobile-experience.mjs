import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

const shell = read('components/experience/ExperienceShell.tsx');
const camera = read('components/three/CameraRig.tsx');
const canvas = read('components/three/SceneCanvas.tsx');
const drawer = read('components/hud/InfoDrawer.tsx');
const header = read('components/hud/HeaderHud.tsx');
const bottom = read('components/hud/BottomHud.tsx');
const sceneHotspots = read('components/three/SceneHotspots.tsx');

const mobileHudPath = new URL('components/hud/MobileJourneyHud.tsx', root);
const hotspotJourneyPath = new URL('lib/hotspotJourney.ts', root);

test('mobile gets its own contextual journey HUD without movement controls', () => {
  assert.equal(existsSync(mobileHudPath), true, 'MobileJourneyHud.tsx should exist');
  const mobileHud = read('components/hud/MobileJourneyHud.tsx');
  assert.match(mobileHud, /sm:hidden/);
  assert.match(mobileHud, /getActiveHotspot/);
  assert.match(mobileHud, /openPanel\(hotspot\.panel\)/);
  assert.doesNotMatch(mobileHud, /joystick|setMovement|\bArrowUp\b|\bArrowDown\b|WASD/i);
  assert.match(shell, /<MobileJourneyHud \/>/);
});

test('desktop spatial hotspots and mobile contextual actions share one journey source', () => {
  assert.equal(existsSync(hotspotJourneyPath), true, 'hotspotJourney.ts should exist');
  const helper = read('lib/hotspotJourney.ts');
  assert.match(helper, /HOTSPOT_WINDOWS/);
  assert.match(helper, /export function getActiveHotspot/);
  assert.match(sceneHotspots, /getActiveHotspot/);
});

test('mobile camera framing keeps editorial glances tighter in portrait', () => {
  assert.match(camera, /isMobile/);
  assert.match(camera, /isPortrait/);
  assert.match(camera, /sideScale/);
  assert.match(camera, /lookDistance/);
  assert.match(camera, /73/);
});

test('mobile strong devices can use balanced quality instead of being forced to low', () => {
  assert.match(shell, /mobileCapable/);
  assert.match(shell, /coarsePointer && mobileCapable/);
  assert.doesNotMatch(shell, /else if \(coarsePointer \|\| cores <= 4/);
});

test('mobile information panels are bottom sheets with safe-area padding', () => {
  assert.match(drawer, /items-end/);
  assert.match(drawer, /rounded-t-\[28px\]/);
  assert.match(drawer, /max-h-\[84dvh\]/);
  assert.match(drawer, /safe-area-inset-bottom/);
  assert.match(drawer, /sm:.*justify-end|sm:justify-end/);
});

test('mobile header and HUD reserve safe areas and desktop controls stay hidden below sm', () => {
  assert.match(header, /safe-area-inset-top/);
  assert.match(header, /hidden[^\n]*sm:grid/);
  assert.match(bottom, /hidden[^\n]*sm:block/);
});

test('mobile canvas retains native vertical scrolling and adaptive DPR', () => {
  assert.match(canvas, /touchAction: "pan-y"/);
  assert.match(canvas, /AdaptiveDpr/);
  assert.doesNotMatch(canvas, /touchAction: "none"/);
});
