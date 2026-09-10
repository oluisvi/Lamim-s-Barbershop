export type Vec3Tuple = [number, number, number];

// APPROX_SPATIAL_LAYOUT — recalibrate these points against the real Lamim's model later.
// The tour follows one continuous forward path. Camera orientation is derived from the
// path tangent so scrolling down always feels like moving forward through the shop.
export const SCROLL_CAMERA_POINTS: Vec3Tuple[] = [
  [0, 1.7, 9.2],
  [0.55, 1.69, 7.55],
  [2.55, 1.68, 6.6],
  [4.15, 1.67, 4.75],
  [4.1, 1.66, 2.55],
  [3.25, 1.65, 0.55],
  [1.0, 1.65, -0.05],
  [-1.65, 1.65, 0.1],
  [-3.95, 1.66, 1.35],
  [-4.55, 1.67, 3.75],
  [-2.55, 1.67, 4.9],
  [-0.65, 1.66, 3.35],
  [0, 1.65, 1.05],
];

// Dedicated cinematic approach. The final point is exactly the first tour point,
// avoiding a visible snap when the intro hands control to scroll.
export const INTRO_CAMERA_POINTS: Vec3Tuple[] = [
  [0, 1.78, 13.35],
  [0, 1.76, 12.15],
  [0.06, 1.73, 10.75],
  [0.18, 1.71, 9.85],
  SCROLL_CAMERA_POINTS[0],
];

// Local-space look offsets. Forward direction always comes from the tangent;
// these values only create gentle editorial glances toward details in the room.
export const SCROLL_LOOK_SIDE_OFFSETS = [
  0,
  0.15,
  0.72,
  0.82,
  0.5,
  0.24,
  0,
  -0.18,
  -0.62,
  -0.48,
  -0.18,
  0.08,
  0,
] as const;

export const SCROLL_LOOK_HEIGHT_OFFSETS = [
  -0.04,
  -0.02,
  0.03,
  0.02,
  -0.02,
  -0.04,
  -0.05,
  0.02,
  0.1,
  0.08,
  0.02,
  -0.03,
  -0.12,
] as const;
