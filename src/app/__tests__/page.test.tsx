import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import Home from "@/app/page"

vi.mock("@/components/webapp-hero", () => ({
  default: () => <div data-testid="webapp-hero">WebappHero</div>,
}))

vi.mock("@/components/logo-marquee", () => ({
  default: () => <div data-testid="logo-marquee">LogoMarquee</div>,
}))

vi.mock("@/components/BuildTomorrowSection", () => ({
  default: () => <div data-testid="build-tomorrow-section">BuildTomorrowSection</div>,
}))

vi.mock("@/components/hero-section", () => ({
  default: () => <div data-testid="hero-section">HeroSection</div>,
}))

vi.mock("@/components/features-section", () => ({
  default: () => <div data-testid="features-section">FeaturesSection</div>,
}))

describe("home page", () => {
  it("keeps the approved homepage section order", () => {
    render(<Home />)

    const webappHero = screen.getByTestId("webapp-hero")
    const logoMarquee = screen.getByTestId("logo-marquee")
    const buildTomorrow = screen.getByTestId("build-tomorrow-section")
    const heroSection = screen.getByTestId("hero-section")

    expect(webappHero.compareDocumentPosition(logoMarquee)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(logoMarquee.compareDocumentPosition(buildTomorrow)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    expect(buildTomorrow.compareDocumentPosition(heroSection)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it("renders the refreshed Avana relaunch section", () => {
    render(<Home />)

    expect(screen.getByText(/Avana Relaunch/i)).toBeInTheDocument()
    expect(screen.getByText(/Deeper liquidity,/i)).toBeInTheDocument()
    expect(screen.getByText(/precise borrowing/i)).toBeInTheDocument()
    expect(screen.getByText(/Avana turns active LP positions into productive collateral/i)).toBeInTheDocument()
    expect(screen.getByText(/Built on Aave v4, the protocol is designed around live AMM exposure/i)).toBeInTheDocument()
  })
})
