import Image from "next/image"
import Link from "next/link"
import HeaderDesktopNavigation from "@/components/header-desktop-navigation"
import HeaderMobileNavigation from "@/components/header-mobile-navigation"
import { desktopUtilityLinks } from "@/components/header-nav-data"
import { HEADER_WORDMARK_PATH, SITE_NAME, siteRoutes } from "@/lib/site"

function SandboxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d="M14 18V11H21" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 18V11H27" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 30V37H21" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 30V37H27" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="4.4" fill="currentColor" />
    </svg>
  )
}

function BrandLogo({ mobileOnly = false }: { mobileOnly?: boolean }) {
  return (
    <span className="inline-flex items-center overflow-hidden">
      <Image
        src={HEADER_WORDMARK_PATH}
        alt={`${SITE_NAME} logo`}
        width={480}
        height={240}
        quality={85}
        className={mobileOnly ? "h-[56px] w-auto scale-[1.08] origin-left" : "h-[56px] w-auto scale-[1.08] origin-left md:h-[52px]"}
      />
    </span>
  )
}

export default function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-[#01AACF] bg-[linear-gradient(rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.94)_100%)] backdrop-blur-[10px]">
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 md:h-[54px] md:gap-3 md:px-6 lg:px-6 xl:px-8">
        <div className="inline-flex shrink-0 items-center">
          <Link href={siteRoutes.home} prefetch={false} aria-label={SITE_NAME} data-framer-name="Logo" className="inline-flex items-center">
            <BrandLogo />
          </Link>
        </div>

        <HeaderDesktopNavigation />

        <div className="hidden items-center gap-2 md:flex">
          {desktopUtilityLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full border border-[#01AACF] bg-white px-3 py-1.5 text-xs font-medium text-[#01AACF] transition-colors hover:bg-[#01AACF]/10 lg:px-3.5 lg:py-[0.45rem]"
            >
              <span className="inline-flex items-center gap-1.5">
                <SandboxIcon />
                <span>{link.label}</span>
              </span>
            </Link>
          ))}
        </div>

        <HeaderMobileNavigation brand={<BrandLogo mobileOnly />} />
      </div>
    </header>
  )
}
