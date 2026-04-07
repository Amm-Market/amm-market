import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import BlogPage from "@/app/blog/page"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; prefetch?: boolean }) => {
    const anchorProps = { ...props }
    delete anchorProps.prefetch

    return (
      <a href={href} {...anchorProps}>
        {children}
      </a>
    )
  },
}))

describe("blog page", () => {
  it("renders the newsroom header with the category menu", async () => {
    render(<BlogPage />)

    expect(screen.getByRole("heading", { level: 1, name: "Newsroom" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true")
    expect(screen.queryByText("Avana Blog")).not.toBeInTheDocument()
    expect(
      screen.queryByText(/Product updates, technical deep-dives, and market insights from the Avana team/i),
    ).not.toBeInTheDocument()
    expect(screen.queryByText("Featured")).not.toBeInTheDocument()
    expect(screen.queryByText("Featured Story")).not.toBeInTheDocument()
  })

  it("defaults to the All section and filters when another menu item is selected", async () => {
    const user = userEvent.setup()
    render(<BlogPage />)

    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true")
    expect(screen.getByRole("link", { name: /Introducing Automate: Set-and-Forget LP Management/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Smart Contract Architecture: Avana Technical Reference/i })).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Development" }))

    expect(screen.getByRole("button", { name: "Development" })).toHaveAttribute("aria-pressed", "true")
    expect(screen.getByRole("link", { name: /Smart Contract Architecture: Avana Technical Reference/i })).toBeInTheDocument()
    expect(screen.queryByRole("link", { name: /Introducing Automate: Set-and-Forget LP Management/i })).not.toBeInTheDocument()
  })
})
