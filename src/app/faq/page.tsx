import { Suspense } from "react"
import { defaultFaqCategory, getFaqCategories } from "@/app/faq/faq-content"
import { FaqFromSearchParams, FaqView } from "@/app/faq/faq-client"

/**
 * The FAQ page prerenders as fully static HTML. Search (?q=) and category
 * (?category=) state stay in the URL but are read client-side with
 * useSearchParams, so the route never opts into per-request server rendering.
 * The Suspense fallback renders the default category, keeping indexable FAQ
 * content in the static HTML.
 */
export default async function FaqPage() {
  const categories = await getFaqCategories()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-10 lg:py-14">
        <div className="site-content-shell">
          <Suspense
            fallback={
              <FaqView categories={categories} searchTerm="" activeCategory={defaultFaqCategory} />
            }
          >
            <FaqFromSearchParams categories={categories} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
