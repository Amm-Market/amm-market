import { describe, expect, it } from "vitest"
import {
  faqCategories,
  getFaqQuestionsForCategory,
  normalizeFaqCategory,
  searchFaqQuestions,
} from "@/app/faq/faq-content"

describe("faq content helpers", () => {
  it("falls back to the default category for unknown values", () => {
    expect(normalizeFaqCategory(undefined, faqCategories)).toBe("Core Concepts")
    expect(normalizeFaqCategory("Unknown", faqCategories)).toBe("Core Concepts")
    expect(normalizeFaqCategory("Risk & Security", faqCategories)).toBe("Risk & Security")
  })

  it("returns the correct questions for a selected category", () => {
    const questions = getFaqQuestionsForCategory(faqCategories, "Health & Liquidation")

    expect(questions).toHaveLength(10)
    expect(questions[0]?.q).toBe("What is the health factor?")
  })

  it("keeps every FAQ category expanded to ten canonical questions", () => {
    expect(faqCategories.every((category) => category.questions.length === 10)).toBe(true)
  })

  it("searches across all categories with the canonical labels attached", () => {
    const results = searchFaqQuestions(faqCategories, "recoverable value")

    expect(results.length).toBeGreaterThan(0)
    expect(results[0]?.category).toBeTruthy()
  })
})
