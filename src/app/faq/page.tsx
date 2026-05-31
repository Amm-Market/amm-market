import {
  getFaqCategories,
  getFaqQuestionsForCategory,
  normalizeFaqCategory,
  searchFaqQuestions,
} from "@/app/faq/faq-content"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Banknote,
  BookText,
  Folder,
  ReceiptText,
  ShieldCheck,
  Shield,
  SquareChartGantt,
} from "lucide-react"

type FaqAccordionItem = {
  id: string
  q: string
  a: string
  category?: string
}

const categoryIcons: Record<string, LucideIcon> = {
  "Core Concepts": BookText,
  "Depositing LP Collateral": Folder,
  "Borrowing Capacity & Valuation": Banknote,
  "Health & Liquidation": Shield,
  "Leverage Markets": SquareChartGantt,
  "Fees & Interface Policy": ReceiptText,
  "Risk & Security": ShieldCheck,
}

/**
 * FaqPage keeps search and category state in the URL so the route stays fast,
 * cacheable, and fully server-rendered.
 */
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

function FaqAccordionList({
  items,
  showCategory = false,
}: {
  items: FaqAccordionItem[]
  showCategory?: boolean
}) {
  return (
    <div className="w-full">
      {items.map((faq, index) => (
        <details
          key={faq.id}
          className={`group border-b border-gray-200 py-6 open:pb-6 ${index > 3 ? "deferred-viewport" : ""}`}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-0 text-left text-[1.08rem] font-medium leading-[1.45] tracking-[-0.025em] text-gray-900 sm:text-[1.16rem] lg:text-[1.24rem]">
            <div className="flex flex-col text-left">
              <span>{faq.q}</span>
              {showCategory && faq.category ? (
                <span className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#01AACF]">
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
                <path
                  d="M12 4V20M20 12H4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="hidden group-open:block"
              >
                <path
                  d="M20 12L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
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

function FaqCategoryCard({
  category,
  active,
  href,
}: {
  category: { id: string; name: string; summary: string; questions: { id: string }[] }
  active: boolean
  href: string
}) {
  const Icon = categoryIcons[category.name] ?? BookText

  return (
    <Link
      id={`faq-tab-${category.id}`}
      href={href}
      prefetch={false}
      scroll={false}
      role="tab"
      aria-selected={active}
      aria-controls={`faq-panel-${category.id}`}
      className={`group flex h-full w-[14rem] shrink-0 snap-start flex-col rounded-[1.1rem] border border-black/8 border-t-2 bg-white p-4 text-left transition-all duration-300 sm:w-[14.5rem] md:w-[15rem] ${
        active
          ? "border-t-[#01AACF]"
          : "border-t-[#01AACF]/30"
      }`}
    >
      <Icon className="h-6 w-6 text-[#01AACF]" strokeWidth={1.8} />

      <h3 className="mt-5 text-[0.95rem] font-semibold leading-[1.2] tracking-[-0.04em] text-gray-900">
        {category.name}
      </h3>

      <p className="mt-2.5 min-h-[2.7rem] max-w-[22rem] line-clamp-2 text-[0.86rem] leading-[1.5] tracking-[-0.02em] text-gray-700">
        {category.summary}
      </p>

      <div className="mt-auto pt-5 text-[0.8rem] font-medium tracking-[-0.02em] text-[#01AACF]">
        {category.questions.length} articles
      </div>
    </Link>
  )
}

export default async function FaqPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string }>
}) {
  const resolvedSearchParams = (await searchParams) ?? {}
  const categories = await getFaqCategories()
  const searchTerm = resolvedSearchParams.q?.trim() ?? ""
  const activeCategory = normalizeFaqCategory(resolvedSearchParams.category, categories)
  const searchResults = searchTerm ? searchFaqQuestions(categories, searchTerm) : []
  const activeQuestions = getFaqQuestionsForCategory(categories, activeCategory)
  const clearHref = buildFaqHref({
    category: activeCategory !== "Core Concepts" ? activeCategory : undefined,
  })

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-10 lg:py-14">
        <div className="site-content-shell">
          <div className="mb-10 py-8 text-center lg:mb-8 lg:py-14">
            <h1 className="mb-8 text-[clamp(3rem,7vw,5.25rem)] font-semibold not-italic tracking-[-0.08em] text-black">
              How can we help?
            </h1>

            <form action="/faq" className="mx-auto max-w-md">
              {activeCategory ? (
                <input type="hidden" name="category" value={activeCategory} />
              ) : null}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="q"
                  defaultValue={searchTerm}
                  placeholder="Search"
                  className="w-full rounded-full border border-black/10 bg-white py-3.5 pl-12 pr-24 text-gray-800 placeholder:text-gray-400 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/8"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-black/20 hover:text-black"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

      <div className="mb-10 overflow-x-auto pb-2 lg:mb-12">
        <div aria-label="FAQ categories" role="tablist" className="flex w-max snap-x snap-mandatory gap-4">
          {categories.map((category) => {
            const active = activeCategory === category.name && !searchTerm

            return (
              <FaqCategoryCard
                key={category.id}
                category={category}
                active={active}
                href={buildFaqHref({
                  category: category.name === "Core Concepts" ? undefined : category.name,
                })}
              />
            )
          })}
        </div>
          </div>

          <div>
            {searchTerm ? (
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
                    <p className="text-gray-500">No results found for &quot;{searchTerm}&quot;</p>
                  </div>
                ) : (
                  <FaqAccordionList items={searchResults} showCategory />
                )}
              </>
            ) : (
              <div
                id={`faq-panel-${categories.find((category) => category.name === activeCategory)?.id ?? categories[0]?.id ?? "default"}`}
                role="tabpanel"
                aria-labelledby={`faq-tab-${categories.find((category) => category.name === activeCategory)?.id ?? categories[0]?.id ?? "default"}`}
              >
                <FaqAccordionList items={activeQuestions} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
