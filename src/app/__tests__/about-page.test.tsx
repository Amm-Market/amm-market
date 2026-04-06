import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import AboutPage, { metadata } from "@/app/about/page"
import { buildOgImagePath } from "@/lib/site"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe("about page", () => {
  it("exports focused metadata for seo and social sharing", () => {
    expect(metadata.title).toBe("About - Avana")
    expect(metadata.description).toContain("dedicated LP-as-collateral protocol")
    expect(metadata.alternates?.canonical).toBe("/about")

    const ogImage = Array.isArray(metadata.openGraph?.images)
      ? metadata.openGraph?.images[0]
      : metadata.openGraph?.images

    expect(metadata.openGraph?.url).toBe("/about")
    expect(ogImage).toMatchObject({
      url: buildOgImagePath({
        title: "About Avana",
        subtitle: "LP-as-collateral protocol built on Aave v4",
      }),
      alt: "About Avana",
    })
  })

  it("renders the manifesto headline and call to action", () => {
    render(<AboutPage />)

    expect(
      screen.getByRole("heading", {
        name: /Introducing Avana: An LP-as-Collateral Protocol Built on Aave V4/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/One of the most important sources of collateral demand in crypto is hiding in plain sight/i),
    ).toBeInTheDocument()

    expect(
      screen.getByRole("link", { name: /we would love to hear from you/i }),
    ).toHaveAttribute("href", "/faq")
  })
})
