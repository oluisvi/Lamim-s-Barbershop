import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "app/page.tsx",
  "app/info/page.tsx",
  "components/experience/ExperienceShell.tsx",
  "components/three/SceneCanvas.tsx",
  "components/three/CameraRig.tsx",
  "components/three/BarbershopEnvironment.tsx",
  "data/business.ts",
  "data/services.ts",
  "data/team.ts",
  "data/reviews.ts",
  "data/hotspots.ts",
  "docs/BARBEARIA_LAMIMS_HYPER_MASTER_v4_MVP.md",
  "README.md",
  ".env.example"
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

console.log(`Source validation OK — ${files.length} files checked.`);
