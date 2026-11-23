// Tailwind theme for the brand tokens in brand-tokens.css.
// Source of truth: github.com/iamlesliesamuel/brand (tokens/tailwind-brand.ts).
// Use: import { brandTheme } from './tailwind-brand' and spread it into theme.extend.
// Every value is a CSS variable, so light and dark both work from one class:
// bg-surface, text-ink, border-border, text-accent, bg-highlight, text-display-lg, ...
// Never add a hex value here; add a token to the token file and map it.

const v = (name: string) => `var(--${name})`

// Colors are CSS variables, so Tailwind can't add an opacity modifier by
// itself (bg-band/60 would generate nothing). As a function, a color mixes
// the token with transparent when a modifier is used: bg-band/60 →
// color-mix(in srgb, var(--band) 60%, transparent). Without one it's var(--x).
const c = (name: string) => ({ opacityValue }: { opacityValue?: string }) =>
  opacityValue === undefined || opacityValue === '1'
    ? `var(--${name})`
    : `color-mix(in srgb, var(--${name}) calc(${opacityValue} * 100%), transparent)`

type FontSize = [size: string, config: { lineHeight: string; fontWeight?: string }]

export const brandTheme = {
  colors: {
    bg: c('bg'),
    surface: c('surface'),
    'surface-sunken': c('surface-sunken'),
    'surface-raised': c('surface-raised'),
    ink: c('ink'),
    'ink-muted': c('ink-muted'),
    border: c('border'),
    'control-border': c('control-border'),
    accent: c('accent'),
    'accent-tint': c('accent-tint'),
    highlight: c('highlight'),
    'highlight-text': c('highlight-text'),
    'on-highlight': c('on-highlight'),
    band: c('band'),
    'on-band-muted': c('on-band-muted'),
    danger: c('danger'),
    'danger-tint': c('danger-tint'),
    warning: c('warning'),
    'warning-tint': c('warning-tint'),
    success: c('success'),
    'success-tint': c('success-tint'),
    // Fixed palette colors, for the few places a role token doesn't fit
    // (text on the band is always paper, in both themes).
    brand: {
      midnight: c('brand-midnight'),
      deep: c('brand-deep'),
      blue: c('brand-blue'),
      gold: c('brand-gold'),
      'gold-deep': c('brand-gold-deep'),
      paper: c('brand-paper'),
    },
  },
  fontFamily: {
    display: ['var(--font-display)'],
    sans: ['var(--font-sans)'],
  },
  // Type scale from BRAND.md. Use as text-display-lg, text-heading, text-body, ...
  // Nothing goes below 14px.
  fontSize: {
    'display-xl': ['64px', { lineHeight: '64px', fontWeight: '400' }],
    'display-lg': ['44px', { lineHeight: '48px', fontWeight: '400' }],
    'display-md': ['32px', { lineHeight: '36px', fontWeight: '400' }],
    heading: ['22px', { lineHeight: '28px', fontWeight: '600' }],
    title: ['18px', { lineHeight: '26px', fontWeight: '600' }],
    stat: ['40px', { lineHeight: '44px', fontWeight: '700' }],
    body: ['17px', { lineHeight: '27px' }],
    'body-mobile': ['16px', { lineHeight: '26px' }],
    'body-sm': ['15px', { lineHeight: '24px' }],
    label: ['14px', { lineHeight: '20px', fontWeight: '500' }],
    caption: ['14px', { lineHeight: '20px' }],
  } satisfies Record<string, FontSize> as Record<string, FontSize>,
  // Namespaced so Tailwind's own rounded-sm / -md / -lg keep their sizes in
  // older code. rounded-brand-md (12px) is the default for cards and inputs.
  borderRadius: {
    'brand-sm': v('radius-sm'),
    'brand-md': v('radius-md'),
    'brand-lg': v('radius-lg'),
    'brand-xl': v('radius-xl'),
  },
  // Motion tokens: duration-sheet, ease-out, ease-nav and so on.
  transitionDuration: {
    fast: v('duration-fast'),
    base: v('duration-base'),
    nav: v('duration-nav'),
    sheet: v('duration-sheet'),
    pop: v('duration-pop'),
    photo: v('duration-photo'),
  },
  transitionTimingFunction: {
    standard: v('ease-standard'),
    out: v('ease-out'),
    in: v('ease-in'),
    nav: v('ease-nav'),
    pop: v('ease-pop'),
    photo: v('ease-photo'),
  },
}
