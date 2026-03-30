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

  it("renders the current Avana and Aave relaunch headline", () => {
    render(<Home />)

    expect(screen.getByText(/Aave first introduced Avana in 2020/i)).toBeInTheDocument()
    expect(screen.getByText(/Now we're relaunching it on Aave v4/i)).toBeInTheDocument()
  })
})
