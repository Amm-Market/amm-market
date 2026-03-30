import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

describe("DeveloperDocPageHeader", () => {
  beforeEach(() => {
    vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:test")
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined)
    vi.spyOn(window, "open").mockImplementation(() => null)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("copies markdown from the closest developer-doc export root", async () => {
    const user = userEvent.setup()
    const writeTextMock = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue(undefined)

    render(
      <div data-developer-doc-export-root>
        <DeveloperDocPageHeader
          title="Borrow Spoke"
          description="Borrower-facing execution layer for LP-backed borrowing."
        />
        <section>
          <h2>Overview</h2>
          <p>
            See <a href="/developers/architecture">Architecture</a> and <code>borrow()</code>.
          </p>
        </section>
      </div>,
    )

    await user.click(screen.getByRole("button", { name: /copy for llm/i }))
    await user.click(screen.getByRole("button", { name: /copy page/i }))

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(
        "# Borrow Spoke\n\nBorrower-facing execution layer for LP-backed borrowing.\n\n## Overview\n\nSee [Architecture](/developers/architecture) and `borrow()`.",
      )
    })
  })

  it("shows all menu actions and opens a raw markdown view", async () => {
    const user = userEvent.setup()

    render(
      <div data-developer-doc-export-root>
        <DeveloperDocPageHeader
          title="Key Concepts"
          description="Core ideas behind LP-backed borrowing."
        />
        <section>
          <h2>Overview</h2>
          <p>Intro text.</p>
        </section>
      </div>,
    )

    await user.click(screen.getByRole("button", { name: /copy for llm/i }))

    expect(
      screen.getByRole("button", { name: /copy page/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /view as markdown/i })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /view as plain text/i })).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /view as markdown/i }))

    expect(URL.createObjectURL).toHaveBeenCalled()
    expect(window.open).toHaveBeenCalledWith("blob:test", "_blank", "noopener,noreferrer")
  })
})
