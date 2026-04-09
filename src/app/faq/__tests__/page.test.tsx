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

vi.mock("@/app/faq/FaqClient", () => ({
  default: ({
    activeCategory,
    searchTerm,
    searchResults,
  }: {
    activeCategory: string
    searchTerm: string
    searchResults: Array<{ id: string }>
  }) => (
    <div
      data-testid="faq-client"
      data-active-category={activeCategory}
      data-search-term={searchTerm}
      data-search-results={String(searchResults.length)}
    />
  ),
}))

describe("faq page", () => {
  it("seeds the search input from the q query param and shows search results", async () => {
    render(await FaqPage({ searchParams: Promise.resolve({ q: "Borrow Spoke" }) }))

    expect(screen.getByPlaceholderText("Search")).toHaveValue("Borrow Spoke")
    expect(screen.getByTestId("faq-client")).toHaveAttribute("data-search-term", "Borrow Spoke")
    expect(Number(screen.getByTestId("faq-client").getAttribute("data-search-results"))).toBeGreaterThan(0)
  })

  it("renders the default category when no query param is provided", async () => {
    const { container } = render(await FaqPage({ searchParams: Promise.resolve({}) }))

    expect(screen.getByTestId("faq-client")).toHaveAttribute("data-active-category", "Core Concepts")
    expect(container.querySelector(".site-content-shell")).toBeInTheDocument()
  })

  it("shows the empty search state through the faq client", async () => {
    render(await FaqPage({ searchParams: Promise.resolve({ q: "does-not-exist" }) }))

    expect(screen.getByTestId("faq-client")).toHaveAttribute("data-search-term", "does-not-exist")
    expect(screen.getByTestId("faq-client")).toHaveAttribute("data-search-results", "0")
  })

  it("switches between canonical documentation categories from the URL", async () => {
    render(
      await FaqPage({
        searchParams: Promise.resolve({ category: "Health & Liquidation" }),
      }),
    )

    expect(screen.getByTestId("faq-client")).toHaveAttribute("data-active-category", "Health & Liquidation")
  })
})
