import Link from "next/link"
import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"
import { getNewsroomPosts, type NewsroomCollection, type NewsroomPost } from "@/lib/content"

type HomepageNewsroomSectionProps = {
  eyebrow?: string
  eyebrowTone?: SectionEyebrowTone
  title?: string
  collection?: NewsroomCollection
  posts?: readonly NewsroomPost[]
  showDividers?: boolean
  showTopBorder?: boolean
}

/**
 * HomepageNewsroomSection renders cached newsroom rows for the homepage and
 * product pages without duplicating the content map in each route.
 */
export default async function HomepageNewsroomSection({
  eyebrow = "Newsroom",
  eyebrowTone = "blue",
  title = "Latest from Avana",
  collection = "home",
  posts,
  showDividers = true,
  showTopBorder,
}: HomepageNewsroomSectionProps) {
  const resolvedPosts = posts ?? await getNewsroomPosts(collection)
  const hasTopBorder = showTopBorder ?? showDividers

  return (
    <section className="deferred-viewport">
      <div className="mb-8 flex max-w-[48rem] flex-col gap-3 md:mb-10">
        <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
      </div>

      <div className={hasTopBorder ? "border-t border-gray-200" : ""}>
        {resolvedPosts.map((post) => (
          <article
            key={post.href}
            className={`grid gap-4 py-6 md:grid-cols-[9.5rem_minmax(0,20rem)_minmax(0,1fr)_auto] md:gap-8 md:py-8 ${
              showDividers ? "border-b border-gray-200" : ""
            }`}
          >
            <p className="text-sm text-gray-500">{post.date}</p>

            <div className="space-y-2">
              <h3 className="max-w-[22rem] text-[1.45rem] font-medium leading-[1.08] tracking-[-0.045em] text-[#18323c]">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.byline}</p>
            </div>

            <p className="max-w-[38rem] text-sm leading-6 text-gray-600 md:pt-1">
              {post.description}
            </p>

            <div className="md:justify-self-end">
              <Link
                href={post.href}
                prefetch={false}
                className="inline-flex items-center justify-center rounded-[14px] border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
              >
                Read blog
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
