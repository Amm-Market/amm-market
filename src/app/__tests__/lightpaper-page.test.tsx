import { render, screen, within } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import LightpaperPage from "@/app/lightpaper/page"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock("@/components/scroll-spy-sidebar", () => ({
  ScrollSpySidebar: () => <nav data-testid="scroll-spy-sidebar" />,
}))

describe("lightpaper spoke configuration", () => {
  it(
    "renders the book-led hero",
    () => {
      render(<LightpaperPage />)

      expect(
        screen.getByRole("heading", {
          name: "Meet Avana",
        }),
      ).toBeInTheDocument()
      expect(screen.getByTestId("scroll-spy-sidebar")).toBeInTheDocument()
    },
    15000,
  )

  it(
    "renders the Aave-inspired spoke table structure with explicit collateral and borrow columns",
    () => {
    render(<LightpaperPage />)

    expect(screen.queryByRole("columnheader", { name: "Market" })).not.toBeInTheDocument()
    expect(screen.queryByRole("columnheader", { name: "Description" })).not.toBeInTheDocument()
    expect(screen.queryByRole("columnheader", { name: "Example Pools" })).not.toBeInTheDocument()

    const spokeHeaders = screen.getAllByRole("columnheader", { name: "Spoke" })
    const collateralHeaders = screen.getAllByRole("columnheader", { name: "Collateral" })
    const borrowHeaders = screen.getAllByRole("columnheader", { name: "Borrow" })

    expect(spokeHeaders.length).toBeGreaterThan(0)
    expect(collateralHeaders.length).toBe(spokeHeaders.length)
    expect(borrowHeaders.length).toBe(spokeHeaders.length)
    expect(screen.getAllByText("Uniswap").length).toBeGreaterThan(0)
    expect(screen.getByText("$5.68B TVL")).toBeInTheDocument()
    },
    15000,
  )

  it("shows e-mode labels, lp primitives, and split Balancer rows", () => {
    render(<LightpaperPage />)

    const stableRow = screen.getAllByText("Uniswap v3 Stable LPs")[0].closest("tr, article")
    expect(stableRow).not.toBeNull()
    expect(within(stableRow as HTMLElement).getByText("E-Mode")).toBeInTheDocument()

    const correlatedRow = screen.getAllByText("Curve Correlated LPs")[0].closest("tr, article")
    expect(correlatedRow).not.toBeNull()
    expect(within(correlatedRow as HTMLElement).getByText("E-Mode")).toBeInTheDocument()

    expect(screen.getAllByText("Balancer Stable LPs").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Balancer Correlated LPs").length).toBeGreaterThan(0)
    expect(screen.getAllByText("StableSwap LP tokens").length).toBeGreaterThan(0)
    expect(screen.getAllByText("USDC/USDT").length).toBeGreaterThan(0)
    expect(screen.getAllByText("80/20 WETH/AAVE").length).toBeGreaterThan(0)
  })
})
