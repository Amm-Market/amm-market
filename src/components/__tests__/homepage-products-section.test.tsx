import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import HomepageProductsSection from "../homepage-products-section"

describe("HomepageProductsSection", () => {
  it("renders the avana product bento cards", () => {
    render(<HomepageProductsSection />)

    expect(screen.getByText(/Avana Products/i)).toBeInTheDocument()
    expect(screen.getByText(/One protocol,/i)).toBeInTheDocument()
    expect(screen.getByText(/three product paths\./i)).toBeInTheDocument()

    expect(screen.getByRole("heading", { level: 3, name: "Borrow" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: "Invest" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: "Earn" })).toBeInTheDocument()

    expect(screen.getByText(/Borrow against your LP position/i)).toBeInTheDocument()
    expect(screen.getByText(/as collateral at 5.5% APR\./i)).toBeInTheDocument()
    expect(screen.getByText(/Put every idle dollar to work/i)).toBeInTheDocument()
    expect(screen.getByText(/across saving, investing, and borrowing\./i)).toBeInTheDocument()
    expect(screen.getByText(/Stay liquid while earning 5% APY/i)).toBeInTheDocument()
    expect(screen.getByText(/on cash you have not invested yet\./i)).toBeInTheDocument()

    expect(screen.getByRole("link", { name: /Borrow:/i })).toHaveAttribute("href", "/borrow")
    expect(screen.getByRole("link", { name: /Invest:/i })).toHaveAttribute("href", "/invest")
    expect(screen.getByRole("link", { name: /Earn:/i })).toHaveAttribute("href", "/earn")
  })
})
