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

test('mobile keeps a minimal progress HUD without duplicating contextual hotspot actions', () => {
  assert.equal(existsSync(mobileHudPath), true, 'MobileJourneyHud.tsx should exist');
  const mobileHud = read('components/hud/MobileJourneyHud.tsx');
  assert.match(mobileHud, /sm:hidden/);
  assert.match(mobileHud, /safe-area-inset-bottom/);
  assert.match(mobileHud, /Deslize para caminhar/);
  assert.doesNotMatch(mobileHud, /getActiveHotspot|hotspot_opened|openPanel\(hotspot\.panel\)/);
  assert.doesNotMatch(mobileHud, /joystick|setMovement|\bArrowUp\b|\bArrowDown\b|WASD/i);
  assert.match(shell, /<MobileJourneyHud \/>/);
});

test('mobile and desktop share spatial hotspots anchored to scene objects', () => {
  assert.equal(existsSync(hotspotJourneyPath), true, 'hotspotJourney.ts should exist');
  const helper = read('lib/hotspotJourney.ts');
  assert.match(helper, /HOTSPOT_WINDOWS/);
  assert.match(helper, /export function getActiveHotspot/);
  assert.match(sceneHotspots, /getActiveHotspot/);
  assert.match(sceneHotspots, /useThree/);
  assert.match(sceneHotspots, /isMobile/);
  assert.match(sceneHotspots, /mobile_spatial_hotspot/);
  assert.doesNotMatch(sceneHotspots, /group hidden[^\n]*sm:flex/);
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

test('mobile header exposes compact sound and menu parity without exposing desktop booking chrome', () => {
  assert.match(header, /safe-area-inset-top/);
  assert.match(header, /grid h-10 w-10/);
  assert.match(header, /Ativar ambiente \+ jazz/);
  assert.match(header, /bottom-\[max\(1rem,env\(safe-area-inset-bottom\)\)\]/);
  assert.match(header, /sm:hidden/);
  assert.match(header, /hidden min-h-11[\s\S]*sm:inline-flex/);
  assert.match(bottom, /hidden[^\n]*sm:block/);
});

test('mobile canvas retains native vertical scrolling and adaptive DPR', () => {
  assert.match(canvas, /touchAction: "pan-y"/);
  assert.match(canvas, /AdaptiveDpr/);
  assert.doesNotMatch(canvas, /touchAction: "none"/);
});
