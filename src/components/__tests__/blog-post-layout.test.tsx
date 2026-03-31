/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import BlogPostLayout from "@/components/blog-post-layout"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock("next/image", () => ({
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean
      priority?: boolean
      sizes?: string
    },
  ) => {
    const imageProps = { ...props }
    delete imageProps.fill
    delete imageProps.priority
    delete imageProps.sizes

    return <img {...imageProps} alt={imageProps.alt ?? ""} />
  },
}))

vi.mock("@/components/scroll-spy-sidebar", () => ({
  ScrollSpySidebar: ({ sections }: { sections: { id: string; title: string }[] }) => (
    <nav data-testid="scroll-spy-sidebar">{sections.map((section) => section.title).join(", ")}</nav>
  ),
}))

describe("BlogPostLayout", () => {
  it("uses the shared outer shell while keeping long-form structure", () => {
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
    expect(screen.getByTestId("scroll-spy-sidebar")).toBeInTheDocument()
    expect(container.firstChild).toHaveClass("site-content-shell")
    expect(container.querySelector(".site-article-content")).toBeInTheDocument()
  })
})
