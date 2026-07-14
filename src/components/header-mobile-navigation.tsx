"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import HeaderMobileMenu from "@/components/header-mobile-menu"

function MobileMenuToggleIcon() {
  return (
    <span className="relative block h-[18px] w-[26px]">
      <span className="absolute left-0 top-[3px] h-[2.5px] w-full origin-center rounded-full bg-current" />
      <span className="absolute bottom-[3px] left-0 h-[2.5px] w-full origin-center rounded-full bg-current" />
    </span>
  )
}

export default function HeaderMobileNavigation({ brand }: { brand: ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [mobileMenuAnimationCycle, setMobileMenuAnimationCycle] = useState(0)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = mobileMenuOpen ? "hidden" : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  return (
    <div className="ml-auto flex items-center md:hidden" data-framer-name="Navigation Mobile">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-[#01AACF] transition hover:text-[#01AACF]/80"
        aria-label="Open menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-site-nav"
        onClick={() => {
          setMobileMenuMounted(true)
          setMobileMenuOpen(true)
          setMobileMenuAnimationCycle((current) => current + 1)
        }}
      >
        <MobileMenuToggleIcon />
      </button>

      {mobileMenuMounted ? <HeaderMobileMenu key={mobileMenuAnimationCycle} open={mobileMenuOpen} pathname={pathname} brand={brand} onClose={() => setMobileMenuOpen(false)} /> : null}
    </div>
  )
}
