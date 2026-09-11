import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../components/three/SceneHotspots.tsx', import.meta.url), 'utf8');

test('spatial action hotspots use forward progress windows instead of late scene labels', () => {
  assert.match(source, /HOTSPOT_WINDOWS/);
  assert.doesNotMatch(source, /getJourneyScene/);
  assert.match(source, /location[\s\S]*?from:\s*0(?:\.0+)?[\s\S]*?to:\s*0\.0[67]/);
  assert.match(source, /reviews[\s\S]*?from:\s*0\.0?8[\s\S]*?to:\s*0\.2[23]/);
  assert.match(source, /gallery[\s\S]*?from:\s*0\.2[78][\s\S]*?to:\s*0\.3[89]/);
  assert.match(source, /team[\s\S]*?from:\s*0\.3[89][\s\S]*?to:\s*0\.4[89]/);
  assert.match(source, /services[\s\S]*?from:\s*0\.5(?:[0-2])?[\s\S]*?to:\s*0\.6[01]/);
  assert.match(source, /story[\s\S]*?from:\s*0\.6[0-2][\s\S]*?to:\s*0\.7[45]/);
});

test('action chips stay off mobile while tablet/desktop retain contextual actions', () => {
  assert.match(source, /className="group hidden[^"]*sm:flex/);
  assert.match(source, /pointer-events-auto/);
});
