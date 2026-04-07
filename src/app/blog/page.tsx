import Link from "next/link"
import {
  blogTagOptions,
  getBlogPostsByTag,
  normalizeTagFilter,
  type TagFilter,
} from "@/lib/content"

function BlogImagePlaceholder({
  eyebrow,
  featured = false,
}: {
  eyebrow: string
  featured?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_34%),linear-gradient(145deg,#f8fafc_0%,#e2e8f0_42%,#cbd5e1_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),transparent_42%,rgba(15,23,42,0.18)_100%)]" />
      <div className="absolute -left-[12%] top-[12%] h-[42%] w-[42%] rounded-full border border-white/55" />
      <div className="absolute right-[-10%] top-[10%] h-[52%] w-[52%] rounded-full border border-slate-500/20" />
      <div className="absolute left-[18%] top-[24%] h-[28%] w-[28%] rounded-full bg-white/45 blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
      <div className={`relative z-10 mt-auto flex w-full flex-col items-start px-4 pb-4 text-left ${featured ? "md:px-6 md:pb-6" : ""}`}>
        <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur-sm">
          {eyebrow}
        </span>
        {featured ? (
          <span className="mt-3 text-sm font-medium tracking-[-0.02em] text-white/92 md:text-[0.95rem]">
            Automation, protocol design, and LP collateral strategy.
          </span>
        ) : null}
      </div>
    </div>
  )
}

function buildTagHref(tag: TagFilter) {
  if (tag === "All") {
    return "/blog"
  }

  return `/blog?tag=${encodeURIComponent(tag)}`
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>
}) {
  const resolvedSearchParams = (await searchParams) ?? {}
  const activeTag = normalizeTagFilter(resolvedSearchParams.tag)
  const filteredBlogs = await getBlogPostsByTag(activeTag)

  return (
    <div className="site-content-shell py-12">
      <section className="flex justify-center pb-10 pt-4 md:pb-12 md:pt-8">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <h1 className="text-[clamp(3rem,7vw,5.25rem)] font-semibold tracking-[-0.08em] text-black">
            Newsroom
          </h1>
          <div className="mt-8 inline-flex max-w-full rounded-full bg-[#eef2f6] p-1.5 md:mt-10">
            <div className="flex items-center overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {blogTagOptions.map((tag) => {
                const active = activeTag === tag

                return (
                  <Link
                    key={tag}
                    href={buildTagHref(tag)}
                    prefetch={false}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-[-0.03em] transition-all duration-300 ${
                      active
                        ? "border-black/10 bg-white text-black shadow-[0_10px_22px_rgba(17,17,17,0.06)]"
                        : "border-transparent text-black/30 hover:text-black/60"
                    }`}
                  >
                    {tag}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {filteredBlogs.map((post) => (
            <div key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                prefetch={false}
                className="group block h-full rounded-[1.1rem] p-1 sm:p-2"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-slate-200/90 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)] transition-colors duration-150 group-hover:border-slate-300">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.28),transparent_34%,transparent_60%,rgba(255,255,255,0.1)_100%)]"
                    />
                    <BlogImagePlaceholder eyebrow={post.tag} />
                  </div>
                  <div className="flex items-center space-x-1.5 px-1 text-[0.8rem] text-gray-500 sm:text-sm">
                    <p>{post.date}</p>
                  </div>
                  <h2 className="px-1 text-[1rem] leading-5 text-gray-900 transition-colors duration-150 group-hover:text-slate-700 sm:text-[1.08rem] sm:leading-6">
                    {post.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
