import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import BlogPage from "@/app/blog/page"

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    prefetch?: boolean
  }) => {
    const anchorProps = { ...props }
    delete anchorProps.prefetch

    return (
      <a href={href} {...anchorProps}>
        {children}
      </a>
    )
  },
}))

describe("blog page", () => {
  it("renders the newsroom header with server-driven tag links", async () => {
    render(await BlogPage({ searchParams: Promise.resolve({}) }))

    expect(screen.getByRole("heading", { level: 1, name: "Newsroom" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "All" })).toHaveAttribute("aria-current", "page")
    expect(screen.getByRole("link", { name: "Protocol" })).toHaveAttribute("href", "/blog?tag=Protocol")
    expect(screen.queryByText("Avana Blog")).not.toBeInTheDocument()
  })

  it("filters the newsroom from the tag query string without client state", async () => {
    render(await BlogPage({ searchParams: Promise.resolve({ tag: "Protocol" }) }))

    expect(screen.getByRole("link", { name: "Protocol" })).toHaveAttribute("aria-current", "page")
    expect(screen.getByRole("heading", { name: /How Avana Governs LP Risk/i })).toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: /Automate: A Control Layer for LP Collateral on Avana/i })).not.toBeInTheDocument()
  })
})
