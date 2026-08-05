"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import HeaderDesktopNavigation from "@/components/header-desktop-navigation"
import HeaderLanguageDropdown from "@/components/header-language-dropdown"
import HeaderMobileNavigation from "@/components/header-mobile-navigation"
import { desktopUtilityLinks } from "@/components/header-nav-data"
import { HEADER_WORDMARK_PATH, SITE_NAME, siteRoutes } from "@/lib/site"

function BrandLogo() {
  return (
    <span className="inline-flex items-center overflow-hidden">
      <Image
        src={HEADER_WORDMARK_PATH}
        alt={`${SITE_NAME} logo`}
        width={480}
        height={240}
        quality={85}
        className="h-[56px] w-auto scale-[1.08] origin-left md:h-[52px]"
      />
    </span>
  )
}

export default function Header(): React.JSX.Element {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 0)
    }

    updateScrolledState()
    window.addEventListener("scroll", updateScrolledState, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateScrolledState)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b bg-[linear-gradient(rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.94)_100%)] backdrop-blur-[10px] transition-colors duration-200 ${hasScrolled ? "border-[#01AACF]" : "border-transparent"}`}>
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 md:h-[54px] md:gap-3 md:px-6 lg:px-6 xl:px-8">
        <div className="inline-flex shrink-0 items-center">
          <Link href={siteRoutes.home} prefetch={false} aria-label={SITE_NAME} data-framer-name="Logo" className="inline-flex items-center">
            <BrandLogo />
          </Link>
        </div>

        <HeaderDesktopNavigation />

        <div className="hidden items-center gap-2 md:flex">
          <HeaderLanguageDropdown />

          {desktopUtilityLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="group inline-flex h-9 items-center justify-center rounded-full border border-[#151c22]/80 bg-white px-4 text-[0.92rem] font-[620] tracking-[-0.035em] text-[#151c22] transition-[background-color,border-color,color] duration-200 ease-out hover:border-[#01AACF] hover:bg-[#01AACF] hover:text-white lg:h-10 lg:px-5 lg:text-[0.98rem]"
            >
              <span className="inline-flex items-center gap-2.5">
                <span>{link.label}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  strokeWidth={2.8}
                />
              </span>
            </Link>
          ))}
        </div>

        <HeaderMobileNavigation />
      </div>
    </header>
  )
}
