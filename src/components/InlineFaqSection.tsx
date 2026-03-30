"use client"

import type { ReactNode } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export interface InlineFaqItem {
  value: string
  question: string
  answer: ReactNode
}

interface InlineFaqSectionProps {
  title?: string
  items: InlineFaqItem[]
}

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden">
    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden">
    <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
)

/**
 * InlineFaqSection - Reusable FAQ accordion matching homepage design.
 */
export function InlineFaqSection({ title = "Frequently asked questions.", items }: InlineFaqSectionProps) {
  return (
    <div className="flex flex-col py-16 md:py-20 gap-8 md:flex-row md:gap-12 border-t border-gray-100">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 md:pt-8 md:flex-shrink-0 md:w-[300px]">
        {title}
      </h3>
      <div className="md:w-[600px] md:flex-shrink-0">
        <Accordion type="single" collapsible orientation="vertical" className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border-b border-gray-200 pt-6 pb-6 last:border-b-0">
              <AccordionTrigger className="type-accordion-question group p-0 text-left text-gray-900 hover:underline gap-4 [&>svg.size-4]:hidden">
                {item.question}
                <PlusIcon />
                <MinusIcon />
              </AccordionTrigger>
              <AccordionContent className="type-accordion-answer pt-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default InlineFaqSection
