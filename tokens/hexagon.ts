// The hexagon: the one shape every Leslie Samuel app and product uses.
// Source of truth: github.com/iamlesliesamuel/brand (tokens/hexagon.ts). Copy it into an app unchanged.
//
// Pointy-top, 8:9, drawn in a 32 x 36 box with a 1-unit margin so a 2px outline never clips.
// Corners are rounded at a radius of 2.4 units (7.5% of the width), matching the habit tracker's
// soft hexagon. Because the rounding lives in the path, outlines, fills and dashed outlines all
// get the same corners, and the shape keeps its proportions at every size (12px bullet to 56px button).

export const HEX_VIEWBOX = '0 0 32 36'
export const HEX_ASPECT = 36 / 32 // height = width * HEX_ASPECT

export const HEX_PATH =
  'M17.18 1.67 L29.78 8.81 A2.4 2.4 0 0 1 31 10.9 L31 25.1 A2.4 2.4 0 0 1 29.78 27.19 L17.18 34.33 A2.4 2.4 0 0 1 14.82 34.33 L2.22 27.19 A2.4 2.4 0 0 1 1 25.1 L1 10.9 A2.4 2.4 0 0 1 2.22 8.81 L14.82 1.67 A2.4 2.4 0 0 1 17.18 1.67 Z'

// The check inside a done hexagon: 3px at 32 wide, round caps and joins, drawn in bg.
export const HEX_CHECK_PATH = 'M10 18.5l4 4 8-9'
export const HEX_CHECK_STROKE = 2.6

// The plus inside the main action hexagon: about a third of the width, thin, round ends,
// drawn in on-highlight (or the product's on-action color). Rotates 45 degrees into an X while its sheet is open.
export const HEX_PLUS_PATH = 'M16 12.25v11.5M10.25 18h11.5'
export const HEX_PLUS_STROKE = 1.9

// Outlines (not yet, current) are 2px on screen at every size: set vector-effect="non-scaling-stroke"
// on the path, or scale the stroke width by 32 / rendered width.
