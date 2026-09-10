import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const source = (path) => readFile(resolve(root, path), 'utf8');

test('editorial information page keeps full FIX content while avoiding generic card-grid treatment', async () => {
  const info = await source('app/info/page.tsx');
  for (const content of ['Escolha o ritual', "Quem faz a Lamim", 'Referência antes da reconstrução', 'Avaliações', 'Onde a visita vira real', 'A cadeira está esperando']) {
    assert.match(info, new RegExp(content));
  }
  for (const marker of ['index="01"', 'index="02"', 'index="03"', 'index="04"', 'index="05"']) {
    assert.match(info, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.match(info, /lg:sticky lg:top-28/);
  assert.match(info, /md:grid-cols-12/);
  assert.doesNotMatch(info, /team\.map[\s\S]{0,500}rounded-\[28px\]/);
});

test('drawer follows the same editorial language for people and reviews', async () => {
  const drawer = await source('components/hud/InfoDrawer.tsx');
  assert.match(drawer, /border-y border-\[#2a211a\]\/14/);
  assert.match(drawer, /team\.map/);
  assert.match(drawer, /reviews\.map/);
  assert.doesNotMatch(drawer, /TeamPanel[\s\S]{0,900}rounded-3xl/);
});

test('reference direction documents principles without copying layouts', async () => {
  const doc = await source('docs/REFERENCE_DIRECTION.md');
  for (const name of ['Casa Aurora', 'ERA Residence', 'LPAS', 'Senawa Studio', 'Studio Foundry']) {
    assert.match(doc, new RegExp(name));
  }
  assert.match(doc, /principle sources/);
  assert.match(doc, /never as layouts to copy/);
});
