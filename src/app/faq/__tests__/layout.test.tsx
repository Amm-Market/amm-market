import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import FaqLayout, { metadata } from "@/app/faq/layout"

describe("faq layout", () => {
  it("uses docs-aligned metadata copy", () => {
    expect(metadata.description).toContain("LP-backed borrowing")
    expect(metadata.description).not.toContain("troubleshooting wallet connections")
  })

  it("renders JSON-LD that matches the canonical FAQ wording", () => {
    const { container } = render(
      <FaqLayout>
        <div>FAQ page</div>
      </FaqLayout>,
    )

    const schemaScript = container.querySelector('script[type="application/ld+json"]')

    expect(schemaScript).not.toBeNull()

    const schema = JSON.parse(schemaScript?.innerHTML ?? "{}")
    const questionNames = schema.mainEntity.map((entry: { name: string }) => entry.name)

    expect(schema["@type"]).toBe("FAQPage")
    expect(questionNames).toContain("What is Avana?")
    expect(questionNames).toContain("Are interface fees fixed across all Avana integrations?")
    expect(questionNames).not.toContain("What is the frontend fee?")
  })
})
