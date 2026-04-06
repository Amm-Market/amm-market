"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LOGO_PATH, SITE_NAME, WORDMARK_PATH, siteRoutes } from "@/lib/site"

interface NavLink {
  href: string
  label: string
  external?: boolean
}

interface DesktopMenuItem extends NavLink {
  description?: string
}

interface DesktopMenuGroup {
  id: "products" | "resources" | "developers"
  label: string
  eyebrow: string
  items: DesktopMenuItem[]
  supportingTitle?: string
  supportingItems: DesktopMenuItem[]
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

const desktopMenus: DesktopMenuGroup[] = [
  {
    id: "products",
    label: "Products",
    eyebrow: "Explore Products",
    items: [
      { href: siteRoutes.borrow, label: "Borrow" },
      { href: siteRoutes.invest, label: "Invest" },
      { href: siteRoutes.earn, label: "Earn" },
      { href: siteRoutes.platform, label: "Platform" },
    ],
    supportingTitle: "",
    supportingItems: [
      { href: siteRoutes.borrow, label: "Borrow against LP positions" },
      { href: siteRoutes.earn, label: "Keep liquidity active" },
      { href: siteRoutes.invest, label: "Route capital through the Hub" },
      { href: siteRoutes.lightpaper, label: "Read the protocol paper" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    eyebrow: "Explore Resources",
    items: [
      { href: siteRoutes.about, label: "About" },
      { href: siteRoutes.blog, label: "Blog" },
      { href: siteRoutes.faq, label: "FAQ" },
      { href: siteRoutes.brand, label: "Brand" },
    ],
    supportingTitle: "",
    supportingItems: [
      { href: siteRoutes.about, label: "Read the thesis" },
      { href: siteRoutes.blog, label: "Follow product notes" },
      { href: siteRoutes.faq, label: "Find quick answers" },
      { href: siteRoutes.brand, label: "Browse brand materials" },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    eyebrow: "Explore Developers",
    items: [
      { href: siteRoutes.developers, label: "Developers" },
      { href: siteRoutes.developersIntro, label: "Introduction" },
      { href: "/developers/architecture", label: "Architecture" },
      { href: "/developers/integrations", label: "Integrations" },
    ],
    supportingTitle: "",
    supportingItems: [
      { href: siteRoutes.developersIntro, label: "Start with the mental model" },
      { href: "/developers/architecture", label: "Review architecture" },
      { href: "/developers/integrations", label: "Study integrations" },
      { href: "/developers/legal", label: "Check constraints" },
    ],
  },
]
const desktopUtilityLinks: NavLink[] = [
  { href: siteRoutes.lightpaper, label: "Lightpaper" },
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
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
function isActivePath(pathname: string | null, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname?.startsWith(`${href}/`) === true
}

function DesktopMenuPanel({
  menu,
  isOpen,
  onClose,
  animationCycle,
}: {
  menu: DesktopMenuGroup
  isOpen: boolean
  onClose: () => void
  animationCycle: number
}) {
  const [animateItems, setAnimateItems] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setAnimateItems(false)
      return
    }

    setAnimateItems(false)
    const timer = window.setTimeout(() => {
      setAnimateItems(true)
    }, 140)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isOpen, menu.id, animationCycle])

  return (
    <div
      id={`desktop-menu-${menu.id}`}
      onMouseLeave={onClose}
      className={`fixed left-0 right-0 top-16 z-40 hidden transform-gpu md:block lg:top-[72px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="border-b border-black/8 bg-white shadow-[0_20px_48px_rgba(0,0,0,0.05)]">
        <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8 lg:py-5 xl:px-10">
          <div
            key={`${menu.id}-${animationCycle}`}
            className="grid gap-6 lg:min-h-[12.5rem] lg:grid-cols-[minmax(0,32rem)_minmax(14rem,18rem)] lg:gap-10 lg:pl-0 xl:grid-cols-[minmax(0,34rem)_minmax(15rem,19rem)] xl:gap-12 xl:pl-0"
          >
            <div className="space-y-2">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-black/62">{menu.eyebrow}</p>
              <div className="space-y-0.5">
                {menu.items.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    suppressHydrationWarning
                    className={`group flex items-start gap-4 py-1 text-left text-black transition-[opacity,color,filter] duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-black/72 ${
                      isOpen && animateItems ? "opacity-100 blur-0" : "opacity-[0.16] blur-[0.35px]"
                    }`}
                    style={{ transitionDelay: `${260 + index * 85}ms` }}
                  >
                    <span className="text-[clamp(1.72rem,2vw,2.35rem)] font-semibold leading-[0.98] tracking-[-0.06em] transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div
              className={`space-y-3 transition-[opacity,filter] duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen && animateItems ? "opacity-100 blur-0" : "opacity-[0.14] blur-[0.35px]"
              }`}
              style={{ transitionDelay: "460ms" }}
            >
              {menu.supportingTitle ? (
                <p className="text-[0.88rem] font-medium uppercase tracking-[0.18em] text-black/58">{menu.supportingTitle}</p>
              ) : null}
              <div className="space-y-2">
                {menu.supportingItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    suppressHydrationWarning
                    className="group block min-h-[2.4rem] text-left"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        aria-hidden="true"
                        className="pt-1 text-[0.75rem] font-semibold tracking-[0.18em] text-black/34"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[1.02rem] font-normal leading-[1.25] tracking-[-0.03em] text-black/80 transition-colors duration-200 group-hover:text-black">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<DesktopMenuGroup["id"] | null>(null)
  const [desktopMenuAnimationCycle, setDesktopMenuAnimationCycle] = useState(0)
  const [clientPathname, setClientPathname] = useState<string | null>(null)

  const activeDesktopMenu = desktopMenus.find((menu) => menu.id === desktopMenuOpen) ?? null

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
        setDesktopMenuOpen(null)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  useEffect(() => {
    setClientPathname(pathname)
    setDesktopMenuOpen(null)
  }, [pathname])

  useEffect(() => {
    if (desktopMenuOpen !== null) {
      setDesktopMenuAnimationCycle((current) => current + 1)
    }
  }, [desktopMenuOpen])

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-black/8 bg-[linear-gradient(rgba(255,255,255,0.91)_0%,rgba(255,255,255,0.91)_100%)] backdrop-blur-[7px]"
        onMouseLeave={() => setDesktopMenuOpen(null)}
      >
        <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8 xl:px-10">
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

          <nav aria-label="Primary navigation" className="hidden min-w-0 items-center gap-6 md:ml-0 md:mr-auto md:flex">
              {desktopMenus.map((menu) => {
                const isActive = desktopMenuOpen === menu.id
                const hasActiveRoute = menu.items.some((item) =>
                  clientPathname ? isActivePath(clientPathname, item.href) : false,
                )

                return (
                  <button
                    key={menu.id}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    aria-controls={`desktop-menu-${menu.id}`}
                    onMouseEnter={() => setDesktopMenuOpen(menu.id)}
                    onFocus={() => setDesktopMenuOpen(menu.id)}
                    onClick={() => setDesktopMenuOpen(menu.id)}
                    className={`group relative inline-flex items-center px-0 py-1 text-[16px] font-bold tracking-[-0.03em] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-black ${
                      isActive || hasActiveRoute ? "text-black" : "text-black hover:text-black"
                    }`}
                  >
                    <span>{menu.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-px origin-left bg-black transition-transform duration-300 ${
                        isActive || hasActiveRoute ? "scale-x-100 opacity-100" : "scale-x-0 opacity-70 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      }`}
                    />
                  </button>
                )
              })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {desktopUtilityLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                suppressHydrationWarning
                className={`site-header-cta inline-flex h-9 items-center justify-center rounded-full px-3.5 text-[15px] font-semibold tracking-[-0.03em] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  index === 0
                    ? "bg-[#ece9e4] text-black hover:bg-[#e4e0db]"
                    : "border border-black/12 bg-white text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] hover:border-black/20 hover:bg-black/[0.02]"
                }`}
              >
                {link.label}
              </Link>
            ))}
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

        <DesktopMenuPanel
          menu={activeDesktopMenu ?? desktopMenus[0]}
          isOpen={desktopMenuOpen !== null}
          onClose={() => setDesktopMenuOpen(null)}
          animationCycle={desktopMenuAnimationCycle}
        />
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
