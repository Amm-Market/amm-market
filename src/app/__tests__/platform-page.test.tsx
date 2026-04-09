/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import PlatformPage, { metadata } from "@/app/platform/page"

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

describe("platform page", () => {
  it("exports metadata for the restored route", () => {
    expect(metadata.title).toBe("Platform - Avana")
    expect(metadata.description).toContain("LP-backed borrowing")
  })

  it("restores the platform content while using the current app shell", () => {
    const { container } = render(<PlatformPage />)

    const heroHeading = screen.getByRole("heading", { level: 1 })

    expect(heroHeading).toHaveClass(
      "text-left",
      "text-[clamp(2.4rem,5.8vw,4.3rem)]",
      "font-normal",
      "leading-[0.98]",
      "tracking-[-0.065em]",
      "text-[#111111]",
    )
    expect(heroHeading).toHaveTextContent("One platform for every")
    expect(heroHeading).toHaveTextContent("Amm Markets needs")
    expect(screen.getByText("Avana Webapp")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /Full protocol access,\s*made intuitive\./i })).toBeInTheDocument()
    expect(screen.getByText(/The Avana Webapp brings the full protocol experience into a simple, intuitive interface\./i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "LP borrowing, simplified." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Flexible capital, one interface." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /Everything you need\s*in one place\./i })).toBeInTheDocument()
    expect(screen.getAllByText("Calculate your rewards").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Manage your portfolio").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Navigate market volatility").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Mobile-first design").length).toBeGreaterThan(0)
    expect(screen.getByRole("heading", { name: "Flexible settlement" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Unlock capital efficiency" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Retain control" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Earn while you borrow" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Power meets precision" })).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
    expect(screen.getByText("Advanced LP Management")).toBeInTheDocument()
    expect(container.querySelector(".site-content-width")).toBeInTheDocument()
    expect(container.querySelectorAll(".site-content-shell").length).toBeGreaterThan(0)
  }, 15000)
})
