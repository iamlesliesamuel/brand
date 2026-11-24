# Leslie Samuel brand guide

This is the source of truth for Leslie's brand and for every app he builds. Apps keep a copy of this file in `docs/brand/BRAND.md`. When this guide and an app's code disagree, the guide wins, unless the app has written the exception down in its own `docs/brand/decisions.md`.

Leslie Samuel helps humans become indispensable in the age of AI. He's a keynote speaker, emcee, AI educator and former neuroscience professor, and the brand has to carry both sides of that: the energy and warmth of the person on stage, and the credibility executives expect from someone teaching them AI. Playful in the idea, professional in the execution.

This guide covers every surface: apps, client reports, slides, workbooks, YouTube, email and the website. It was rewritten in November 2026 from what was actually built in Speaker OS, which is now the reference app.

## How to use this guide

Leslie's apps don't have to look identical. They have to feel like they come from the same person. The guide has three layers:

1. **The brand.** Logo, color, type, the hexagon, imagery, icons and voice. These are the same everywhere, with no exceptions per app.
2. **The app family.** The shell, the components, the motion and the copy patterns that make any of Leslie's apps feel like one of his. Every app uses these unless it has a real reason not to, and the reason gets written down.
3. **What each app decides.** Its tabs, what goes in Quick add, its home screen cards, its density. Free to change.

Client-facing pages (reports, forms, invoices, booking pages) follow the brand layer plus the rules in "Pages a client sees."

---

# Part 1: The brand

## The logo

The mark is an L and an S built as one continuous stroke. The L is a microphone: a gold mic head with three grille slots sits on top of its stem, and the L's foot flows straight into the S. It reads "LS" first and "speaker" second.

**Pick the lockup by the space you have:**

- **Horizontal** (`Logos/leslie-samuel-horizontal-*`): website headers, email signatures, the band on client pages, one-sheets, anywhere wide and short.
- **Stacked** (`Logos/leslie-samuel-stacked-*`): square spaces, title slides, social profiles.
- **LS mark alone** (`Mark/ls-mark-*`): when the name already appears nearby, or space is tight. App headers, favicons, app icons and the YouTube watermark use the mark only (`App icons/`).

**Pick the version by what's behind it:**

- On `brand-midnight` or a dark photo: the `on-navy` file, or `transparent-for-dark-backgrounds`.
- On `brand-paper`, white or a light photo: the `on-light` file, or `transparent-for-light-backgrounds`.
- On `brand-gold`: `ls-mark-on-gold` only. It's the one version where the mic head is navy instead of gold.
- In apps that switch themes, render both transparent files and show the one that matches the current theme.

**Rules:**

- Use SVG wherever it's accepted; PNG only where it isn't.
- Keep clear space on every side at least the height of the mic head.
- Minimum sizes: horizontal lockup 140px wide, stacked 96px wide, the mark 16px.
- Never redraw, stretch, rotate, outline, add effects to, or recolor the logo outside the supplied versions.
- Never set "Leslie Samuel" in a different font next to the mark. The wordmark is part of the logo.
- Never place the logo directly on a busy photo. Put it on a solid band or use a calmer part of the image.

## Color

Six brand colors, used through role tokens so light and dark screens both work. Components use the role tokens, never the raw hex values.

| Role | Light | Dark | Use |
|---|---|---|---|
| `bg` | `brand-paper` | `brand-midnight` | Page background |
| `surface` | white | `brand-deep` | Cards, sheets, menus |
| `surface-sunken` | warm off-white | deeper navy | Tiles inside cards, inputs, neutral pills, skeletons |
| `surface-raised` | white | `#22355A` | Things that float above the page: the bottom bar |
| `ink` | `brand-midnight` | `brand-paper` | Text and headings |
| `ink-muted` | slate | soft blue-gray | Secondary text, inactive icons |
| `border` | warm gray | dark slate | Card borders, dividers, bar tracks |
| `control-border` | darker warm gray | blue-gray | Input borders, empty hexagons, outlines that carry meaning |
| `accent` | `brand-blue` | `#7FA6DE` | Links, icons you can tap, the internal primary button, focus rings, chart bars, done hexagons |
| `accent-tint` | pale blue | dark blue | Confirmed status pills, avatar initials, shortcut squares |
| `highlight` | `brand-gold` | `brand-gold` | The one main action, filled stars, a reached milestone |
| `highlight-text` | `brand-gold-deep` | `brand-gold` | Gold text and outlines that have to be readable |
| `on-highlight` | `brand-midnight` | `brand-midnight` | Text and icons on gold |
| `band` | `brand-midnight` | `#060E1C` | Client page header band, the fade under text on photos, backdrops |
| `on-band-muted` | light blue-gray | light blue-gray | Labels and metadata on the band and on photos |
| `danger`, `warning`, `success` (each with a `-tint`) | | | State only (see below) |

**Gold means "lit."** Gold marks what matters most on a screen, and it stays rare.

- **One gold action per screen.** In apps, that's the gold Add hexagon in the bottom bar. On client pages, it's the one gold primary button.
- **Small "lit" moments may also be gold:** filled rating stars, a milestone that's actually been reached, and the short label above a title on a photo ("Up next · In 9 days"). They're marks, not actions, and they never compete with the gold action.
- **Never** a second gold button, gold decoration, gold section labels, gold borders, gold body text, or gold to mean "warning."

**Proportion:** roughly 60% `bg` and `surface`, 30% `ink`, `band` and `accent`, 10% or less `highlight`.

**Paper, not white.** In light mode the page is `brand-paper`, and white is for cards sitting on it. That contrast gives depth without shadows.

**Status colors.** `danger`, `warning` and `success` are for state, never decoration.

- Every status carries a word or an icon as well as a color: "2d overdue" with an alert icon, not a red date on its own.
- `warning` is a burnt orange, clearly separate from gold. Never use amber or yellow for warnings.
- Statuses in a workflow (lead, booked, delivered and so on) use neutral and blue with their label, never a color per status: `accent` on `accent-tint` for confirmed work, `ink-muted` on `surface-sunken` for everything else.
- Money and other numbers are never colored. Size does the work.
- On pages a client sees, status colors appear only when they report something the client needs (a failed payment, say).

**Text pairings that pass contrast (WCAG AA):** `ink` and `ink-muted` on `bg`, `surface` and `surface-sunken` in both themes; `accent` on `bg` and `surface`; `bg` on `accent`; `on-highlight` on `highlight`; `brand-paper` and `on-band-muted` on `band`; `highlight-text` on `bg` and `surface`; each status color on `bg`, `surface`, `surface-sunken` and its own tint. Never put `brand-blue` text on `brand-midnight` (2.2:1); dark mode uses `accent`. Never put `brand-gold` text on paper or white; use `highlight-text`.

**Opacity.** Tokens can be used at an opacity (`band` at 60% for backdrops, `accent` at 15% for the active nav pill). Build these with `color-mix()` from the token, never a new hex value. Write `transparent`, not `0%`, at the clear end of a gradient: some minifiers turn `color-mix(... 0%, ...)` into `0` and drop the whole gradient.

## Typography

Two families, both free on Google Fonts.

- **DM Serif Display** (`display`): the wordmark's face. One per screen, for the biggest moment only: a report headline, the greeting on an app's home screen, a title slide. Never under 32px, never for card titles, buttons or labels.
- **DM Sans** (`sans`): everything else, including all app interfaces, card titles on photos and stats.

**The contrast is the point.** A serif headline over clean sans text keeps the brand feeling current. Two serifs, or a serif in small UI text, loses that. The serif was tried on photo card titles in Speaker OS and taken off for this reason.

**Rules:**

- Use the type scale below. Don't add one-off sizes; if a new size keeps coming up, add it to the scale.
- Section headings and page titles are sentence case: "What attendees said," not "WHAT ATTENDEES SAID." No small all-caps labels.
- Big numbers use `stat` with tabular figures. On narrow phones, a stat may shrink to fit (down to 26px) rather than wrap.
- Nothing goes below 14px, including footnotes, chart labels and metadata.
- On phones, form fields are 16px, so iOS doesn't zoom in when one is tapped.
- Reading pages keep text near 65 characters per line; 760px is the widest reading column.

| Style | Font | Size / line height | Weight | Use |
|---|---|---|---|---|
| `display-xl` | DM Serif Display | 64 / 64 | 400 | Title slides and hero headlines |
| `display-lg` | DM Serif Display | 44 / 48 | 400 | Client page headline on desktop |
| `display-md` | DM Serif Display | 32 / 36 | 400 | Client page headline on phones; the home screen greeting in apps |
| `heading` | DM Sans | 22 / 28 | 600 | Page titles in apps, section headings, sheet titles |
| `title` | DM Sans | 18 / 26 | 600 | Card titles, the app name in the header |
| `stat` | DM Sans | 40 / 44 | 700 | Big numbers, tabular figures |
| `body` | DM Sans | 17 / 27 | 400 | Running text (16px on phones) |
| `body-sm` | DM Sans | 15 / 24 | 400 | Most app text: list row titles, descriptions |
| `label` | DM Sans | 14 / 20 | 500 | Form labels, pills, chips, menu section labels |
| `caption` | DM Sans | 14 / 20 | 400 | Metadata, footnotes, secondary lines |

Buttons are 15px semibold (20px line height). Titles on photo cards are DM Sans semibold at 19 to 20px on list cards, and bold 26px (30px from 640px up) on a hero, with slightly tight letter spacing.

## The hexagon

The mic is the logo. The hexagon is the brand's building block, and it runs through everything: apps, reports, slides, workbooks and the AI-Powered program.

Hexagons are the one shape that fits together with no gaps, each one touching six others. That's the mission in a shape: help one person, and it ripples out through everyone connected to them. The brain also maps where you are and where you're going in a hexagonal grid, which makes it a natural shape for a former neuroscience professor helping people move forward.

**A hexagon always holds one meaningful unit:** a step, a point, a number, a completed item, or a stage of progress. If it doesn't hold something, it shouldn't be there.

**Where it shows up:**

- **The main action in an app:** the gold Add hexagon in the bottom bar. One per app, always the same shape and place.
- **Checklists:** hexagon checkboxes, from a workbook's "done when" list to an app's task list.
- **Progress:** a row of hexagons that fill in as someone moves forward: form steps, readiness items, sessions completed, days in a streak.
- **Steps and frameworks:** numbered hexagons for the stages of a framework, the parts of a workbook, or the sessions of a program.
- **Lists that matter:** hexagon markers in place of bullets for outcomes, takeaways and next steps, and as month markers on a timeline.
- **Completion moments:** a blue hexagon with a check on "sent" and "thank you" screens, in place of a green circle.

**Where it doesn't:**

- No honeycomb backgrounds, wallpaper patterns or decorative clusters.
- No hexagon photo or avatar frames. Avatars are always round.
- Never combined with or placed around the logo.
- Not for ordinary buttons, cards or containers. Those stay rounded rectangles.

**Shape:** pointy-top, width to height 8:9, rounded joins, a 2px stroke that stays 2px at every size. Numbers inside use DM Sans semibold.

**States:**

- **Not yet:** 2px `control-border` outline, empty.
- **Done:** `accent` fill with a check in `bg`.
- **Numbered or marker:** `accent` fill with the number in `bg`, or a small solid `accent` hexagon as a bullet.
- **Current:** 2px dashed `highlight-text` outline, for the step someone is on right now.
- **Milestone reached:** `highlight` fill with a `highlight-text` edge, for a real finish line: a completed program, an event delivered and paid in full.

**Gold stays rare.** Done and numbered hexagons are blue. Only the main action, the current step and a reached milestone use gold.

## Imagery

- Use real photos of Leslie with real audiences: mid-moment on stage, smiling, gesturing, the room in frame. A wide shot of a full room is the strongest proof there is.
- Favor shots of Leslie or the back of the room over close-ups of attendees, and get the organizer's OK before using event photos.
- **Photos lead where they exist.** An app that has real photos (event covers, say) can make them the main visual of its home screen and detail pages.
- **Text on a photo sits on the navy fade.** The fade runs from the bottom: `band` at 97%, 90% at 30% of the height, 60% at 55%, 20% at 75%, clear by 90%. Text on it is `brand-paper`, metadata `on-band-muted`, and the small label above the title may be gold. This is the only overlay allowed. Use it on photo cards only; everywhere else, text sits on a solid surface or band.
- Photo cards use `radius-lg`, a 1px `border`, and `band` behind the image. Without a photo, show a flat navy card with a relevant icon, never a stock image.
- No other filters, and no AI cliché imagery: glowing brains, circuit boards, robots, blue-purple gradients, sci-fi particle effects.

## Icons

- **Lucide outline icons** at a 1.75px stroke. `ink-muted` by default, `accent` when the icon is the thing you tap.
- Sizes: 22px in the bottom bar, 24 to 26px on tiles and shortcut squares, 20px in the header and list rows, 18px in menus, 16px inline with text.
- **Social logos** use the official shapes from Simple Icons, filled `accent`, inside outlined square buttons. Never hand-drawn.
- The only filled icons are rating stars (`highlight`).
- No emoji in interfaces, reports or slides.

## Voice

The visual brand and the words have to match: warm, direct and plain.

- Make hard things feel doable. Story first, then the point, then one clear next step.
- Use contractions and plain language. Talk like a smart colleague.
- No em dashes, anywhere. Text copied or exported from an app is cleaned of them too.
- No hype words ("10x," "supercharge," "game-changer") and no corporate jargon.
- Never open by praising the reader's question or idea.

---

# Part 2: The app family

This is what makes an app feel like one of Leslie's. The shell, the motion and the component shapes are shared. What goes inside them is up to each app (Part 3).

## Themes

- Every app offers **Light, Dark and Auto**, in the profile menu and in Settings.
- Leslie's own tools default to **dark**. Anything a client or attendee sees is **always light**, whatever their device is set to.
- Themes switch with `data-theme="light"` or `"dark"` on the root, set before the first paint so there's no flash. The same attribute on a wrapper forces a theme inside it (client pages force light; a presenter view can force dark).
- The browser theme color and the installed app's manifest use the literal token values, since they can't read CSS variables.

## Depth

- **No drop shadows, anywhere.** Depth comes from paper versus white in light mode, the surface steps in dark mode (`surface-sunken`, `surface`, `surface-raised`) and 1px borders.
- **Backdrops:** anything that opens over the page (a sheet, a menu, a modal, search on desktop) dims the page behind it with `band` at 60%. Tapping the backdrop or pressing Escape closes it.
- **Frosted sticky headers:** the app header, and sticky section headers inside long lists, use `bg` at 95% with a 12px background blur. That's the only blur, apart from privacy blurring.

## The app shell

### Header

- Sticky at the top, 56px tall, frosted (above), a 1px `border` along the bottom, padded for the phone's top safe area.
- **Left:** the LS mark at 28px (following the theme) and the app's name in `title`. Tapping it goes home.
- **Right:** a search button (20px icon), any status pill the app needs (such as "Hidden" while privacy mode is on), then the profile photo.
- No back button in the header. Detail pages put a back link at their top left: a 16px left arrow plus the parent's name ("Events") in `label`, `ink-muted`.
- Content sits in a centered column up to 1024px wide with 16px side padding.

### The bottom bar (main navigation)

The same bar on phones and desktop. There's no sidebar.

- **Floating, not docked:** a rounded bar 60px tall, `radius-xl` (28px), up to 448px wide, centered, 8px in from the screen edges and 10px up from the bottom safe area.
- `surface-raised` background, a 1px `control-border` outline at 40%, no shadow.
- **Four tabs, two on each side** of a 64px gap where the gold hexagon floats.
- **Icons only,** no text labels. Each tab keeps its name for screen readers and as a tooltip.
- Each tab is a 48px-tall tap target. Its 22px icon sits in a 36 by 48px pill: the current page gets `accent` at 15% behind an `ink` icon; the others are `ink-muted` with no pill.
- Unread counts are a small `danger` pill on the tab's icon (20px tall, 14px bold, tabular figures).
- **A fade behind the bar:** a 140px gradient from clear to `bg` (70% at 40%, solid by 75%), so content scrolling under it doesn't clash with the bar.
- Page content gets 112px of bottom padding plus the safe area, so the last item scrolls clear of the bar.

### The main action: the gold hexagon

- A `highlight` hexagon 56px wide, with a 3.5px `on-highlight` plus with round ends. It sits centered and rises 16px above the bar's middle.
- It's the app's one gold action and it's on every internal screen.
- It opens **Quick add** (below). While Quick add is open, the plus turns 45° into an X, and the button is labeled "Close Quick add."

### Collapsing on phones

On phones, the bar gets out of the way while you read.

- Scrolling down (more than 4px, once you're more than 60px from the top) shrinks the bar into a 52px circle at the left edge, showing only the current page's icon. The gold hexagon slides to the right edge and stays tappable. The fade behind the bar disappears.
- Scrolling up more than 4px, coming back near the top, or tapping the circle expands it again.
- Smaller moves are ignored, so the bar doesn't flicker. It never collapses while Quick add is open, and it starts expanded on every new page.
- Tablets and desktop never collapse.

### Quick add (the sheet behind the hexagon)

- A bottom sheet up to 512px wide, inset 8px from the sides, with 28px top corners, a 1px `border` on the top and sides, `surface` background and a 4 by 40px grab handle.
- Header: "Quick add" in `heading` on the left, today's date in `caption` on the right.
- **Four tiles in a 2 by 2 grid** (12px gaps). Each tile: at least 148px tall, `radius-lg`, 1px `border`, `surface-sunken`, `accent-tint` on hover. A 24px `accent` icon top left, a category word in `label` top right, then the title in `title` and a short hint in `caption` at the bottom ("Add a task / 4 open").
- Tapping a tile opens its form inside the same sheet, with a "Quick add" back link. After saving, the sheet goes back to the tiles with a success line and a "View" link.
- Keep it to four. The tiles are the app's four most common things to add.

### The profile menu (the secondary menu)

Tapping the profile photo opens a small menu that's only about you.

- A 304px panel dropping from under the photo: `surface`, `radius-md`, 1px `control-border`, no shadow, over the dimmed page (the header stays undimmed).
- **Contents, top to bottom:** your photo, name and "View profile"; then personal shortcuts (such as "Share my QR codes"); then Appearance (a Light / Dark / Auto segmented control) and any personal switches (such as Privacy mode); then Settings and Sign out.
- Menu rows: an 18px icon and 15px semibold text, `surface-sunken` on hover. Sign out turns `danger` on hover.
- Nothing else goes here. Places in the app go in the tabs, the shortcut row or search.

### Where things live

| Layer | What goes there |
|---|---|
| Bottom tabs | The four places used every day |
| Gold hexagon | Adding things (Quick add) |
| Shortcut row on the home screen | Places visited every so often (Revenue, Calendar, Invoices and so on) |
| Cards on the home screen | Live previews of what needs attention |
| Profile menu | Only you: profile, appearance, your settings |
| Search | Everything, from the header icon, Cmd/Ctrl+K or "/" |

### The home screen

- Opens with today's date in `label`, `ink-muted`, then a greeting in DM Serif Display `display-md` ("Good afternoon, Leslie"). That's the screen's one serif moment, and it's a signature of Leslie's apps. No summary sentence under it; the cards do that job.
- Then the **shortcut row:** 52px `accent-tint` rounded squares (`radius-lg`, no border) holding a 26px `accent` icon, with a short label underneath. It scrolls sideways on phones. Squares shrink slightly when pressed.
- Then cards, ordered by what needs attention first. Cards with nothing to show are hidden, and "You're all caught up." appears when they all are.

### Search

- Opens full screen on phones and as a 576px panel 80px from the top on desktop.
- Results are grouped by type, with "Jump to" pages, and work with the arrow keys, Enter and Escape.

### Pages and spacing

- Page padding: 16px on the sides, 24px top and bottom.
- Page titles: `heading` with a count or short subtitle in `caption` under it.
- Cards: 16px padding, 24px from 768px up. 12px between cards on a detail page, 20px between sections on the home screen.
- From 1024px up, home screen cards can sit in pairs and stat grids go four across.

## Components

### Buttons

All buttons: at least 44px tall, `radius-md`, 20px by 10px padding, 15px semibold, 8px between icon and label, color changes over 150ms. Compact versions are 40px tall with 14px text.

- **Primary (gold):** `highlight` fill, `on-highlight` text. Client pages only, one per page, at the end after the proof. Never disabled on a client form; show the errors instead.
- **Internal primary (blue):** `accent` fill, `bg` text. The main form action inside an app (Save, Create, Send), one per screen. The gold hexagon already owns gold there.
- **Secondary:** transparent, 1.5px `ink` outline, `ink` text, `surface-sunken` on hover. Everything else.
- **On the band:** transparent, 1.5px `brand-paper` outline and text. Inside the band only.
- **Disabled:** 50% opacity (internal only).
- **Working:** the label changes ("Saving…", "Creating…") instead of a spinner.
- **Focus:** 2px solid `accent` outline, offset 2px, on every interactive element (`brand-paper` on the band).

### Inputs

- One shared input style: `radius-md`, 1px `control-border`, `surface-sunken` fill, `ink` text, `ink-muted` placeholder, 12px by 10px padding, 15px text (16px on phones). The border turns `accent` on focus, plus the focus ring.
- On client pages, inputs are `surface` (white) with 16px text.
- Labels sit above the field in `label` (internal) or 15px semibold (client). "(optional)" follows in regular `ink-muted`. Mark optional fields, not required ones.
- **Errors appear under the field** when the person tries to save: a 16px alert icon and the message in `label`, `danger`. Form-wide errors are a `danger-tint` box above the button. No browser validation popups.
- Fields suggest values the person has typed before where that helps.

### Choices

- **Checklists use the hexagon checkbox:** a 24px hexagon on a 44px tap target. It pops when checked (see Motion).
- **Switch:** a 44 by 24px track, `accent` when on and `border` when off, with a 20px `surface` knob.
- **Segmented control:** a `surface-sunken` track with a 1px border; options share the width equally, and the selected one gets a 1.5px `ink` outline. Used for Light / Dark / Auto and view switches (List / Calendar).
- **Choice pills:** 1px `control-border` on `surface`; selected is a 2px `accent` border on `accent-tint` with `accent` semibold text.
- **Rating stars:** 40px Lucide stars in 48px buttons. Filled stars are `highlight` with a `highlight-text` edge; empty ones are `control-border` outlines.

### Cards and tiles

- **Card:** `surface`, 1px `border`, `radius-md`. A header row with the title in `title` and an optional link on the right (`label` semibold `accent` with a 16px arrow).
- **Tile:** `surface-sunken` inside a card, 1px `border`, `radius-md`, 16px padding.
- **Stat tile:** a label in `label` `ink-muted`, the value in `stat`, an optional one-line caption. Two by two on phones, four across from 1024px up, always an even count. A gold star may sit beside a rating; numbers are never colored.
- **Photo card:** see Imagery. The whole card is the link.

### Lists

- **Grouped rows:** rows divided by 1px lines inside one bordered card. Title in `body-sm` semibold, a second line in `caption`, then a badge and a 16px chevron on the right.
- **Separate cards:** one small card per item (people, events). The border turns `accent` on hover.
- **People** always lead with a round avatar: their photo, else a looked-up picture, else two initials in `accent` on `accent-tint`.
- **Inbox rows:** avatar, name in semibold, time on the right, a one-line preview, and a dot for unread.
- **Selecting several:** press and hold an item to start, tap to add more; a floating bar above the bottom bar holds the actions and an X to stop.

### Badges

- Pills: `radius-full`, 10px by 2px padding, `label` text.
- **Status badges** always pair a 16px icon with a word: alert circle for `danger`, triangle for `warning`, check circle for `success`, each on its own tint.
- Workflow statuses: `accent` on `accent-tint` for confirmed, `ink-muted` on `surface-sunken` for the rest.

### Empty, loading and confirmations

- **Empty sections** are one row: the section title, "None yet" in `ink-muted`, and the add button on the right. No illustrations, no paragraphs.
- **Empty pages** are one bordered box with two short lines: what's missing, and how it fills up ("No contacts yet / People you add to events show up here.").
- **Loading:** skeleton blocks (`surface-sunken`, `radius-md`, a slow pulse) inside the real header and bottom bar, which never disappear.
- **No pop-up toasts.** Confirmations appear inline where the action happened: a `success-tint` line with a check icon and, where useful, a "View" link. Copy actions show "Copied" right under the control.
- **Completion screens** (sent, thank you) use a blue done hexagon, not a green circle.

### Charts and progress

- Bars and tracks: `accent` on a `border` or `surface-sunken` track, fully rounded. 8px for main bars, 4 to 6px for small ones.
- Two series side by side: an `accent` outline on `accent-tint` for one (planned, booked) and solid `accent` for the other (actual, collected). Earlier stages of a funnel can use `accent` at 45%. Never a color per category.
- Axis and bar labels are 14px.
- Progress through steps uses a row of hexagons (done, current, not yet).

### Privacy mode

Apps that show money or contact details offer a Privacy mode switch in the profile menu. It blurs amounts by 6px and charts by 5px, and a "Hidden" pill in the header turns it off in one tap so it's never left on by accident.

## Motion

Motion is quick, quiet and functional. It shows where something came from and that an action worked. There's no bounce, apart from the one reward moment (the hexagon pop).

**The vocabulary:**

| Moment | Motion | Duration | Easing |
|---|---|---|---|
| A sheet opens or closes | Slides up from the bottom (or back down) | 300ms | ease-out, `cubic-bezier(0, 0, 0.2, 1)` |
| A menu opens | Drops 16px and grows from 95% to full size, fading in, from the corner nearest its trigger | 300ms | ease-out |
| A centered modal opens (desktop) | Rises 16px and fades in. On phones the same modal is a bottom sheet and slides up. | 300ms | ease-out |
| A menu closes | The reverse, faster | 200ms | ease-in, `cubic-bezier(0.4, 0, 1, 1)` |
| A backdrop appears or goes | Fades | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| The plus becomes an X | Rotates 45° | 200ms | ease |
| The bottom bar collapses or expands | Bar reshapes into the circle; the hexagon slides to the edge | 250ms | `cubic-bezier(0.2, 0, 0, 1)` |
| Tabs fade out and the circle's icon fades in | Opacity | 200ms | ease |
| Something is checked off | The hexagon pops: 70%, to 115%, to full size | 320ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| A checked item leaves a list | Waits 350ms for the pop, then folds closed and fades | 280ms (fade 220ms) | ease |
| A number appears or changes | Counts up from 0 or the old value. Not on a fresh page load. | 700ms | ease-out cubic |
| A photo card is opened | The photo grows into the detail page's cover; the rest crossfades | 380ms (crossfade 200ms) | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| Hover and selected colors | Color fades | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| A tile or star is pressed | Shrinks to 95% (stars 90%) | 150ms | same |
| A theme switch | Background and text color fade | 200ms | ease |
| Loading | Skeleton pulse | 2s loop | |

**Rules:**

- Every sheet, menu and modal animates in and out with the table above. Nothing that opens over the page just appears.
- The one exception: suggestion lists that change as you type (autocomplete) appear and update instantly, so typing never feels slow.
- Everything is turned off under the device's reduced-motion setting: things appear in their final state, and numbers show their final value.
- Animate with transforms and opacity, plus CSS transitions. No animation library is needed.

## Interface copy

- Sentence case everywhere. No all-caps labels.
- Inside an app, it talks to you ("Share my QR codes"). On client pages, Leslie talks in first person ("Tell me a bit about your event and I'll follow up personally.").
- Buttons are verb first and specific: "Add task," "Create event," "Send booking request." Never "Submit" or "OK."
- Hints are short facts: "4 open," "Deposit, final, partial."
- Empty states say what's missing and how it fills: "None yet," "You're all caught up."
- Errors say what to do: "Please enter your name.", "Choose the event this task is for."
- Dates read naturally: "Sunday, November 22," "Nov 28, 2026," "In 9 days," "2d overdue."

---

# Part 3: What each app decides

These are free to differ, as long as they're built from Parts 1 and 2:

- The four tabs and their icons.
- The four Quick add tiles.
- The shortcut row and the home screen cards.
- Its own page layouts, density and data views.
- Whether it uses photos, and where.
- Special full-screen modes (such as a presenter view) that hide the shell.

When an app needs to break a Part 2 rule, write down the exception and the reason in that app's repo, so the next app can learn from it.

---

# Part 4: Pages a client sees

Reports, feedback forms, booking pages, contact cards, invoices and anything that might be saved as a PDF.

- **Always light,** with no app chrome: no header, bottom bar or hexagon.
- **They open with the band:** a full-width `band` header with the horizontal logo (44px tall, 32 to 40px on phones), a short label in `label` `on-band-muted`, the headline in DM Serif Display (`display-md` on phones, `display-lg` from 640px up) in `brand-paper`, and metadata in `body-sm` `on-band-muted`. One optional on-band button ("Save as PDF") on the right.
- **Widths:** forms 512px, documents 760px, two-column pages 960px.
- **One gold button,** at the end, after the proof. Never in the band. Never disabled: missing answers show inline errors when it's tapped.
- **Leslie speaks in first person.**
- **Never "Powered by"** anything. These pages sell Leslie.
- **Dead or expired links** show the band, a short message and "You can still find me at iamlesliesamuel.com."
- **Print** on white with 14mm margins. The band keeps its midnight, and on-band buttons are hidden.
- **QR codes** are `brand-midnight` on white, with a border instead of a shadow.
- **Share images** (social cards) use the brand fonts and colors and the horizontal logo, at 1080 by 1080 or 1200 by 630.

---

# Part 5: Products with their own brand (the fingerprint)

Some products Leslie builds carry another brand, such as This is SXM. They keep their own name, logo, colors, fonts and photography. What they share with Leslie's apps is a fingerprint: a few pieces of structure and motion that make them recognizably his work without mixing the two brands.

**The fingerprint:**

- **The hexagon main action.** The same 56px pointy-top hexagon in the middle of the bottom bar, the same plus, rotating into an X while its sheet is open. Its color is the product's own main action color, not Leslie's gold. The shape is the fingerprint; the color belongs to the product.
- **The bottom bar.** The same floating bar, size, position, active pill, fade behind it, and collapse on scroll on phones, in the product's colors. The product may keep text labels under the icons when its users are visitors who need them.
- **The sheet behind the hexagon.** The same Quick add sheet: tiles, handle, backdrop, motion.
- **The profile photo** in the top right opens the profile menu. There's no profile tab in the bar.
- **The motion vocabulary** from Part 2, including turning it all off under reduced motion.
- **Hexagons where they hold a unit,** if the product has steps, checklists or progress, in the product's colors.

**Not part of the fingerprint:** Leslie's logo or LS mark, his colors, DM Serif Display and DM Sans, his voice rules (the product speaks in its own voice), and "made by Leslie" credits.

# Using it in code

The files that go with this guide are in this repo:

| File | What it is |
|---|---|
| `tokens/brand-tokens.css` | Every color (light and dark), spacing step, radius, duration, easing and font stack as CSS variables. Copy it into an app unchanged. |
| `tokens/tailwind-brand.ts` | The Tailwind theme that maps those variables to classes (`bg-surface`, `text-heading`, `rounded-brand-xl`, `duration-sheet`, `ease-nav`), with opacity modifiers through `color-mix()`. |
| `tokens/tokens.json` | The same tokens as data, for tools that aren't CSS. |
| `setup/nextjs/` | Next.js glue: loading the fonts, pointing the font tokens at them, the no-flash theme script, and literal colors for places CSS can't reach. |
| `assets/` | Every logo, mark, app icon, favicon and YouTube watermark, as supplied. |
| `reference/speaker-os/` | Speaker OS's real code for the shell, bottom bar, hexagon, Quick add, profile menu, buttons and client pages. Copy and adapt; read `reference/README.md` first. |
| `reference/screenshots/` | What it should look like. |

**Rules:**

- Style through the tokens only. Never paste a hex value into a component.
- Use the brand type names (`text-body-sm`, `text-caption`), not Tailwind's `text-sm` or `text-xs`.
- Map opacity through `color-mix()` so `bg-band/60` works on any token. Write `transparent`, not `0%`, at the clear end of a gradient.
- Build the shared pieces once per app: Button, Input, FieldError, Card, Tile, StatTile, Hexagon (with HexCheckbox, HexProgress and HexAddButton), StatusBadge, Sheet, Menu, Switch, SegmentedControl, PersonAvatar, AppShell, ClientPage and ReportHeader. Pages never rebuild these inline.
- Keep the bottom bar's positions and sizes in CSS keyed on a `data-collapsed` attribute, not inline styles, so the phone and desktop rules both apply.
- Respect `prefers-reduced-motion` in every transition and animation.
- Logos and icons come from `assets/`. Never redraw or recolor them.
