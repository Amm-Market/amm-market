"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import { siteRoutes } from "@/lib/site"
import type { NavLink } from "@/components/header-nav-data"

const mobileLinks: readonly NavLink[] = [
  { href: siteRoutes.borrow, label: "Borrow" },
  { href: siteRoutes.invest, label: "Invest" },
  { href: siteRoutes.trade, label: "Trade" },
  { href: siteRoutes.creditLines, label: "Credit Lines" },
  { href: siteRoutes.about, label: "About" },
  { href: siteRoutes.lightpaper, label: "Lightpaper" },
  { href: siteRoutes.blog, label: "Blog" },
  { href: siteRoutes.faq, label: "FAQ" },
  { href: siteRoutes.developers, label: "Developers" },
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
] as const

function isActivePath(pathname: string | null, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname?.startsWith(`${href}/`) === true
}

interface HeaderMobileMenuProps {
  open: boolean
  pathname: string | null
  brand: ReactNode
  onClose: () => void
}

export default function HeaderMobileMenu({
  open,
  pathname,
  brand,
  onClose,
}: HeaderMobileMenuProps) {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      setIsShown(true)
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [open])

  const isVisible = open && isShown

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 ease-out md:hidden ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden={!isVisible}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href={siteRoutes.home}
          prefetch={false}
          aria-label="Avana"
          className="inline-flex items-center"
          onClick={onClose}
        >
          {brand}
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-[#01AACF] transition hover:text-[#01AACF]/80 focus-visible:outline-none focus-visible:ring-0 active:scale-95 [-webkit-tap-highlight-color:transparent]"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M5 5L17 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M17 5L5 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav
        id="mobile-site-nav"
        aria-label="Mobile navigation"
        className={`h-[calc(100dvh-4rem)] overflow-y-auto px-4 pb-10 pt-10 transition-all duration-300 ease-out sm:px-6 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <ol>
          {mobileLinks.map((link, index) => {
            const isActive = pathname ? isActivePath(pathname, link.href) : false

            return (
              <li
                key={`${link.label}-${link.href}`}
                className={`border-b border-black/10 transition-all duration-300 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + index * 35}ms` }}
              >
                <Link
                  href={link.href}
                  prefetch={false}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  suppressHydrationWarning
                  className="flex items-end justify-between gap-5 py-3"
                  onClick={onClose}
                >
                  <span
                    className={`text-[clamp(1.7rem,7.1vw,2.45rem)] font-[560] leading-[0.98] tracking-[-0.05em] ${
                      isActive ? "text-black" : "text-black/95"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span className="shrink-0 pb-0.5 text-[0.95rem] font-medium tracking-[-0.03em] text-[#01AACF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
