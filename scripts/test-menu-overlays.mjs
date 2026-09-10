import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const shell = readFileSync(new URL('../components/experience/ExperienceShell.tsx', import.meta.url), 'utf8');
const header = readFileSync(new URL('../components/hud/HeaderHud.tsx', import.meta.url), 'utf8');
const drawer = readFileSync(new URL('../components/hud/InfoDrawer.tsx', import.meta.url), 'utf8');

test('menu participates in experience scroll lock', () => {
  assert.match(shell, /const menuOpen = useExperienceStore\(\(s\) => s\.menuOpen\)/);
  assert.match(shell, /mode !== "explore" \|\| menuOpen \|\| activePanel !== "none" \|\| tourCompleted/);
});

test('scroll position is preserved across menu and panel overlays', () => {
  assert.match(shell, /lockedScrollY/);
  assert.match(shell, /window\.scrollTo\(\{ top: lockedScrollY\.current, behavior: "auto" \}\)/);
});

test('dropdown and drawer are viewport-fixed overlays', () => {
  assert.match(header, /<nav className="fixed /);
  assert.match(drawer, /<aside className="fixed /);
});

test('escape closes dropdown or panel without changing journey progress', () => {
  assert.match(header, /event\.key === "Escape"/);
  assert.match(drawer, /event\.key === "Escape"/);
});
