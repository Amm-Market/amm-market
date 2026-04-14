import type { ReactNode } from "react"
import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"

export interface InlineFaqItem {
  value: string
  question: string
  answer: ReactNode
}

interface InlineFaqSectionProps {
  title?: string
  eyebrow?: string
  eyebrowTone?: SectionEyebrowTone
  items: InlineFaqItem[]
  withTopBorder?: boolean
  layout?: "default" | "homepage"
}

function renderFaqTitle(title: string) {
  if (title === "Frequently asked questions.") {
    return (
      <>
        <span className="block whitespace-nowrap">Frequently asked</span>
        <span className="block whitespace-nowrap">questions.</span>
      </>
    )
  }

  return title
}

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-open:hidden">
    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="hidden shrink-0 text-gray-600 transition-transform duration-200 group-open:block">
    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

/**
 * InlineFaqSection - Reusable FAQ accordion matching homepage design.
 */
export function InlineFaqSection({
  title = "Frequently asked questions.",
  eyebrow,
  eyebrowTone = "blue",
  items,
  withTopBorder = true,
  layout = "default",
}: InlineFaqSectionProps) {
  const contentClassName =
    layout === "homepage"
      ? "min-w-0 md:pl-16 lg:pl-24 xl:pl-28"
      : "min-w-0 md:max-w-[32rem] md:justify-self-end lg:max-w-[34rem]"
  const accordionName = `inline-faq-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`

  return (
    <div
      className={`deferred-viewport grid grid-cols-1 gap-8 pb-4 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] md:gap-6 md:pb-0 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-8 ${
        withTopBorder ? "border-t border-gray-100" : ""
      }`}
    >
      <div className="space-y-3 md:max-w-[25rem] md:pt-2">
        {eyebrow ? <SectionEyebrow tone={eyebrowTone}>{eyebrow}</SectionEyebrow> : null}
        <SectionTitle as="h3" className="max-w-none font-medium leading-[0.96]">
          {renderFaqTitle(title)}
        </SectionTitle>
      </div>
      <div className={contentClassName}>
        <div className="w-full">
          {items.map((item) => (
            <details
              key={item.value}
              name={accordionName}
              className="group border-b border-gray-200 pt-6 pb-6 last:border-b-0"
            >
              <summary className="type-accordion-question flex cursor-pointer list-none items-start justify-between gap-4 p-0 text-left text-gray-900 hover:underline">
                <span>{item.question}</span>
                <PlusIcon />
                <MinusIcon />
              </summary>
              <div className="type-accordion-answer pt-2 text-gray-600 group-open:animate-[inline-faq-reveal_0.2s_ease-out]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InlineFaqSection
