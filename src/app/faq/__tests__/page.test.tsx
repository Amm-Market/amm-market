import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import FaqPage from "@/app/faq/page"

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe("faq page", () => {
  it("seeds the search input from the q query param and shows search results", async () => {
    render(await FaqPage({ searchParams: Promise.resolve({ q: "Borrow Spoke" }) }))

    expect(screen.getByPlaceholderText("Search")).toHaveValue("Borrow Spoke")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
    expect(screen.getByText("What does the Borrow Spoke do?")).toBeInTheDocument()
  })

  it("renders the default category when no query param is provided", async () => {
    const { container } = render(await FaqPage({ searchParams: Promise.resolve({}) }))

    expect(screen.getByRole("link", { name: "Core Concepts" })).toHaveAttribute("aria-current", "page")
    expect(screen.getByText("What is Avana?")).toBeInTheDocument()
    expect(container.querySelector(".site-content-shell")).toBeInTheDocument()
  })

  it("shows the empty search state and a clear search link", async () => {
    render(await FaqPage({ searchParams: Promise.resolve({ q: "does-not-exist" }) }))

    expect(screen.getByText('No results found for "does-not-exist"')).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Clear search" })).toHaveAttribute("href", "/faq")
  })

  it("switches between canonical documentation categories from the URL", async () => {
    render(
      await FaqPage({
        searchParams: Promise.resolve({ category: "Health & Liquidation" }),
      }),
    )

    expect(screen.getByRole("link", { name: "Health & Liquidation" })).toHaveAttribute("aria-current", "page")
    expect(screen.getByText("What is the health factor?")).toBeInTheDocument()
  })
})
