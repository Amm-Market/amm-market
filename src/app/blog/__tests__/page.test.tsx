import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import BlogPage from "@/app/blog/page"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe("blog page", () => {
  it("starts with the featured post and removes the old intro masthead", async () => {
    render(await BlogPage({ searchParams: Promise.resolve({}) }))

    expect(screen.queryByText("Avana Blog")).not.toBeInTheDocument()
    expect(
      screen.queryByText(/Product updates, technical deep-dives, and market insights from the Avana team/i),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Introducing Automate: Set-and-Forget LP Management/i }),
    ).toBeInTheDocument()
  })

  it("keeps category filters visible and omits archive card descriptions", async () => {
    render(await BlogPage({ searchParams: Promise.resolve({}) }))

    expect(screen.getAllByRole("link", { name: "All" })[0]).toHaveAttribute("href", "/blog")
    expect(screen.getAllByRole("link", { name: "Product" })[0]).toHaveAttribute("href", "/blog?category=Product")
    expect(
      screen.queryByText(/Announcing Avana v1.1—multi-position collateral, improved oracles/i),
    ).not.toBeInTheDocument()
  })
})
