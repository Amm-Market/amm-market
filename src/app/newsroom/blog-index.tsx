"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import type { BlogPost, TagFilter } from "@/lib/content"

/**
 * Client-side blog index so `/blog` can stay fully static.
 * The active tag lives in the URL (?tag=) and is read with useSearchParams;
 * the server page renders the default "All" view as the Suspense fallback so
 * the static HTML still contains the full post grid.
 */

const bookCoverThemes = [
  {
    cover: "bg-[#0F1518]",
    spine: "bg-[#01AACF]",
    text: "text-white",
    muted: "text-white/54",
    number: "text-white/48",
  },
  {
    cover: "bg-[#2F414B]",
    spine: "bg-[#BC846F]",
    text: "text-white",
    muted: "text-white/56",
    number: "text-white/52",
  },
  {
    cover: "bg-[#9E5537]",
    spine: "bg-[#0F1518]",
    text: "text-white",
    muted: "text-white/58",
    number: "text-white/46",
  },
  {
    cover: "bg-[#01AACF]",
    spine: "bg-[#2F414B]",
    text: "text-[#0F1518]",
    muted: "text-[#0F1518]/58",
    number: "text-[#0F1518]/42",
  },
  {
    cover: "bg-[#2F414B]",
    spine: "bg-[#01AACF]",
    text: "text-white",
    muted: "text-white/54",
    number: "text-white/48",
  },
  {
    cover: "bg-[#BC846F]",
    spine: "bg-[#0F1518]",
    text: "text-[#0F1518]",
    muted: "text-[#0F1518]/58",
    number: "text-[#0F1518]/42",
  },
  {
    cover: "bg-[#0F1518]",
    spine: "bg-[#9E5537]",
    text: "text-white",
    muted: "text-white/56",
    number: "text-white/52",
  },
  {
    cover: "bg-[#2F414B]",
    spine: "bg-[#BC846F]",
    text: "text-white",
    muted: "text-white/54",
    number: "text-white/48",
  },
] as const

function getBookCoverTheme(index: number) {
  return bookCoverThemes[index % bookCoverThemes.length]
}

function getBookNumber(index: number) {
  return String(index + 1).padStart(2, "0")
}

function buildTagHref(tag: TagFilter) {
  if (tag === "All") {
    return "/newsroom"
  }

  return `/newsroom?tag=${encodeURIComponent(tag)}`
}

export function BlogIndex({
  posts,
  tagOptions,
  activeTag,
}: {
  posts: readonly BlogPost[]
  tagOptions: readonly TagFilter[]
  activeTag: TagFilter
}) {
  const [visibleCount, setVisibleCount] = useState(8)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const filteredBlogs = useMemo(
    () =>
      [...posts]
        .filter((post) => activeTag === "All" || post.tag === activeTag)
        .sort((first, second) => Date.parse(second.date) - Date.parse(first.date)),
    [activeTag, posts],
  )
  const visibleBlogs = filteredBlogs.slice(0, visibleCount)

  useEffect(() => {
    const loadMoreElement = loadMoreRef.current

    if (!loadMoreElement || visibleCount >= filteredBlogs.length) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) => Math.min(count + 8, filteredBlogs.length))
        }
      },
      { rootMargin: "100px 0px" },
    )

    observer.observe(loadMoreElement)
    return () => observer.disconnect()
  }, [filteredBlogs.length, visibleCount])

  return (
    <>
      <section className="flex justify-center pb-10 pt-8 md:pb-12 md:pt-10">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <div className="flex max-w-full items-center justify-center">
            <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
              {tagOptions.map((tag) => {
                const active = activeTag === tag

                return (
                  <Link
                    key={tag}
                    href={buildTagHref(tag)}
                    prefetch={false}
                    scroll={false}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-[#01AACF] text-white hover:bg-[#00a0c2]"
                        : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
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

      <section className="pt-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-6 md:gap-x-7 md:gap-y-10 lg:grid-cols-4">
          {visibleBlogs.map((post, index) => {
            const theme = getBookCoverTheme(index)

            return (
              <div key={post.id}>
                <Link
                  href={`/newsroom/${post.slug}`}
                  prefetch={false}
                  className="group block h-full touch-manipulation"
                >
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-[4/5] w-full">
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-[3%] right-[-3%] w-[8%] rounded-r-sm border-r border-[#d8dee7] bg-[#f6f8fb] shadow-[5px_7px_12px_rgba(15,23,42,0.10)] transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-[0.2rem] ${theme.cover} px-5 py-6 shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-x-1.5 group-hover:-skew-y-[0.6deg] group-hover:shadow-[6px_12px_25px_rgba(15,23,42,0.16)] md:px-6 md:py-7`}
                    >
                      <div
                        aria-hidden="true"
                        className={`absolute inset-y-0 left-0 w-4 ${theme.spine}`}
                      />
                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <span className={`text-[0.8rem] font-semibold uppercase tracking-[0.22em] ${theme.text}`}>
                          {post.tag}
                        </span>
                        <span className={`font-mono text-sm ${theme.number}`}>{getBookNumber(index)}</span>
                      </div>
                      <h2 className={`relative z-10 mt-auto max-w-[13ch] break-words pb-2 text-[1.25rem] font-medium leading-[1.16] tracking-[-0.055em] sm:text-[1.45rem] md:text-[1.58rem] ${theme.text}`}>
                        {post.title}
                      </h2>
                      <span className={`relative z-10 mt-4 text-xs font-medium ${theme.muted}`}>
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            )
          })}
        </div>
        {visibleCount < filteredBlogs.length ? (
          <div ref={loadMoreRef} aria-hidden="true" className="h-px" />
        ) : null}
      </section>
    </>
  )
}

export function BlogIndexFromSearchParams({
  posts,
  tagOptions,
}: {
  posts: readonly BlogPost[]
  tagOptions: readonly TagFilter[]
}) {
  const searchParams = useSearchParams()
  const requestedTag = searchParams.get("tag") ?? undefined
  const activeTag = tagOptions.find((tag) => tag === requestedTag) ?? "All"

  return <BlogIndex key={activeTag} posts={posts} tagOptions={tagOptions} activeTag={activeTag} />
}
