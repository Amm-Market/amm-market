import {
  getFaqCategories,
  normalizeFaqCategory,
  searchFaqQuestions,
} from "@/app/faq/faq-content"
import FaqClient from "@/app/faq/FaqClient"

/**
 * FaqPage keeps search in URL state and hands category switching to a small
 * client island so the route can preserve scroll position during tab changes.
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

          <FaqClient
            categories={categories}
            activeCategory={activeCategory}
            searchTerm={searchTerm}
            searchResults={searchResults}
            clearHref={clearHref}
          />
        </div>
      </main>
    </div>
  )
}
