import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import NotFound from "@/app/not-found"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe("not found page", () => {
  it("renders the new recovery headline and faq search form", () => {
    render(<NotFound />)

    expect(
      screen.getByRole("heading", { name: /That page doesn't exist/i }),
    ).toBeInTheDocument()

    const searchInput = screen.getByRole("searchbox", { name: /search the faq/i })
    expect(searchInput).toHaveAttribute("name", "q")

    const searchButton = screen.getByRole("button", { name: "Search" })
    const form = searchButton.closest("form")

    expect(form).toHaveAttribute("action", "/faq")
    expect(form).toHaveAttribute("method", "get")
  })

  it("renders curated lightpaper question links with the expected anchors", () => {
    render(<NotFound />)

    expect(
      screen.getByRole("link", { name: /How does LP collateral borrowing work\?/i }),
    ).toHaveAttribute("href", "/lightpaper#protocol-overview")

    expect(
      screen.getByRole("link", { name: /How is risk managed for LP positions\?/i }),
    ).toHaveAttribute("href", "/lightpaper#risk-management")

    expect(
      screen.getByRole("link", { name: /What market opportunity is Avana targeting\?/i }),
    ).toHaveAttribute("href", "/lightpaper#market-opportunity")
  })
})
