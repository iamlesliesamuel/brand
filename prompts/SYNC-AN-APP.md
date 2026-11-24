# Prompt: bring an app up to date with the brand

Paste everything below the line into Claude Code in any app or product built from the kit. It works for both kinds:

- **Apps on Leslie's brand** (Speaker OS): the full sync, guide, tokens and all.
- **Products with their own brand** (This is SXM): only the fingerprint (BRAND.md Part 5). Their colors, fonts, logo and voice are never touched.

---

My brand kit (the GitHub repo iamlesliesamuel/brand) has changed. Bring this app up to date.

1. Read docs/brand/BRAND-VERSION.md. It says which brand commit this app was last synced to, and whether the app is "on Leslie's brand" or "own brand, fingerprint only."
   - If the file is missing, work out which it is: an app that uses DM Serif Display, DM Sans and the brand-tokens.css colors (paper, midnight, brand blue, gold) is on Leslie's brand; anything with its own colors and fonts is own brand. Tell me which you think it is and wait for me to confirm before going further.
2. Clone the brand repo somewhere temporary and read CHANGELOG.md for every entry after the last synced commit or date.
3. Tell me what changed and what it means for this app, in plain words, before changing anything. Point out anything that conflicts with an exception logged in docs/brand/decisions.md.
   - **Own brand, fingerprint only:** consider only changes to BRAND.md Part 5 and to the pieces it names (the hexagon and tokens/hexagon.ts, the bottom bar, the Quick add sheet, the profile menu, the motion table, the quality bar). Skip everything about Leslie's colors, fonts, logo, voice and type scale, and say which entries you skipped. Never copy brand-tokens.css, tailwind-brand.ts, BRAND.md or the logo files into this app.
4. After I say go:
   - **On Leslie's brand:** copy the new BRAND.md and brand-tokens.css over the app's copies, update the Tailwind theme, copy tokens/hexagon.ts, and make the code changes the changelog calls for.
   - **Own brand:** make only the fingerprint changes, in this app's own colors. Copy tokens/hexagon.ts if the changelog calls for it.
   - Either way, update docs/brand/BRAND-VERSION.md with the new commit, today's date and which kind of app this is.
5. Run the build, then show me screenshots of every screen the change touched, at 390px and 1440px.
