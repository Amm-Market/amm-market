---
name: Add Video Hero Section
overview: Add a new "Your LPs don't have to sit idle anymore" section with a video player component after the "Borrow with Confidence" section, adapting the provided Graphite-style HTML to React/Next.js.
todos:
  - id: add-video-section
    content: Add new section with header, video player, and feature tags after Borrow with Confidence
    status: completed
---

# Add Video Hero Section

## Location

Insert new section in [hero-section.tsx](src/components/hero-section.tsx) after the "Borrow with Confidence" section (line ~697) and before the "Over the top crypto protection" section (line ~699).

## Implementation

### Section Structure

1. **Header**: "Your LPs don't have to sit idle anymore" with description "Get one giant credit line from all your combined liquidity pools."

2. **Video Player Component** (adapted from Graphite HTML):

- Dark container (`bg-neutral-900`) with rounded corners and padding
- Video thumbnail with play button overlay
- Video element with webm/mp4 sources (placeholder paths for now)
- Hover overlay with title and progress bar segments
- Play/pause and fullscreen controls

3. **Feature Tags Row**: Horizontal scrollable row of feature buttons (will adapt labels to be DeFi-relevant instead of Graphite's "Stacked PRs", "PR page", etc.)

### Key Adaptations

- Convert HTML to JSX (className, self-closing tags, camelCase attributes)
- Replace Graphite-specific content:
- Video title: "Momo features" instead of "Graphite features"
- Feature tags: DeFi-relevant labels like "LP Collateral", "Borrow", "Risk Models", "Oracles", "Health Checks", "Multi-DEX", "Instant Access"
- Use placeholder video/thumbnail paths (`/videos/features.webm`, `/images/homepage/thumbnail.webp`)
- Add React state for video play/pause functionality using `useState` and `useRef`
- Remove the custom CSS class `VideoHero_animate__95KwV` (inline the animation styles or simplify)

### Color Theme

Keep the dark theme (`bg-neutral-900`, `bg-black`) as provided - this creates visual contrast with the light sections above and below.