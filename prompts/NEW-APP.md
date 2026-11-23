# Prompt: start a new app on the brand

Fill in the brackets, then paste everything below the line into Claude Code in the new app's repo.

---

This app is one of mine, so it's built on my brand kit from the start. The kit is the GitHub repo iamlesliesamuel/brand. Get the brand right first, before any features.

App name: [name]
What it does: [one or two sentences]
Who uses it: [just me / me and my team / clients too]
The four bottom tabs, left to right: [tab 1], [tab 2], [tab 3], [tab 4]
The four Quick add tiles: [tile 1], [tile 2], [tile 3], [tile 4]

Step 1: bring the kit in
- Clone the brand repo somewhere temporary and read BRAND.md, reference/README.md and the screenshots in reference/screenshots before writing anything.
- Copy BRAND.md to docs/brand/BRAND.md and tokens/brand-tokens.css to docs/brand/brand-tokens.css, unchanged.
- Copy tokens/tailwind-brand.ts and the files in setup/nextjs/ into src/brand/ and wire them in the way Speaker OS does (reference/speaker-os/src/app/layout.tsx.txt and tailwind.config.ts.txt). Rename the theme storage key for this app.
- Copy the assets this app needs into public/brand/: the transparent LS marks, the horizontal transparent logos if there are client pages, and the app icons and favicons. Use them in the manifest and metadata.
- Create CLAUDE.md (or add to it) with: "All UI follows docs/brand/BRAND.md. Style only through the tokens in docs/brand/brand-tokens.css. Where the guide and the code disagree, the guide wins. Log any deliberate exception in docs/brand/decisions.md. Brand source: github.com/iamlesliesamuel/brand."
- Write docs/brand/BRAND-VERSION.md with the brand repo's commit hash and today's date.

Step 2: build the shared pieces
Build these once, from the reference code, before any screens: Button, Input, FieldError, Card, Tile, StatTile, Hexagon (with HexCheckbox, HexProgress and HexAddButton), StatusBadge, Sheet, Menu, Switch, SegmentedControl, PersonAvatar and Logo. Add ClientPage and ReportHeader only if clients will see any page. Follow "Don't copy these habits" in reference/README.md.

Step 3: build the empty shell
- The header, the floating bottom bar with my four tabs (icons only), the gold hexagon, collapse on scroll on phones, the Quick add sheet with my four tiles (forms can be placeholders for now), the profile menu (profile, Appearance, Settings, Sign out), and search.
- The home screen opens with the date and the serif greeting, then an empty shortcut row and "You're all caught up."
- Dark by default for me, with Light / Dark / Auto in the profile menu.
- Every overlay animates the way BRAND.md's Motion table says, and all motion turns off under reduced motion.

Step 4: show me
Take screenshots of the shell at 390px and 1440px, in dark and light, with Quick add open, the profile menu open, and the bar collapsed. Show them to me next to the matching Speaker OS screenshots from the kit. Stop there and wait for my OK before building any features.
