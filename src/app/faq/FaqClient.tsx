"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { FaqCategory, FaqSearchResult } from "@/app/faq/faq-content"

type FaqAccordionItem = {
  id: string
  q: string
  a: string
  category?: string
}

function buildFaqHref({
  category,
  query,
}: {
  category?: string
  query?: string
}) {
  const params = new URLSearchParams()

  if (category) {
    params.set("category", category)
  }

  if (query) {
    params.set("q", query)
  }

  const search = params.toString()

  return search ? `/faq?${search}` : "/faq"
}

function getQuestionsForCategory(categories: FaqCategory[], categoryName: string) {
  return categories.find((category) => category.name === categoryName)?.questions ?? []
}

function FaqAccordionList({
  items,
  showCategory = false,
}: {
  items: FaqAccordionItem[]
  showCategory?: boolean
}) {
  return (
    <div className="w-full">
      {items.map((faq) => (
        <details
          key={faq.id}
          className="group border-b border-gray-200 py-6 open:pb-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-0 text-left text-[1.08rem] font-medium leading-[1.45] tracking-[-0.025em] text-gray-900 sm:text-[1.16rem] lg:text-[1.24rem]">
            <div className="flex flex-col text-left">
              <span>{faq.q}</span>
              {showCategory && faq.category ? (
                <span className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Category: {faq.category}
                </span>
              ) : null}
            </div>
            <div className="shrink-0 pt-1 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group-open:hidden"
              >
                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="hidden group-open:block"
              >
                <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </summary>
          <div className="whitespace-pre-line pt-5 text-[0.98rem] leading-[1.75] text-gray-600 sm:text-[1.02rem]">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  )
}

export default function FaqClient({
  categories,
  activeCategory,
  searchTerm,
  searchResults,
  clearHref,
}: {
  categories: FaqCategory[]
  activeCategory: string
  searchTerm: string
  searchResults: FaqSearchResult[]
  clearHref: string
}) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = React.useState(activeCategory)
  const [localSearchTerm, setLocalSearchTerm] = React.useState(searchTerm)

  React.useEffect(() => {
    setSelectedCategory(activeCategory)
  }, [activeCategory])

  React.useEffect(() => {
    setLocalSearchTerm(searchTerm)
  }, [searchTerm])

  const activeQuestions = React.useMemo(
    () => getQuestionsForCategory(categories, selectedCategory),
    [categories, selectedCategory],
  )

  const handleCategoryChange = React.useCallback(
    (nextCategory: string) => {
      setSelectedCategory(nextCategory)
      setLocalSearchTerm("")
      router.replace(buildFaqHref({ category: nextCategory }), { scroll: false })
    },
    [router],
  )

  return (
    <>
      <div className="mb-10 overflow-x-auto lg:mb-12">
        <div aria-label="FAQ categories" role="tablist" className="flex gap-3 pb-2">
          {categories.map((category) => {
            const active = selectedCategory === category.name && !localSearchTerm
            const triggerId = `faq-tab-${category.id}`
            const panelId = `faq-panel-${category.id}`

            return (
              <button
                key={category.id}
                id={triggerId}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={panelId}
                tabIndex={active ? 0 : -1}
                onClick={() => handleCategoryChange(category.name)}
                className={`group relative flex w-[12rem] shrink-0 flex-col justify-between rounded-[1rem] border p-3 text-left transition-all duration-300 sm:w-[12.75rem] lg:w-[13.25rem] ${
                  active
                    ? "border-black/18 bg-white text-black shadow-[0_10px_22px_rgba(17,17,17,0.06)]"
                    : "border-black/10 bg-gray-100 text-black shadow-[0_2px_10px_rgba(17,17,17,0.04)] hover:border-black/16 hover:bg-gray-50 hover:shadow-[0_10px_18px_rgba(17,17,17,0.07)]"
                }`}
              >
                <div className="mt-1">
                  <p className="text-[0.92rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-[0.98rem] lg:text-[1rem]">
                    {category.name}
                  </p>
                </div>
                <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-[1.35] tracking-[-0.02em] text-black/54">
                  {category.summary}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[0.72rem] font-medium tracking-[-0.02em] text-current/66">
                  <span>{category.questions.length} questions</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        {localSearchTerm ? (
          <>
            <div className="mb-7 flex items-center justify-between gap-4">
              <h2 className="text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.03em] text-gray-950 sm:text-[1.7rem]">
                Search Results
              </h2>
              <Link
                href={clearHref}
                prefetch={false}
                className="text-sm font-medium text-gray-700 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black/50"
              >
                Clear search
              </Link>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-gray-500">No results found for &quot;{localSearchTerm}&quot;</p>
              </div>
            ) : (
              <FaqAccordionList items={searchResults} showCategory />
            )}
          </>
        ) : (
          <div
            id={`faq-panel-${categories.find((category) => category.name === selectedCategory)?.id ?? categories[0]?.id ?? "default"}`}
            role="tabpanel"
            aria-labelledby={`faq-tab-${categories.find((category) => category.name === selectedCategory)?.id ?? categories[0]?.id ?? "default"}`}
          >
            <FaqAccordionList items={activeQuestions} />
          </div>
        )}
      </div>
    </>
  )
}
