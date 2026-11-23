# Brand kit: instructions for Claude

This repo is the source of truth for Leslie Samuel's brand. Apps hold copies of its files. Nothing here is built or deployed.

## Rules for changing this repo

- `BRAND.md` is the guide. Write in Leslie's voice rules: plain, warm, direct, contractions, sentence case, no em dashes, no hype words.
- Tokens live in three files that must always agree: `tokens/brand-tokens.css`, `tokens/tailwind-brand.ts` and `tokens/tokens.json`. Change all three together, and update the color and type tables in `BRAND.md`.
- Every new color token needs a light and a dark value, and every text pairing must pass WCAG AA (4.5:1 for text, 3:1 for outlines that carry meaning) in both themes. State the contrast in the commit message.
- Never edit files in `assets/`. They're the supplied logo and icon files; new versions replace them whole.
- `reference/speaker-os/` is a snapshot of Speaker OS code. Refresh it from the Speaker OS repo rather than editing it here. TypeScript files keep a `.txt` suffix so no tool tries to compile them.
- Every change gets a dated entry at the top of `CHANGELOG.md` saying what changed and what an app has to do about it. Apps sync from that file.
- Commit straight to `main`.
