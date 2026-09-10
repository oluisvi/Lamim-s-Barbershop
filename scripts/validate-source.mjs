import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/info/page.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "components/experience/ExperienceShell.tsx",
  "components/experience/NoWebGLFallback.tsx",
  "components/three/SceneCanvas.tsx",
  "components/three/CameraRig.tsx",
  "components/three/BarbershopEnvironment.tsx",
  "components/three/SceneHotspots.tsx",
  "components/hud/HeaderHud.tsx",
  "components/hud/EntryGate.tsx",
  "components/hud/BottomHud.tsx",
  "components/hud/InfoDrawer.tsx",
  "components/hud/TourResolution.tsx",
  "hooks/useExperienceStore.ts",
  "lib/constants.ts",
  "lib/analytics.ts",
  "lib/webgl.ts",
  "lib/scrollJourney.ts",
  "data/scroll-path.ts",
  "data/business.ts",
  "data/services.ts",
  "data/team.ts",
  "data/reviews.ts",
  "data/hotspots.ts",
  "docs/BARBEARIA_LAMIMS_HYPER_MASTER_v4_MVP.md",
  "README.md",
  ".env.example",
  "tsconfig.json",
  "package.json"
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error("Missing required files:\n" + missing.join("\n"));
  process.exit(1);
}

const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files.push(full);
  }
};
walk(root);

const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /(?:API_KEY|PRIVATE_KEY|JWT_SECRET|DATABASE_URL)\s*=\s*[^\s<>{}]+/i
];
const suspicious = [];
for (const file of files) {
  if (!/\.(?:ts|tsx|js|mjs|json|md|env|example)$/.test(file)) continue;
  const content = fs.readFileSync(file, "utf8");
  if (secretPatterns.some((pattern) => pattern.test(content))) suspicious.push(path.relative(root, file));
}
if (suspicious.length) {
  console.error("Potential secrets detected:\n" + suspicious.join("\n"));
  process.exit(1);
}

const sourceFiles = files.filter((file) => /\.(?:ts|tsx|js|mjs)$/.test(file));
const unresolved = [];
const importPattern = /(?:from\s+|import\s*\(\s*)["'](@\/[^"']+)["']/g;
const candidatesFor = (specifier) => {
  const relative = specifier.slice(2);
  const base = path.join(root, relative);
  return [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.mjs`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
    path.join(base, "index.js"),
    path.join(base, "index.mjs")
  ];
};
for (const file of sourceFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(importPattern)) {
    const specifier = match[1];
    if (!candidatesFor(specifier).some((candidate) => fs.existsSync(candidate))) {
      unresolved.push(`${path.relative(root, file)} -> ${specifier}`);
    }
  }
}
if (unresolved.length) {
  console.error("Unresolved @/ imports:\n" + unresolved.join("\n"));
  process.exit(1);
}

console.log(`Source validation OK — ${files.length} files checked; all required files and @/ imports resolved.`);
