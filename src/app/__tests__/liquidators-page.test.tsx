/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import LiquidatorsPage, { metadata } from "@/app/businesses/liquidators/page"

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
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt ?? ""} />,
}))

vi.mock("@/components/business-liquidators-showcase", () => ({
  default: () => <div data-testid="liquidators-showcase">Liquidators Showcase</div>,
}))

vi.mock("@/components/homepage/HomepageNewsroomSection", () => ({
  default: () => <div data-testid="homepage-newsroom">Homepage Newsroom</div>,
}))

describe("liquidators page", () => {
  it("exports canonical metadata for liquidators", () => {
    expect(metadata.title).toBe("Liquidators - Avana")
    expect(metadata.alternates?.canonical).toBe("/businesses/liquidators")
    expect(metadata.description).toContain("liquidation fees")
  })

  it("renders the liquidation operator landing page", () => {
    render(<LiquidatorsPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Turn LP liquidation\s*into an execution edge\./i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /The bot,\s*the unwind,\s*the fee\./i })).toBeInTheDocument()
    expect(screen.getByTestId("liquidators-showcase")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Operators get paid for solving the hard unwind." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Continuous monitoring" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "LP unwind logic" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Route-aware execution" })).toBeInTheDocument()
    expect(screen.getByText("Why is LP liquidation harder than token liquidation?")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
  })
})
