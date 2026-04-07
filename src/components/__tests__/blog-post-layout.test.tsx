/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import BlogPostLayout from "@/components/blog-post-layout"

vi.mock("next/link", () => ({
  default: ({ children, href, prefetch, ...props }: { children: React.ReactNode; href: string; prefetch?: boolean }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock("next/image", () => ({
  default: ({ alt, src, ...props }: { alt: string; src: string }) => <img alt={alt} src={src} {...props} />,
}))

vi.mock("@/components/scroll-spy-sidebar", () => ({
  ScrollSpySidebar: ({ sections }: { sections: Array<{ id: string; title: string }> }) => (
    <nav data-testid="scroll-spy-sidebar">
      {sections.map((section) => (
        <span key={section.id}>{section.title}</span>
      ))}
    </nav>
  ),
}))

describe("BlogPostLayout", () => {
  it("renders the blog article shell with sidebar and share section", () => {
    const { container } = render(
      <BlogPostLayout
        title="A structured post"
        date="March 31, 2026"
        description="Testing the shared shell."
        tableOfContents={[{ id: "intro", title: "Introduction" }]}
      >
        <section id="intro">
          <p>Body content</p>
        </section>
      </BlogPostLayout>,
    )

    expect(screen.getByRole("heading", { name: "A structured post" })).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("site-article-layout")
    expect(container.querySelector(".site-blog-article")).toBeInTheDocument()
    expect(screen.getByText("Share this article")).toBeInTheDocument()
    expect(screen.getByTestId("scroll-spy-sidebar")).toBeInTheDocument()
  })
})
