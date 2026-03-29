# Cursor Context

Last updated: 2026-03-25

## Purpose

This file is a practical onboarding summary for AI-assisted work in this repo.
It is meant to give Cursor a fast, accurate model of the codebase before making changes.

## Repo Identity

- Project name: `amm-market`
- Framework: Next.js App Router
- Runtime model: primarily static/presentational frontend
- Main product theme: AMM Market, an LP-collateral borrowing concept built around Aave v4
- Important caveat: branding and copy are not fully unified across the repo. `AMM Market`, `Amm Market`, `Dex Mini`, Aave branding, and Crypto.com-style UI all appear in different places.

## Tech Stack

- Next.js `16.1.1`
- React `19.2.3`
- TypeScript `strict`
- Tailwind CSS v4-style setup plus `tailwindcss-animate`
- Radix UI primitives for accordion, tabs, tooltip
- Vitest + Testing Library for unit/component tests
- No backend app code in this repo
- No wallet integration or live protocol execution code in this repo

## High-Level Shape

This is mostly a content-heavy frontend with:

- Marketing pages
- Product landing pages
- A simulated `/webapp` page
- A large developer docs section
- A hand-authored blog
- Legal pages
- SEO utilities like `robots`, `sitemap`, and dynamic OG images

Almost all pages are authored directly as TSX files, not from a CMS or markdown pipeline.

## Important Root Files

- `package.json`: scripts and dependencies
- `next.config.ts`: security headers, image allowlist, compiler/experimental config
- `tsconfig.json`: strict TS + `@/*` alias to `src/*`
- `vitest.config.ts`: jsdom test config
- `src/app/layout.tsx`: global shell, metadata, JSON-LD, header/footer
- `src/app/globals.css`: global styles, animation utilities, docs typography
- `src/data/hero-data.ts`: homepage/shared marketing data
- `src/components/header.tsx`: main site navigation
- `src/components/footer.tsx`: main site footer

## Current App Structure

### Global Shell

`src/app/layout.tsx` provides:

- default metadata and title template
- Open Graph + Twitter metadata
- JSON-LD for organization and website
- a skip link for accessibility
- the global `Header`
- the global `Footer`

### Main Route Groups

- `/`: homepage
- `/webapp`: product-style webapp landing page
- `/faq`: searchable FAQ page
- `/lightpaper`: longform product/architecture paper
- `/open-spoke`
- `/stable-spoke`
- `/bluechip-spoke`
- `/brand`
- `/privacy`
- `/terms`
- `/early-access`
- `/developers/...`: multi-page docs tree
- `/blog/...`: blog index plus individual posts

### Route Counts

At the time of writing:

- total `page.tsx` files: 53
- blog `page.tsx` files: 14
- developer docs `page.tsx` files: 28

## Homepage Architecture

The homepage in `src/app/page.tsx` currently renders:

- `WebappHero`
- `LogoMarquee`
- `BuildTomorrowSection`
- old monolithic `HeroSection`
- `FeaturesSection`

### Important Note: Duplicate Hero Systems

There are two landing page implementations:

1. Old monolithic version:
   - `src/components/hero-section.tsx`
2. New modular version:
   - `src/components/hero/index.tsx`
   - plus `src/components/hero/*`

The homepage is still wired to the old monolithic file, not the newer modular version.

This is one of the biggest architectural facts in the repo.

## Content Strategy

### Blog

- Blog index lives in `src/app/blog/page.tsx`
- Blog data on the index page is hardcoded in the file itself
- Individual blog posts are hand-authored TSX pages
- Posts share `src/components/blog-post-layout.tsx`
- Blog pages often include a `tableOfContents` array and use `ScrollSpySidebar`

### Developer Docs

- Docs section is under `src/app/developers`
- Shared docs layout is in `src/app/developers/layout.tsx`
- Sidebar nav is in `src/components/developer-sidebar.tsx`
- Page-to-page previous/next nav is injected by `DeveloperContentWrapper`
- Docs pages are also hand-authored TSX, usually with local `sections` arrays for scroll spy

### FAQ

- Main FAQ page is `src/app/faq/page.tsx`
- It has category tabs, search, and accordion rendering
- FAQ schema JSON-LD is added in `src/app/faq/layout.tsx`

### Legal / Longform

- `privacy`, `terms`, and `lightpaper` all use a similar two-column longform pattern
- They rely on `ScrollSpySidebar` rather than markdown files

## Shared Data and Reusable Components

### Shared Data

`src/data/hero-data.ts` exports:

- `pools`
- `testimonials`
- `dashboardTabs`

These power ticker, testimonial, and video-preview UI in multiple components.

### Shared UI/Utilities

Reusable primitives live in:

- `src/components/ui/accordion.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/tooltip.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/lazy-section.tsx`

Shared display components live in:

- `src/components/shared/PoolCard.tsx`
- `src/components/shared/SectionHeader.tsx`
- `src/components/shared/VideoPlayer.tsx`

### DeFi Education Helper

`src/components/defi-term.tsx` wraps DeFi terms with tooltip definitions.

This is used heavily in homepage and docs-style educational copy.

## Current Repo Health

### Tests

`npm run test:run` currently executes, but the suite is not fully green.

Current result:

- 19 test files
- 176 tests total
- 171 passing
- 5 failing

Known failing areas:

- `src/components/__tests__/header.test.tsx`
- `src/components/__tests__/hero/HeroHeader.test.tsx`

Interpretation:

- most tests pass
- the failing tests look stale relative to the current implementation, not like catastrophic runtime breakage

### Lint

`npm run lint` currently fails heavily.

The biggest categories are:

- `react/no-unescaped-entities` across many longform content pages
- `react/jsx-no-comment-textnodes` in some blog pages
- a few code-level issues such as:
  - `react-hooks/set-state-in-effect`
  - `@typescript-eslint/no-require-imports`
  - invalid aria props on `role="button"`

Practical takeaway:

- the repo is not currently lint-clean
- many lint errors are content-formatting issues rather than deep architectural failures

## Known Gaps / Incomplete Areas

These are worth knowing before making product decisions:

- `src/components/features-section.tsx` is effectively empty
- `src/app/early-access/page.tsx` is a placeholder page
- `src/app/webapp/page.tsx` contains a literal placeholder section:
  - `New Section Title`
  - `Feature 1`
  - `Feature 2`
  - `Feature 3`
  - `Feature 4`
- `README.md` is still mostly create-next-app boilerplate
- root `scripts/` directory is empty
- root `data/` directory is empty

## Navigation / Content Drift

There are signs of stale or mismatched navigation:

- footer links to `/research`
- footer links to `/community`
- footer links to `/developers/hooks`

Those routes do not exist in the current app tree.

There is also copy/design drift:

- homepage uses `WebappHero`, which visually feels closer to Crypto.com-style marketing
- blog index says `Dex Mini Blog`
- some branding still references Aave directly
- some assets/logos are not consistent with the repo's current identity

## SEO / Metadata Notes

SEO is relatively intentional:

- route metadata is set on many pages
- `src/app/og/route.tsx` generates dynamic Open Graph images
- `src/app/sitemap.ts` enumerates public routes manually
- `src/app/robots.ts` defines crawl rules and blocks some AI bots

Important limitation:

- sitemap and route metadata are manually maintained, so they can drift if pages are added/renamed

## Styling Notes

- global styles are in `src/app/globals.css`
- there are many custom animation utility classes defined globally
- docs typography is handled through `.developer-content` selectors in global CSS
- Tailwind is used heavily inline
- the repo uses shadcn-style component conventions (`components.json` exists)

## Testing Surface

The test suite mainly covers components, not end-to-end flows.

Covered areas include:

- header
- footer
- hero components
- `VideoPlayer`
- accordion/tabs/tooltip/badge/card
- `LazySection`
- `DeFiTerm`

Notably absent:

- route-level integration tests
- end-to-end tests
- backend/protocol tests

## Files to Read First Before Major Changes

If making broad changes, these files are the fastest way to build context:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/header.tsx`
- `src/components/footer.tsx`
- `src/components/hero-section.tsx`
- `src/components/hero/index.tsx`
- `src/app/webapp/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/developers/layout.tsx`
- `src/components/developer-sidebar.tsx`
- `src/components/scroll-spy-sidebar.tsx`
- `src/data/hero-data.ts`

## Safe Assumptions for Future Work

- This repo is frontend-first and content-heavy.
- Most changes will involve TSX page/component edits rather than backend logic.
- Shared data is often duplicated instead of fully normalized.
- There is active technical debt around duplicated hero implementations and stale tests.
- When making navigation/content changes, check for route drift manually.
- When making lint-focused changes, expect many existing unrelated failures.

## Current Git State

At the time of this summary, the worktree was already dirty before new work:

- deleted: `.cursor/plans/add_video_hero_section_9d646900.plan.md`
- untracked: `.vscode/`

Do not assume a clean worktree.

## Recommended Mindset For Edits

- Prefer small, surgical changes.
- Verify whether a page is using the old landing-page system or the newer modular one before editing hero content.
- Treat blog/docs/legal pages as hand-maintained content, not generated content.
- Expect some tests to be stale and some lint failures to pre-exist.
- If touching shared navigation or branding, review both header and footer, plus homepage, blog index, and docs landing page for consistency.

