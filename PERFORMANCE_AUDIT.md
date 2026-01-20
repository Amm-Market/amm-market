# Performance Audit Report

**Audit Date:** January 20, 2026  
**Auditor Role:** Staff Engineer  
**Codebase:** AMM Market Landing Page & Developer Documentation  
**Overall Performance Score:** 70/100

---

## Executive Summary

The AMM Market website has several performance bottlenecks that impact Core Web Vitals. The primary issues are an oversized hero section component (1,350 lines), unused font imports, and lack of image optimization strategies. This audit provides actionable recommendations to achieve sub-second page loads.

---

## Core Web Vitals Assessment

### Current Estimates (Before Optimization)

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| **LCP** (Largest Contentful Paint) | ~2.5s | <1.2s | NEEDS WORK |
| **FID** (First Input Delay) | ~150ms | <100ms | NEEDS WORK |
| **CLS** (Cumulative Layout Shift) | ~0.05 | <0.1 | GOOD |
| **TTFB** (Time to First Byte) | ~200ms | <200ms | GOOD |
| **TTI** (Time to Interactive) | ~3.0s | <2.0s | NEEDS WORK |

### Target Metrics (After Optimization)

| Metric | Target | Priority |
|--------|--------|----------|
| LCP | <1.2s | Critical |
| FID/INP | <100ms | Critical |
| CLS | <0.05 | Medium |
| Total Blocking Time | <150ms | High |
| First Contentful Paint | <1.0s | High |

---

## Critical Issues

### 1. Hero Section Monolith (1,350 Lines)

**File:** `src/components/hero-section.tsx`  
**Impact:** HIGH - Increases bundle size, delays interactivity

The hero section contains:
- Pool ticker component and data (50 lines)
- Testimonials data and carousel (100 lines)
- Dashboard tabs configuration (10 lines)
- Video player with custom controls (150 lines)
- FAQ accordion (200 lines)
- Multiple section components (800+ lines)

#### Decomposition Plan

```
src/components/
├── hero/
│   ├── index.tsx              # Main hero export
│   ├── HeroHeader.tsx         # Headline + CTA
│   ├── TrustedBySection.tsx   # Logo marquee
│   ├── HowItWorks.tsx         # 3-step process
│   ├── DashboardPreview.tsx   # Video section
│   ├── PoolTicker.tsx         # LP pool cards
│   ├── BorrowAcrossDexs.tsx   # DEX grid
│   ├── GetMoreSection.tsx     # Benefits cards
│   ├── BorrowConfidence.tsx   # Security cards
│   ├── TestimonialCarousel.tsx # Quotes
│   ├── FAQSection.tsx         # Accordion
│   └── FinalCTA.tsx           # Bottom CTA
├── shared/
│   ├── PoolCard.tsx           # Reusable pool card
│   ├── VideoPlayer.tsx        # Custom video controls
│   └── SectionHeader.tsx      # h2 + description pattern
└── data/
    ├── pools.ts               # Pool data
    └── testimonials.ts        # Testimonial data
```

#### Estimated Bundle Reduction
- Current hero section: ~45KB (minified)
- After code splitting: ~15KB initial + lazy loaded sections
- **Savings: ~67% reduction in initial load**

---

### 2. Unused Font Import

**File:** `src/components/hero-section.tsx`  
**Line:** 6

```typescript
import { Playfair_Display } from "next/font/google"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-playfair"
})
```

**Impact:** 
- Loads ~40KB additional font files
- Font is never used in the component
- Delays font display for Inter

**Fix:** Remove the import and font configuration entirely.

---

### 3. Image Optimization Issues

#### Missing `priority` Attribute
Hero image correctly uses `priority`, but testimonial avatars and partner logos don't use `loading="lazy"`.

#### Missing Explicit Dimensions
Some images lack width/height, causing layout shifts:

```typescript
// Current - may cause CLS
<Image src={testimonial.image} alt={...} />

// Fixed - explicit dimensions prevent CLS
<Image 
  src={testimonial.image} 
  alt={...}
  width={48}
  height={48}
  className="rounded-full"
/>
```

#### External Image Dependencies
Currently loading from:
- `i.pravatar.cc` - Testimonial avatars
- `cdn-front.freepik.com` - Demo video

**Recommendation:** Self-host critical assets or use Vercel's image CDN.

---

### 4. Animation Performance

#### Current Animations Analysis

| Animation | Element | Performance | Issue |
|-----------|---------|-------------|-------|
| `animate-marquee` | Logo ticker | OK | Duplicated DOM |
| `animate-scroll-*` | Pool cards | OK | Uses transform |
| `animate-float` | Cards | OK | Uses transform |
| `animate-pulse` | Multiple | CONCERN | Multiple simultaneous |
| `animate-spin-slow` | Security rings | OK | Uses transform |

#### Potential Paint Thrashing
Multiple `animate-pulse` effects on the same viewport may cause:
- Excessive repaints
- Janky scrolling on low-end devices

**Fix:** Use `will-change: opacity` or reduce simultaneous animations:

```css
.animate-pulse-soft {
  will-change: opacity;
  animation: pulse-soft 2s ease-in-out infinite;
}
```

---

### 5. Client Component Overuse

**Finding:** 47 files use `"use client"` directive

Most developer documentation pages don't need client-side interactivity:

```typescript
// Current - unnecessary client component
"use client"

export default function GlossaryPage() {
  return <div>Static content...</div>
}

// Fixed - server component (remove "use client")
export default function GlossaryPage() {
  return <div>Static content...</div>
}
```

**Impact of Converting to Server Components:**
- Reduced JavaScript bundle by ~30%
- Faster Time to Interactive
- Better SEO (content in initial HTML)

#### Pages to Convert to Server Components

| Page | Current | Recommended |
|------|---------|-------------|
| `/developers/introduction/glossary` | Client | Server |
| `/developers/introduction/key-concepts` | Client | Server |
| `/developers/architecture/*` | Client | Server |
| `/developers/legal/*` | Client | Server |
| `/privacy` | Client | Server |
| `/terms` | Client | Server |
| `/brand` | Client | Server |

---

## Bundle Analysis

### Current Bundle Composition (Estimated)

| Module | Size (min+gzip) | Notes |
|--------|-----------------|-------|
| React + ReactDOM | 45KB | Required |
| Next.js runtime | 30KB | Required |
| Framer Motion | 25KB | Used for animations |
| marked | 12KB | For markdown rendering |
| Radix UI | 15KB | Accordion, Tabs |
| Lucide Icons | 10KB | Icon library |
| Application code | 50KB | Our components |
| **Total** | ~187KB | Target: <100KB |

### Optimization Strategies

#### 1. Tree-Shake Lucide Icons
```typescript
// Current - imports entire library
import { ArrowRight, Check, X } from "lucide-react"

// Better - specific imports (automatic with modern bundlers)
// Verify tree-shaking is working in build output
```

#### 2. Lazy Load Framer Motion
```typescript
// For non-critical animations
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
)
```

#### 3. Code Split Large Sections
```typescript
// Lazy load below-fold sections
import dynamic from 'next/dynamic'

const TestimonialSection = dynamic(
  () => import('@/components/hero/TestimonialCarousel'),
  { loading: () => <div className="h-96 animate-pulse bg-gray-100" /> }
)
```

---

## Recommendations by Priority

### Critical (Implement Before Launch)

1. **Remove unused Playfair font**
   - File: `src/components/hero-section.tsx`
   - Action: Delete import and configuration
   - Impact: -40KB font files

2. **Add explicit image dimensions**
   - Files: Hero section, testimonials
   - Action: Add width/height to all Image components
   - Impact: Eliminate CLS

3. **Preload critical assets**
   - Add to `<head>` in layout:
   ```html
   <link rel="preload" href="/images/Hero__4_.png" as="image" />
   ```

### High Priority (First Sprint)

4. **Decompose hero section**
   - Create 10-12 smaller components
   - Move data to separate files
   - Impact: -30KB initial bundle

5. **Convert static pages to Server Components**
   - Remove `"use client"` from 15+ pages
   - Impact: -20% JavaScript

6. **Implement lazy loading for below-fold**
   - Testimonials, FAQ, DEX grid
   - Impact: Faster TTI

### Medium Priority (Second Sprint)

7. **Self-host video and avatar assets**
   - Replace external CDN dependencies
   - Impact: Reliability, caching control

8. **Optimize animations**
   - Add `will-change` hints
   - Reduce simultaneous pulse effects
   - Impact: Smoother scrolling

9. **Enable ISR for documentation**
   - Add `revalidate` to doc pages
   - Impact: Faster subsequent loads

---

## Next.js Configuration Improvements

### Enable Static Export for Docs

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  // ... existing config
  
  // Optimize production build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },
}
```

### Add Bundle Analyzer (Development)

```bash
npm install -D @next/bundle-analyzer
```

```typescript
// next.config.ts
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
```

---

## Performance Testing Checklist

### Before Deployment

- [ ] Run Lighthouse CI: `npx lighthouse https://localhost:3000`
- [ ] Check bundle size: `npm run build && npm run analyze`
- [ ] Test on 3G throttling in DevTools
- [ ] Verify images have explicit dimensions
- [ ] Confirm no unused imports

### Production Monitoring

- [ ] Set up Vercel Analytics
- [ ] Configure Web Vitals tracking
- [ ] Set up performance budgets
- [ ] Monitor real user metrics

---

## Implementation Timeline

### Week 1: Quick Wins
- [ ] Remove Playfair font (1 hour)
- [ ] Add image dimensions (2 hours)
- [ ] Remove console.logs (1 hour)

### Week 2: Hero Decomposition
- [ ] Create hero/components folder
- [ ] Extract PoolCard component
- [ ] Extract VideoPlayer component
- [ ] Extract TestimonialCarousel
- [ ] Move data to separate files

### Week 3: Server Components
- [ ] Audit all "use client" directives
- [ ] Convert eligible pages
- [ ] Test functionality

### Week 4: Final Optimization
- [ ] Self-host assets
- [ ] Enable ISR
- [ ] Performance testing
- [ ] Lighthouse audit

---

## Expected Results After Optimization

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | ~2.5s | <1.2s | 52% faster |
| TTI | ~3.0s | <2.0s | 33% faster |
| Bundle Size | ~187KB | <100KB | 47% smaller |
| Lighthouse Score | ~70 | >90 | +20 points |

---

## Revision History

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-20 | 1.0 | Initial audit |

---

*This audit follows Google Lighthouse v11 and Web Vitals recommendations.*
