# DESIGN.md — Portfolio Dafa Huda Rifa'i

Style direction. Read this before touching UI.
Paired with `ANTISLOP.md` (filter).

## Identity
Personal portfolio for full-time job applications in front-end / UI-UX /
IoT. Audience: hiring managers and technical leads in Indonesia. Not a
freelance shop, not an agency.

The site must feel like a portfolio, not a résumé. It must earn attention
without shouting.

## Voice
- Bahasa Indonesia baku. Not corporate, not casual, not slangy.
- Claims over adjectives. "Membangun dashboard SDM untuk 1.284 pegawai" beats
  "passionate about clean and modern UI".
- First person singular ("saya") is fine. Never "we", never royal.
- Ban list in copy: *clean, modern, seamless, elegant, journey, empower,
  passion, cutting-edge, next-gen, revolutionary*. Also ban "bersih" and
  "tenang" as descriptors — they've become the Indonesian equivalent slop.

## Palette
Editorial cream + one warm accent. Restraint is the statement.

```
--color-bg:      #F2F1EC   cream, main surface
--color-surface: #FFFFFF   cards
--color-ink:     #0B0B0B   near-black, headings & body
--color-muted:   #6B6B66   secondary text (WCAG AA on cream: verified)
--color-line:    #D9D7CF   hairline borders
--color-accent:  #C64F2E   terracotta — CTA hover, link hover, small accents
```

Rules:
- Accent is **used sparingly**. Never as background, never as gradient,
  never on more than one primary action per section.
- No third color. If a state needs meaning (success/danger), use ink weight
  and typography, not new hues.
- Photos stay high-contrast. No wash, no overlay-to-match-palette.

## Typography
```
Display: Big Shoulders Display 800  (Google Fonts)
Body:    Instrument Sans 400/500/600 (Google Fonts)
```

Rules:
- Display font only on H1, H2, and section titles. Never on buttons, never
  on body.
- Tracking: display `-0.01em` to `-0.015em`. Body: normal. Uppercase labels:
  `+0.12em`.
- Sizes: hero clamp(3rem, 8vw, 6.5rem). Section title clamp(2.25rem, 5vw,
  3.75rem). Body 15–17px. Labels 12px.
- Weight 800 is display; 500–600 is UI; 400 is prose. No 700 anywhere.

## Composition
Surface archetype: **Decide/Learn**. One idea per section. Left-aligned
editorial, not centered. Section label (uppercase 12px) sits above title.

- Grid: 12-column at md+, single column mobile. Sections use `md:col-span-5`
  for title zone + `md:col-span-7` for content.
- Section rhythm: `padding-block: 6rem` mobile, `8rem` desktop.
- Section separator: 1px `--color-line` top border, not filled bands.
- No hero + 3-cards trope. Every section composed for its own content.

## Motion
- Fade + 8px translate on scroll-in, once, 500ms ease. That is all.
- Respect `prefers-reduced-motion` — hard rule.
- One optional "alive" element allowed: a slow marquee of tools/tech under
  the hero, if it carries identity (not decoration).

## Liveliness Dial (from ANTISLOP.md Part 3)
```
ENERGY: 1   (quiet, editorial, not loud)
RHYTHM: 3   (asymmetric grid, size jumps between micro labels and macro headlines)
MOTION: 1   (minimum viable — fade-up only, plus at most one marquee)
```

## Component notes
- **Buttons**: `btn-primary` = ink bg + cream text, hover shifts to accent.
  `btn-ghost` = ink border only. Radius 6px. No pill shapes on primary CTAs.
- **Cards**: 1px `--color-line` border, radius 8px, no shadow. Hover: border
  becomes ink. No colored shadow, no lift.
- **Images**: Real content only. Screenshots for projects, headshot for
  hero. No decorative SVG illustrations, no stock icons above headings.
- **Links in prose**: underline offset, ink color, accent on hover.

## Do not
- Center everything (center stack tell)
- Put an icon above every heading (icon-topper tell)
- Show fake dashboards, invented metrics, or placeholder testimonials
- Use gradient anywhere
- Use glass/blur effects except the nav bar's subtle backdrop-blur when scrolled
- Reach for accent color to "add life" — the life comes from typography and rhythm
