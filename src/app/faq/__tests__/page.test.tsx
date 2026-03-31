import { render, screen, fireEvent } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import FaqPage from "@/app/faq/page"

const useSearchParamsMock = vi.fn()

vi.mock("next/navigation", () => ({
  useSearchParams: () => useSearchParamsMock(),
}))

describe("faq page", () => {
  it("seeds the search input from the q query param and shows search results", () => {
    useSearchParamsMock.mockReturnValue(
      new URLSearchParams("q=borrow")
    )

    render(<FaqPage />)

    expect(screen.getByPlaceholderText("Search")).toHaveValue("borrow")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
  })

  it("keeps the in-page search working when no query param is provided", () => {
    useSearchParamsMock.mockReturnValue(
      new URLSearchParams("")
    )

    render(<FaqPage />)

    const searchInput = screen.getByPlaceholderText("Search")
    fireEvent.change(searchInput, { target: { value: "health factor" } })

    expect(searchInput).toHaveValue("health factor")
    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()
  })
})
