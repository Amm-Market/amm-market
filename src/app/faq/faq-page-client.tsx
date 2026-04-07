"use client"

import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { defaultFaqCategory, faqCategories } from "@/app/faq/faq-content"

const categoryIcons: Record<string, React.ReactNode> = {
  "Core Concepts": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10M7 12h10M7 17h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  ),
  "Depositing LP Collateral": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M8 9l4-4 4 4M8 15l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  ),
  "Borrowing Capacity & Valuation": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M4 16l5-5 4 4 7-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  ),
  "Health & Liquidation": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M12 4l7 3v5c0 4.4-2.8 7.8-7 9-4.2-1.2-7-4.6-7-9V7l7-3z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  ),
  "Fees & Interface Policy": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M8 7h8M8 12h8M8 17h5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
      <path d="M6 4h12v16H6V4z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  ),
  "Risk & Security": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M12 4l6 3v4c0 4.4-2.6 7.8-6 9-3.4-1.2-6-4.6-6-9V7l6-3z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
      <path d="M12 8v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
      <path d="M12 16h.01" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  ),
}

export default function FaqPageClient({
  initialSearchTerm = "",
}: {
  initialSearchTerm?: string
}) {
  const [activeCategory, setActiveCategory] = useState(defaultFaqCategory)
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

  useEffect(() => {
    setSearchTerm(initialSearchTerm)
  }, [initialSearchTerm])

  const searchResults = searchTerm
    ? faqCategories
        .flatMap((category) => category.questions.map((question) => ({ ...question, category: category.name })))
        .filter(
          (question) =>
            question.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            question.a.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : []

  const categoryQuestions = !searchTerm
    ? faqCategories.find((category) => category.name === activeCategory)?.questions ?? []
    : []

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-10 lg:py-14">
        <div className="site-content-shell">
          <div className="mb-10 py-8 text-center lg:mb-14 lg:py-14">
            <h1 className="mb-8 text-[clamp(3rem,7vw,5.25rem)] font-semibold not-italic tracking-[-0.08em] text-black">
              How can we help?
            </h1>

            <div className="mx-auto max-w-md">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-full border border-black/10 bg-white py-3.5 pl-12 pr-10 text-gray-800 placeholder:text-gray-400 focus:border-black/30 focus:outline-none focus:ring-2 focus:ring-black/8"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm("")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mb-10 overflow-x-auto lg:mb-12">
            <div className="flex gap-3 pb-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.name)
                    setSearchTerm("")
                  }}
                  aria-label={category.name}
                  aria-pressed={activeCategory === category.name && !searchTerm}
                  className={`group relative flex w-[12rem] shrink-0 flex-col justify-between rounded-[1rem] border p-3 text-left transition-all duration-300 sm:w-[12.75rem] lg:w-[13.25rem] ${
                    activeCategory === category.name && !searchTerm
                      ? "border-black/18 bg-[#fcfbf8] text-black shadow-[0_10px_22px_rgba(17,17,17,0.06)]"
                      : "border-black/10 bg-white text-black shadow-[0_2px_10px_rgba(17,17,17,0.04)] hover:border-black/20 hover:shadow-[0_10px_18px_rgba(17,17,17,0.07)]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`flex h-10 w-10 items-center justify-center transition-colors duration-300 ${
                      activeCategory === category.name && !searchTerm
                        ? "text-black"
                        : "text-black/78"
                    }`}
                  >
                    {categoryIcons[category.name] ?? categoryIcons["Core Concepts"]}
                  </div>
                  <div className="mt-4">
                    <p className="text-[0.92rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-[0.98rem] lg:text-[1rem]">
                      {category.name}
                    </p>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-[1.35] tracking-[-0.02em] text-black/54">
                    {category.summary}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[0.72rem] font-medium tracking-[-0.02em] text-current/66">
                    <span>{category.questions.length} questions</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            {searchTerm ? (
              <>
                <h2 className="mb-7 text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.03em] text-gray-950 sm:text-[1.7rem]">
                  Search Results
                </h2>
                {searchResults.length === 0 ? (
                  <div className="py-10 text-center">
                    <p className="text-gray-500">No results found for &quot;{searchTerm}&quot;</p>
                    <button className="mt-4 font-medium text-gray-700 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black/50" onClick={() => setSearchTerm("")}>
                      Clear search
                    </button>
                  </div>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    {searchResults.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={`search-${faq.id}`}
                        className="border-b border-gray-200 pb-6 pt-6 last:border-b-0"
                      >
                        <AccordionTrigger className="group gap-4 p-0 text-left text-[1.05rem] font-medium leading-[1.45] tracking-[-0.025em] text-gray-900 hover:underline sm:text-[1.14rem] lg:text-[1.22rem] [&>svg.size-4]:hidden">
                          <div className="flex flex-col text-left">
                            <span>{faq.q}</span>
                            <span className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gray-500">Category: {faq.category}</span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                          >
                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                          >
                            <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </AccordionTrigger>
                        <AccordionContent className="whitespace-pre-line pt-5 text-[0.98rem] leading-[1.75] text-gray-600 sm:text-[1.02rem]">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </>
            ) : (
              <>
                <Accordion type="single" collapsible className="w-full">
                  {categoryQuestions.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={`category-${faq.id}`}
                      className="border-b border-gray-200 pb-6 pt-6 last:border-b-0"
                    >
                      <AccordionTrigger className="group gap-4 p-0 text-left text-[1.08rem] font-medium leading-[1.45] tracking-[-0.025em] text-gray-900 hover:underline sm:text-[1.16rem] lg:text-[1.24rem] [&>svg.size-4]:hidden">
                        {faq.q}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                        >
                          <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                        >
                          <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="whitespace-pre-line pt-5 text-[0.98rem] leading-[1.75] text-gray-600 sm:text-[1.02rem]">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
