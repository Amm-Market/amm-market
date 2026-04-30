import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import EarlyAdoptersPage, { metadata } from "@/app/early-adopters/page"

describe("early adopters page", () => {
  it("exports canonical metadata for the sale page", () => {
    expect(metadata.title).toBe("Early Adopters - Avana")
    expect(metadata.alternates?.canonical).toBe("/early-adopters")
    expect(metadata.description).toContain("NFT sale")
  })

  it("renders the early adopters sale landing page", () => {
    render(<EarlyAdoptersPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Avana Early Adopters/i }),
    ).toBeInTheDocument()
    expect(screen.getByText("World of Kalea")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /Built as access, not just inventory\./i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /Choose your banner before the world gets bigger\./i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Axiom" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Bravos" })).toBeInTheDocument()
    expect(screen.getByText("Is this a live minting flow?")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Trade on OpenSea/i })).toHaveAttribute(
      "href",
      "https://opensea.io/assets/ethereum/0xa7206d878c5c3871826dfdb42191c49b1d11f466/1",
    )
    expect(screen.getByRole("link", { name: /View contract/i })).toHaveAttribute(
      "href",
      "https://etherscan.io/address/0xa7206d878c5c3871826dfdb42191c49b1d11f466#code",
    )
  })
})
