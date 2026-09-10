import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const rig = readFileSync(new URL("../components/three/CameraRig.tsx", import.meta.url), "utf8");
const path = readFileSync(new URL("../data/scroll-path.ts", import.meta.url), "utf8");

test("camera uses camera-style lookAt orientation instead of Object3D +Z orientation", () => {
  assert.match(rig, /new THREE\.Matrix4\(\)/);
  assert.match(rig, /lookMatrix\.lookAt\(targetPosition, lookTarget, UP\)/);
  assert.match(rig, /targetQuaternion\.setFromRotationMatrix\(lookMatrix\)/);
  assert.doesNotMatch(rig, /new THREE\.Object3D\(\)/);
});

test("initial path heads from the storefront toward the salon interior", () => {
  assert.match(path, /\[0, 1\.7, 9\.2\],[\s\S]*\[0\.55, 1\.69, 7\.55\]/);
});
