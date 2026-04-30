import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import CareersPage, { metadata } from "@/app/careers/page"

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

vi.mock("@/components/careers-showcase", () => ({
  default: () => <div data-testid="careers-showcase">Careers Showcase</div>,
}))

vi.mock("@/components/homepage/HomepageNewsroomSection", () => ({
  default: () => <div data-testid="homepage-newsroom">Homepage Newsroom</div>,
}))

describe("careers page", () => {
  it("exports canonical metadata for careers", () => {
    expect(metadata.title).toBe("Careers - Avana")
    expect(metadata.alternates?.canonical).toBe("/careers")
    expect(metadata.description).toContain("LP-backed borrowing")
  })

  it("renders the careers landing page", () => {
    render(<CareersPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Build the product\s*that builds trust\./i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /Small team,\s*high ownership\./i })).toBeInTheDocument()
    expect(screen.getByTestId("careers-showcase")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "The best teams are specific about how they work." })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Product judgment" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Strong writing" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Comfort with ambiguity" })).toBeInTheDocument()
    expect(screen.getByText("Are you hiring right now?")).toBeInTheDocument()
    expect(screen.getByTestId("homepage-newsroom")).toBeInTheDocument()
  })
})
