import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import InvestGrowthCalculatorSection from "../invest-growth-calculator-section"

describe("InvestGrowthCalculatorSection", () => {
  it("renders the calculator content", () => {
    render(<InvestGrowthCalculatorSection />)

    expect(screen.getByText("Growth Calculator")).toBeInTheDocument()
    expect(screen.getByText("See your cash grow.")).toBeInTheDocument()
    expect(screen.getByText("Avana APY")).toBeInTheDocument()
    expect(screen.getByText("12.0%")).toBeInTheDocument()
    expect(screen.getAllByText("Avana Interest").length).toBeGreaterThan(0)
    expect(screen.getByText("Fluid Interest")).toBeInTheDocument()
    expect(screen.getAllByText("Fluid Value").length).toBeGreaterThan(0)
    expect(screen.getAllByAltText("Fluid").length).toBeGreaterThan(0)
    expect(screen.getByDisplayValue("5,000")).toBeInTheDocument()
    expect(
      screen.getByText("Illustration only. These sample figures assume monthly compounding on a single deposit and are not live quotes or guaranteed returns."),
    ).toBeInTheDocument()
  })

  it("updates projected growth when deposit and months change", () => {
    render(<InvestGrowthCalculatorSection />)

    const depositInput = screen.getByLabelText("Initial Deposit")
    const monthsSlider = screen.getByLabelText("Time Period (months)")

    expect(screen.getAllByText("$5,634.13").length).toBeGreaterThan(0)

    fireEvent.change(depositInput, { target: { value: "10000" } })
    fireEvent.change(monthsSlider, { target: { value: "24" } })

    expect(screen.getByDisplayValue("10,000")).toBeInTheDocument()
    expect(screen.getAllByText("$12,697.35").length).toBeGreaterThan(0)
    expect(screen.getAllByText("$10,723.99").length).toBeGreaterThan(0)
  })
})
