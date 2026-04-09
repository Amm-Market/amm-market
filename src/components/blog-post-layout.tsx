import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const DeferredLlmExportMenu = dynamic(
  () => import("@/components/llm-export-menu").then((module) => module.LlmExportMenu),
  {
    loading: () => (
      <div
        aria-hidden="true"
        className="h-10 w-32 rounded-full border border-slate-200 bg-slate-50"
      />
    ),
  },
)

const DeferredScrollSpySidebar = dynamic(
  () => import("@/components/scroll-spy-sidebar").then((module) => module.ScrollSpySidebar),
  {
    loading: () => <div aria-hidden="true" className="hidden w-[17rem] xl:block" />,
  },
)

interface TableOfContentsItem {
  id: string
  title: string
}

type SidebarTone = "blue" | "emerald" | "violet" | "amber" | "cyan" | "rose" | "slate"

interface BlogPostLayoutProps {
  title: string
  displayTitle?: string
  date: string
  description?: string
  image?: string
  children: React.ReactNode
  tableOfContents?: TableOfContentsItem[]
  sectionColorsById?: Partial<Record<string, SidebarTone>>
  prevPost?: { slug: string; title: string }
  nextPost?: { slug: string; title: string }
}

export default function BlogPostLayout({
  title,
  displayTitle,
  date,
  image,
  children,
  tableOfContents,
  sectionColorsById,
  prevPost,
  nextPost,
}: BlogPostLayoutProps) {
  return (
    <div className="site-article-layout site-content-shell py-5 md:py-9 xl:py-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden col-span-12 lg:col-span-2 xl:block">
          <Link
            href="/blog"
            prefetch={false}
            className="type-supporting flex cursor-pointer items-center text-gray-500 transition hover:text-gray-900"
          >
            <ChevronLeft className="h-5 w-5" />
            Back
          </Link>
        </div>

        <div className="col-span-12 lg:col-span-12 xl:col-span-10">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start xl:gap-12">
            <div className="min-w-0 max-w-[48rem]">
              <div data-developer-doc-export-root>
                <header className="mb-8 max-w-[48rem] space-y-4 md:mb-10">
                  <h1 className="text-[clamp(2.15rem,5.2vw,4.1rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-gray-900">
                    {displayTitle ?? title}
                  </h1>
                  <div className="space-y-3">
                    <div className="type-supporting text-gray-500">
                      <p>{date}</p>
                    </div>
                    <div className="flex justify-center sm:justify-start" data-export-skip>
                      <DeferredLlmExportMenu />
                    </div>
                  </div>
                </header>
                <div className="mb-8 border-b border-gray-200 md:mb-10" />

                <article>
                  <div className="site-article-content site-blog-article prose prose-gray max-w-none">
                    {image ? (
                      <div className="relative mb-8 hidden aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 md:block">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="m-0 object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : null}

                    {children}
                  </div>
                </article>
              </div>

              <div className="block py-8 lg:hidden">
                <div className="type-supporting text-gray-500">Share this article</div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    aria-label="Share on X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                      <path d="M12.6009 0.903908H15.0544L9.69434 7.03008L16 15.3664H11.0627L7.19566 10.3105L2.77087 15.3664H0.31595L6.04904 8.81379L0 0.903908H5.06262L8.55811 5.52524L12.6009 0.903908ZM11.7399 13.8979H13.0993L4.32392 2.29528H2.86506L11.7399 13.8979Z" />
                    </svg>
                  </a>
                  <a
                    aria-label="Share on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900"
                    href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(title)}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                      <path d="M0 1.85859C0 1.31985 0.180185 0.87541 0.540541 0.525253C0.900896 0.175079 1.36937 0 1.94595 0C2.51223 0 2.97039 0.17238 3.32046 0.517172C3.68082 0.872727 3.861 1.33602 3.861 1.90707C3.861 2.42424 3.68598 2.85521 3.33591 3.2C2.97555 3.55556 2.50193 3.73333 1.91506 3.73333H1.89961C1.33333 3.73333 0.875166 3.55556 0.525097 3.2C0.175027 2.84444 0 2.3973 0 1.85859ZM0.200772 16V5.20404H3.62934V16H0.200772ZM5.52896 16H8.95753V9.97172C8.95753 9.5946 8.99872 9.30369 9.08108 9.09899C9.22522 8.73265 9.44402 8.42289 9.73745 8.1697C10.0309 7.91649 10.399 7.7899 10.8417 7.7899C11.9949 7.7899 12.5714 8.60336 12.5714 10.2303V16H16V9.8101C16 8.21548 15.6396 7.00606 14.9189 6.18182C14.1982 5.35758 13.2458 4.94545 12.0618 4.94545C10.7336 4.94545 9.69884 5.54343 8.95753 6.73939V6.77172H8.94208L8.95753 6.73939V5.20404H5.52896C5.54954 5.54882 5.55985 6.62086 5.55985 8.4202C5.55985 10.2195 5.54954 12.7461 5.52896 16Z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className={`grid py-8 ${prevPost && nextPost ? "grid-cols-2 gap-3 md:gap-4" : "grid-cols-1 gap-4"}`}>
                {prevPost ? (
                  <div className="h-full">
                    <Link href={`/blog/${prevPost.slug}`} prefetch={false}>
                      <div className="flex h-full min-h-[7.5rem] cursor-pointer flex-col rounded-2xl border border-gray-200 p-3.5 transition hover:bg-gray-50 md:min-h-[8.25rem] md:p-4">
                        <div className="space-y-3">
                          <p className="text-[0.88rem] font-medium tracking-[-0.01em] text-gray-500 md:text-[0.92rem]">Previous post</p>
                          <h4 className="line-clamp-2 text-[0.9rem] font-medium leading-5 tracking-[-0.02em] text-gray-900 md:text-[0.96rem]">
                            {prevPost.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}
                {nextPost ? (
                  <div className={`${prevPost ? "" : "col-start-1"} h-full`}>
                    <Link href={`/blog/${nextPost.slug}`} prefetch={false}>
                      <div className="flex h-full min-h-[7.5rem] cursor-pointer flex-col rounded-2xl border border-gray-200 p-3.5 text-right transition hover:bg-gray-50 md:min-h-[8.25rem] md:p-4">
                        <div className="space-y-3">
                          <p className="text-[0.88rem] font-medium tracking-[-0.01em] text-gray-500 md:text-[0.92rem]">Next post</p>
                          <h4 className="line-clamp-2 text-[0.9rem] font-medium leading-5 tracking-[-0.02em] text-gray-900 md:text-[0.96rem]">
                            {nextPost.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="hidden self-start xl:block xl:sticky xl:top-28 xl:pt-4">
              {tableOfContents && tableOfContents.length > 0 ? (
                <DeferredScrollSpySidebar sections={tableOfContents} sectionColor="amber" sectionColorsById={sectionColorsById} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
