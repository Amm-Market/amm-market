"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowUpRight, BookOpenText, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { desktopMenuButtons, type DesktopMenuId } from "@/components/header-nav-data"
import { siteRoutes } from "@/lib/site"

const DeferredHeaderDesktopMenuPanel = dynamic(() => import("@/components/header-desktop-menu-panel"), { ssr: false })

let desktopMenuPanelPromise: Promise<unknown> | null = null

function warmDesktopMenuPanel() {
  desktopMenuPanelPromise ??= import("@/components/header-desktop-menu-panel")
}

function isPathInSection(pathname: string, matchHrefs: readonly string[]) {
  return matchHrefs.some(
    (href) => pathname === href || pathname.startsWith(`${href}/`),
  )
}

export default function HeaderDesktopNavigation() {
  const pathname = usePathname() || "/"
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<DesktopMenuId | null>(null)
  const [desktopMenuRendered, setDesktopMenuRendered] = useState<DesktopMenuId | null>(null)
  const [desktopMenuAnimationCycle, setDesktopMenuAnimationCycle] = useState(0)
  const desktopCloseTimeoutRef = useRef<number | null>(null)

  const clearDesktopCloseTimeout = () => {
    if (desktopCloseTimeoutRef.current !== null) {
      window.clearTimeout(desktopCloseTimeoutRef.current)
      desktopCloseTimeoutRef.current = null
    }
  }

  const openDesktopMenu = (menuId: DesktopMenuId) => {
    warmDesktopMenuPanel()
    clearDesktopCloseTimeout()
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

  const closeDesktopMenu = () => {
    clearDesktopCloseTimeout()
    setDesktopMenuOpen(null)
  }

  useEffect(() => () => clearDesktopCloseTimeout(), [])

  return (
    <>
      <nav aria-label="Primary navigation" className="hidden min-w-0 items-center gap-8 md:ml-6 md:mr-auto md:flex md:gap-6 lg:gap-8" onMouseEnter={warmDesktopMenuPanel} onMouseLeave={scheduleDesktopMenuClose}>
        {desktopMenuButtons.map((menu) => {
          const isOpen = desktopMenuOpen === menu.id
          const isCurrentSection = isPathInSection(pathname, menu.matchHrefs)
          const isHighlighted = isOpen || isCurrentSection

          return (
            <button
              key={menu.id}
              type="button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-controls={`desktop-menu-${menu.id}`}
              onMouseEnter={() => openDesktopMenu(menu.id)}
              onFocus={() => openDesktopMenu(menu.id)}
              onClick={() => openDesktopMenu(menu.id)}
              className={`site-header-nav-link group relative inline-flex items-center gap-1.5 px-0 py-1 text-[16px] font-[560] tracking-[-0.02em] transition-[color,opacity] duration-200 ease-out ${isHighlighted ? "text-[#01AACF]" : "text-black/62 hover:text-black/94"}`}
            >
              <span>{menu.label}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-[15px] w-[15px] shrink-0 transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                strokeWidth={2.35}
              />
            </button>
          )
        })}
        <Link
          href={siteRoutes.faq}
          prefetch={false}
          onMouseEnter={closeDesktopMenu}
          onFocus={closeDesktopMenu}
          className={`site-header-nav-link group relative inline-flex items-center gap-1.5 px-0 py-1 text-[16px] font-[560] tracking-[-0.02em] transition-[color,opacity] duration-200 ease-out ${pathname === siteRoutes.faq ? "text-[#01AACF]" : "text-black/62 hover:text-black/94"}`}
        >
          <span>Help Center</span>
          <BookOpenText
            aria-hidden="true"
            className="h-[15px] w-[15px] shrink-0 transition-transform duration-200 ease-out group-hover:scale-105"
            strokeWidth={2.35}
          />
        </Link>
        <Link
          href="https://governance.aave.com/"
          prefetch={false}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={closeDesktopMenu}
          onFocus={closeDesktopMenu}
          className="site-header-nav-link group relative inline-flex items-center gap-1.5 px-0 py-1 text-[16px] font-[560] tracking-[-0.02em] text-black/62 transition-[color,opacity] duration-200 ease-out hover:text-black/94"
        >
          <span>Aave ARFC</span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-[15px] w-[15px] shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2.35}
          />
        </Link>
      </nav>

      {desktopMenuRendered !== null ? (
        <DeferredHeaderDesktopMenuPanel menuId={desktopMenuRendered} isOpen={desktopMenuOpen !== null} onOpen={clearDesktopCloseTimeout} onClose={scheduleDesktopMenuClose} onExited={() => setDesktopMenuRendered(null)} animationCycle={desktopMenuAnimationCycle} />
      ) : null}
    </>
  )
}
