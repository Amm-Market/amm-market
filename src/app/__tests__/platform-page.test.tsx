/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import PlatformPage, { metadata } from "@/app/platform/page"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
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

vi.mock("@/components/webapp-hero", () => ({
  default: () => <div data-testid="webapp-hero">Webapp Hero</div>,
}))

describe("webapp page", () => {
  it("exports metadata for the restored route", () => {
    expect(metadata.title).toBe("Platform - Avana")
    expect(metadata.description).toContain("LP-backed borrowing")
  })

  it("restores the platform content while using the current app shell", () => {
    render(<PlatformPage />)

    expect(screen.getByTestId("webapp-hero")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "How It Works" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Financing" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Power meets precision" })).toBeInTheDocument()
    expect(screen.getByText("Advanced LP Management")).toBeInTheDocument()
  })
})
