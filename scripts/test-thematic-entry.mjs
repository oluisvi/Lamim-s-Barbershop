import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());

async function source(path) {
  try {
    return await readFile(resolve(root, path), "utf8");
  } catch {
    return "";
  }
}

test("the mirror threshold appears once per browser session and always releases itself", async () => {
  const [entry, shell] = await Promise.all([
    source("components/experience/ThematicEntry.tsx"),
    source("components/experience/ExperienceShell.tsx"),
  ]);

  assert.match(entry, /sessionStorage\.getItem\(SESSION_KEY\)/);
  assert.match(entry, /sessionStorage\.setItem\(SESSION_KEY, "1"\)/);
  assert.match(entry, /window\.setTimeout\([\s\S]*SAFE_EXIT_MS/);
  assert.match(entry, /aria-hidden="true"/);
  assert.match(entry, /pointer-events-none/);
  assert.match(shell, /<ThematicEntry\s+ready/);
});

test("the threshold has a reduced-motion exit and a mobile-specific opening axis", async () => {
  const [entry, css] = await Promise.all([
    source("components/experience/ThematicEntry.tsx"),
    source("app/globals.css"),
  ]);

  assert.match(entry, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.thematic-entry\s*\{[\s\S]*?background:\s*transparent;/);
  assert.match(css, /@media \(max-width: 639px\)[\s\S]*thematic-entry__panel--top/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*thematic-entry/);
});

test("the mirror waits for warmed 3D frames before opening and has a loading escape hatch", async () => {
  const [entry, shell, canvas, css] = await Promise.all([
    source("components/experience/ThematicEntry.tsx"),
    source("components/experience/ExperienceShell.tsx"),
    source("components/three/SceneCanvas.tsx"),
    source("app/globals.css"),
  ]);

  assert.match(entry, /ready:\s*boolean/);
  assert.match(entry, /MAX_WAIT_MS/);
  assert.match(entry, /thematic-entry--\$\{phase\}/);
  assert.match(entry, /Preparando a entrada/);
  assert.match(shell, /<SceneCanvas\s+onReady=/);
  assert.match(shell, /<ThematicEntry\s+ready=/);
  assert.match(canvas, /function SceneReady/);
  assert.match(canvas, /gl\.compile\(scene, camera\)/);
  assert.match(canvas, /<SceneReady\s+onReady=/);
  assert.match(css, /\.thematic-entry--opening[\s\S]*thematic-entry-open-left/);
});
