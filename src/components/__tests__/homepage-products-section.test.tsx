import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import HomepageProductsSection from "../homepage-products-section"

describe("HomepageProductsSection", () => {
  it("renders the avana product bento cards", () => {
    render(<HomepageProductsSection />)

    expect(screen.getByText(/Avana Products/i)).toBeInTheDocument()
    expect(screen.getByText(/One protocol,/i)).toBeInTheDocument()
    expect(screen.getByText(/four product paths\./i)).toBeInTheDocument()

    expect(screen.getByRole("heading", { level: 3, name: "Borrow" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: "Invest" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: "Earn" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: "Platform" })).toBeInTheDocument()

    expect(screen.getByText(/Borrow against your LP position as collateral at 5.5% APR/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Give all your money a place to grow, whether you are saving it, investing it, or just trying to borrow against it\./i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Stay liquid while you earn 5% APY on your uninvested cash/i)).toBeInTheDocument()
    expect(screen.getByText(/No KYC, ultra secure, fully self-custodial\./i)).toBeInTheDocument()
  })
})
