# AFvisions Website Design Guidelines

Design spec for the AFvisions portfolio site (homepage, case-study, collection and contact pages): a dark, gothic-leaning layout on a 1200px column. This file is the source of truth for colors, fonts, spacing, layout and interactions. For copy and tone, see `brand-voice.md`. For the visual reference, see the mockups in `new-site-mockups/`; where a mockup and this file disagree, this file wins and the difference should be raised with Andrew.

## How to use this file

- Treat every value as the spec, except rows tagged **Pending** and the Undecided list at the end. Ask Andrew before building a Pending row or anything in the Undecided list.
- Use the CSS variables below for color, spacing, radius, shadow and overlay values. Do not write raw values.
- **Temporary exception:** sizes that have no variable (font sizes, the 1200px width, grid minimums, image heights, the play button, 1px lines, the 640px breakpoint) may be written as pixel literals for now. Andrew will review how they look and decide whether to add size variables. Remind him at that review.
- Anything in square brackets is placeholder text. Replace it with real content and never ship it as final copy.

## Brand character

The site has personality in the frame and restraint in the content, so the work stays the focus.

- **Gothic, not costume.** Blackletter appears only for the hero name and the wordmark. Page titles and section headings use the italic serif. Everything people read is a clean serif or sans.
- **Dark teal on charcoal.** One panel color (teal) sits on one page color (charcoal).
- **Type is always visible.** Every case-study tile carries its tags at rest, so a visitor knows what kind of work it is without hovering or clicking. Tags describe; they never filter.
- **Two tiers of work.** Case Studies hold the in-depth projects. The Codex holds quick pieces, personal work and series, opened in a lightbox or on a collection page.
- **One damask background (pending).** The pattern sits behind every page at low contrast and never behind text without a panel.

## CSS variables

This block is the single source for hex values, spacing, radii, shadows and overlays. If a table elsewhere in this file disagrees with it, the block wins.

```css
:root {
  /* Color: these ten are the only colors on the site */
  --charcoal: #2A2A2A;
  --dark-teal: #35504C;
  --silver: #DCDCDC;
  --pink: #A34E69;
  --lavender: #6B5A9A;
  --antique-gold: #C9A45C;
  --logo-teal: #9CC2BE;
  --deep-teal: #223230;
  --gold-label: #2A2010;
  --night-teal: #1A2826;

  /* Overlays: palette colors at partial opacity */
  --line-divider: color-mix(in srgb, var(--silver) 25%, transparent);
  --line-image-frame: color-mix(in srgb, var(--silver) 30%, transparent);
  --line-codex-banner: color-mix(in srgb, var(--silver) 30%, transparent);
  --line-ghost-button: color-mix(in srgb, var(--silver) 50%, transparent);
  --tag-fill: color-mix(in srgb, var(--night-teal) 60%, transparent);
  --tag-border: color-mix(in srgb, var(--silver) 35%, transparent);
  --pink-veil: color-mix(in srgb, var(--pink) 93%, transparent);
  --lightbox-backdrop: color-mix(in srgb, var(--charcoal) 92%, transparent);

  /* Fonts */
  --font-blackletter: "UnifrakturCook", serif;                 /* 700 */
  --font-serif: "Averia Serif Libre", Georgia, serif;          /* italic 400 */
  --font-sans: "Inter", system-ui, sans-serif;                 /* 400, 500, 600 */

  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 44px;

  /* Radius */
  --radius-frame: 6px;
  --radius-button: 8px;
  --radius-codex-tile: 10px;
  --radius-card: 12px;
  --radius-panel: 14px;
  --radius-pill: 999px;

  /* Shadows: neutral black, not counted as colors */
  --shadow-panel: 0 8px 24px rgb(0 0 0 / 0.4);
  --shadow-tile: 0 6px 18px rgb(0 0 0 / 0.35);
  --shadow-codex-tile: 0 4px 12px rgb(0 0 0 / 0.35);
  --shadow-lightbox: 0 12px 40px rgb(0 0 0 / 0.6);

  /* Transitions */
  --duration-fast: 0.2s;
  --duration-tile: 0.25s;
}
```

## Colors

These ten colors are the only colors on the site. Overlays and placeholders are one of them at partial opacity. Hex values live in the CSS variables block.

| Name | Variable | Role |
| --- | --- | --- |
| Charcoal | `--charcoal` | Page background |
| Dark Teal | `--dark-teal` | Panels and cards |
| Silver | `--silver` | Text, links, primary button |
| Pink | `--pink` | Content hover and active state |
| Lavender | `--lavender` | Navigation hover |
| Antique Gold | `--antique-gold` | Button hover |
| Logo Teal | `--logo-teal` | AFvisions wordmark |
| Deep Teal | `--deep-teal` | Button label |
| Gold Label | `--gold-label` | Text on gold |
| Night Teal | `--night-teal` | Ghost button hover |

**Pink and buttons.** Pink never goes on action buttons such as Contact Me or View Brochure, because it can read as a stop or error. Close is the one exception, and selected chips are Pink because they show state, not an action.

**Overlays**

| Element | Value | Variable |
| --- | --- | --- |
| Divider lines | 1px Silver at 25%, with a 10px Pink diamond | `--line-divider` |
| Tag fill and border | Night Teal at 60% fill, 1px Silver at 35% border | `--tag-fill`, `--tag-border` |
| Image frame | 1px Silver at 30% | `--line-image-frame` |
| Pink veil | Pink at 93%, hover cover on tiles | `--pink-veil` |
| Lightbox backdrop | Charcoal at 92% | `--lightbox-backdrop` |
| Codex banner border | 1px Silver at 30% | `--line-codex-banner` |
| Ghost button border | 1px Silver at 50% | `--line-ghost-button` |
| Shadows | Neutral black, set per element in the "Panels, cards and grids" table | `--shadow-*` |

**Damask pending.** The pattern file has not been supplied. Until it is, use a plain Charcoal background and do not invent a pattern. The intended values for the file are Pink at 14% for the ring, tiled every 120px, and Pink at 10% for the dot, tiled every 60px.

**Placeholder tile colors.** The tile backgrounds are temporary stand-ins for real image crops. They use only Dark Teal, Night Teal, Lavender and Pink.

## Typography

Three families do three jobs: blackletter for identity, an italic serif for headings and labels, and a clean sans for everything people read.

| Role | Font (Google Fonts) | Weights loaded |
| --- | --- | --- |
| Blackletter: hero name, wordmark | UnifrakturCook | 700 |
| Italic serif: headings, labels, hover text | Averia Serif Libre Italic | 400 |
| Sans: body, navigation, buttons, tags | Inter | 400, 500, 600 |

Load all three with one link in the `<head>` of every page:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@1,400&family=Inter:wght@400;500;600&family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">
```

**Type scale**

| Style | Font | Size / line height | Weight | Color | Used for |
| --- | --- | --- | --- | --- | --- |
| Hero name | UnifrakturCook | 84px / 0.95, scales down on phones | 700 | Silver | Homepage name |
| Page title | Averia Serif Libre Italic | 56px / 1, scales down on phones (36px minimum) | 400 | Silver | Case-study and collection titles |
| Section heading | Averia Serif Libre Italic | 36px | 400 | Silver | Case Studies and Codex titles |
| Wordmark | UnifrakturCook | 30px (header), 26px (footer) | 700 | Logo Teal | AFvisions mark |
| Tagline and field labels | Averia Serif Libre Italic | 22px | 400 | Silver | Hero tagline, Project Type, Software + Tools, Problem, Solution, Impact |
| Sub-label | Averia Serif Libre Italic | 18px | 400 | Silver | Featured label, Codex tagline |
| Hover and banner text | Averia Serif Libre Italic | 24px (case-study veil, banner titles, lightbox title), 18px (Codex veil) | 400 | Silver | Veils, collection banners, lightbox |
| Card title | Inter | 18px | 600 | Silver | Case-study tile titles |
| Body | Inter | 16px / 1.65 | 400 | Silver | All running paragraphs |
| Detail text | Inter | 15px / 1.6 | 400 | Silver | Case-study details, tools list |
| Navigation | Inter | 15px | 500 | Silver | Header links |
| Button and chip | Inter | 16px (buttons), 14px (chips) | 600 | Deep Teal on Silver (primary), Silver (ghost, chips) | Buttons, Codex filter chips |
| Tag | Inter | 12px (tiles), 13px (case-study page) | 500 | Silver | Pill tags |
| Caption and count | Inter | 14px | 400 | Silver | Lightbox caption, project count |
| Footer text | Inter | 13px | 400 | Silver | Copyright |
| Tile label and badge | Inter | 12px (label), 11px (category badge) | 500 | Silver | Codex tiles |

Blackletter is kept to display sizes of 26px and up. Below that, it is hard to read, so smaller headings use Averia Serif Libre Italic. Line height: where the table gives none, use 1.2 for headings, taglines, labels and card titles, and 1.4 for UI text such as navigation, buttons, chips, tags, captions and badges.

## Site structure

The site is plain HTML and CSS hosted on Namecheap, with no build step. It is built for easy maintenance, not email compatibility: no table layouts and no inline styles.

| Path | Holds |
| --- | --- |
| `index.html` | Homepage: hero, Case Studies, Codex |
| `contact.html` | Contact page |
| `portfolio/p-<project>.html` | Case-study pages, all built from one template (57 West is the reference) |
| `codex/<collection>.html` | Collection pages, all built from one template (Halloween Cards is the reference) |
| `css/site.css` | The one stylesheet, including the CSS variables block |
| `js/` | Scripts, lowercase folder name (the host is case-sensitive) |
| `partials/header.html`, `partials/footer.html` | The one header and the one footer, inserted into every page by `js/include.js` |
| `images/` | All images |
| `brand/` | This file and `brand-voice.md`. Not uploaded |
| `archive/` | Unused pages and images. Nothing on the live site links here. Not uploaded |

- Every page keeps the Google Tag Manager snippet (`GTM-TBSSBW57`) and the Google Analytics tag (`G-MT9WN4B9BP`) written directly into its own `<head>`, never loaded from a partial. Keep both unless Andrew says otherwise.
- When a page stops being used, move it to `archive/` and remove every link to it.
- Partials load only through a server, so preview with Live Server, not by opening the file directly.
- Do not upload `archive/`, `brand/` or `new-site-mockups/` to the host.

## Spacing and layout

Every page uses one centered column up to 1200px wide, with 16px side margins and 32px between sections. Panels are rounded rectangles on the charcoal page. All padding, gaps and margins come from one scale. Dimensions such as image heights, the 1200px width and the 72px play button are sizes, not spacing, and sit outside the scale. The tables in this section show pixel values for reading: 4, 8, 12, 16, 24, 32 and 44px map to `--space-1` through `--space-7`. In code, write the variable, not the pixels.

**Spacing scale**

| Step | Variable | Value | Typical use |
| --- | --- | --- | --- |
| 1 | `--space-1` | 4px | Tag vertical padding on tiles |
| 2 | `--space-2` | 8px | Gap between tags and nav links, image-frame inset, chip vertical padding |
| 3 | `--space-3` | 12px | Gap between chips, title-to-tags gap, nav link vertical padding, tag horizontal padding |
| 4 | `--space-4` | 16px | Page side margins, header padding, divider gap, Codex grid gap, button vertical padding |
| 5 | `--space-5` | 24px | Button horizontal padding, Codex banner and lightbox padding, Collection grid gap |
| 6 | `--space-6` | 32px | Gap between page sections and hero columns, case-study grid gap, footer side padding |
| 7 | `--space-7` | 44px | Panel padding, page bottom padding |

**Page structure**

| Element | Value |
| --- | --- |
| Content width | 1200px maximum, centered, 16px side padding |
| Gap between sections | 32px |
| Header | 16px top and bottom padding, wordmark left, nav right, wraps on narrow screens |
| Page bottom padding | 44px |
| Section divider | 1px lines either side of a 10px Pink diamond rotated 45°, 16px gap |

**Panels, cards and grids**

| Element | Padding | Gap | Radius | Shadow |
| --- | --- | --- | --- | --- |
| Hero panel | 44px | 32px between columns | `--radius-panel` | `--shadow-panel` |
| Case-study page panel | 44px | 32px between columns | `--radius-panel` | `--shadow-panel` |
| Collection intro panel | 44px | 16px | `--radius-panel` | `--shadow-panel` |
| Footer | 24px 32px | 12px | `--radius-panel` | none |
| Case-study tile | Info area 16px 16px 24px | 12px between title and tags | `--radius-card` | `--shadow-tile` |
| Codex banner | 24px | 16px | `--radius-card` | none, with a 1px `--line-codex-banner` border |
| Codex tile | none | n/a | `--radius-codex-tile` | `--shadow-codex-tile` |
| Lightbox panel | 24px | 16px | `--radius-panel` | `--shadow-lightbox` |

**Grids**

| Grid | Columns | Gap | Image height |
| --- | --- | --- | --- |
| Case studies | Auto-fill, 300px minimum | 32px | 240px |
| Codex quick pieces | Auto-fill, 200px minimum | 16px | 200px |
| Collection page | Auto-fill, 260px minimum | 24px | 300px |
| Case-study page thumbnails | Auto-fill, 160px minimum | 16px | 110px |

**Components**

| Element | Size |
| --- | --- |
| Primary and ghost buttons | 16px 24px padding, `--radius-button` |
| Navigation links | 12px 16px padding, `--radius-button`, 8px between links. Below 640px: 12px 12px padding, 4px between links, and the nav pulls left 12px so the first link lines up with the wordmark |
| Codex filter chips | 8px 16px padding, 44px minimum height, `--radius-pill` |
| Tags | 4px 12px padding on tiles, 8px 12px on the case-study page, `--radius-pill`, 8px between tags |
| Image frame | Inset 8px, 1px line, `--radius-frame` |
| Play button | 72px circle |
| Lightbox image | 440px high, panel 860px maximum width |

**Responsive behavior.** Two-column rows (hero, case-study page, contact page) wrap to a single column when the screen is too narrow for both: the hero columns start at 520px and 420px, and the case-study page columns at 560px and 380px. Grids reflow by themselves. The header and nav wrap. The hero name scales down to fit narrow screens, with 84px as its maximum. The one breakpoint is 640px: below it, the padding of the hero, case-study page, collection intro and contact panels drops from 44px to 24px (`--space-5`).

## UX elements

- **Hover colors.** Lavender for navigation, Pink for content and Antique Gold for buttons, because Pink can read as a stop or error.
- **Transitions.** Short: `--duration-fast` on navigation and buttons, `--duration-tile` on tiles.
- **Pending rows.** Rows marked Pending are not final, so ask before building them. Every other row is final.
- **Focus, tap targets and reduced motion.** A 2px Silver outline with a 2px offset on keyboard focus for every link, button, chip, tile and card; a 44px minimum height for tap targets; and no transitions, lifts, slides or flips when the user prefers reduced motion (changes happen instantly instead).
- **Touch cues.** Kept minimal: on touch screens a tap goes straight to the link, lightbox or pop-up, with no hover step. Nothing more for now.
- **Alt text.** Every image needs alt text: a short description of what it shows, written by Claude as a placeholder for Andrew to review.

| Element | What it is | Behavior and rules |
| --- | --- | --- |
| Header navigation | Wordmark on the left. Links: Work (scrolls to the case studies), Contact, LinkedIn (https://www.linkedin.com/in/andrewfumagalli/), GitHub (https://github.com/AFvisions). No About link: the hero is the about-me section. No Twitter. | Lives once in `partials/header.html`. Links are Silver on the page color. On hover the link fills Lavender with Silver text. |
| Hero panel | Blackletter name, italic tagline, short intro, Contact Me button, "See the work" link. The featured video sits beside it as part of the hero. There is no separate hero image. | The two columns stack on narrow screens. The name scales down on phones (84px maximum). The button turns Antique Gold on hover. |
| Featured video | Teal card with a 72px Pink circular play button and the video title along the bottom. | Links out to the video (currently YouTube `Ac8qimoUMcE`, to be confirmed). Replace the placeholder with a real thumbnail; its size may change later. |
| Section divider | A thin line, a Pink diamond, a thin line. | Placed between Case Studies, the Codex and the footer. Decorative only. |
| Case-study tile | Image area, title, tags. The whole tile is one link to its case-study page. | On hover or keyboard focus a Pink veil fades in over the image with "Read the case study" in Averia Serif Libre Italic, and the tile lifts 4px. |
| Tags | Pill labels from a fixed list: Graphic Design, Signage, Print, Email, Illustration, Logos, Photo Manipulation. | High-level descriptors so a visitor sees at a glance what the work involves. They are not filters: never clickable or sortable, no hover state, no pointer cursor, and not marked up as links or buttons. Keep to one to four per project, in Title Case. Current case studies: 57 West (Graphic Design, Print, Illustration), SXSW (Signage, Print), JEFFCO (Email, Graphic Design). |
| Primary button | Silver fill, Deep Teal label, `--radius-button`. | On hover it fills Antique Gold with a Gold Label and lifts 2px. Never Pink. One primary button per area. Used for Contact Me in the hero, which links to the contact page because email is only one way to get in touch, and for View Brochure on case-study pages. |
| Ghost button | Transparent with a 1px `--line-ghost-button` border, Silver label, `--radius-button`. This is the secondary button. | Used for secondary actions such as All projects, beside a primary button when needed. On hover it fills Night Teal, the border turns solid Silver and the label stays Silver, with no lift. |
| Text link | Silver, medium weight, with an arrow (← or →). | Underlines on hover. Used for back links and "See the work". |
| Case-study page | One template for every case study, modeled on the 57 West mockup. "← Back to all work" link above the panel. Left column: large image and four thumbnails. Right column: page title, Project Type tags, Software + Tools, Problem, Solution, Impact, then buttons (a primary button when there is something to view, plus an "All projects" ghost button). | Field labels are Averia Serif Libre Italic. Problem, Solution and Impact follow the Case study format in `brand-voice.md`, which governs their content and tone. Existing text may be sorted into these fields without rewording; missing fields get bracketed placeholders. |
| Codex banner | A wide card linking to a themed collection page, with a title, one line of description and "View Collection →". | On hover or keyboard focus a Pink veil eases in from the right and reads "View Collection" in Averia Serif Libre Italic. The same behavior applies to every collection banner (Halloween Cards, Illustration Collection and any future one). |
| Codex filter chips | All, Illustration, Photo Manipulation, Logos, Email. | These filter the Codex tiles. One is selected at a time. Selected is a Pink fill with Silver text; unselected is Dark Teal with a 1px border. The selected chip also shows a checkmark (✓) before its label, so the state does not rely on color alone. 44px minimum height. |
| Codex tile | Small square image with a category tag (badge) in the lower left, as in the mockup. | The badge names the piece's category from the chip list. The Pink veil reads "View larger" on hover. A click opens the lightbox, which loads the image larger at its native dimensions. Current tiles include Applied Bioplastics (Email), RecoSweep (Email) and The Nasty Nuggets (Logos). |
| Lightbox | Dark backdrop, a teal panel with a 440px image, title, caption, Previous, Next and Close. | Caption format: "Category · Medium, Year". Previous and Next wrap around within the active filter. Keyboard: Escape closes it, the arrow keys move between pieces, and focus stays inside while it is open. Close is the only Pink button. |
| Collection page | One template for every collection, modeled on Halloween Cards. "← Back to the Codex" link. Page-title headline with a short blurb under it, top left. Then a grid of portrait cards, four per row, newest first, with a caption under each card. | Halloween cards are 5×7 portrait; each collection may set its own card shape. On hover or keyboard focus a card flips to its back. A click opens a pop-up over the `--lightbox-backdrop` showing front and back side by side (stacked on phones), with Escape to close and focus kept inside. The back is optional: a card without one does not flip, and the pop-up shows the single image. Adding a card means copying one HTML block and adding its images, so the grid grows a row at a time. |
| Contact page | One panel, one row, two columns: a circular portrait image on the left (placeholder until Andrew supplies it), and an email section on the right. | The Contact Me button and the Contact nav link go here. May carry over useful pieces of the archived about-me page. Columns stack on narrow screens. |
| Footer | Wordmark and copyright in a Dark Teal bar. | Lives once in `partials/footer.html`. No social icons here; the header links carry them. |

## Contrast checks

Silver on Charcoal, Dark Teal and Night Teal, Logo Teal on Charcoal and Dark Teal, Deep Teal on Silver, and Gold Label on Antique Gold all meet the 4.5:1 WCAG AA standard. Check any new pairing before using it.

**Silver on Pink and Lavender.** Silver measures 3.98 on Pink and 4.31 on Lavender, below 4.5. Decision: Silver is allowed as the label color on Pink and Lavender, including small labels such as the nav-link hover and the selected chip. Use no other label color on those two fills.

**Non-text contrast.** The 3:1 standard for interface boundaries is not met in two places, both advisory:

- **Pink against the page.** Pink on Charcoal measures 2.63, and Pink on Dark Teal 1.60. The selected Codex chip adds a checkmark, so its state does not depend on color.
- **Dark Teal panels.** Panel against page measures 1.64. Panels are separated by their shadow and rounded corners, which is fine for decoration, but never rely on the color difference alone to mark a clickable area.

**Button hover.** Antique Gold against the resting Silver fill measures 1.71, so the change relies on the hue shift and the 2px lift rather than brightness. Antique Gold against the Dark Teal panel measures 3.72, which meets the 3:1 standard.

**Real images.** Label text placed over photos is not covered by these numbers. Use the Pink veil or the category badge's Night Teal fill behind any label that sits on an image.

## Build tasks

These are work to do, not rules. Remove an item when it is done. When the repo exists, move these to GitHub Issues and delete this section, so this spec stays stable.

- [ ] Supply real images for the case-study pages and tiles, the featured video thumbnail, the Codex pieces, the Halloween cards (front and back) and the contact portrait, and fill in the \[Medium, year\] captions.
- [ ] Supply the damask pattern file. Until then the background is plain Charcoal.
- [ ] Write the Halloween Cards and Illustration Collection blurbs and card captions.
- [ ] Build the SXSW and JEFFCO case-study pages from the 57 West template and link their tiles to them.
- [ ] Confirm the featured video link.
- [ ] Replace the placeholder wordmark and add the favicon, which Andrew will supply.
- [ ] Review the pixel literals and decide on size variables (see "How to use this file").

## Undecided: ask before building

These are not decided. Ask Andrew and do not settle them on your own. Questions about a specific element are tagged Pending in its UX elements row instead.

- Social-share image: not decided.
