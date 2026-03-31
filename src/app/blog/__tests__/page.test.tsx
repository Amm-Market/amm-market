import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import BlogPage from "@/app/blog/page"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; prefetch?: boolean }) => {
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
  it("starts with the featured post and removes the old intro masthead", async () => {
    render(<BlogPage />)

    expect(screen.queryByText("Avana Blog")).not.toBeInTheDocument()
    expect(
      screen.queryByText(/Product updates, technical deep-dives, and market insights from the Avana team/i),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Introducing Automate: Set-and-Forget LP Management/i }),
    ).toBeInTheDocument()
  })

  it("removes the category filters and omits archive card descriptions", () => {
    render(<BlogPage />)

    expect(screen.queryByRole("link", { name: "All" })).not.toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "Product" })).not.toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "Developers" })).not.toBeInTheDocument()
    expect(
      screen.queryByText(/Announcing Avana v1.1—multi-position collateral, improved oracles/i),
    ).not.toBeInTheDocument()
  })
})
