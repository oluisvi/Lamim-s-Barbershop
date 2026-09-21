export type ScreenPoint = [number, number];

function clamp(value: number, min: number, max: number) {
  if (min > max) return (min + max) / 2;
  return Math.min(Math.max(value, min), max);
}

/**
 * Keeps mobile spatial hotspot chips inside a touch-safe viewport region.
 *
 * The 3D anchor remains the source position, but the resulting screen-space
 * label is constrained away from the viewport edges, top chrome and bottom
 * journey HUD. This avoids a valid 3D hotspot becoming unreachable on narrow
 * portrait screens or short landscape viewports.
 */
export function clampHotspotScreenPosition(
  x: number,
  y: number,
  viewportWidth: number,
  viewportHeight: number,
): ScreenPoint {
  const width = Math.max(viewportWidth, 1);
  const height = Math.max(viewportHeight, 1);

  // Mirrors the mobile chip cap (roughly 60vw / 12rem) so the centered Html
  // label cannot overflow horizontally even when the anchor is off-screen.
  const chipHalfWidth = Math.min(width * 0.3, 96);
  const chipHalfHeight = 24;
  const sidePadding = 12;

  // Reserve real interaction zones instead of just clamping to 0..viewport.
  // Top space protects brand/sound/menu chrome; bottom space protects the
  // progress HUD + browser/safe-area region.
  const topClearance = Math.min(108, Math.max(72, height * 0.1));
  const bottomClearance = Math.min(132, Math.max(88, height * 0.14));

  const minX = sidePadding + chipHalfWidth;
  const maxX = width - sidePadding - chipHalfWidth;
  const minY = topClearance + chipHalfHeight;
  const maxY = height - bottomClearance - chipHalfHeight;

  return [
    clamp(x, Math.min(minX, width / 2), Math.max(maxX, width / 2)),
    clamp(y, Math.min(minY, height / 2), Math.max(maxY, height / 2)),
  ];
}
