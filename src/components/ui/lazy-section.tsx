"use client"

/**
 * LazySection - A component that lazily renders children when they enter the viewport.
 * 
 * @description
 * Uses Intersection Observer to detect when the section enters the viewport,
 * then renders the children. This reduces initial bundle size and improves
 * Time to Interactive (TTI) by deferring rendering of below-fold content.
 * 
 * @example
 * ```tsx
 * <LazySection>
 *   <HeavyComponent />
 * </LazySection>
 * ```
 * 
 * @param children - The content to render when visible
 * @param className - Optional className for the wrapper div
 * @param rootMargin - Intersection Observer rootMargin (default: "100px" for preloading)
 * @param fallback - Optional fallback content while loading
 */

import { useEffect, useRef, useState, type ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  className?: string
  /** How far before the element enters viewport to trigger loading */
  rootMargin?: string
  /** Content to show while the section hasn't loaded yet */
  fallback?: ReactNode
  /** Minimum height to prevent layout shift */
  minHeight?: string
}

export function LazySection({
  children,
  className = "",
  rootMargin = "100px",
  fallback = null,
  minHeight = "200px",
}: LazySectionProps) {
  // Start visible so SSR ships real (localized) section content instead of
  // empty fallbacks. IO still runs but only as a no-op once already shown.
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const scheduleFrame = window.requestAnimationFrame
    const cancelFrame = window.cancelAnimationFrame

    // If IntersectionObserver isn't supported, render immediately
    if (!("IntersectionObserver" in window)) {
      const frame = scheduleFrame(() => setIsVisible(true))
      return () => cancelFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: isVisible ? undefined : minHeight }}
    >
      {isVisible ? children : fallback}
    </div>
  )
}

export default LazySection
