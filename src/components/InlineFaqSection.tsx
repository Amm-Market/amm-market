"use client"

import type { ReactNode } from "react"
import { FaqToggleIcons } from "@/components/faq-toggle-icons"
import { lookupPhrase, usePhraseMap } from "@/components/phrase-map-context"
import { SectionEyebrow, SectionTitle, type SectionEyebrowTone } from "@/components/shared"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
}

function renderFaqTitle(title: string, t: (s: string) => string) {
  if (title === "Frequently asked questions" || title === "Frequently asked questions.") {
    return t("Frequently asked questions")
  }

  return t(title)
}

/**
 * InlineFaqSection - Product-page FAQ accordion (Radix, exclusive open).
 */
export function InlineFaqSection({
  title = "Frequently asked questions",
  eyebrow,
  eyebrowTone = "blue",
  items,
  withTopBorder = true,
}: InlineFaqSectionProps) {
  const map = usePhraseMap()
  const t = (text: string) => lookupPhrase(map, text)
  const contentClassName = "min-w-0 md:pl-16 lg:pl-24 xl:pl-28"

  return (
    <div
      className={`grid grid-cols-1 gap-8 pb-4 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] md:gap-6 md:pb-0 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-8 ${
        withTopBorder ? "border-t border-gray-100" : ""
      }`}
    >
      <div className="space-y-3 md:max-w-[25rem] md:pt-2">
        {eyebrow ? <SectionEyebrow tone={eyebrowTone}>{t(eyebrow)}</SectionEyebrow> : null}
        <SectionTitle as="h3" className="max-w-none">
          {renderFaqTitle(title, t)}
        </SectionTitle>
      </div>
      <div className={contentClassName}>
        <Accordion type="single" collapsible orientation="vertical" className="w-full">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-gray-200 pt-6 pb-6 last:border-b-0"
            >
              <AccordionTrigger className="type-accordion-question group gap-4 p-0 text-left text-gray-900 hover:underline [&>svg.size-4]:hidden">
                {t(item.question)}
                <FaqToggleIcons />
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
