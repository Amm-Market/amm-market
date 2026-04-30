/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import TradePage, { metadata } from "@/app/trade/page"

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
      fetchPriority?: string
    },
  ) => {
    const imageProps = { ...props }
    delete imageProps.fill
    delete imageProps.priority
    delete imageProps.sizes
    delete imageProps.fetchPriority

    return <img {...imageProps} alt={imageProps.alt ?? ""} />
  },
}))

vi.mock("@/components/homepage/HomepageNewsroomSection", () => ({
  default: () => <div data-testid="homepage-newsroom">Homepage Newsroom</div>,
}))

vi.mock("@/components/leverage-glance-showcase-section", () => ({
  default: () => <div data-testid="leverage-glance-showcase">Leverage Glance Showcase</div>,
}))

describe("trade page", () => {
  it("exports route metadata for trade", () => {
    expect(metadata.title).toBe("Trade - Avana")
    expect(metadata.description).toContain("LP-backed leverage")
    expect(metadata.alternates?.canonical).toBe("/trade")
  })

  it("renders the leverage market story", () => {
    render(<TradePage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Turn LP capital\s*into leverage\./i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Deposit supported AMM positions, unlock borrowing power through Avana/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Get Early Access" })).toHaveAttribute("href", "/faq")
    expect(screen.getByTestId("leverage-glance-showcase")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Leverage in three steps" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "What sets LP leverage apart." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Perps, built on top of LP collateral" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Leverage Layer" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Designed for safe leverage." })).toBeInTheDocument()
    expect(screen.getByText("What is Avana Leverage Market?")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
  })
})
