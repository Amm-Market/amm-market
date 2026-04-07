# Contributing to AMM Market

Thank you for your interest in contributing to AMM Market! This document provides guidelines and best practices for contributing to the codebase.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Documentation](#documentation)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We expect all contributors to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community

---

## Getting Started

### Prerequisites

- **Node.js:** v18.17.0 or higher
- **npm:** v9.0.0 or higher (or pnpm/yarn)
- **Git:** For version control
- **VS Code:** Recommended editor with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin (Volar)

### Fork & Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/amm-market.git
cd amm-market

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/amm-market.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Development Setup

### Environment Variables

Create a `.env.local` file in the project root:

```env
# No environment variables required for development
# Add any API keys here when needed
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (webpack bundler) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix auto-fixable lint issues |
| `npm run test` | Vitest (watch mode) |
| `npm run test:run` | Vitest (single run) |
| `npm run lighthouse:audit` | Lighthouse audit script |

### Recommended VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## Project Structure

```
amm-market/
├── public/                    # Static assets
│   ├── images/               # Image files
│   └── *.svg                 # SVG icons
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── blog/            # Blog pages
│   │   ├── developers/      # Documentation pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── sitemap.ts       # Sitemap generation
│   │   └── robots.ts        # robots.txt generation
│   │
│   ├── components/          # React components
│   │   ├── ui/             # Primitive UI components
│   │   ├── hero-section.tsx # Landing page hero
│   │   ├── header.tsx      # Navigation header
│   │   └── footer.tsx      # Site footer
│   │
│   ├── data/               # Static data files
│   │   └── protocols.ts    # Protocol data
│   │
│   └── lib/                # Utility functions
│       └── utils.ts        # Helper functions
│
├── SECURITY_AUDIT.md       # Security findings
├── SEO_AUDIT.md           # SEO recommendations
├── PERFORMANCE_AUDIT.md   # Performance analysis
├── UI_TEST_TRACKER.md     # UX test results
├── CODE_AUDIT.md          # Code quality analysis
├── LANDING_PAGE_HEALTH.md # Overall health score
└── CONTRIBUTING.md        # This file
```

---

## Coding Standards

### TypeScript

We use TypeScript for type safety. Follow these guidelines:

```typescript
// DO: Use explicit types for function parameters and return values
function calculateLTV(collateralValue: number, borrowAmount: number): number {
  return (borrowAmount / collateralValue) * 100
}

// DO: Export interfaces for reusability
export interface Pool {
  token0: Token
  token1: Token
  dex: string
  tvl: string
}

// DO: Use type imports
import type { Pool } from "@/types/pools"

// DON'T: Use `any` type
// Bad: const data: any = fetchData()
// Good: const data: PoolData = fetchData()

// DON'T: Ignore TypeScript errors with @ts-ignore
// Find the proper type or fix the issue
```

### Component Patterns

```typescript
/**
 * ComponentName - Brief description of component purpose.
 * 
 * @description
 * Detailed description of what the component does,
 * when to use it, and any important behaviors.
 * 
 * @example
 * <ComponentName
 *   prop1="value"
 *   prop2={123}
 *   onAction={() => console.log('clicked')}
 * />
 * 
 * @see RelatedComponent for similar functionality
 */
interface ComponentNameProps {
  /** Description of prop1 */
  prop1: string
  /** Description of prop2 with default noted */
  prop2?: number
  /** Callback fired when action occurs */
  onAction?: () => void
}

export default function ComponentName({
  prop1,
  prop2 = 10,
  onAction,
}: ComponentNameProps): React.JSX.Element {
  return (
    <div>
      {/* Component content */}
    </div>
  )
}
```

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection.tsx` |
| Pages | kebab-case folders | `getting-started/page.tsx` |
| Utilities | camelCase | `utils.ts` |
| Types | PascalCase | `Pool.ts` |
| Constants | SCREAMING_SNAKE | `MAX_LTV_RATIO` |

---

## Component Guidelines

### Component Size

Keep components under **300 lines**. If a component exceeds this:

1. Extract sub-components
2. Move data to separate files
3. Extract custom hooks

### Server vs Client Components

```typescript
// Default: Server Component (no directive needed)
export default function StaticPage() {
  return <div>This is server-rendered</div>
}

// Only add "use client" when you need:
// - useState, useEffect, useRef
// - Event handlers (onClick, onChange)
// - Browser APIs (window, document)
// - Third-party client libraries

"use client"

export default function InteractivePage() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

### Accessibility

All components must be accessible:

```typescript
// DO: Include proper ARIA attributes
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <XIcon />
</button>

// DO: Use semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><Link href="/">Home</Link></li>
  </ul>
</nav>

// DO: Provide alt text for images
<Image
  src="/hero.png"
  alt="Dashboard showing LP position with 80% LTV"
  width={800}
  height={600}
/>

// DON'T: Use div for interactive elements
// Bad: <div onClick={...}>Click me</div>
// Good: <button onClick={...}>Click me</button>
```

---

## Styling Guidelines

### Tailwind CSS

We use Tailwind CSS for styling. Follow these patterns:

```typescript
// DO: Use responsive prefixes mobile-first
<div className="text-sm md:text-base lg:text-lg">

// DO: Group related classes
<button className={`
  // Layout
  flex items-center justify-center
  // Sizing
  px-4 py-2
  // Colors
  bg-blue-500 text-white
  // States
  hover:bg-blue-600 active:bg-blue-700
  // Transitions
  transition-colors duration-200
`}>

// DON'T: Use arbitrary values when design tokens exist
// Bad: className="text-[14px]"
// Good: className="text-sm"

// DON'T: Duplicate long class strings
// Extract to component or use cva()
```

### Class Variance Authority (cva)

For components with variants:

```typescript
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  // Base styles
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

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests

```typescript
// ComponentName.test.tsx
import { render, screen, fireEvent } from "@testing-library/react"
import { ComponentName } from "./ComponentName"

describe("ComponentName", () => {
  it("renders correctly with default props", () => {
    render(<ComponentName prop1="test" />)
    expect(screen.getByText("test")).toBeInTheDocument()
  })

  it("calls onAction when clicked", () => {
    const handleAction = jest.fn()
    render(<ComponentName prop1="test" onAction={handleAction} />)
    fireEvent.click(screen.getByRole("button"))
    expect(handleAction).toHaveBeenCalledTimes(1)
  })

  it("applies custom className", () => {
    render(<ComponentName prop1="test" className="custom-class" />)
    expect(screen.getByTestId("component")).toHaveClass("custom-class")
  })
})
```

---

## Pull Request Process

### Before Submitting

1. **Update your fork:**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

4. **Run checks:**
   ```bash
   npm run lint
   npm run build
   npm test
   ```

5. **Push and create PR:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, etc.) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

Examples:
```
feat: add tooltip component for DeFi terms
fix: resolve mobile menu overflow on small screens
docs: update README with development setup
perf: lazy load testimonial section
```

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated if needed
- [ ] No console.log statements
- [ ] No TypeScript errors
- [ ] All tests pass
- [ ] Responsive design tested
- [ ] Accessibility checked

### Review Process

1. Create PR against `main` branch
2. Fill out PR template completely
3. Request review from maintainers
4. Address feedback
5. Squash and merge when approved

---

## Documentation

### JSDoc Comments

All exported functions and components should have JSDoc comments:

```typescript
/**
 * Calculates the health factor for a loan position.
 * 
 * @param collateralValue - Total value of collateral in USD
 * @param borrowAmount - Total borrowed amount in USD
 * @param liquidationThreshold - Liquidation threshold percentage (0-100)
 * @returns Health factor as a number (>1 is safe, <1 is liquidatable)
 * 
 * @example
 * const healthFactor = calculateHealthFactor(10000, 5000, 80)
 * // Returns: 1.6
 */
export function calculateHealthFactor(
  collateralValue: number,
  borrowAmount: number,
  liquidationThreshold: number
): number {
  return (collateralValue * liquidationThreshold) / (borrowAmount * 100)
}
```

### README Updates

When adding new features, update the README:

1. Add to feature list if applicable
2. Update installation steps if dependencies change
3. Add usage examples for new components

---

## Questions?

If you have questions:

1. Check existing documentation
2. Search closed issues
3. Open a new issue with the "question" label
4. Join our Discord community

---

## License

By contributing, you agree that your contributions will be licensed under the project's license.

---

*Thank you for contributing to AMM Market!*
