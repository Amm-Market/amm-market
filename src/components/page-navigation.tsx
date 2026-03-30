/**
 * Page Navigation Component
 * 
 * @description
 * Provides previous/next navigation links for developer documentation pages.
 * Automatically determines navigation based on the current pathname and
 * the flattened navigation structure from developer-sidebar.
 * 
 * @example
 * ```tsx
 * // Place at the bottom of any developer documentation page
 * <PageNavigation />
 * ```
 * 
 * @module components/page-navigation
 */

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { navigationSections } from "./developer-sidebar"

// Flatten navigation sections into a single array of pages
const flattenedPages = navigationSections.flatMap((section) =>
  section.items.map((item) => ({
    href: item.href,
    label: item.label,
    sectionTitle: section.title,
  }))
)

export function PageNavigation() {
  const pathname = usePathname()

  // Find current page index
  const currentIndex = flattenedPages.findIndex((page) => page.href === pathname)

  // If page not found in navigation, don't render
  if (currentIndex === -1) return null

  const prevPage = currentIndex > 0 ? flattenedPages[currentIndex - 1] : null
  const nextPage = currentIndex < flattenedPages.length - 1 ? flattenedPages[currentIndex + 1] : null

  return (
    <div className="mt-12 pt-6 border-t border-gray-200">
      <div className="flex justify-between items-stretch gap-4">
        {/* Previous button */}
        {prevPage ? (
          <Link
            href={prevPage.href}
            className="flex-1 max-w-[50%] p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors group"
          >
            <div className="type-supporting mb-1 flex items-center gap-1 text-gray-500">
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </div>
            <div className="type-body-copy font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {prevPage.label}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Next button */}
        {nextPage ? (
          <Link
            href={nextPage.href}
            className="flex-1 max-w-[50%] p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors group text-right"
          >
            <div className="type-supporting mb-1 flex items-center justify-end gap-1 text-gray-500">
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <div className="type-body-copy font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {nextPage.label}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  )
}
