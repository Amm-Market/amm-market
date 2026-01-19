"use client"

import { useEffect, useState, useRef } from "react"

interface Section {
  id: string
  title: string
}

interface ScrollSpySidebarProps {
  sections: Section[]
}

export function ScrollSpySidebar({ sections }: ScrollSpySidebarProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")
  const [scrollProgress, setScrollProgress] = useState(0)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections
        .map(({ id }) => ({
          id,
          element: document.getElementById(id),
        }))
        .filter((item) => item.element !== null)

      if (sectionElements.length === 0) return

      // Find the current active section
      const scrollPosition = window.scrollY + 200 // Offset for header

      let currentSection = sectionElements[0].id
      let currentIndex = 0

      for (let i = 0; i < sectionElements.length; i++) {
        const { id, element } = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id
          currentIndex = i
        }
      }

      setActiveSection(currentSection)

      // Calculate scroll progress through the document
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = Math.min(Math.max(scrolled / documentHeight, 0), 1)
      setScrollProgress(progress)
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const activeIndex = sections.findIndex((s) => s.id === activeSection)
  const progressPerSection = 100 / sections.length
  const barProgress = ((activeIndex + 1) / sections.length) * 100

  return (
    <div
      ref={sidebarRef}
      className="hidden lg:flex flex-col items-start justify-start gap-0 lg:sticky lg:top-44 self-start"
    >
      <div className="relative pl-6">
        {/* Progress bar track */}
        <div className="absolute left-0 top-0 bottom-0 w-1 overflow-hidden rounded-full bg-gray-200">
          {/* Animated progress fill */}
          <div
            className="absolute left-0 top-0 w-full rounded-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ height: `${barProgress}%` }}
          />
        </div>

        {/* Section links */}
        {sections.map((section, index) => {
          const isActive = section.id === activeSection
          const isPast = index < activeIndex

          return (
            <div key={section.id} className="relative py-2">
              {/* Dot indicator */}
              <div
                className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500 scale-125"
                    : isPast
                      ? "bg-blue-500"
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
                className={`group relative inline-flex items-center px-3 py-1 cursor-pointer transition-all duration-200 ease-in-out ${
                  isActive
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900 hover:opacity-80"
                }`}
              >
                <p className="line-clamp-1 text-sm">{section.title}</p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
