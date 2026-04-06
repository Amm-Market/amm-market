"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LOGO_PATH, SITE_NAME, WORDMARK_PATH, siteRoutes } from "@/lib/site"

interface NavLink {
  href: string
  label: string
}

function BrandLogo({ mobileOnly = false }: { mobileOnly?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <Image
        src={LOGO_PATH}
        alt={`${SITE_NAME} icon`}
        width={24}
        height={24}
        className={mobileOnly ? "h-6 w-6" : "h-6 w-6 md:hidden"}
      />
      <Image
        src={WORDMARK_PATH}
        alt={`${SITE_NAME} wordmark`}
        width={131}
        height={24}
        className={mobileOnly ? "hidden" : "hidden h-[22px] w-[120px] sm:h-[24px] sm:w-[131px] md:block"}
      />
    </span>
  )
}

const desktopLinks: NavLink[] = [
  { href: siteRoutes.borrow, label: "Borrow" },
  { href: siteRoutes.invest, label: "Invest" },
  { href: siteRoutes.earn, label: "Earn" },
  { href: siteRoutes.platform, label: "Platform" },
]
const mobileLinks: NavLink[] = [
  { href: siteRoutes.home, label: "Overview" },
  { href: siteRoutes.borrow, label: "Borrow" },
  { href: siteRoutes.invest, label: "Invest" },
  { href: siteRoutes.earn, label: "Earn" },
  { href: siteRoutes.platform, label: "Platform" },
  { href: siteRoutes.lightpaper, label: "Lightpaper" },
  { href: siteRoutes.developers, label: "Developers" },
  { href: siteRoutes.blog, label: "Blog" },
  { href: siteRoutes.earlyAccess, label: "Early Access" },
  { href: siteRoutes.launchApp, label: "Launch App" },
]
const ctas: NavLink[] = [
  { href: siteRoutes.earlyAccess, label: "Early Access" },
  { href: siteRoutes.launchApp, label: "Launch App" },
]

function isActivePath(pathname: string | null, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname?.startsWith(`${href}/`) === true
}

export default function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [clientPathname, setClientPathname] = useState<string | null>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  useEffect(() => {
    setClientPathname(pathname)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[linear-gradient(rgba(255,255,255,0.91)_0%,rgba(255,255,255,0.91)_100%)] backdrop-blur-[7px]">
        <div className="mx-auto flex h-16 max-w-[1520px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <div className="inline-flex shrink-0 items-center">
            <Link
              href={siteRoutes.home}
              aria-label={SITE_NAME}
              data-framer-name="Logo"
              className="inline-flex items-center"
            >
              <BrandLogo />
            </Link>
          </div>

          <nav
            aria-label="Primary navigation"
            className="hidden shrink-0 items-center gap-6 md:ml-8 md:flex lg:ml-10 lg:gap-7"
          >
            {desktopLinks.map((link) => {
              const isActive = clientPathname ? isActivePath(clientPathname, link.href) : false

              return (
                <div key={link.href} className="group">
                  <Link
                    href={link.href}
                    suppressHydrationWarning
                    className={`site-header-nav-link relative inline-flex translate-y-0 items-center py-2 text-[14px] font-medium tracking-[-0.03em] transition duration-200 hover:-translate-y-0.5 ${
                      isActive ? "text-black" : "text-black/90 hover:text-black"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-px w-full origin-left bg-black transition-transform duration-300 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-70 group-hover:scale-x-100 group-focus-within:scale-x-100"
                      }`}
                    />
                  </Link>
                </div>
              )
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <div className="transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01]">
              <Link
                href={ctas[0].href}
                suppressHydrationWarning
                className="site-header-cta inline-flex h-10 items-center justify-center rounded-full bg-[#ece9e4] px-4 text-[13px] font-medium tracking-[-0.03em] text-black transition hover:bg-[#e4e0db]"
              >
                {ctas[0].label}
              </Link>
            </div>
            <div className="transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01]">
              <Link
                href={ctas[1].href}
                suppressHydrationWarning
                className="site-header-cta inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-[13px] font-medium tracking-[-0.03em] text-white transition hover:bg-black/88"
              >
                {ctas[1].label}
              </Link>
            </div>
          </div>

          <div
            className="ml-auto flex items-center md:hidden"
            data-framer-name="Navigation Mobile"
          >
            <div
              className="flex items-center justify-end gap-2"
              data-framer-name="Container"
            >
              <div
                className="rounded-full"
                data-framer-name="Menu Button"
              >
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/12 bg-white text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:border-black/18 hover:bg-black/[0.02]"
                  aria-label="Open menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-site-nav"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 5H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 9H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 13H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        aria-hidden={!mobileMenuOpen}
      >
          <div
            className={`flex h-16 items-center justify-between border-b border-black/8 px-4 transition-all duration-300 ease-out sm:px-6 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <Link
              href={siteRoutes.home}
              aria-label={SITE_NAME}
              className="inline-flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BrandLogo mobileOnly />
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/12 bg-white text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:border-black/18 hover:bg-black/[0.02]"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4L14 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav
            id="mobile-site-nav"
            aria-label="Mobile navigation"
            className={`h-[calc(100dvh-4rem)] overflow-y-auto px-4 pb-10 pt-10 transition-all duration-300 ease-out sm:px-6 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <ol>
              {mobileLinks.map((link, index) => {
                const isActive = clientPathname ? isActivePath(clientPathname, link.href) : false

                return (
                  <li
                    key={`${link.label}-${link.href}`}
                    className={`border-b border-black/10 transition-all duration-300 ease-out ${
                      mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${120 + index * 35}ms` }}
                  >
                    <Link
                      href={link.href}
                      suppressHydrationWarning
                      className="flex items-end justify-between gap-5 py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span
                        className={`text-[clamp(1.7rem,7.1vw,2.45rem)] font-semibold leading-[0.98] tracking-[-0.05em] ${
                          isActive ? "text-black" : "text-black/95"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="shrink-0 pb-0.5 text-[0.95rem] font-medium tracking-[-0.03em] text-black/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </nav>
      </div>
    </>
  )
}
