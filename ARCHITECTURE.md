# CatWebs 2.0 — Architecture Foundation (Phase 1)

## Status

Approved direction: hybrid, corporate-first, evolve the existing navy/cyan identity.

This phase introduces an isolated corporate homepage prototype at `corporate-v2/`. The existing production pages remain untouched and continue to be the source of truth until migration and release gates are passed.

## Architecture decision: static-first hybrid

The initial corporate marketing experience is implemented as semantic HTML, modern CSS and small vanilla JavaScript modules. This is intentional:

- The current corporate site is primarily content, navigation and lead-generation pages.
- It does not currently require a client-side application runtime.
- Static HTML keeps initial payloads and deployment requirements small.
- It works with the existing GitHub Pages-style hosting model.
- It avoids adding a build toolchain before there is a demonstrated need.

The wider CatWebs platform remains hybrid: corporate marketing pages and industry demonstrations can remain static, while a future complex interactive application or internal production tool can use React/Vite or another component framework in its own bounded application. Do not introduce React to a static page solely for consistency.

## Current structure

```text
catwebs-main/
├── corporate-v2/             # New isolated corporate homepage prototype
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── images/                # Optimised/shared WebP assets copied for prototype
├── clinic-demo/               # Existing static demonstration; not migrated yet
├── coaching-demo/             # Existing static demonstration; not migrated yet
├── css/                       # Existing production styles; unchanged
├── js/                        # Existing production scripts; unchanged
├── assets/                    # Existing production assets; unchanged
└── documentation/catwebs-2.0/
```

## Rendering and deployment

- `corporate-v2/index.html` is a standalone static page and can be previewed by serving the repository root with a local static server, then opening `/corporate-v2/`.
- Asset paths are relative to `corporate-v2/`.
- Links to existing production pages use `../` paths so the prototype can live in a subdirectory during review.
- Before promotion to the domain root, update internal links, canonical URL, metadata and navigation destinations as part of a dedicated migration task.
- Do not copy `corporate-v2/` over the production root until the full-page migration and regression tests are complete.

## Design system foundation

The first prototype centralises the base design tokens in `corporate-v2/styles.css` under `:root`:

- Brand navy: `#071b3d`
- Supporting blue: `#1558b7`
- Cyan accent: `#13b9e9`
- Main text: `#102341`
- Muted text: `#61728b`
- Border: `#dce5ef`
- Pale surface: `#f4f8fc`
- Content max width: `1200px`

Typography uses Manrope for display headings and DM Sans for body/interface text. The existing CatWebs logo and WebP assets are retained.

## Migration rules

1. Preserve existing public URLs unless a redirect strategy is explicitly approved.
2. Preserve the existing contact workflow; the new homepage links to the existing contact page and does not invent a new form backend.
3. Keep demo pages independently deployable.
4. Migrate one page family at a time.
5. Compare mobile and desktop behaviour before and after each migration.
6. Remove duplicated assets only after confirming every reference and fallback.
7. Never publish API keys, access tokens or private environment values.
