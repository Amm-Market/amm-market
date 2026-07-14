"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { desktopMenuButtons, type DesktopMenuId } from "@/components/header-nav-data"

const DeferredHeaderDesktopMenuPanel = dynamic(() => import("@/components/header-desktop-menu-panel"), { ssr: false })

let desktopMenuPanelPromise: Promise<unknown> | null = null

function warmDesktopMenuPanel() {
  desktopMenuPanelPromise ??= import("@/components/header-desktop-menu-panel")
}

function isActivePath(pathname: string | null, href: string): boolean {
  return pathname === href || pathname?.startsWith(`${href}/`) === true
}

export default function HeaderDesktopNavigation() {
  const pathname = usePathname()
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

  useEffect(() => () => clearDesktopCloseTimeout(), [])

  return (
    <>
      <nav aria-label="Primary navigation" className="hidden min-w-0 items-center gap-8 md:ml-6 md:mr-auto md:flex md:gap-6 lg:gap-8" onMouseEnter={warmDesktopMenuPanel} onMouseLeave={scheduleDesktopMenuClose}>
        {desktopMenuButtons.map((menu) => {
          const isActive = desktopMenuOpen === menu.id
          const hasActiveRoute = menu.matchHrefs.some((href) => isActivePath(pathname, href))

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
              className={`site-header-nav-link group relative inline-flex items-center px-0 py-1 text-[15px] font-medium tracking-[-0.02em] transition-[color,opacity] duration-200 ease-out ${isActive || hasActiveRoute ? "text-[#01AACF]" : "text-black/62 hover:text-black/94"}`}
            >
              <span>{menu.label}</span>
            </button>
          )
        })}
      </nav>

      {desktopMenuRendered !== null ? (
        <DeferredHeaderDesktopMenuPanel menuId={desktopMenuRendered} isOpen={desktopMenuOpen !== null} onOpen={clearDesktopCloseTimeout} onClose={scheduleDesktopMenuClose} onExited={() => setDesktopMenuRendered(null)} animationCycle={desktopMenuAnimationCycle} />
      ) : null}
    </>
  )
}
