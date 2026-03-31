import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import FaqPageClient from "@/app/faq/faq-page-client"

describe("faq page", () => {
  it("seeds the search input from the q query param and shows search results", () => {
    render(<FaqPageClient initialSearchTerm="borrow" />)

    expect(screen.getByPlaceholderText("Search")).toHaveValue("borrow")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
  })

  it("keeps the in-page search working when no query param is provided", () => {
    render(<FaqPageClient />)

    const searchInput = screen.getByPlaceholderText("Search")
    fireEvent.change(searchInput, { target: { value: "health factor" } })

    expect(searchInput).toHaveValue("health factor")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
  })
})
