// Brand fonts (BRAND.md): DM Serif Display for the one big headline
// on a page, DM Sans for everything else. This is the only place they're loaded.
//
// next/font renames the families it loads, so the literal names in
// brand-tokens.css ("DM Sans", "DM Serif Display") would never match.
// brand.css points --font-sans and --font-display at the variables
// defined here instead. Both variables are applied on <body> in the root layout.
import { DM_Sans, DM_Serif_Display } from 'next/font/google'

export const sansFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const displayFont = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
  display: 'swap',
})

/** Class names that define both font variables. Put on <body>. */
export const brandFontVariables = `${sansFont.variable} ${displayFont.variable}`
