import Link from "next/link"
import {
  getFaqCategories,
  getFaqQuestionsForCategory,
  normalizeFaqCategory,
  searchFaqQuestions,
} from "@/app/faq/faq-content"

/**
 * FaqPage keeps category browsing and search in URL state so the route can stay
 * server-rendered without shipping client search/filter logic.
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
  items: Array<{
    id: string
    q: string
    a: string
    category?: string
  }>
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
  const categoryQuestions = searchTerm
    ? []
    : getFaqQuestionsForCategory(categories, activeCategory)
  const clearHref = buildFaqHref({
    category: activeCategory !== "Core Concepts" ? activeCategory : undefined,
  })

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-10 lg:py-14">
        <div className="site-content-shell">
          <div className="mb-10 py-8 text-center lg:mb-14 lg:py-14">
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

          <div className="mb-10 overflow-x-auto lg:mb-12">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => {
                const active = activeCategory === category.name && !searchTerm

                return (
                  <Link
                    key={category.id}
                    href={buildFaqHref({ category: category.name })}
                    prefetch={false}
                    aria-label={category.name}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex w-[12rem] shrink-0 flex-col justify-between rounded-[1rem] border p-3 text-left transition-all duration-300 sm:w-[12.75rem] lg:w-[13.25rem] ${
                      active
                        ? "border-black/18 bg-[#fcfbf8] text-black shadow-[0_10px_22px_rgba(17,17,17,0.06)]"
                        : "border-black/10 bg-white text-black shadow-[0_2px_10px_rgba(17,17,17,0.04)] hover:border-black/20 hover:shadow-[0_10px_18px_rgba(17,17,17,0.07)]"
                    }`}
                  >
                    <div className="h-10 w-10 rounded-full bg-gray-100" aria-hidden="true" />
                    <div className="mt-4">
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
                  </Link>
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
              <FaqAccordionList items={categoryQuestions} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
