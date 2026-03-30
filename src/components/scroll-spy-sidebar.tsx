"use client"

/**
 * ScrollSpySidebar - A lightweight section navigation sidebar.
 * 
 * @description
 * Renders a sticky sidebar with links to page sections and a soft progress
 * indicator, using minimal client-side scroll tracking instead of animation
 * libraries.
 * 
 * @features
 * - Active section tracking
 * - Animated progress indicator
 * - Section navigation
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
import { useEffect, useMemo, useRef, useState } from "react"

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
  const colors = colorClasses[sectionColor]
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? "")
  const [barProgress, setBarProgress] = useState(0)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const activeIndex = useMemo(
    () => Math.max(sections.findIndex((section) => section.id === activeSection), 0),
    [activeSection, sections],
  )

  useEffect(() => {
    if (sections.length === 0) {
      return
    }

    let frame = 0

    const updateActiveSection = () => {
      const sectionElements = sections
        .map(({ id }) => ({
          id,
          element: document.getElementById(id),
        }))
        .filter((item): item is { id: string; element: HTMLElement } => item.element !== null)

      if (sectionElements.length === 0) {
        return
      }

      const activationLine = Math.max(140, Math.min(window.innerHeight * 0.28, 220))

      const sectionAtLine = sectionElements.find(({ element }) => {
        const rect = element.getBoundingClientRect()
        return rect.top <= activationLine && rect.bottom > activationLine
      })

      const currentSection =
        sectionAtLine?.id ??
        [...sectionElements].reverse().find(({ element }) => element.getBoundingClientRect().top <= activationLine)?.id ??
        sectionElements[0].id

      const currentIndex = Math.max(
        sectionElements.findIndex((section) => section.id === currentSection),
        0,
      )

      setActiveSection((previous) => (previous === currentSection ? previous : currentSection))
      setBarProgress(((currentIndex + 1) / sectionElements.length) * 100)
    }

    const scheduleUpdate = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateActiveSection()
      })
    }

    updateActiveSection()
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)

      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [sections])

  useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) {
      return
    }

    const activeLink = sidebar.querySelector<HTMLElement>(`[data-section-id="${activeSection}"]`)
    if (!activeLink) {
      return
    }

    activeLink.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    })
  }, [activeSection])

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
          <div className="absolute bottom-0 left-0 top-0 w-1 overflow-hidden rounded-full bg-gray-200">
            <div
              className={`absolute left-0 top-0 w-full rounded-full ${colors.bar} transition-[height] duration-500 ease-out`}
              style={{ height: `${barProgress}%` }}
            />
          </div>

          {sections.map((section, index) => {
            const isActive = section.id === activeSection
            const isPast = index < activeIndex

            return (
              <div key={section.id} data-section-id={section.id} className="relative py-2.5">
                <div
                  className={`absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    isActive
                      ? `${colors.dot} scale-125 shadow-[0_0_0_4px_rgba(59,130,246,0.08)]`
                      : isPast
                        ? `${colors.dot} opacity-80`
                        : "bg-gray-300"
                  }`}
                />
                <a
                  href={`#${section.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    const element = document.getElementById(section.id)
                    if (!element) {
                      return
                    }

                    const offset = 120
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth",
                    })
                  }}
                  className={`group relative inline-flex cursor-pointer items-center px-3 py-1 transition-all duration-200 ease-in-out ${
                    isActive
                      ? `font-medium text-gray-900 ${colors.text}`
                      : "text-gray-500 hover:text-gray-900 hover:opacity-80"
                  }`}
                >
                  <p className="type-sidebar-link line-clamp-2">{section.title}</p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
