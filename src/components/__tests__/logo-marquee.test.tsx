import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import LogoMarquee from "@/components/logo-marquee"

describe("LogoMarquee", () => {
  it("renders separate mobile and desktop decorative strips", () => {
    const { container } = render(<LogoMarquee />)

    expect(screen.getByTestId("homepage-logo-strip-mobile")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-logo-strip-desktop")).toBeInTheDocument()
    expect(screen.getAllByTestId("homepage-logo-item")).toHaveLength(8)
    expect(screen.getAllByText("Uniswap")).toHaveLength(2)
    expect(screen.getAllByText("Aave")).toHaveLength(2)
    expect(screen.getAllByText("Curve")).toHaveLength(2)
    expect(screen.getByText("Balancer")).toBeInTheDocument()
    expect(screen.getByText("Sushi")).toBeInTheDocument()
    expect(screen.queryAllByRole("link")).toHaveLength(0)
    expect(container.querySelector(".animate-marquee")).not.toBeInTheDocument()
  })
})
