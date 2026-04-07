/**
 * LogoMarquee - Minimal animated protocol row shown beneath the homepage hero.
 *
 * Uses a duplicated marquee track for a continuous loop, but keeps the visuals
 * lighter than the old circular token-logo treatment.
 */

interface MarqueeLogo {
  name: string
  href: string
  accentClass: string
  mark: React.ReactNode
}

const logos: readonly MarqueeLogo[] = [
  {
    name: "Uniswap",
    href: "https://uniswap.org",
    accentClass: "text-pink-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M8 2.2 11.4 8 8 13.8 4.6 8 8 2.2Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Aave",
    href: "https://aave.com",
    accentClass: "text-violet-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M4.2 11.8 8 3l3.8 8.8M5.5 8.8h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Curve",
    href: "https://curve.fi",
    accentClass: "text-amber-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M3.5 10.8c1.2 1.4 2.6 2 4.5 2 2.1 0 3.5-.8 4.5-2.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4.5 6.2c1-.9 2.1-1.4 3.5-1.4 1.5 0 2.8.5 3.9 1.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Balancer",
    href: "https://balancer.fi",
    accentClass: "text-slate-600/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <rect x="3" y="3" width="10" height="2.2" rx="1.1" fill="currentColor" />
        <rect x="4.2" y="6.9" width="7.6" height="2.2" rx="1.1" fill="currentColor" />
        <rect x="5.4" y="10.8" width="5.2" height="2.2" rx="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Sushi",
    href: "https://www.sushi.com",
    accentClass: "text-fuchsia-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M3.4 11.2c1-2.7 2.7-4.7 5.4-6.4 1.5 2.5 1.6 4.8.4 6.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Aerodrome",
    href: "https://aerodrome.finance",
    accentClass: "text-sky-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M3 10.7 8 4l5 6.7M5.3 8.2h5.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const

function LogoSet() {
  return (
    <>
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-4 py-2 text-slate-400 transition-colors hover:text-slate-700"
        >
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-100/80 transition-colors group-hover:bg-slate-200/80 ${logo.accentClass}`}
          >
            {logo.mark}
          </span>
          <span className="text-[1rem] font-medium tracking-[-0.02em] sm:text-[1.05rem]">
            {logo.name}
          </span>
        </a>
      ))}
    </>
  )
}

type LogoMarqueeProps = {
  compact?: boolean
}

export function LogoMarquee({ compact = false }: LogoMarqueeProps) {
  return (
    <section className={compact ? "bg-white py-0.5 sm:py-1" : "bg-white py-5 sm:py-6"}>
      <div className="site-content-shell">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-16" />

          <div className="flex animate-marquee">
            <div className="flex shrink-0 items-center gap-2 pr-2">
              <LogoSet />
            </div>
            <div className="flex shrink-0 items-center gap-2 pr-2">
              <LogoSet />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
