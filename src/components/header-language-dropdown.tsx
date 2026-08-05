"use client"

import { Check, ChevronDown, Globe2 } from "lucide-react"
import { useState } from "react"

const languageOptions = [
  "Deutsch",
  "English",
  "Español",
  "Español (Latinoamérica)",
  "Français",
  "Italiano",
  "Português (Brasil)",
  "Português (Portugal)",
  "Tiếng Việt",
  "Türkçe",
  "简体中文",
  "繁體中文",
  "日本語",
  "한국어",
  "العربية",
  "ไทย",
  "हिन्दी",
] as const

export default function HeaderLanguageDropdown({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile"
}) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = variant === "mobile"

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (!isMobile) setIsOpen(true)
      }}
      onMouseLeave={() => {
        if (!isMobile) setIsOpen(false)
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className={`inline-flex items-center justify-center gap-2.5 rounded-[14px] font-[560] tracking-[-0.035em] text-[#2d3033] transition-colors duration-200 ease-out ${
          isMobile
            ? "h-10 px-2 text-[1rem]"
            : "h-10 px-4 text-[0.98rem]"
        } ${isOpen ? "bg-black/[0.055]" : "bg-transparent hover:bg-black/[0.045]"}`}
      >
        <Globe2 aria-hidden="true" className="h-[19px] w-[19px] shrink-0" strokeWidth={2.25} />
        <span>English</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-[17px] w-[17px] shrink-0 transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : "rotate-0"}`}
          strokeWidth={2.4}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute top-[calc(100%+0.45rem)] z-50 max-h-[28rem] overflow-y-auto rounded-[16px] border border-black/10 bg-white py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ${
            isMobile ? "right-[-3.25rem] w-[20rem]" : "right-0 w-[23rem]"
          }`}
        >
          {languageOptions.map((language) => {
            const isSelected = language === "English"

            return (
              <button
                key={language}
                type="button"
                role="menuitem"
                className={`flex h-12 w-full items-center justify-between gap-4 px-5 text-left text-[1rem] font-[520] tracking-[-0.03em] text-[#303236] transition-colors duration-150 ease-out hover:bg-black/[0.045] ${isSelected ? "bg-black/[0.025]" : ""}`}
              >
                <span>{language}</span>
                {isSelected ? (
                  <Check aria-hidden="true" className="h-[18px] w-[18px] shrink-0" strokeWidth={2.4} />
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
