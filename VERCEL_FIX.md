# Vercel typecheck fix

This patch fixes the failed Vercel build on commit 392b680.

## Cause
`components/hud/MobileControls.tsx` was left behind from the old joystick/free-movement implementation.
The new scroll-driven store no longer exposes `setMovement`, so TypeScript failed even though the component is no longer used.

## Apply
Upload the contents of this patch to the repository root and allow GitHub to replace existing files.

The replacement `MobileControls.tsx` is intentionally a no-op. It renders no buttons and keeps scroll as the only spatial navigation model.

`*.tsbuildinfo` is also ignored going forward.
