import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi, beforeEach } from "vitest"
import FaqClient from "@/app/faq/FaqClient"
import { faqCategories } from "@/app/faq/faq-content"

const replaceMock = vi.fn()

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    prefetch: _prefetch,
    ...props
  }: {
    children: React.ReactNode
    href: string
    prefetch?: boolean
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: replaceMock,
  }),
}))

describe("FaqClient", () => {
  beforeEach(() => {
    replaceMock.mockReset()
  })

  it("renders gray category cards by default and white for the active card", () => {
    render(
      <FaqClient
        categories={faqCategories}
        activeCategory="Core Concepts"
        searchTerm=""
        searchResults={[]}
        clearHref="/faq"
      />,
    )

    const activeTab = screen.getByRole("tab", { name: /Core Concepts/i })
    const inactiveTab = screen.getByRole("tab", { name: /Depositing LP Collateral/i })

    expect(activeTab).toHaveClass("bg-white")
    expect(inactiveTab).toHaveClass("bg-gray-100")
    expect(screen.getByText("What is Avana?")).toBeInTheDocument()
  })

  it("switches categories without requesting a scroll reset", async () => {
    const user = userEvent.setup()

    render(
      <FaqClient
        categories={faqCategories}
        activeCategory="Core Concepts"
        searchTerm=""
        searchResults={[]}
        clearHref="/faq"
      />,
    )

    await user.click(screen.getByRole("tab", { name: /Risk & Security/i }))

    expect(replaceMock).toHaveBeenCalledWith("/faq?category=Risk+%26+Security", { scroll: false })
    expect(screen.getByText("What are the main risks of borrowing against LP collateral?")).toBeInTheDocument()
  })

  it("clears the local search-results view when a category tab is clicked", async () => {
    const user = userEvent.setup()

    render(
      <FaqClient
        categories={faqCategories}
        activeCategory="Core Concepts"
        searchTerm="Borrow Spoke"
        searchResults={[
          {
            id: "what-is-borrow-spoke",
            q: "What does the Borrow Spoke do?",
            a: "Borrow Spoke answer",
            category: "Core Concepts",
          },
        ]}
        clearHref="/faq"
      />,
    )

    expect(screen.getByRole("heading", { name: "Search Results" })).toBeInTheDocument()

    await user.click(screen.getByRole("tab", { name: /Health & Liquidation/i }))

    expect(screen.queryByRole("heading", { name: "Search Results" })).not.toBeInTheDocument()
    expect(screen.getByText("What is the health factor?")).toBeInTheDocument()
  })
})
