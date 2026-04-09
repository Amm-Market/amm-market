/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import LeveragePage, { metadata } from "@/app/leverage/page"

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

describe("leverage page", () => {
  it("exports route metadata for leverage", () => {
    expect(metadata.title).toBe("Leverage - Avana")
    expect(metadata.description).toContain("LP-backed leverage")
    expect(metadata.alternates?.canonical).toBe("/leverage")
  })

  it("renders the leverage market story", () => {
    render(<LeveragePage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Turn LP capital\s*into leverage\./i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Deposit supported AMM positions, unlock borrowing power through Avana/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Get Early Access" })).toHaveAttribute("href", "/faq")
    expect(screen.getByTestId("leverage-glance-showcase")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "How leverage works" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "No funding rates. Hub-backed leverage." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Borrow-based exposure" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Market access through the Hub" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "LP Backed Leverage" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "One Position, One View" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Abstracted Execution" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Built for controlled leverage." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Built as a layered leverage stack." })).toBeInTheDocument()
    expect(screen.getByText("What is Avana Leverage Market?")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
  })
})
