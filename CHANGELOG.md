# Changelog

Newest first. Each entry says what changed and what an app needs to do about it.

## 2026-11-24 (fourth update): the sync prompt knows about own-brand products

- **`prompts/SYNC-AN-APP.md`** now checks whether an app is on Leslie's brand or has its own brand. For own-brand products it applies only Part 5 (the fingerprint) and never copies Leslie's colors, fonts, logo or guide into the app. `docs/brand/BRAND-VERSION.md` records which kind an app is.
- **This is SXM:** on its next sync, create `docs/brand/BRAND-VERSION.md` marked "own brand, fingerprint only."
- **Speaker OS:** add "on Leslie's brand" to its `BRAND-VERSION.md`.

## 2026-11-24 (third update): a softer hexagon

- **The hexagon has rounder corners**, matching the habit tracker's: a radius of 7.5% of the width, about two and a half times rounder than before. It now comes from one path in the new `tokens/hexagon.ts` (`HEX_PATH`, `HEX_VIEWBOX`), so every app draws exactly the same shape.
- **The main action's plus is thinner and smaller**: about a third of the hexagon's width and about 3px at 56px (`HEX_PLUS_PATH`), instead of almost half and 3.5px.
- **A hexagon holding a count in progress uses its color's tint**, with the number in that color, and turns solid when the set is complete.
- **Apps (Speaker OS, This is SXM):** copy `tokens/hexagon.ts` in and draw every hexagon from it: the nav button, checkboxes, progress, markers, milestones. Replace the plus with `HEX_PLUS_PATH`. Products with their own brand use their own colors. Nothing else changes.

## 2026-11-24 (second update): a fuller fingerprint

- **BRAND.md, Part 5** now adds to the fingerprint: hexagons wherever something counts (progress through a set shown as one hexagon per item, the hexagon checkbox, the milestone), the rewarding moments (count-up numbers, the hexagon pop, photos growing into the next page), the quality bar (inline confirmations, forms that never disable their button, short empty states, placeholder loading, reduced motion, keyboard and 44px tap targets), and where things live.
- **Products with their own brand (This is SXM):** adopt these as a separate step after the navigation.
- **Apps on Leslie's brand:** nothing to change; Part 2 already covers all of it.

## 2026-11-24: the fingerprint for products with their own brand

- **New in BRAND.md, Part 5:** products Leslie builds for another brand (This is SXM first) keep their own colors, fonts, logo and voice, and share a fingerprint: the hexagon main action in the product's own action color, the floating bottom bar and its motion, the Quick add sheet, the profile photo opening the profile menu, and the Part 2 motion vocabulary.
- **Apps on Leslie's brand:** nothing to change.

## 2026-11-23 (second update): full-bleed app icons, two motion rules

Found by the first Speaker OS sync.

- **App icons:** `assets/app-icons/ls-app-icon-512.png` and `apple-touch-icon-180.png` had rounded, see-through corners, which show up black on iPhone. They're now full-bleed squares, matching Speaker OS. `assets/app-icons/README.md` says which file is for what. **Apps:** use the full-bleed files for the manifest, `apple-touch-icon` and favicons. Speaker OS already does; nothing to change there.
- **Motion:** a centered modal on desktop rises 16px and fades in over 300ms ease-out; on phones the same modal is a bottom sheet. Autocomplete suggestion lists appear instantly. Both are now in BRAND.md's Motion section. **Apps:** follow these when making overlays animate.
- **Exceptions file:** apps log deliberate exceptions in `docs/brand/decisions.md`. **Speaker OS:** rename `docs/brand/rebrand-decisions.md` to that and update its references.

## 2026-11-23: the kit is created

The first version of the brand kit, built from the brand guide and from what shipped in Speaker OS.

**What's new compared with the guide Speaker OS was built from (its `docs/brand/BRAND.md` from 2026-11-17):**

- The guide is rewritten in four parts: the brand, the app family, what each app decides, and pages a client sees.
- **Gold:** one gold action per screen, plus small "lit" marks (filled stars, a reached milestone, the label above a title on a photo). Never a second gold button.
- **New tokens:** `surface-raised`, `on-band-muted`, `danger`, `warning` and `success` with their `-tint`s (already in Speaker OS), plus `radius-xl` (28px) and motion tokens (`duration-*`, `ease-*`).
- **Tailwind:** `rounded-brand-xl`, `duration-sheet` and the other durations, `ease-nav` and the other easings.
- **The app shell is now part of the brand:** frosted header, floating bottom bar with four icon tabs, the gold hexagon, collapse on scroll on phones, Quick add, the profile menu, the shortcut row, and the home screen's date and serif greeting.
- **Overlays:** one bottom sheet style (28px top corners, slides 300ms ease-out) for every sheet. Every overlay animates in and out.
- **Motion:** a full table of durations and easings. Everything turns off under reduced motion.
- **No pop-up toasts:** confirmations appear inline.
- **Photos:** text on photos over the navy fade is allowed on photo cards in any app.
- **Client pages:** never "Powered by" anything.

**What Speaker OS needs to do:**

1. Replace `docs/brand/BRAND.md` with this guide and `docs/brand/brand-tokens.css` with `tokens/brand-tokens.css`, and add `radius-xl`, the durations and the easings to `src/brand/tailwind.ts`.
2. Make every sheet and modal animate like Quick add, with `rounded-t-brand-xl`.
3. Turn off every transition and animation under reduced motion.
4. Build one shared Input component and replace the 33 inline copies.
5. Replace `text-sm`, `text-xs` and `text-[14px]` with the brand type names.
6. Add `docs/brand/BRAND-VERSION.md`.
