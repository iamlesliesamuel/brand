// The browser chrome color (<meta name="theme-color">, the PWA manifest) can't
// read CSS variables, so it needs literal values. These mirror --bg in
// brand-tokens.css; keep them in sync if that file changes.
export const THEME_COLORS = {
  light: '#F7F4EE', // --bg, light (brand-paper)
  dark: '#0A1628', // --bg, dark (brand-midnight)
} as const

// QR codes are drawn as images (PNG/SVG downloads, react-qr-code's SVG
// attributes), which can't read CSS variables. Brand midnight on white is the
// highest-contrast pair in the palette, which scanners need.
export const QR_COLORS = {
  fg: '#0A1628', // brand-midnight
  bg: '#FFFFFF', // surface, light
} as const

// Server-rendered share images (next/og) can't read CSS variables either.
// These are the light-theme token values from brand-tokens.css:
// share images are client-facing, so they use the light theme with a band.
export const IMAGE_COLORS = {
  bg: '#F7F4EE', // --bg (paper)
  surface: '#FFFFFF', // --surface
  ink: '#0A1628', // --ink
  inkMuted: '#5B6476', // --ink-muted
  border: '#E4DFD4', // --border (bar tracks)
  accent: '#1E4E8C', // --accent (bars)
  highlight: '#F5B82E', // --highlight (stars only)
  band: '#0A1628', // --band
  onBand: '#F7F4EE', // brand-paper on the band
  onBandMuted: '#C9D2E3', // --on-band-muted
} as const
