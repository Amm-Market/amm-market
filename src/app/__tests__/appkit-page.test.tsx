/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import AppKitPage, { metadata } from "@/app/businesses/appkit/page"

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

vi.mock("@/components/business-appkit-showcase", () => ({
  default: () => <div data-testid="appkit-showcase">AppKit Showcase</div>,
}))

vi.mock("@/components/homepage/HomepageNewsroomSection", () => ({
  default: () => <div data-testid="homepage-newsroom">Homepage Newsroom</div>,
}))

describe("appkit page", () => {
  it("exports canonical metadata for appkit", () => {
    expect(metadata.title).toBe("AppKit - Avana")
    expect(metadata.alternates?.canonical).toBe("/businesses/appkit")
    expect(metadata.description).toContain("partner DEX")
  })

  it("renders the partner integration landing page", () => {
    render(<AppKitPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Make LP-backed credit\s*feel native to your product\./i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /Your UI,\s*Avana credit\./i })).toBeInTheDocument()
    expect(screen.getByTestId("appkit-showcase")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Built for products that want credit without context switching." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Native partner menus" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "API-first routing" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Partner economics" })).toBeInTheDocument()
    expect(screen.getByText("What is AppKit for?")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
  })
})
