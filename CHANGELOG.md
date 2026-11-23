# Changelog

Newest first. Each entry says what changed and what an app needs to do about it.

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
