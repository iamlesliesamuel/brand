# Prompt: move an existing app to the brand

Fill in the brackets, then paste everything below the line into Claude Code in the app's repo. This prompt only audits and plans. Nothing changes until you approve the plan.

---

I'm moving this app onto my brand. The brand kit is the GitHub repo iamlesliesamuel/brand. Don't change any code yet. This step is an audit and a plan.

The four bottom tabs I want, left to right: [tab 1], [tab 2], [tab 3], [tab 4] (or: "suggest them from what the app does")
The four Quick add tiles I want: [tile 1], [tile 2], [tile 3], [tile 4] (or: "suggest them")
Who sees this app: [just me / me and my team / clients see some pages]

1. Clone the brand repo somewhere temporary. Read BRAND.md in full, reference/README.md, and the screenshots in reference/screenshots.
2. Tell me what this app is built with (framework, styling, component library). If it isn't Next.js with Tailwind, explain how the tokens and the reference code would carry over, and what would need translating.
3. Audit the app against BRAND.md, screen by screen. List every place it differs, grouped as:
   - Brand (Part 1): colors, fonts, logo, hexagon use, icons, voice. For example, any purple or lime, emoji, all-caps labels, text under 14px, em dashes in copy.
   - App family (Part 2): the shell, navigation, buttons, inputs, overlays, motion, empty and loading states.
   - Pages a client sees (Part 4), if any.
   Put the most visible differences first.
4. List anything in this app that BRAND.md doesn't cover, and say how you'd handle it. Don't invent new patterns without telling me.
5. Write the plan as passes, each one a commit I can review with screenshots:
   - Pass 1: bring the kit in (BRAND.md, tokens, Tailwind theme, fonts, assets, the CLAUDE.md line, docs/brand/BRAND-VERSION.md) and map the old colors to the tokens.
   - Pass 2: build the shared components from the reference code.
   - Pass 3: the app shell (header, bottom bar, gold hexagon, Quick add, profile menu).
   - Pass 4 onward: screens, most-used first.
   - Last: remove the old colors, fonts and components, and check for hard-coded values.
6. Flag anything that could change how the app works, not just how it looks, and keep those out of the rebrand.

Give me the audit and the plan, then stop and wait for my OK.
