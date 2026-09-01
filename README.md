# TszPi Portfolio Framework

> A consistent, readable system for personal portfolios and project case studies.

| **One identity** | **Flexible stories** | **Easy to extend** | **Easy to adapt** |
|---|---|---|---|
| Every page feels related. | Projects keep their character. | New pages use known parts. | Replace tokens, not layouts. |

---

## 01 · Start here

```text
Brand system
   ├── Page anatomy ........ same hierarchy everywhere
   ├── Design tokens ....... colour, type, space, width
   ├── Components .......... header, hero, section, card, media, CTA
   └── Project themes ...... controlled personality, shared usability
```

| If you are… | Start with | Then change |
|---|---|---|
| Adding a normal page | [`framework/page-template.html`](framework/page-template.html) | Content and active nav item |
| Adding an index page | [`framework/index-template.html`](framework/index-template.html) | Title, list items, optional left filter |
| Adding a project | Same template + `theme-project` | Project colour tokens and story modules |
| Making this your own | [`framework/framework.css`](framework/framework.css) | `:root` tokens only |
| Updating the existing site | This document | Migrate one component at a time |

The framework files are intentionally **not linked to the live pages yet**. They are a safe reference implementation; adopting them will not silently change the current website.

---

## 02 · The visual idea

### Calm editorial structure + technical precision

| Voice | Tool | Use |
|---|---|---|
| **Clear** | DM Sans | Titles, paragraphs, interface text |
| `Precise` | DM Mono | Labels, dates, indices, metadata |
| *Human* | Georgia | One short highlighted phrase in a title |

```text
quiet canvas  +  dark ink  +  one warm accent
     80%             15%             5%
```

The interface should feel calm before it feels impressive. Personality comes from strong work, images, pacing, and one accent—not from changing the entire visual grammar on every page.

---

## 03 · Page families

Every page belongs to one of three families.

| Family | Purpose | Required order | Hero |
|---|---|---|---|
| **Home** | Introduce the person | Identity → About → Skills → Work → Experience → Contact | Name + one-sentence positioning + portrait |
| **Index** | Help visitors find content | Compact title + immediately visible list/grid → Bottom home link | Desktop split view; compact mobile intro |
| **Case study** | Explain one project | Promise → Facts → Problem → Process → Evidence → Outcome → Next | Project name + value proposition + metadata |

### Universal page anatomy

```text
┌────────────────────────────────────────────────────────────┐
│ BRAND                      ABOUT  PROJECTS  NEWS  CONTACT   │  88 px
├────────────────────────────────────────────────────────────┤
│ PROJECTS / PROJECT NAME                                    │  Breadcrumb
│                                                            │
│ One clear page title.                                      │
│ One short promise, never a mini essay.                     │  Hero
│                                                            │
│ ROLE        INSTITUTION        TIMELINE        CONTEXT       │  Project only
├────────────────────────────────────────────────────────────┤
│ 01 / LABEL          Section title                           │
│                     Readable copy                           │  Section
│                     Evidence / image / cards                │
├────────────────────────────────────────────────────────────┤
│ NEXT                One obvious action →                    │
├────────────────────────────────────────────────────────────┤
│ © NAME                                      SHORT CREDIT    │
└────────────────────────────────────────────────────────────┘
```

### What must stay identical

- Header height, brand position, navigation labels, and navigation order
- Type families and type hierarchy
- Main content width and paragraph measure
- Section numbering and metadata style
- Focus states, link behaviour, footer anatomy, and mobile breakpoints

### What projects may customise

- Accent colour
- Canvas/surface colours, if contrast remains accessible
- Hero media and image treatment
- The sequence of story modules after the required project facts
- Small motion details that also respect `prefers-reduced-motion`

> A project theme may change the **mood**, never the **navigation or reading rules**.

---

## 04 · Navigation standard

### One header everywhere

| Element | Desktop | Mobile | Rule |
|---|---:|---:|---|
| Header | 88 px | 70 px | Always uses a bottom hairline |
| Brand | 21 px DM Mono | Same | `Name` + accent dot |
| Links | 14 px | 11–12 px | Same labels and order |
| Horizontal padding | 32 px | 20 px | Aligns with all page content |

**Canonical labels**

```text
About  ·  Projects  ·  News  ·  Contact
```

- Use `aria-current="page"` for the active destination.
- The logo always returns home.
- Never replace the global navigation with project-only links.
- Project-specific navigation belongs below the header or in an in-page jump list.
- Avoid “Back home” when the logo already performs that action.

---

## 05 · Type system

### The only eight sizes

| Token | Desktop behaviour | Role | Max use |
|---|---|---|---|
| `display` | `clamp(72px, 10vw, 144px)` | Home name / exceptional statement | Once per page |
| `h1` | `clamp(56px, 7.5vw, 104px)` | Page title | Once per page |
| `h2` | `clamp(40px, 5vw, 72px)` | Major section | Once per section |
| `h3` | `clamp(28px, 3vw, 40px)` | Card / subsection | As needed |
| `h4` | `22px` | Small grouped content | Sparingly |
| `lead` | `18–22px / 1.65` | Hero or section introduction | One short paragraph |
| `body` | `16px / 1.7` | Reading text | Default |
| `label` | `11px / 1.4` | Eyebrow, metadata, indices | Uppercase DM Mono |

### Reading rules

| Do | Avoid |
|---|---|
| 45–75 characters per line | Full-width paragraphs |
| One thought per paragraph | Long walls of text |
| Sentence case headings | Every Word Capitalised |
| Left-aligned body copy | Centred paragraphs over two lines |
| Bold for meaning | Bold as decoration |
| Serif emphasis for 1–4 words | Whole serif headings |

```html
<p class="eyebrow">01 / PURPOSE</p>
<h1>Build things that feel <em class="editorial">human.</em></h1>
<p class="lead">One clear sentence that frames the page.</p>
```

---

## 06 · Colour system

### Core portfolio palette

| Canvas | Surface | Strong surface | Text | Accent |
|---|---|---|---|---|
| `#F4F1E9` | `#EBE7DC` | `#D7DED1` | `#18251F` | `#DE4B2D` |

### Approved dark project palette

| Canvas | Surface | Text | Muted | Accent |
|---|---|---|---|---|
| `#103629` | `#174A39` | `#F5F3ED` | `#B9C9BD` | `#C3ED63` |

### 80 / 15 / 5 rule

| Share | Role | Examples |
|---:|---|---|
| **80%** | Canvas and open space | Page background, large reading areas |
| **15%** | Surfaces and structure | Cards, dividers, media backgrounds |
| **5%** | Accent | Labels, active states, key link, one phrase |

Never place body copy in the accent colour. Never rely on colour alone to communicate state. Text must meet WCAG AA contrast: **4.5:1 body**, **3:1 large text and controls**.

### Creating another person’s version

Change roles, not selectors:

```css
:root {
  --color-canvas: #f4f1e9;
  --color-text: #18251f;
  --color-accent: #de4b2d;
}
```

Limit a new identity to one canvas, one ink, one accent, two surfaces, and one border colour.

---

## 07 · Spacing and layout

### Spacing scale

```text
4 ─ 8 ─ 12 ─ 16 ─ 24 ─ 32 ─ 48 ─ 64 ─ 96 ─ 128 px
```

Do not invent values between steps. Repetition creates rhythm.

| Context | Desktop | Mobile |
|---|---:|---:|
| Content width | 1160 px | viewport − 40 px |
| Immersive width | 1440 px | viewport − 40 px |
| Reading width | 640 px | 100% |
| Major section padding | 96 px | 72 px |
| Hero padding | 128 / 64 px | 96 / 64 px |
| Card gap | 16 px | 16 px |

### Grid choices

```text
Narrative       25% label  │  75% content
Comparison      1fr        │  1fr
Card group      1fr        │  1fr        │  1fr
Editorial       1.3fr      │  0.7fr
```

Use a two-column layout only when both columns answer the same question or deliberately pair explanation with evidence.

---

## 08 · Component library

### Hero

**Required:** eyebrow → one `h1` → lead → metadata or primary action.

- H1: ideally 3–10 words; maximum two designed lines.
- Lead: maximum 160 characters.
- Home hero may include a portrait; index heroes normally do not.
- Project hero must begin with a clickable `Projects / Project name` breadcrumb.
- Project hero must include role, institution, timeline, and context in one shared four-column facts row.
- A hero with a full-width colour or gradient must use `.full-bleed-background`. Never apply that background only to a section trapped inside a padded shell: the exposed padding creates visible vertical seams at the viewport edge.

### Section

```text
01 / PURPOSE     A conclusion-led section title.
                 One short setup paragraph.
                 Evidence directly below.
```

- Section headings should state the takeaway, not merely say “Process”.
- One dominant idea per section.
- Use a divider between major sections; use whitespace inside them.

### Cards

Use cards for **comparable, repeatable items** only.

| Good | Bad |
|---|---|
| Three interaction modes | One paragraph placed in a box |
| Projects in an archive | Every section turned into a card |
| Skills of equal depth | Cards with wildly different content length |

All cards in a row share padding, heading level, content order, and interaction pattern.

### Images and video

| Asset | Ratio | Rule |
|---|---:|---|
| Case-study evidence | `16:10` | Show detail; no decorative crop when evidence matters |
| Video | `16:9` | Always preserve ratio |
| Portrait | `4:5` | Crop consistently around face and shoulders |
| Card thumbnail | `4:3` | Same ratio for every sibling card |

Every informative image needs useful alt text. Every evidence image needs a caption answering: **what should I notice?**

### Buttons and links

| Pattern | Use |
|---|---|
| Filled button | One primary page action |
| Underlined text link | Secondary navigation |
| Card link | Whole card is one destination |
| Arrow `↗` | Opens a destination or external resource |
| Arrow `↓` | Scrolls within the same page |

Do not place more than one filled primary action in the same section.

### Project ending

Project detail pages end with their final story module and proceed directly to the footer. Do not add duplicate **View other projects**, **Back to home**, “Next”, or closing-navigation controls; the canonical header already provides global navigation.

### Footer

Always contains the owner and copyright year. Project pages add the project name at the right edge. Do not add “Built with care.” or a new navigation hierarchy.

### Index-page first screen

News and project indexes must show real content without an initial scroll. On desktop, use a left title column and right list/grid column. On mobile, compress the title area so the first item is visible in the initial viewport. Put a lightweight underlined `Back to home ↗` link after the final list item in the left column—never a large card, and never in the header.

On the Projects index, category filters belong in the left title column. The right content column contains project cards only—no archive label, sorting controls, or result count.

News items use native `<details>` disclosure cards. Keep the collapsed summary compact, expand the story in place, and never open a modal for ordinary news content. The entire `<summary>` must be keyboard accessible and show an explicit Open/Close state aligned to the lower-right corner.

---

## 09 · Case-study storytelling

```text
Promise → Context → Problem → Decisions → Evidence → Outcome → Reflection / Next
```

| Module | Question it answers | Best evidence |
|---|---|---|
| Promise | What is this and why care? | Final image / short video |
| Context | What situation created it? | Observation / concise facts |
| Problem | What needed to change? | Quote, data, diagram |
| Decisions | Why this solution? | Alternatives and trade-offs |
| Evidence | Does it work? | Prototype, test, result |
| Outcome | What changed? | Final system + measurable result |
| Reflection | What did you learn? | 2–3 honest takeaways |

Show process as decisions, not as a chronological dump of everything produced.

---

## 10 · Content standards

### Voice

| Prefer | Avoid |
|---|---|
| “I designed and tested…” | “We were tasked with…” |
| Specific role and contribution | Ambiguous team ownership |
| Evidence before adjectives | “Innovative”, “amazing”, “unique” |
| Short, active sentences | Academic abstraction |
| Honest constraints | Pretending every choice was perfect |

### Project card checklist

```text
[01] Project name
     Year · 1–2 disciplines
     One-sentence result or purpose
     Clear status: Live / Case study / In progress
```

### Dates and labels

- Use `2026` or `AUG 2026`; do not mix date formats on the same page.
- Use `·` between metadata items and `/` inside numbered labels.
- Use sentence case for project names and headings.

---

## 11 · Responsive and accessibility baseline

The framework breakpoint is **768 px**. Add another breakpoint only when content—not a device name—requires it.

| Requirement | Standard |
|---|---|
| Keyboard | Every control reachable and visibly focused |
| Touch target | Minimum `44 × 44 px` |
| Zoom | Works at 200% without horizontal page scroll |
| Motion | Reduced-motion preference respected |
| Headings | One H1; no skipped hierarchy |
| Landmarks | Header, nav, main, sections, footer |
| Images | Meaningful alt; empty alt for decoration |
| Forms | Visible label; error explained in text |
| Links | Purpose understandable outside surrounding paragraph |

### Small-screen order

1. Context label
2. Heading
3. Lead or explanation
4. Primary evidence
5. Supporting content
6. Action

Never hide essential content on mobile. Horizontal scrolling is allowed only for clearly signposted data or media strips.

---

## 12 · Add a new page

1. Copy [`framework/page-template.html`](framework/page-template.html).
2. Move it to the intended route as `index.html`.
3. Correct the relative path to `framework/framework.css`.
4. Set title, meta description, active navigation, eyebrow, H1, and lead.
5. Keep only the modules needed by the story.
6. Add the page to the project index and relevant navigation.
7. Test at 375, 768, 1024, and 1440 px.
8. Check keyboard order, focus, headings, alt text, contrast, and broken links.

### Minimum project file structure

```text
projects/
└── project-name/
    ├── index.html
    └── assets/
        ├── hero.webp
        ├── process-01.webp
        └── outcome.webp
```

Use lowercase kebab-case filenames. Compress photos to WebP where practical; keep originals outside the deployed repository.

---

## 13 · Definition of done

### Visual

- [ ] Uses only framework tokens for colour, type, spacing, and width
- [ ] Global header matches every other page
- [ ] One H1 and a clear heading hierarchy
- [ ] Paragraphs stay within the reading measure
- [ ] Repeated cards have equal structure
- [ ] Accent remains close to 5% of the page

### Content

- [ ] The hero explains the page within five seconds
- [ ] Project role and contribution are explicit
- [ ] Every section has one takeaway
- [ ] Evidence supports claims
- [ ] The page ends with one clear next action

### Quality

- [ ] No broken internal links or missing assets
- [ ] Keyboard and mobile interaction tested
- [ ] Images have correct alt text and dimensions
- [ ] No console errors
- [ ] HTML validates without new errors
- [ ] Page works without animation

---

## 14 · Migration map for the current site

| Current page | Keep | Standardise next |
|---|---|---|
| Home | Personal voice, portrait, content | Canonical nav, hero spacing, type tokens |
| News | Timeline/list format | Canonical header, standard index hero |
| Projects | Filters and project cards | Canonical hero and card metadata |
| TILT | Strong green identity, rich evidence | Keep global header anatomy; use project theme tokens |
| TILT process | Detailed decision evidence | Reduce nested visual systems; standard section rhythm |
| Product Design | Collection art direction | Canonical project hero, metadata, section grid |

Recommended migration order:

```text
1. Tokens → 2. Header/footer → 3. Type → 4. Heroes → 5. Sections → 6. Cards
```

This order produces visible consistency early while keeping each change reviewable.

---

## Framework files

| File | Purpose |
|---|---|
| [`framework/framework.css`](framework/framework.css) | Canonical tokens and reusable components |
| [`framework/page-template.html`](framework/page-template.html) | Copy-ready accessible page skeleton |
| [`framework/index-template.html`](framework/index-template.html) | Shared News / Projects / collection index skeleton |
| [`README.md`](README.md) | Design, content, and quality standard |

**Framework version:** `1.0` · **Status:** reference-ready, live-site migration pending
