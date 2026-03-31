/**
 * Blog Post Layout Component
 * 
 * @description
 * Standardized layout for all blog post pages. Provides consistent structure
 * with header, featured image, content area, scroll spy sidebar, and
 * previous/next post navigation.
 * 
 * @example
 * ```tsx
 * <BlogPostLayout
 *   title="Post Title"
 *   date="January 20, 2026"
 *   description="Post description"
 *   image="/images/blog/post.png"
 *   tableOfContents={[{ id: "intro", title: "Introduction" }]}
 *   prevPost={{ slug: "prev", title: "Previous Post", date: "Jan 19" }}
 *   nextPost={{ slug: "next", title: "Next Post", date: "Jan 21" }}
 * >
 *   <section id="intro">Content here</section>
 * </BlogPostLayout>
 * ```
 * 
 * @module components/blog-post-layout
 */

"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

interface TableOfContentsItem {
  id: string
  title: string
}

interface BlogPostLayoutProps {
  title: string
  date: string
  description?: string
  image?: string
  children: React.ReactNode
  tableOfContents?: TableOfContentsItem[]
  prevPost?: { slug: string; title: string; date: string }
  nextPost?: { slug: string; title: string; date: string }
}

export default function BlogPostLayout({
  title,
  date,
  description,
  image,
  children,
  tableOfContents,
  prevPost,
  nextPost,
}: BlogPostLayoutProps) {
  return (
    <div className="site-article-layout site-content-shell py-4 md:py-8 xl:py-10">
      <div className="grid grid-cols-12 gap-4">
        {/* Back button - hidden on mobile */}
        <div className="hidden col-span-12 xl:block lg:col-span-2">
          <Link
            href="/blog"
            className="type-supporting text-gray-500 hover:text-gray-900 flex cursor-pointer items-center transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </Link>
        </div>

        {/* Main content area */}
        <div className="col-span-12 lg:col-span-12 xl:col-span-10">
          {/* Header */}
          <div className="mb-6 lg:mb-10 max-w-5xl space-y-8">
            <div className="space-y-4">
              <Link
                href="/blog"
                className="text-indigo-600 hidden lg:inline-flex items-center hover:text-indigo-800"
              >
                Blog
              </Link>
              <h1 className="type-page-title text-gray-900">
                {title}
              </h1>
              <div className="type-supporting flex space-x-3 text-gray-500">
                <p>{date}</p>
              </div>
              {description && (
                <p className="type-page-lead text-gray-600">{description}</p>
              )}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-12 lg:gap-16 xl:gap-8">
            {/* Article */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-7">
              <article>
                <div className="site-article-content prose prose-gray max-w-none">
                  {/* Hero image */}
                  {image && (
                    <div className="hidden md:block relative mb-8 w-full aspect-video overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover m-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Article content */}
                  {children}
                </div>
              </article>

              {/* Mobile share */}
              <div className="block lg:hidden py-8">
                <div className="type-supporting text-gray-500">Share this article</div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    aria-label="Share on X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M0 1.85859C0 1.31985 0.180185 0.87541 0.540541 0.525253C0.900896 0.175079 1.36937 0 1.94595 0C2.51223 0 2.97039 0.17238 3.32046 0.517172C3.68082 0.872727 3.861 1.33602 3.861 1.90707C3.861 2.42424 3.68598 2.85521 3.33591 3.2C2.97555 3.55556 2.50193 3.73333 1.91506 3.73333H1.89961C1.33333 3.73333 0.875166 3.55556 0.525097 3.2C0.175027 2.84444 0 2.3973 0 1.85859ZM0.200772 16V5.20404H3.62934V16H0.200772ZM5.52896 16H8.95753V9.97172C8.95753 9.5946 8.99872 9.30369 9.08108 9.09899C9.22522 8.73265 9.44402 8.42289 9.73745 8.1697C10.0309 7.91649 10.399 7.7899 10.8417 7.7899C11.9949 7.7899 12.5714 8.60336 12.5714 10.2303V16H16V9.8101C16 8.21548 15.6396 7.00606 14.9189 6.18182C14.1982 5.35758 13.2458 4.94545 12.0618 4.94545C10.7336 4.94545 9.69884 5.54343 8.95753 6.73939V6.77172H8.94208L8.95753 6.73939V5.20404H5.52896C5.54954 5.54882 5.55985 6.62086 5.55985 8.4202C5.55985 10.2195 5.54954 12.7461 5.52896 16Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Prev/Next navigation */}
              <div className="grid gap-8 py-8 lg:grid-cols-2">
                {prevPost && (
                  <div>
                    <Link href={`/blog/${prevPost.slug}`}>
                      <div className="hover:bg-gray-50 cursor-pointer rounded border border-gray-200 p-6 transition">
                        <div className="space-y-4">
                          <p className="type-supporting text-gray-500">Previous post</p>
                          <div className="flex flex-col gap-2">
                            <h4 className="type-body-copy font-medium text-gray-900">
                              {prevPost.title}
                            </h4>
                            <p className="type-supporting text-gray-500">
                              {prevPost.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {nextPost && (
                  <div className={prevPost ? "" : "lg:col-start-2"}>
                    <Link href={`/blog/${nextPost.slug}`}>
                      <div className="hover:bg-gray-50 cursor-pointer rounded border border-gray-200 p-6 transition text-right">
                        <div className="space-y-4">
                          <p className="type-supporting text-gray-500">Next post</p>
                          <div className="flex flex-col gap-2">
                            <h4 className="type-body-copy font-medium text-gray-900">
                              {nextPost.title}
                            </h4>
                            <p className="type-supporting text-gray-500">
                              {nextPost.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="relative col-span-12 lg:col-span-5 xl:col-span-3 xl:col-start-9">
              {/* Table of Contents - uses ScrollSpySidebar which has its own sticky */}
              {tableOfContents && tableOfContents.length > 0 && (
                <ScrollSpySidebar sections={tableOfContents} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
