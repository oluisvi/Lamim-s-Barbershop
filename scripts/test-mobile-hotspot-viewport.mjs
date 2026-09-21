import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../components/three/SceneHotspots.tsx', import.meta.url), 'utf8');

test('mobile spatial hotspots use responsive screen-space clamping', () => {
  assert.match(source, /calculatePosition=\{isMobile/);
  assert.match(source, /clampHotspotScreenPosition/);
  assert.match(source, /project\(camera\)/);
});

test('hotspot clamp keeps chips inside representative mobile viewports', async () => {
  const { clampHotspotScreenPosition } = await import('../lib/hotspotScreenPosition.ts');
  const viewports = [
    [320, 568],
    [360, 640],
    [390, 844],
    [430, 932],
    [844, 390],
  ];

  for (const [width, height] of viewports) {
    const points = [
      clampHotspotScreenPosition(-500, -500, width, height),
      clampHotspotScreenPosition(width + 500, height + 500, width, height),
      clampHotspotScreenPosition(width / 2, height / 2, width, height),
    ];

    for (const [x, y] of points) {
      assert.ok(x > 12 && x < width - 12, `x=${x} should be touch-safe inside ${width}px`);
      assert.ok(y >= 72 && y <= height - 72, `y=${y} should avoid mobile chrome in ${height}px`);
    }
  }
});
