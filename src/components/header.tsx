"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { LOGO_PATH, SITE_NAME, WORDMARK_PATH, siteRoutes } from "@/lib/site"
import {
  desktopMenuButtons,
  desktopUtilityLinks,
  type DesktopMenuId,
} from "@/components/header-nav-data"

const DeferredHeaderDesktopMenuPanel = dynamic(
  () => import("@/components/header-desktop-menu-panel"),
  { ssr: false },
)
const DeferredHeaderMobileMenu = dynamic(
  () => import("@/components/header-mobile-menu"),
  { ssr: false },
)

let desktopMenuPanelPromise: Promise<unknown> | null = null
let mobileMenuPromise: Promise<unknown> | null = null

function warmDesktopMenuPanel() {
  desktopMenuPanelPromise ??= import("@/components/header-desktop-menu-panel")
}

function warmMobileMenu() {
  mobileMenuPromise ??= import("@/components/header-mobile-menu")
}

function SandboxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-5 w-5 shrink-0">
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
    <span className="inline-flex -translate-y-0.5 items-center md:translate-y-0">
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
        className={mobileOnly ? "hidden" : "hidden md:block md:h-[19px] md:w-[104px] lg:h-[20px] lg:w-[109px]"}
      />
    </span>
  )
}

function isActivePath(pathname: string | null, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname?.startsWith(`${href}/`) === true
}

/**
 * Header keeps the fully working desktop and mobile navigation behavior in one
 * client component so the premium hover and drawer interactions remain stable.
 */
export default function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<DesktopMenuId | null>(null)
  const [desktopMenuRendered, setDesktopMenuRendered] = useState<DesktopMenuId | null>(null)
  const [desktopMenuAnimationCycle, setDesktopMenuAnimationCycle] = useState(0)
  const desktopCloseTimeoutRef = useRef<number | null>(null)
  const clientPathname = pathname

  const clearDesktopCloseTimeout = () => {
    if (desktopCloseTimeoutRef.current !== null) {
      window.clearTimeout(desktopCloseTimeoutRef.current)
      desktopCloseTimeoutRef.current = null
    }
  }

  const openDesktopMenu = (menuId: DesktopMenuId) => {
    warmDesktopMenuPanel()
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
    }, 110)
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
        <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 md:h-[54px] md:gap-3 md:px-6 lg:px-6 xl:px-8">
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

          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 items-center gap-8 md:ml-6 md:mr-auto md:flex md:gap-6 lg:gap-8"
            onMouseEnter={warmDesktopMenuPanel}
          >
            {desktopMenuButtons.map((menu) => {
              const isActive = desktopMenuOpen === menu.id
              const hasActiveRoute = menu.matchHrefs.some((href) =>
                clientPathname ? isActivePath(clientPathname, href) : false,
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
                  className={`site-header-nav-link group relative inline-flex items-center px-0 py-1 text-[15px] font-medium tracking-[-0.02em] transition-[color,opacity] duration-200 ease-out ${
                    isActive || hasActiveRoute ? "text-black" : "text-black/62 hover:text-black/94"
                  }`}
                >
                  <span>{menu.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {desktopUtilityLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                suppressHydrationWarning
                className={`inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-medium transition-colors lg:px-3.5 lg:py-[0.45rem] ${
                  index === 0
                    ? "bg-white border border-gray-300 hover:bg-gray-100 text-gray-900"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {link.label === "Try Sandbox" ? (
                  <span className="inline-flex items-center gap-1.5">
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
                  onTouchStart={warmMobileMenu}
                  onMouseEnter={warmMobileMenu}
                  onFocus={warmMobileMenu}
                  onClick={() => {
                    warmMobileMenu()
                    setMobileMenuMounted(true)
                    setMobileMenuOpen(true)
                  }}
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

        {desktopMenuRendered !== null ? (
          <DeferredHeaderDesktopMenuPanel
            menuId={desktopMenuRendered}
            isOpen={desktopMenuOpen !== null}
            onOpen={clearDesktopCloseTimeout}
            onClose={scheduleDesktopMenuClose}
            onExited={() => setDesktopMenuRendered(null)}
            animationCycle={desktopMenuAnimationCycle}
          />
        ) : null}
      </header>

      {desktopMenuRendered !== null ? (
        <div
          aria-hidden="true"
          className={`pointer-events-none fixed inset-x-0 bottom-0 top-16 z-30 hidden bg-white/10 backdrop-blur-[7px] transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] md:top-[54px] md:block ${
            desktopMenuOpen !== null ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}

      {mobileMenuMounted ? (
        <DeferredHeaderMobileMenu
          open={mobileMenuOpen}
          pathname={clientPathname}
          brand={<BrandLogo mobileOnly />}
          onClose={() => setMobileMenuOpen(false)}
        />
      ) : null}
    </>
  )
}
