# Prompt: bring an app up to date with the brand

Paste everything below the line into Claude Code in any app that's already on the brand.

---

My brand kit (the GitHub repo iamlesliesamuel/brand) has changed. Bring this app up to date.

1. Read docs/brand/BRAND-VERSION.md for the brand commit this app was last synced to. If it's missing, treat this as the first sync since the 2026-11-23 kit.
2. Clone the brand repo somewhere temporary and read CHANGELOG.md for every entry after that commit or date.
3. Tell me what changed and what it means for this app, in plain words, before changing anything. Point out anything that conflicts with an exception logged in docs/brand/decisions.md.
4. After I say go: copy the new BRAND.md and brand-tokens.css over the app's copies, update the Tailwind theme, make the code changes the changelog calls for, and update BRAND-VERSION.md with the new commit and today's date.
5. Run the build, then show me screenshots of every screen the change touched, at 390px and 1440px.
