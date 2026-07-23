import { Suspense } from "react"
import { blogTagOptions, getBlogPosts } from "@/lib/content"
import { BlogIndex, BlogIndexFromSearchParams } from "@/app/blog/blog-index"

/**
 * The blog index prerenders as fully static HTML. Tag filtering is driven by
 * the ?tag= search param, which is read client-side (useSearchParams) so the
 * route never opts into per-request server rendering. The Suspense fallback
 * is the default "All" view, so the static HTML still contains every post.
 */
export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="site-content-shell py-12">
      <Suspense fallback={<BlogIndex posts={posts} tagOptions={blogTagOptions} activeTag="All" />}>
        <BlogIndexFromSearchParams posts={posts} tagOptions={blogTagOptions} />
      </Suspense>
    </div>
  )
}
