"use client"

import { ArrowUpRight, HelpCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { SUPPORT_EMAIL } from "@/lib/site"

const iconButtonClassName =
  "inline-flex h-9 w-9 items-center justify-center text-black/62 transition-colors duration-200 ease-out hover:text-type-accent"

export function HeaderHelpCenterButton() {
  const t = useTranslations("common")

  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className={iconButtonClassName}
      aria-label={t("a11y.helpCenter")}
      title={t("nav.helpCenter")}
    >
      <HelpCircle aria-hidden="true" className="h-[19px] w-[19px]" strokeWidth={2.1} />
    </a>
  )
}

export function HeaderHelpCenterMobileRow({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("common")

  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className="flex items-center justify-between gap-4 py-3"
      onClick={onNavigate}
    >
      <span className="inline-flex items-center gap-3">
        <HelpCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-type-accent" strokeWidth={2.1} />
        <span className="text-[1rem] font-medium tracking-[-0.02em] text-black/95">{t("nav.helpCenter")}</span>
      </span>
      <ArrowUpRight aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-type-accent" strokeWidth={2.1} />
    </a>
  )
}
