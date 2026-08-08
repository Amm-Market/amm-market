import { Suspense } from "react"
import { getFaqCategories } from "@/app/[locale]/faq/faq-content"
import { FaqFromSearchParams, FaqView } from "@/app/[locale]/faq/faq-client"

/**
 * FAQ loads category bodies from content/{locale}/faq.json using the route
 * locale param (not cookies) so SSG for every locale is correct.
 */
export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const categories = await getFaqCategories(locale)
  const defaultCategory = categories[0]?.name ?? ""

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-10 lg:py-14">
        <div className="site-content-shell">
          <Suspense
            fallback={
              <FaqView categories={categories} searchTerm="" activeCategory={defaultCategory} />
            }
          >
            <FaqFromSearchParams categories={categories} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
