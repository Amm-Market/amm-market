/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import CreditLinesPage, { metadata } from "@/app/credit-lines/page"

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    prefetch?: boolean
  }) => {
    const anchorProps = { ...props }
    delete anchorProps.prefetch

    return (
      <a href={href} {...anchorProps}>
        {children}
      </a>
    )
  },
}))

vi.mock("next/image", () => ({
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean
      priority?: boolean
      sizes?: string
    },
  ) => {
    const imageProps = { ...props }
    delete imageProps.fill
    delete imageProps.priority
    delete imageProps.sizes

    return <img {...imageProps} alt={imageProps.alt ?? ""} />
  },
}))

vi.mock("@/components/homepage/HomepageNewsroomSection", () => ({
  default: () => <div data-testid="homepage-newsroom">Homepage Newsroom</div>,
}))

describe("credit lines page", () => {
  it("exports metadata for the renamed route", () => {
    expect(metadata.title).toBe("Credit Lines - Avana")
    expect(metadata.description).toContain("businesses")
  })

  it("renders the credit lines content while using the current app shell", () => {
    const { container } = render(<CreditLinesPage />)

    const heroHeading = screen.getByRole("heading", { level: 1 })

    expect(heroHeading).toHaveClass(
      "text-left",
      "text-[clamp(2.4rem,5.8vw,4.3rem)]",
      "font-normal",
      "leading-[0.98]",
      "tracking-[-0.065em]",
      "text-[#111111]",
    )
    expect(heroHeading).toHaveTextContent("Your business credit line deserves")
    expect(heroHeading).toHaveTextContent("a better interface.")
    expect(screen.getByText("Avana Credit Lines")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Business credit lines, simplified." })).toBeInTheDocument()
    expect(screen.getByText(/Deposit LP positions, see your borrowing power, and unlock liquidity while fees keep accruing\./i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Credit line overview." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Flexible credit, one interface." })).toBeInTheDocument()
    expect(screen.getByText("Credit line edge")).toBeInTheDocument()
    const financingHeading = screen.getByRole("heading", { name: "Flexible credit, one interface." })
    const safetyHeading = screen.getByRole("heading", { name: "Every health state, fully explained." })
    const platformToolsHeading = screen.getByRole("heading", { name: /Everything you need\s*in one place\./i })

    expect(financingHeading).toBeInTheDocument()
    expect(safetyHeading).toBeInTheDocument()
    expect(platformToolsHeading).toBeInTheDocument()
    expect(screen.getByText("Position Safety")).toBeInTheDocument()
    expect(screen.getAllByText("Safe Zone").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Warning Zone").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Liquidation").length).toBeGreaterThan(0)
    expect(platformToolsHeading.compareDocumentPosition(financingHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(financingHeading.compareDocumentPosition(safetyHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(screen.getAllByText("See your credit line").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Manage your treasury").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Navigate market shifts").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Business-friendly access").length).toBeGreaterThan(0)
    expect(screen.getByRole("heading", { name: "Flexible credit access" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Put idle capital to work" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Retain control" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Add leverage when needed" })).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
    expect(container.querySelector(".site-content-width")).toBeInTheDocument()
    expect(container.querySelectorAll(".site-content-shell").length).toBeGreaterThan(0)
  }, 15000)
})
