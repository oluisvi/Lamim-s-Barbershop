import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../components/three/SceneHotspots.tsx', import.meta.url), 'utf8');
const journey = readFileSync(new URL('../lib/hotspotJourney.ts', import.meta.url), 'utf8');

test('spatial action hotspots use forward progress windows instead of late scene labels', () => {
  assert.match(source, /getActiveHotspot/);
  assert.match(journey, /HOTSPOT_WINDOWS/);
  assert.doesNotMatch(source, /getJourneyScene/);
  assert.match(journey, /location[\s\S]*?from:\s*0(?:\.0+)?[\s\S]*?to:\s*0\.0[67]/);
  assert.match(journey, /reviews[\s\S]*?from:\s*0\.0?8[\s\S]*?to:\s*0\.2[23]/);
  assert.match(journey, /gallery[\s\S]*?from:\s*0\.2[78][\s\S]*?to:\s*0\.3[89]/);
  assert.match(journey, /team[\s\S]*?from:\s*0\.3[89][\s\S]*?to:\s*0\.4[89]/);
  assert.match(journey, /services[\s\S]*?from:\s*0\.5(?:[0-2])?[\s\S]*?to:\s*0\.6[01]/);
  assert.match(journey, /story[\s\S]*?from:\s*0\.6[0-2][\s\S]*?to:\s*0\.7[45]/);
});

test('spatial action chips are available on mobile and scale with the viewport', () => {
  assert.match(source, /useThree/);
  assert.match(source, /isMobile/);
  assert.match(source, /distanceFactor=\{isMobile \? 5\.15 : 6\.5\}/);
  assert.match(source, /pointer-events-auto flex/);
  assert.match(source, /mobile_spatial_hotspot/);
  assert.doesNotMatch(source, /group hidden[^\n]*sm:flex/);
});
