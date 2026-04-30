/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import LendPage, { metadata } from "@/app/lend/page"

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

vi.mock("@/components/invest-apy-section", () => ({
  default: () => <div data-testid="invest-apy">Invest APY</div>,
}))

vi.mock("@/components/invest-growth-calculator-section", () => ({
  default: () => <div data-testid="invest-growth">Invest Growth</div>,
}))

vi.mock("@/components/product-feature-scroll-section", () => ({
  default: ({
    title,
  }: {
    title: React.ReactNode
  }) => <div data-testid="feature-scroll">{title}</div>,
}))

describe("lend page", () => {
  it("exports route metadata for lend", () => {
    expect(metadata.title).toBe("Lend - Avana")
    expect(metadata.alternates?.canonical).toBe("/lend")
  })

  it("renders the existing lending experience on the new route", () => {
    render(<LendPage />)

    expect(screen.getByRole("heading", { level: 1, name: /Lend into\s*LP-backed credit\./i })).toBeInTheDocument()
    expect(screen.getByTestId("invest-apy")).toBeInTheDocument()
    expect(screen.getByTestId("invest-growth")).toBeInTheDocument()
    expect(screen.getByTestId("feature-scroll")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
  })
})
