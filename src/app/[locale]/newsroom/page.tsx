import { Suspense } from "react"
import { getTranslations } from "next-intl/server"
import { blogTagOptions, getBlogPosts } from "@/lib/content"
import { BlogIndex, BlogIndexFromSearchParams } from "@/app/[locale]/newsroom/blog-index"

/**
 * Newsroom index: blog list from content/{locale}/blog.json via route locale.
 */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("blog")
  const posts = await getBlogPosts(locale)

  return (
    <div className="site-content-shell py-12">
      <section className="flex justify-center pt-4 md:pt-8">
        <h1 className="type-index-title text-foreground">
          {t("indexTitle")}
        </h1>
      </section>
      <Suspense
        fallback={<BlogIndex key="All" posts={posts} tagOptions={blogTagOptions} activeTag="All" />}
      >
        <BlogIndexFromSearchParams posts={posts} tagOptions={blogTagOptions} />
      </Suspense>
    </div>
  )
}
