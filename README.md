# Pepagora — Catalog & Website Editor

A CMS catalog-to-catalog editor built with Next.js. The left side is a live
preview of the catalog website; the right panel edits it. Changes in the panel
appear on the canvas immediately.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/catalog`.

- `/catalog` — catalog overview with the site preview and package details
- `/catalog/editor/[pageId]` — the editor (`home`, `about-us`, `products`, `contact`)

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · SCSS Modules · Zustand

No UI library. The primitives in `components/ui` are built from scratch so the
design could be matched exactly.

## Structure

```
src/
├─ app/                          routes only — no logic
│  └─ (dashboard)/catalog/
│     ├─ page.tsx                catalog overview
│     └─ editor/[pageId]/        editor + loading / error / not-found
│
├─ styles/abstracts/             tokens, breakpoints, mixins
├─ components/
│  ├─ ui/                        Button, Input, Toggle, Tabs, Dropzone…
│  └─ layout/                    marketplace header, icon rail, toolbar
│
├─ features/
│  ├─ catalog-site/              what gets rendered
│  │  ├─ sections/               11 section components
│  │  ├─ registry.ts             section type → component
│  │  └─ types.ts                the Section union
│  └─ editor/                    the panel
│     ├─ forms/                  one form per section type + registry
│     ├─ tabs/                   Contents · My Products · Featured
│     └─ store/                  Zustand
│
├─ hooks/  lib/  mock/
```

Each component keeps its `.tsx`, `.module.scss` and `.types.ts` together with
an `index.ts`, so imports are `@/components/ui/Button` rather than reaching
into the folder.

## How the CMS model works

A page is an ordered list of sections. Each section is discriminated by `type`:

```ts
type Section =
  | { id: string; type: 'hero';     visible: boolean; data: HeroData }
  | { id: string; type: 'overview'; visible: boolean; data: OverviewData }
  // …
```

Two registries map those types to components — one for the canvas, one for the
panel:

```ts
export const SECTION_REGISTRY = {
  hero: { canvas: HeroSection, label: 'Hero Section' },
  // …
} satisfies Registry;
```

`satisfies` is doing real work: add a variant to the union without registering
it and the build fails. Rendering the page is then just a lookup, so adding a
section type means adding a folder and one registry line — no changes to the
canvas or the panel.

## Styling

`next.config.ts` injects `styles/abstracts` into every `.scss` file, so modules
use `$color-primary` or `@include up('md')` without importing anything. Tokens
were sampled from the Figma export (`Home_page.json`).

Breakpoints are mobile-first at 420 / 560 / 768 / 1024 / 1440 / 1920. They sit
just below each target resolution so a target width lands inside its intended
band rather than on the boundary.

Sections size themselves against the editor canvas, not the viewport, so
everything under `features/catalog-site/` uses container queries (`cq-up` /
`cq-down`) while app chrome and the panel use plain media queries.

## Responsive behaviour

Home has a 375px design; 768 and the desktop widths are derived from it and
the 1920 design:

|                    | 375              | 768            | 1440       | 1920       |
|--------------------|------------------|----------------|------------|------------|
| Nav rail           | drawer           | icons          | icons      | icons      |
| Editor panel       | slide-over       | slide-over     | 480px      | 530px      |
| Products / Why us  | 2 col            | 2 col          | 3 / 4 col  | 3 / 4 col  |
| Overview stats     | 2 col            | 2 col          | 4 col      | 4 col      |
| Infrastructure spec| 2 col            | 2 col          | 2 col      | 2 col      |
| Footer link columns| accordions       | accordions     | 3 col      | 3 col      |
| Attribute chips    | 1 + `+N`         | 2 + `+N`       | 2 + `+N`   | 2 + `+N`   |

## What's mocked

There's no backend, so `src/mock/` stands in for the API — catalog, pages and
products. Panel edits live in the Zustand store and are lost on reload; Save
and Publish clear the dirty flag but don't persist.

Section forms are complete for Hero, Why Us, Industries, Products and Contact.
The rest share a generic heading/body form, since their designed content is
headings and copy.

## Notes

- The four catalog pages are pre-rendered with `generateStaticParams`
- Sections render on the server; only the panel and interactive pieces are client components
- Navigation uses the exported artwork in `public/navicons`, applied as a CSS
  mask so the icons inherit `currentColor` (needed for the red active state)
- Other icons are inline SVG (`components/ui/Icon`) rather than a package
- Images are placeholders — the design uses wireframe blocks for most of them
