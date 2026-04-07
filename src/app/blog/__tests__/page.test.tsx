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
    expect(screen.getByRole("link", { name: "Development" })).toHaveAttribute("href", "/blog?tag=Development")
    expect(screen.queryByText("Avana Blog")).not.toBeInTheDocument()
  })

  it("filters the newsroom from the tag query string without client state", async () => {
    render(await BlogPage({ searchParams: Promise.resolve({ tag: "Development" }) }))

    expect(screen.getByRole("link", { name: "Development" })).toHaveAttribute("aria-current", "page")
    expect(screen.getByRole("link", { name: /Smart Contract Architecture: Avana Technical Reference/i })).toBeInTheDocument()
    expect(screen.queryByRole("link", { name: /Introducing Automate: Set-and-Forget LP Management/i })).not.toBeInTheDocument()
  })
})
