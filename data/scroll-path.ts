export type Vec3Tuple = [number, number, number];

// APPROX_SPATIAL_LAYOUT — recalibrate these points against the real Lamim's model later.
// Camera and focus use separate curves so turns can feel authored instead of game-like.
export const SCROLL_CAMERA_POINTS: Vec3Tuple[] = [
  [0, 1.65, 9.15],
  [3.15, 1.65, 8.65],
  [4.65, 1.65, 6.2],
  [4.05, 1.65, 3.25],
  [3.3, 1.65, 0.35],
  [0.65, 1.65, 0.15],
  [-3.2, 1.65, 0.65],
  [-4.9, 1.65, 3.55],
  [-2.5, 1.65, 4.75],
  [0, 1.65, 2.35],
  [0, 1.65, 0.7],
];

export const SCROLL_FOCUS_POINTS: Vec3Tuple[] = [
  [0, 1.48, 5.9],
  [0, 1.4, 7.25],
  [5.05, 1.45, 4.55],
  [3.8, 1.5, -1.65],
  [3.8, 1.5, -1.8],
  [0, 1.5, -2.0],
  [-3.8, 1.5, -1.7],
  [-5.2, 1.72, 4.0],
  [-2.6, 1.5, 3.0],
  [0, 1.45, -1.55],
  [0, 1.4, -2.15],
];
