# Leslie Samuel brand kit

One place for everything that makes Leslie's work look and feel like his: the brand guide, the design tokens, the logos and icons, and real code from Speaker OS to build from.

Every app gets a copy of the kit. This repo is the original. Change things here first, then bring the change into each app.

## What's in here

| Folder | What it's for |
|---|---|
| `BRAND.md` | The brand guide. Part 1 is the brand (the same everywhere), Part 2 is the app family (what makes an app feel like one of Leslie's), Part 3 is what each app decides, Part 4 is pages a client sees. |
| `tokens/` | Colors, type, spacing, radii and motion as CSS variables, a Tailwind theme, and the same values as JSON. |
| `setup/nextjs/` | Font loading, theme switching and fixed colors for Next.js apps. |
| `assets/` | Logos, the LS mark, app icons, favicons and YouTube watermarks. |
| `reference/` | Speaker OS's code for the shell and shared components, plus screenshots of how it should look. |
| `prompts/` | Ready-to-paste prompts for Claude Code. |
| `CHANGELOG.md` | What changed and when, so apps know what to pull in. |

## How to use it

**Starting a new app:** open Claude Code in the new app's repo and paste `prompts/NEW-APP.md`, with your four tabs and four Quick add tiles filled in. It sets up the brand and the app shell before any features.

**Moving an existing app to the brand:** paste `prompts/ADOPT-EXISTING-APP.md`. It copies the kit in, audits the app, and gives you a plan before changing anything.

**After the brand changes:** paste `prompts/SYNC-AN-APP.md` into each app's Claude Code. It reads `CHANGELOG.md` and brings the app up to date. It's safe for products with their own brand (This is SXM) too: it checks which kind of app it's in, and for those it applies only the fingerprint, never Leslie's colors, fonts or logo.

**Changing the brand itself:** edit here (with Claude or Claude Code), add a line to `CHANGELOG.md`, then sync the apps. The published brand guide page on claude.ai gets updated from this repo.

## The two decisions only you make per app

1. **The four bottom tabs.** The four places you go every day in that app.
2. **The four Quick add tiles.** The four things you add most often.

Everything else about the look comes from the kit.
