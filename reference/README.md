# Reference code from Speaker OS

Speaker OS is the first app built fully on the brand. These are copies of the files that define its look, taken on 2026-11-22. Use them as a starting point: copy the file, then adapt it to the new app. Don't import from here.

TypeScript files end in `.txt` so no build tool tries to compile them. Drop the `.txt` when you copy one.

## Copy these nearly as they are

These are the app family. Change names and paths, not the look.

| File | What it gives you |
|---|---|
| `src/components/layout/app-shell.tsx.txt` | Header and floating bottom bar with the gold hexagon. Replace the four tabs. |
| `src/components/layout/use-collapsing-nav.ts.txt` | The collapse-on-scroll logic for phones. |
| `src/app/globals.css` | The bar's positions and sizes (`.app-nav`, `.app-nav__row`, `.app-nav__mini`, `.app-nav-add`, `.nav-fade`), focus ring, photo fade (`.photo-scrim`), hexagon pop, row fold, 16px fields on phones, print rules. Leave out the `report-*` client report rules unless you're building a report. |
| `src/components/layout/account-menu.tsx.txt` | The profile menu and its animation. |
| `src/components/ui/quick-add-menu.tsx.txt` | The Quick add sheet. Keep the sheet, tile layout and form flow; replace the four tiles and their forms. |
| `src/components/ui/hexagon.tsx.txt` | Every hexagon state, `HexCheckbox`, `HexProgress` and `HexAddButton`. |
| `src/components/ui/button.tsx.txt` | The four button variants. |
| `src/components/ui/card.tsx.txt`, `stat-tile.tsx.txt`, `badge.tsx.txt`, `status-badge.tsx.txt`, `skeleton.tsx.txt`, `field-error.tsx.txt` | Cards, tiles, stat tiles, badges, skeletons and inline errors. |
| `src/components/ui/logo.tsx.txt` | Picks the right logo file for the theme. |
| `src/components/ui/person-avatar.tsx.txt` | Round avatars with initials. The photo lookup is Speaker OS specific; keep the look. |
| `src/components/ui/count-up.tsx.txt` | Numbers that count up. |
| `src/components/ui/client-page.tsx.txt`, `report-header.tsx.txt` | The frame for every page a client sees. |
| `src/components/settings/display-preferences.tsx.txt` | The Light / Dark / Auto control and the switch. |
| `src/components/providers/theme-boot.ts.txt` | The no-flash theme script (the kit's `setup/nextjs/theme-boot.ts` is the same file). |
| `src/features/dashboard/dashboard-headline.tsx.txt` | The date and serif greeting that open the home screen. |
| `src/features/dashboard/shortcuts.tsx.txt` | The shortcut row. Replace the shortcuts. |
| `src/brand/*`, `tailwind.config.ts.txt`, `src/app/layout.tsx.txt` | How the tokens, fonts and theme are wired in. The kit's `tokens/` and `setup/nextjs/` folders hold the cleaned-up versions. |

## Examples, not templates

These show a pattern in a Speaker OS feature. Learn from them; don't copy the feature.

| File | The pattern |
|---|---|
| `src/app/t/[token]/testimonial-form.tsx.txt` | A client form: always light, gold button never disabled, inline errors on tap, hexagon progress. |
| `src/features/opportunities/debrief-modal.tsx.txt` | A modal (bottom sheet on phones, centered on desktop). |
| `src/features/dashboard/events-funnel.tsx.txt`, `src/features/revenue/ui.tsx.txt` | Bars and charts in one accent color. |
| `src/components/ui/event-photo-link.tsx.txt`, `src/lib/view-transition.ts.txt` | A photo that grows into the next page's cover. |
| `src/components/layout/global-search.tsx.txt` | Search: full screen on phones, a panel on desktop. |
| `src/components/ui/autocomplete-input.tsx.txt` | A field that suggests what you've typed before. |

## Don't copy these habits

Speaker OS got these wrong. The guide is right; do it the guide's way in new code.

- **Inputs styled inline in every form.** Build one shared Input component instead.
- **Tailwind's `text-sm` and `text-xs`.** Use the brand names (`text-body-sm`, `text-caption`, `text-label`).
- **Sheets and modals that appear without animating, with 20px corners.** Every overlay uses the Quick add sheet's motion and `rounded-t-brand-xl` (28px).
- **Transitions that ignore reduced motion.** Some here do. Every transition in new code turns off under `prefers-reduced-motion`.
- **Hard-coded `rounded-t-[28px]` and `text-[14px]`.** Use the tokens (`rounded-t-brand-xl`, `text-label` or `text-caption`).
