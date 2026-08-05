"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { siteRoutes } from "@/lib/site"
import type { NavLink } from "@/components/header-nav-data"

const mobileLinks: readonly NavLink[] = [
  { href: siteRoutes.borrow, label: "Borrow" },
  { href: siteRoutes.lend, label: "Lend" },
  { href: siteRoutes.multiply, label: "Multiply" },
  { href: siteRoutes.about, label: "About" },
  { href: siteRoutes.newsroom, label: "Newsroom" },
  { href: siteRoutes.faq, label: "Help Center" },
  { href: siteRoutes.developers, label: "Developers" },
  { href: "https://governance.aave.com/", label: "Aave ARFC", external: true },
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
] as const

interface HeaderMobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function HeaderMobileMenu({
  open,
  onClose,
}: HeaderMobileMenuProps) {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    let frame = 0
    let nextFrame = 0

    if (!open) {
      frame = window.requestAnimationFrame(() => {
        setIsShown(false)
      })

      return () => {
        window.cancelAnimationFrame(frame)
      }
    }

    // Wait until the hidden state has painted so the CSS transition can run.
    frame = window.requestAnimationFrame(() => {
      nextFrame = window.requestAnimationFrame(() => {
        setIsShown(true)
      })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(nextFrame)
    }
  }, [open])

  const isVisible = open && isShown

  // Portal out of the sticky header so backdrop-filter does not trap
  // position:fixed and shrink the overlay to the header height.
  // This component is client-only (dynamic ssr:false), so document.body is safe.
  return createPortal(
    <div
      className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-white transition-opacity duration-300 ease-out md:top-[54px] lg:hidden ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden={!isVisible}
    >
      <nav
        id="mobile-site-nav"
        aria-label="Mobile navigation"
        className={`h-[calc(100dvh-4rem)] overflow-y-auto px-4 pb-10 pt-10 transition-all duration-300 ease-out sm:px-6 md:h-[calc(100dvh-54px)] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <ol>
          {mobileLinks.map((link, index) => {
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
                    className="text-[clamp(1.7rem,7.1vw,2.45rem)] font-[560] leading-[0.98] tracking-[-0.05em] text-black/95"
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
    </div>,
    document.body,
  )
}
