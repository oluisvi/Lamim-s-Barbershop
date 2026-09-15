/**
 * Lamim's V2 visual tokens.
 *
 * UI tokens live as CSS custom properties in app/globals.css. These values are
 * the spatial/WebGL counterpart so Three.js materials do not scatter literal
 * brand colors across scene components.
 */
export const SPATIAL_COLORS = {
  canvas: "#F4F0EA",
  wall: "#F4F0EA",
  wallSecondary: "#ECE6DD",
  ceiling: "#F7F4EF",
  floor: "#B8B4AE",
  floorJoint: "#92918D",
  graphite: "#1C1C1C",
  softBlack: "#111111",
  chairUpholstery: "#111111",
  chairSecondary: "#252629",
  trolley: "#18191B",
  chrome: "#A9B0B7",
  chromeHighlight: "#D8DDE2",
  steel: "#7F8790",
  woodTrim: "#9E7758",
  warmLight: "#E8C9A2",
  warmLightBright: "#FFF1DC",
  keyLight: "#FFF8EC",
  coolFill: "#DFE7E5",
  botanical: "#70806D",
  botanicalDark: "#4F6250",
  glass: "#DDE5E3",
} as const;

export const SPATIAL_MATERIALS = {
  wall: { roughness: 0.9, metalness: 0 },
  floor: { roughness: 0.78, metalness: 0.01 },
  upholstery: { roughness: 0.52, metalness: 0.02 },
  chrome: { roughness: 0.16, metalness: 0.92 },
  blackMetal: { roughness: 0.3, metalness: 0.62 },
  wood: { roughness: 0.62, metalness: 0.01 },
} as const;
