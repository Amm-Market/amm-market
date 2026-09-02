"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import HeaderDesktopNavigation from "@/components/header-desktop-navigation"
import { HeaderHelpCenterButton } from "@/components/header-help-center-button"
import HeaderLanguageDropdown from "@/components/header-language-dropdown"
import HeaderMobileNavigation from "@/components/header-mobile-navigation"
import { HeaderThemeToggle } from "@/components/header-theme-toggle"
import { Link } from "@/i18n/navigation"
import { HEADER_WORDMARK_PATH, SITE_NAME, siteRoutes } from "@/lib/site"

function BrandLogo({ alt }: { alt: string }) {
  return (
    <span className="inline-flex items-center overflow-hidden">
      <Image
        src={HEADER_WORDMARK_PATH}
        alt={alt}
        width={480}
        height={240}
        quality={85}
        className="h-[56px] w-auto scale-[1.08] origin-left md:h-[52px]"
      />
    </span>
  )
}

export default function Header(): React.JSX.Element {
  const t = useTranslations("common")
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
    <header className={`sticky top-0 z-50 border-b bg-[var(--header-surface)] backdrop-blur-[10px] transition-colors duration-200 ${hasScrolled ? "border-type-accent" : "border-transparent"}`}>
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 md:h-[54px] md:gap-3 md:px-6 lg:px-6 xl:px-8">
        <div className="inline-flex shrink-0 items-center">
          <Link href={siteRoutes.home} aria-label={SITE_NAME} data-framer-name="Logo" className="inline-flex items-center">
            <BrandLogo alt={t("a11y.logo", { site: SITE_NAME })} />
          </Link>
        </div>

        <HeaderDesktopNavigation />

        <div className="hidden items-center gap-1.5 lg:flex xl:gap-2">
          <HeaderHelpCenterButton />
          <HeaderThemeToggle />
          <HeaderLanguageDropdown />

          <a
            href="https://app.avana.cc"
            target="_blank"
            rel="noreferrer"
            className="site-header-cta group inline-flex h-8 items-center justify-center rounded-full border border-foreground/80 bg-background px-2.5 font-semibold tracking-[-0.02em] text-foreground transition-[background-color,border-color,color] duration-200 ease-out hover:border-type-accent hover:bg-type-accent hover:text-white xl:h-[34px] xl:px-3.5"
          >
            <span className="inline-flex items-center gap-1.5 xl:gap-2.5">
              <span className="xl:hidden">{t("cta.sandboxShort")}</span>
              <span className="hidden xl:inline">{t("cta.sandboxLong")}</span>
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:animate-[header-cta-arrow-blink_0.85s_ease-in-out_infinite]"
                strokeWidth={2.8}
              />
            </span>
          </a>
        </div>

        <HeaderMobileNavigation />
      </div>
    </header>
  )
}
