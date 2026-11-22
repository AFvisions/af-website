# AFvisions portfolio: working rules

## Reference files
- Design spec: `brand/design-guidelines.md` (source of truth for colors, fonts, spacing, layout, interactions)
- Copy and tone: `brand/brand-voice.md`
- Visual reference: `new-site-mockups/`. Where a mockup and the spec disagree, ask.

## Workflow
- Work on a feature branch, never on main.
- One plan step at a time, in small commits. Stop after each step for review.

## Design
- Use the spec's CSS variables. Never write raw hex; pixel literals only where the spec allows.
- Ask before building anything tagged Pending or listed under Undecided.
- No damask pattern: plain Charcoal background until Andrew supplies the file.
- If the spec and existing code conflict, report it and don't pick one.

## Site
- All styles in `css/site.css`; header and footer live once in `partials/`. No inline styles.
- Keep the Google Tag Manager snippet (GTM-TBSSBW57) on every page.
- Every image gets alt text (placeholder descriptions for Andrew to review).
- Do not delete or rewrite existing case-study content without asking.
- Unused pages go to `archive/`; nothing links to them. Do not upload `archive/`, `brand/` or `new-site-mockups/`.
- Preview through Live Server; partials don't load from file://.

## Copy
- Write copy following brand-voice.md.
- Put square brackets around anything that is a placeholder.
