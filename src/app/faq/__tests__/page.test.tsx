import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import FaqPageClient from "@/app/faq/faq-page-client"

describe("faq page", () => {
  it("seeds the search input from the q query param and shows search results", () => {
    render(<FaqPageClient initialSearchTerm="Borrow Spoke" />)

    expect(screen.getByPlaceholderText("Search")).toHaveValue("Borrow Spoke")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
    expect(screen.getByText("What does the Borrow Spoke do?")).toBeInTheDocument()
  })

  it("keeps the in-page search working when no query param is provided", () => {
    render(<FaqPageClient />)

    const searchInput = screen.getByPlaceholderText("Search")
    fireEvent.change(searchInput, { target: { value: "recoverable value" } })

    expect(searchInput).toHaveValue("recoverable value")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
    expect(screen.getByText("Why is borrow power lower than the full position value?")).toBeInTheDocument()
  })

  it("renders the active category heading when not searching", () => {
    const { container } = render(<FaqPageClient />)

    expect(screen.getByRole("button", { name: "Core Concepts" })).toHaveAttribute("aria-pressed", "true")
    expect(screen.getByText("What is Avana?")).toBeInTheDocument()
    expect(screen.queryByText(/My wallet won't connect/i)).not.toBeInTheDocument()
    expect(container.querySelector(".site-content-shell")).toBeInTheDocument()
  })

  it("clears search results from the empty state action", () => {
    render(<FaqPageClient initialSearchTerm="does-not-exist" />)

    const clearButton = screen.getByRole("button", { name: "Clear search" })
    fireEvent.click(clearButton)

    expect(screen.getByPlaceholderText("Search")).toHaveValue("")
    expect(screen.getByRole("button", { name: "Core Concepts" })).toHaveAttribute("aria-pressed", "true")
  })

  it("switches between the canonical documentation categories", () => {
    render(<FaqPageClient />)

    fireEvent.click(screen.getByRole("button", { name: "Health & Liquidation" }))

    expect(screen.getByRole("button", { name: "Health & Liquidation" })).toHaveAttribute("aria-pressed", "true")
    expect(screen.getByText("What is the health factor?")).toBeInTheDocument()
  })
})
