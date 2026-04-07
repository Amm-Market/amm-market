"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
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

function toSentenceCase(value: string) {
  if (!value) return value

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

function SandboxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-[18px] w-[18px] shrink-0">
      <path
        d="M14 18V11H21"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 18V11H27"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 30V37H21"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30V37H27"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
    </svg>
  )
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
    supportingTitle: "What you can do",
    supportingItems: [
      {
        href: siteRoutes.borrow,
        label: "Borrow against LP positions",
        description: "Unlock liquidity from concentrated or volatile LP exposure without leaving the strategy.",
      },
      {
        href: siteRoutes.earn,
        label: "Keep liquidity active",
        description: "Stay in market while collateral keeps working across earning and looping flows.",
      },
      {
        href: siteRoutes.invest,
        label: "Route capital through the Hub",
        description: "Move borrowed capital into structured allocation paths with clearer execution context.",
      },
      {
        href: siteRoutes.lightpaper,
        label: "Read the protocol paper",
        description: "See the system design, risk model, and architecture behind the protocol.",
      },
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
    supportingTitle: "Where to look",
    supportingItems: [
      {
        href: siteRoutes.about,
        label: "Read the thesis",
        description: "Get the reasoning behind Avana and the opportunity around LP-backed credit.",
      },
      {
        href: siteRoutes.blog,
        label: "Follow product notes",
        description: "Track launches, technical updates, and the product decisions shaping the roadmap.",
      },
      {
        href: siteRoutes.faq,
        label: "Find quick answers",
        description: "Jump into short explanations for the most common protocol and product questions.",
      },
      {
        href: siteRoutes.brand,
        label: "Browse brand materials",
        description: "Review approved marks, colors, and visual guidance for partner-facing surfaces.",
      },
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
    supportingTitle: "Start here",
    supportingItems: [
      {
        href: siteRoutes.developersIntro,
        label: "Start with the mental model",
        description: "Understand the core protocol pieces before moving into docs and implementation details.",
      },
      {
        href: "/developers/architecture",
        label: "Review architecture",
        description: "See how the hub, spokes, risk controls, and pricing logic fit together.",
      },
      {
        href: "/developers/integrations",
        label: "Study integrations",
        description: "Use the contracts and interfaces needed to connect apps, agents, and frontends.",
      },
      {
        href: "/developers/legal",
        label: "Check constraints",
        description: "Review the boundaries, assumptions, and legal notes around protocol usage.",
      },
    ],
  },
]
const desktopUtilityLinks: NavLink[] = [
  { href: siteRoutes.lightpaper, label: "Lightpaper" },
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
]
const mobileLinks: NavLink[] = [
  { href: siteRoutes.borrow, label: "Borrow" },
  { href: siteRoutes.invest, label: "Invest" },
  { href: siteRoutes.earn, label: "Earn" },
  { href: siteRoutes.platform, label: "Platform" },
  { href: siteRoutes.about, label: "About" },
  { href: siteRoutes.lightpaper, label: "Lightpaper" },
  { href: siteRoutes.blog, label: "Blog" },
  { href: siteRoutes.faq, label: "FAQ" },
  { href: siteRoutes.developers, label: "Developers" },
  { href: "https://app.avana.cc", label: "Try Sandbox", external: true },
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
  onOpen,
  onClose,
  onExited,
  animationCycle,
}: {
  menu: DesktopMenuGroup
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onExited: () => void
  animationCycle: number
}) {
  return (
    <div
      id={`desktop-menu-${menu.id}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onTransitionEnd={(event) => {
        if (!isOpen && event.target === event.currentTarget) {
          onExited()
        }
      }}
      className={`fixed left-0 right-0 top-16 z-40 hidden transform-gpu md:block lg:top-[68px] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="border-b border-black/6 bg-white shadow-[0_24px_72px_rgba(0,0,0,0.04)]">
        <div className="w-full bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-7 xl:px-10">
          <div
            key={`${menu.id}-${animationCycle}`}
            className="grid gap-8 lg:min-h-[15.25rem] lg:grid-cols-[minmax(0,24rem)_minmax(18rem,22rem)] lg:gap-3 xl:grid-cols-[minmax(0,25rem)_minmax(18rem,22rem)] xl:gap-4"
          >
            <div className="space-y-2.5">
              <p className="text-[0.96rem] font-medium tracking-[-0.02em] text-black/76">{toSentenceCase(menu.eyebrow)}</p>
              <div className="space-y-1">
                {menu.items.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    suppressHydrationWarning
                    className={`group flex items-start gap-4 py-1.5 text-left text-black transition-[opacity,color,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-black/74 ${
                      isOpen ? "opacity-100 blur-0" : "opacity-[0.18] blur-[0.2px]"
                    }`}
                    style={{ transitionDelay: `${180 + index * 55}ms` }}
                  >
                    <span className="text-[clamp(1.9rem,2.45vw,3.05rem)] font-medium leading-[1.04] tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div
              className={`space-y-2.5 pt-0.5 transition-[opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "opacity-100 blur-0" : "opacity-[0.16] blur-[0.2px]"
              }`}
              style={{ transitionDelay: "280ms" }}
            >
              {menu.supportingTitle ? (
                <p className="text-[0.96rem] font-medium tracking-[-0.02em] text-black/76">{menu.supportingTitle}</p>
              ) : null}
              <div className="space-y-3">
                {menu.supportingItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    aria-label={item.label}
                    suppressHydrationWarning
                    className="group block min-h-[3.5rem] text-left"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        aria-hidden="true"
                        className="pt-1 text-[0.68rem] font-medium tracking-[0.16em] text-black/24"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[0.96rem] font-medium leading-[1.24] tracking-[-0.02em] text-black/76 transition-colors duration-200 group-hover:text-black">
                          {item.label}
                        </p>
                        {item.description ? (
                          <p className="mt-1 max-w-[28rem] text-[0.82rem] leading-[1.42] tracking-[-0.01em] text-black/46 transition-colors duration-200 group-hover:text-black/58">
                            {item.description}
                          </p>
                        ) : null}
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

/**
 * Header keeps the fully working desktop and mobile navigation behavior in one
 * client component so the premium hover and drawer interactions remain stable.
 */
export default function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<DesktopMenuGroup["id"] | null>(null)
  const [desktopMenuRendered, setDesktopMenuRendered] = useState<DesktopMenuGroup["id"] | null>(null)
  const [desktopMenuAnimationCycle, setDesktopMenuAnimationCycle] = useState(0)
  const desktopCloseTimeoutRef = useRef<number | null>(null)
  const activeDesktopMenu = desktopMenus.find((menu) => menu.id === (desktopMenuOpen ?? desktopMenuRendered)) ?? null
  const clientPathname = pathname

  const clearDesktopCloseTimeout = () => {
    if (desktopCloseTimeoutRef.current !== null) {
      window.clearTimeout(desktopCloseTimeoutRef.current)
      desktopCloseTimeoutRef.current = null
    }
  }

  const openDesktopMenu = (menuId: DesktopMenuGroup["id"]) => {
    clearDesktopCloseTimeout()

    if (desktopMenuRendered === null) {
      setDesktopMenuRendered(menuId)
      window.requestAnimationFrame(() => {
        setDesktopMenuOpen(menuId)
        setDesktopMenuAnimationCycle((current) => current + 1)
      })
      return
    }

    setDesktopMenuRendered(menuId)
    setDesktopMenuOpen(menuId)
    setDesktopMenuAnimationCycle((current) => current + 1)
  }

  const scheduleDesktopMenuClose = () => {
    clearDesktopCloseTimeout()
    desktopCloseTimeoutRef.current = window.setTimeout(() => {
      setDesktopMenuOpen(null)
      desktopCloseTimeoutRef.current = null
    }, 220)
  }

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
    return () => {
      clearDesktopCloseTimeout()
    }
  }, [])

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-[linear-gradient(rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.94)_100%)] backdrop-blur-[10px]"
        onMouseEnter={clearDesktopCloseTimeout}
        onMouseLeave={scheduleDesktopMenuClose}
      >
        <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:h-[68px] lg:px-8 xl:px-10">
          <div className="inline-flex shrink-0 items-center">
            <Link
              href={siteRoutes.home}
              prefetch={false}
              aria-label={SITE_NAME}
              data-framer-name="Logo"
              className="inline-flex items-center"
            >
              <BrandLogo />
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="hidden min-w-0 items-center gap-8 md:ml-8 md:mr-auto md:flex lg:gap-10">
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
                  onMouseEnter={() => openDesktopMenu(menu.id)}
                  onFocus={() => openDesktopMenu(menu.id)}
                  onClick={() => openDesktopMenu(menu.id)}
                  className={`site-header-nav-link group relative inline-flex items-center px-0 py-1.5 text-[15px] font-medium tracking-[-0.02em] transition-[color,opacity] duration-200 ease-out ${
                    isActive || hasActiveRoute ? "text-black" : "text-black/62 hover:text-black/94"
                  }`}
                >
                  <span>{menu.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            {desktopUtilityLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                suppressHydrationWarning
                className={`site-header-cta inline-flex h-[38px] items-center justify-center rounded-full px-3.5 text-[15px] font-medium tracking-[-0.02em] transition duration-200 ease-out ${
                  index === 0
                    ? "bg-black/[0.045] text-black/84 hover:bg-black/[0.07] hover:text-black"
                    : "border border-[#9ea0a2] bg-white text-[#2b2e32] shadow-[0_12px_28px_rgba(65,67,71,0.14),inset_0_1px_0_rgba(255,255,255,0.92)] hover:border-[#8f9195] hover:bg-[#f7f7f7]"
                }`}
              >
                {link.label === "Try Sandbox" ? (
                  <span className="inline-flex items-center gap-2.5">
                    <SandboxIcon />
                    <span>{link.label}</span>
                  </span>
                ) : (
                  link.label
                )}
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

        {activeDesktopMenu ? (
          <DesktopMenuPanel
            menu={activeDesktopMenu}
            isOpen={desktopMenuOpen !== null}
            onOpen={clearDesktopCloseTimeout}
            onClose={scheduleDesktopMenuClose}
            onExited={() => setDesktopMenuRendered(null)}
            animationCycle={desktopMenuAnimationCycle}
          />
        ) : null}
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
          className="flex h-16 items-center justify-between px-4 sm:px-6"
        >
          <Link
            href={siteRoutes.home}
            prefetch={false}
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
            mobileMenuOpen ? "translate-y-0 opacity-100" : "opacity-0"
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
                    prefetch={false}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
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
