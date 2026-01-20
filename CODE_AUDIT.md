# Code Audit Report

**Audit Date:** January 20, 2026  
**Auditor Role:** Staff Engineer  
**Codebase:** AMM Market Landing Page & Developer Documentation  
**Overall Code Quality Score:** 60/100

---

## Executive Summary

The AMM Market codebase consists of 81 TypeScript/TSX files with a total of approximately 15,000 lines of code. While the code is functional and follows modern React patterns, there are opportunities for improvement in code organization, type safety, and maintainability. This audit identifies unused files, proposes refactoring strategies, and recommends TypeScript improvements.

---

## Codebase Statistics

| Metric | Count |
|--------|-------|
| Total TSX Files | 81 |
| Total TS Files | 5 |
| Components | 21 |
| Pages | 55 |
| Utility Files | 2 |
| Lines of Code (est.) | ~15,000 |

### File Distribution

```
src/
├── app/              # 55 page files
│   ├── blog/         # 14 blog posts
│   ├── developers/   # 28 documentation pages
│   └── ...           # 13 other pages
├── components/       # 21 component files
│   └── ui/           # 4 UI primitives
├── data/             # 1 data file
└── lib/              # 1 utility file
```

---

## Unused Files Identified

### Confirmed Unused

| File | Lines | Status | Recommendation |
|------|-------|--------|----------------|
| `src/components/cta-section.tsx` | 34 | Never imported | DELETE |
| `src/components/gradient-divider.tsx` | 11 | Never imported | DELETE |
| `src/components/protocol-card.tsx` | 72 | Self-reference only | VERIFY or DELETE |

### Potentially Unused

| File | Lines | Status | Action Needed |
|------|-------|--------|---------------|
| `src/components/features-section.tsx` | 9 | Imported but empty | IMPLEMENT or DELETE |
| `src/components/ai-agent-section.tsx` | ~150 | Verify usage | CHECK IMPORTS |
| `src/components/uniswap-hooks-section.tsx` | ~150 | Verify usage | CHECK IMPORTS |
| `src/components/developers-section.tsx` | ~100 | Verify usage | CHECK IMPORTS |

### Unused Imports Within Files

| File | Unused Import | Line |
|------|---------------|------|
| `hero-section.tsx` | `TrendingUp, Zap, Blocks, Coins, ChevronLeft, ChevronRight` | 7 |
| `hero-section.tsx` | `Link` (partially) | 4 |

---

## Code Quality Issues

### 1. Component Monoliths

**Issue:** Several components are excessively large, making them difficult to maintain, test, and optimize.

| Component | Lines | Max Recommended | Excess |
|-----------|-------|-----------------|--------|
| `hero-section.tsx` | 1,350 | 200 | 6.75x |
| `header.tsx` | 1,035 | 300 | 3.45x |
| `footer.tsx` | 97 | 100 | OK |

**hero-section.tsx Decomposition:**

```
hero-section.tsx (1,350 lines)
├── Data definitions (lines 17-120) → Move to src/data/
├── PoolCard component (lines 49-77) → Extract to component
├── Testimonials section (lines 79-120) → Extract to component
├── DashboardTabs config (lines 123-128) → Move to constants
├── HeroSection component (lines 130-1350) → Split into:
    ├── HeroHeader.tsx (~80 lines)
    ├── TrustedByMarquee.tsx (~100 lines)
    ├── HowItWorks.tsx (~50 lines)
    ├── DashboardPreview.tsx (~200 lines)
    ├── PoolTicker.tsx (~60 lines)
    ├── BorrowAcrossDexs.tsx (~80 lines)
    ├── GetMoreSection.tsx (~150 lines)
    ├── BorrowConfidence.tsx (~150 lines)
    ├── TestimonialCarousel.tsx (~100 lines)
    ├── FAQSection.tsx (~150 lines)
    └── FinalCTA.tsx (~50 lines)
```

---

### 2. Excessive "use client" Directives

**Issue:** 47 out of 81 files use `"use client"`, but many don't require client-side JavaScript.

**Impact:**
- Larger JavaScript bundles
- Slower Time to Interactive
- Poor SEO (content not in initial HTML)

**Files to Convert to Server Components:**

| Category | Files | Action |
|----------|-------|--------|
| Developer Docs | 28 pages | Remove `"use client"` if no interactivity |
| Blog Posts | 13 pages | Convert to Server Components |
| Legal Pages | 3 pages | Convert to Server Components |
| Static Pages | 5 pages | Verify and convert |

**Example Conversion:**

```typescript
// BEFORE (Client Component - unnecessary)
"use client"

import ScrollSpySidebar from "@/components/scroll-spy-sidebar"

export default function GlossaryPage() {
  const sections = [...]
  return (
    <div className="flex">
      <div>{/* Static content */}</div>
      <ScrollSpySidebar sections={sections} />
    </div>
  )
}

// AFTER (Server Component with Client child)
import ScrollSpySidebar from "@/components/scroll-spy-sidebar"

export default function GlossaryPage() {
  const sections = [...]
  return (
    <div className="flex">
      <div>{/* Static content */}</div>
      <ScrollSpySidebar sections={sections} />
    </div>
  )
}
// Note: ScrollSpySidebar remains "use client" but page is server-rendered
```

---

### 3. TypeScript Improvements

#### Missing Type Exports

Several components define interfaces internally but don't export them for reuse:

```typescript
// CURRENT (hero-section.tsx)
const pools = [
  { token0: { symbol: "ETH", color: "#627EEA" }, ... }
]

// IMPROVED (src/types/pools.ts)
export interface Token {
  symbol: string
  color: string
}

export interface Pool {
  token0: Token
  token1: Token
  dex: string
  tvl: string
}

// Then use in hero-section.tsx
import type { Pool } from "@/types/pools"
const pools: Pool[] = [...]
```

#### Implicit `any` Types

| File | Issue | Line |
|------|-------|------|
| `hero-section.tsx` | `pool` parameter untyped in map | Various |
| `header.tsx` | Event handlers lack types | Various |
| `scroll-spy-sidebar.tsx` | Section type inferred | Line 15 |

**Example Fix:**

```typescript
// BEFORE
const handleClick = (e) => { ... }

// AFTER
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... }
```

#### Missing Return Types

Many functions lack explicit return types:

```typescript
// BEFORE
export default function Header() {

// AFTER
export default function Header(): React.JSX.Element {
```

---

### 4. Tailwind Class Duplication

**Issue:** Same styling patterns repeated across files without abstraction.

**Example: Button Styles**

```typescript
// Repeated in hero-section.tsx (3x)
"px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"

// Repeated in header.tsx (2x)
"px-3 py-1.5 rounded-full border flex-none hover:bg-black/5"

// Repeated in multiple developer pages
"px-4 py-2 bg-gray-100 rounded text-gray-800"
```

**Solution: Create Component Library**

```typescript
// src/components/ui/button.tsx
export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        outline: "border border-gray-300 hover:bg-gray-50",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)
```

---

### 5. Data/Logic Mixing

**Issue:** Component files contain data that should be separated.

**Current Structure:**
```
hero-section.tsx
├── pools[] data (50 lines)
├── testimonials[] data (40 lines)
├── dashboardTabs[] data (10 lines)
└── Component logic (1,250 lines)
```

**Recommended Structure:**
```
src/
├── data/
│   ├── pools.ts
│   ├── testimonials.ts
│   └── dashboard-tabs.ts
└── components/
    └── hero-section.tsx (imports from data/)
```

---

## Proposed File Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── (marketing)/              # Marketing pages group
│   │   ├── page.tsx              # Homepage
│   │   ├── early-access/
│   │   ├── faq/
│   │   └── ...
│   ├── blog/                     # Blog section
│   ├── developers/               # Documentation section
│   └── layout.tsx
│
├── components/
│   ├── ui/                       # Primitive components
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx            # NEW: Button variants
│   │   ├── card.tsx
│   │   ├── input.tsx             # NEW: Form inputs
│   │   └── tabs.tsx
│   │
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── mobile-menu.tsx       # Extract from header
│   │   └── skip-link.tsx         # NEW: Accessibility
│   │
│   ├── marketing/                # Marketing page components
│   │   ├── hero/
│   │   │   ├── index.tsx
│   │   │   ├── HeroHeader.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── DashboardPreview.tsx
│   │   │   ├── PoolTicker.tsx
│   │   │   └── ...
│   │   ├── testimonial-carousel.tsx
│   │   └── faq-section.tsx
│   │
│   ├── developers/               # Developer docs components
│   │   ├── developer-sidebar.tsx
│   │   ├── scroll-spy-sidebar.tsx
│   │   ├── page-navigation.tsx
│   │   └── content-wrapper.tsx
│   │
│   └── shared/                   # Shared components
│       ├── video-player.tsx      # Extract from hero
│       ├── pool-card.tsx         # Extract from hero
│       └── section-header.tsx    # Reusable h2 + description
│
├── data/                         # Static data
│   ├── pools.ts
│   ├── testimonials.ts
│   ├── protocols.ts
│   └── navigation.ts             # NEW: Nav menu structure
│
├── hooks/                        # Custom hooks
│   ├── useScrollSpy.ts           # Extract from component
│   ├── useMediaQuery.ts          # NEW
│   └── useRateLimit.ts           # NEW: Form rate limiting
│
├── lib/                          # Utilities
│   ├── utils.ts
│   └── cn.ts                     # Class name utility
│
├── styles/                       # Global styles
│   └── globals.css
│
└── types/                        # TypeScript types
    ├── pools.ts
    ├── testimonials.ts
    └── navigation.ts
```

---

## Cleanup Commands

### Delete Unused Files

```powershell
# Delete confirmed unused files
Remove-Item -Path "src\components\cta-section.tsx"
Remove-Item -Path "src\components\gradient-divider.tsx"

# Verify before deleting
# Get-Content "src\components\protocol-card.tsx"
```

### Verify Import Usage

```powershell
# Search for component imports across codebase
# Using ripgrep (rg) if available
rg "import.*cta-section" src/
rg "import.*gradient-divider" src/
rg "import.*protocol-card" src/
```

---

## TypeScript Configuration Recommendations

### Enable Stricter Checks

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
```

---

## ESLint Recommendations

### Add These Rules

```javascript
// eslint.config.mjs additions
{
  rules: {
    // Enforce explicit return types
    "@typescript-eslint/explicit-function-return-type": "warn",
    
    // Prevent unused imports
    "@typescript-eslint/no-unused-vars": ["error", { 
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    
    // Enforce consistent type imports
    "@typescript-eslint/consistent-type-imports": "error",
    
    // Limit file length
    "max-lines": ["warn", { "max": 300, "skipBlankLines": true }],
    
    // Limit function length
    "max-lines-per-function": ["warn", { "max": 100 }],
  }
}
```

---

## Implementation Checklist

### Phase 1: Cleanup (1-2 days)

- [ ] Delete unused files
- [ ] Remove unused imports from hero-section.tsx
- [ ] Fix TypeScript implicit any warnings
- [ ] Add explicit return types to components

### Phase 2: Refactoring (1 week)

- [ ] Create `src/data/` directory
- [ ] Extract data from hero-section.tsx
- [ ] Split hero-section.tsx into smaller components
- [ ] Extract mobile menu from header.tsx

### Phase 3: Server Components (1 week)

- [ ] Audit all "use client" directives
- [ ] Convert eligible pages to Server Components
- [ ] Test functionality after conversion
- [ ] Verify build succeeds

### Phase 4: Type Safety (1 week)

- [ ] Create type definitions in `src/types/`
- [ ] Export and reuse interfaces
- [ ] Enable stricter TypeScript settings
- [ ] Fix resulting type errors

---

## Code Review Checklist

For future PRs, enforce these standards:

- [ ] Component under 300 lines
- [ ] No implicit `any` types
- [ ] Explicit return types on functions
- [ ] Data separated from components
- [ ] "use client" only when necessary
- [ ] No unused imports/variables
- [ ] Tailwind classes use design tokens
- [ ] Accessible (ARIA labels, semantic HTML)

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-20 | 1.0 | Initial audit |

---

*This audit follows Clean Code principles and React/Next.js best practices.*
