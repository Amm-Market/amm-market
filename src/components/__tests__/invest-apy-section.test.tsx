import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import InvestApySection from "../invest-apy-section"

describe("InvestApySection", () => {
  it("renders the APY section content", () => {
    render(<InvestApySection />)

    expect(screen.getByText("Avana APY")).toBeInTheDocument()
    expect(screen.getByText("Same Idle Cash with Higher APY Returns")).toBeInTheDocument()
    expect(screen.getByText("0.0% to 3.0%")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Hub Base Rate/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Spoke Premium/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Pool Risk Adjustment/i })).toBeInTheDocument()
  })

  it("increases APY intensity as later layers are selected", async () => {
    const user = userEvent.setup()

    const { container } = render(<InvestApySection />)
    const countBand = (band: string) => container.querySelectorAll(`[data-slot="apy-cell"][data-band="${band}"]`).length
    const countActive = () => container.querySelectorAll('[data-slot="apy-cell"][data-active="true"]').length

    expect(countActive()).toBe(20)
    expect(countBand("base")).toBe(20)
    expect(countBand("premium")).toBe(0)
    expect(countBand("risk")).toBe(0)

    await user.click(screen.getByRole("button", { name: /Spoke Premium/i }))
    expect(screen.getByText("3.0% to 9.0%")).toBeInTheDocument()
    expect(countActive()).toBe(60)
    expect(countBand("base")).toBe(20)
    expect(countBand("premium")).toBe(40)
    expect(countBand("risk")).toBe(0)

    await user.click(screen.getByRole("button", { name: /Pool Risk Adjustment/i }))
    expect(screen.getByText("9.0% to 20.0%")).toBeInTheDocument()
    expect(countActive()).toBe(100)
    expect(countBand("base")).toBe(20)
    expect(countBand("premium")).toBe(40)
    expect(countBand("risk")).toBe(40)
  })

  it("supports swipe gestures on the heatmap", () => {
    render(<InvestApySection />)

    const heatmap = document.querySelector('[data-slot="apy-heatmap"]')
    expect(heatmap).not.toBeNull()

    fireEvent.touchStart(heatmap as Element, {
      touches: [{ clientX: 200 }],
    })
    fireEvent.touchEnd(heatmap as Element, {
      changedTouches: [{ clientX: 120 }],
    })

    expect(screen.getByText("3.0% to 9.0%")).toBeInTheDocument()

    fireEvent.touchStart(heatmap as Element, {
      touches: [{ clientX: 120 }],
    })
    fireEvent.touchEnd(heatmap as Element, {
      changedTouches: [{ clientX: 200 }],
    })

    expect(screen.getByText("0.0% to 3.0%")).toBeInTheDocument()
  })
})
