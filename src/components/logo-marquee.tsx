/**
 * LogoMarquee - Static homepage protocol row shown beneath the hero.
 *
 * The row stays decorative and lightweight to avoid first-paint motion and
 * duplicated marquee DOM on the homepage.
 */

interface HomepageLogo {
  name: string
  accentClass: string
  mark: React.ReactNode
}

const logos: readonly HomepageLogo[] = [
  {
    name: "Uniswap",
    accentClass: "text-pink-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M8 2.2 11.4 8 8 13.8 4.6 8 8 2.2Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Aave",
    accentClass: "text-violet-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M4.2 11.8 8 3l3.8 8.8M5.5 8.8h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Curve",
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
    accentClass: "text-fuchsia-500/75",
    mark: (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path d="M3.4 11.2c1-2.7 2.7-4.7 5.4-6.4 1.5 2.5 1.6 4.8.4 6.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const

function LogoPill({ logo }: { logo: HomepageLogo }) {
  return (
    <div
      data-testid="homepage-logo-item"
      className="inline-flex w-full min-w-0 items-center justify-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-2.5 py-2 text-slate-500 sm:gap-2 sm:px-3 md:px-4"
    >
      <span
        aria-hidden="true"
        className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-100/80 ${logo.accentClass} sm:h-6 sm:w-6`}
      >
        {logo.mark}
      </span>
      <span className="truncate text-[0.78rem] font-medium tracking-[-0.02em] text-slate-600 sm:text-[0.9rem] md:text-[1rem]">
        {logo.name}
      </span>
    </div>
  )
}

export function LogoMarquee() {
  return (
    <section className="bg-white py-5 sm:py-6">
      <div className="site-content-shell">
        <div
          data-testid="homepage-logo-strip-mobile"
          aria-label="Supported protocols"
          className="grid w-full grid-cols-3 gap-2.5 md:hidden"
        >
          {logos.slice(0, 3).map((logo) => (
            <LogoPill key={logo.name} logo={logo} />
          ))}
        </div>

        <div
          data-testid="homepage-logo-strip-desktop"
          aria-label="Supported protocols"
          className="hidden w-full md:grid md:grid-cols-5 md:gap-4 lg:gap-6"
        >
          {logos.map((logo) => (
            <LogoPill key={logo.name} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
