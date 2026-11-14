# CatWebs 2.0 — Responsive Standards

## Design principle

Mobile is a first-class layout target, not a desktop page compressed to fit a phone. Layouts must be content-driven and fluid. The listed widths are validation checkpoints, not device-specific hard-coded layouts.

## Required viewport checks

- 320px
- 360px
- 375px
- 390px
- 430px
- 560px
- 768px
- 800px
- 1024px
- 1280px
- 1440px

## Layout expectations

### Navigation
- Desktop: inline navigation with clear primary CTA.
- Tablet/mobile: accessible menu button with `aria-expanded` and `aria-controls`.
- Menu closes on link activation and Escape.
- Background page scrolling is locked while the mobile menu is open.
- Keyboard focus remains visible.

### Hero
- Desktop: two-column composition where content and visual both have adequate room.
- Tablet/mobile: single-column layout with content first.
- CTAs stack on narrow screens and remain easy to tap.
- Hero image maintains a deliberate crop and never pushes text off-screen.

### Content sections
- Grids collapse progressively: multi-column desktop, two-column tablet where appropriate, single-column narrow mobile.
- Card text remains readable without hover interaction.
- No fixed-width content that forces horizontal page scrolling.

### Forms and conversion
- Inputs should stack on mobile.
- Use correct input types and explicit labels when forms are introduced.
- Fixed floating actions must not cover form controls or important content.
- CTA labels should communicate the next action.

## Accessibility and motion

- Include a skip link and semantic landmarks.
- All interactive controls must be keyboard-operable.
- Use visible `:focus-visible` styling.
- Respect `prefers-reduced-motion`.
- Do not disable browser zoom.
- Images that convey information need useful alternative text; decorative images use empty alt text.

## Prototype breakpoints

The first corporate prototype uses 1050px, 800px, 560px and 359px breakpoints. These should be adjusted only when content demonstrates a layout need.

## Acceptance checks

- No unintended horizontal overflow.
- No clipped navigation, headings, cards or CTA buttons.
- No overlapping fixed controls.
- Text remains readable without zooming.
- Mobile navigation opens, closes on link selection, closes on Escape and restores page scrolling.
- All major actions remain available without hover.
