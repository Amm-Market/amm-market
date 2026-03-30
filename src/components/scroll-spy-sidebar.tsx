"use client"

/**
 * ScrollSpySidebar - A navigation sidebar that tracks scroll position.
 * 
 * @description
 * Renders a sticky sidebar with links to page sections that:
 * - Highlights the currently visible section based on scroll position
 * - Shows visual progress through the page via a colored bar
 * - Provides smooth-scroll navigation when clicking links
 * - Supports multiple color themes
 * 
 * @features
 * - Scroll-spy: Automatically detects which section is in view
 * - Progress bar: Visual indicator of position through document
 * - Smooth scrolling: Animated scroll to sections on click
 * - Sticky positioning: Stays visible while scrolling content
 * - Color themes: 7 color options for section accents
 * 
 * @param sections - Array of section IDs and titles to track
 * @param pageSummary - Optional brief description shown above nav
 * @param sectionColor - Theme color for active indicators (default: blue)
 * 
 * @example
 * const sections = [
 *   { id: "overview", title: "Overview" },
 *   { id: "features", title: "Features" },
 *   { id: "usage", title: "Usage" },
 * ]
 * 
 * <ScrollSpySidebar
 *   sections={sections}
 *   pageSummary="Learn about our key features"
 *   sectionColor="violet"
 * />
 * 
 * @note Hidden on mobile/tablet (lg:flex), only visible on desktop
 * @see src/app/developers - Used in documentation pages
 */
import { useEffect, useRef, useState } from "react"

/** Represents a trackable section on the page */
interface Section {
  /** HTML element ID to track (must match an id attribute on the page) */
  id: string
  /** Display title shown in the sidebar navigation */
  title: string
}

/** Props for the ScrollSpySidebar component */
interface ScrollSpySidebarProps {
  /** Array of sections to track and display in navigation */
  sections: Section[]
  /** Optional brief description shown above the navigation links */
  pageSummary?: string
  /** Color theme for active section indicators */
  sectionColor?: "blue" | "emerald" | "violet" | "amber" | "cyan" | "rose" | "slate"
}

// Color classes for each section
const colorClasses = {
  blue: { bar: "bg-blue-500", dot: "bg-blue-500", text: "text-blue-600" },
  emerald: { bar: "bg-emerald-500", dot: "bg-emerald-500", text: "text-emerald-600" },
  violet: { bar: "bg-violet-500", dot: "bg-violet-500", text: "text-violet-600" },
  amber: { bar: "bg-amber-500", dot: "bg-amber-500", text: "text-amber-600" },
  cyan: { bar: "bg-cyan-500", dot: "bg-cyan-500", text: "text-cyan-600" },
  rose: { bar: "bg-rose-500", dot: "bg-rose-500", text: "text-rose-600" },
  slate: { bar: "bg-slate-500", dot: "bg-slate-500", text: "text-slate-600" },
}

export function ScrollSpySidebar({ sections, pageSummary, sectionColor = "blue" }: ScrollSpySidebarProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")
  const sidebarRef = useRef<HTMLDivElement>(null)
  const colors = colorClasses[sectionColor]

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      const sectionElements = sections
        .map(({ id }) => ({
          id,
          element: document.getElementById(id),
        }))
        .filter((item): item is { id: string; element: HTMLElement } => item.element !== null)

      if (sectionElements.length === 0) return

      // Track the section intersecting a line below the sticky header, which
      // keeps the active state from jumping too early on long-form pages.
      const activationLine = Math.max(140, Math.min(window.innerHeight * 0.28, 220))

      const sectionAtLine = sectionElements.find(({ element }) => {
        const rect = element.getBoundingClientRect()
        return rect.top <= activationLine && rect.bottom > activationLine
      })

      const currentSection =
        sectionAtLine?.id ??
        [...sectionElements].reverse().find(({ element }) => element.getBoundingClientRect().top <= activationLine)?.id ??
        sectionElements[0].id

      setActiveSection((previous) => (previous === currentSection ? previous : currentSection))
    }

    const scheduleUpdate = () => {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateActiveSection()
      })
    }

    // Initial check
    updateActiveSection()

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)

      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [sections])

  useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) return

    const activeLink = sidebar.querySelector<HTMLElement>(`[data-section-id="${activeSection}"]`)
    if (!activeLink) return

    activeLink.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    })
  }, [activeSection])

  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSection),
    0,
  )
  const barProgress = sections.length > 0 ? ((activeIndex + 1) / sections.length) * 100 : 0

  return (
    <div
      ref={sidebarRef}
      className="hidden self-start lg:sticky lg:top-44 lg:flex lg:max-h-[calc(100vh-13rem)] lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:pr-2"
    >
      <div className="flex flex-col items-start justify-start gap-0">
        <p className="type-meta-label mb-3 pl-6 text-gray-500">
          On this page
        </p>

        {/* Page summary at top */}
        {pageSummary && (
          <p className="type-sidebar-summary mb-4 max-w-[220px] pl-6 text-gray-500">
            {pageSummary}
          </p>
        )}

        <div className="relative pl-6 pb-1">
          {/* Progress bar track */}
          <div className="absolute bottom-0 left-0 top-0 w-1 overflow-hidden rounded-full bg-gray-200">
            {/* Animated progress fill */}
            <div
              className={`absolute left-0 top-0 w-full rounded-full ${colors.bar} transition-all duration-300 ease-out`}
              style={{ height: `${barProgress}%` }}
            />
          </div>

          {/* Section links */}
          {sections.map((section, index) => {
            const isActive = section.id === activeSection
            const isPast = index < activeIndex

            return (
              <div key={section.id} data-section-id={section.id} className="relative py-2">
                {/* Dot indicator */}
                <div
                  className={`absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    isActive
                      ? `${colors.dot} scale-125`
                      : isPast
                        ? colors.dot
                        : "bg-gray-300"
                  }`}
                />
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(section.id)
                    if (element) {
                      const offset = 120
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY
                      window.scrollTo({
                        top: elementPosition - offset,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className={`group relative inline-flex cursor-pointer items-center px-3 py-1 transition-all duration-200 ease-in-out ${
                    isActive
                      ? "font-medium text-gray-900"
                      : "text-gray-500 hover:text-gray-900 hover:opacity-80"
                  }`}
                >
                  <p className="type-sidebar-link line-clamp-1">{section.title}</p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
