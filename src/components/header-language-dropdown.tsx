"use client"

import { Check, ChevronDown, Globe2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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

type LanguageOption = (typeof languageOptions)[number]

export default function HeaderLanguageDropdown({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile"
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>("English")
  const closeTimeoutRef = useRef<number | null>(null)
  const isMobile = variant === "mobile"

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimeout()
    setIsOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false)
      closeTimeoutRef.current = null
    }, 110)
  }

  useEffect(() => () => clearCloseTimeout(), [])

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (!isMobile) openMenu()
      }}
      onMouseLeave={() => {
        if (!isMobile) scheduleClose()
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={`Language: ${selectedLanguage}`}
        className={`site-header-nav-link group relative inline-flex items-center justify-center px-0 py-1 font-[560] tracking-[-0.02em] transition-[color,opacity] duration-200 ease-out ${
          isMobile
            ? "h-10 gap-2 text-[1rem] text-[#01AACF]"
            : `h-10 gap-1.5 text-[0.92rem] xl:gap-2.5 xl:text-[0.98rem] ${isOpen ? "text-[#01AACF]" : "text-black/62 hover:text-black/94"}`
        }`}
      >
        <Globe2 aria-hidden="true" className="h-[19px] w-[19px] shrink-0" strokeWidth={2.25} />
        <span className={isMobile ? undefined : "hidden max-w-[9rem] truncate xl:inline"}>{selectedLanguage}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-[17px] w-[17px] shrink-0 transition-transform duration-200 ease-out ${isMobile ? "" : "hidden xl:inline"} ${isOpen ? "rotate-180" : "rotate-0"}`}
          strokeWidth={2.4}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute z-50 pt-2 ${isMobile ? "right-[-3.25rem]" : "right-0"}`}
        >
          <div
            className={`max-h-[28rem] overflow-y-auto rounded-[16px] border border-black/10 bg-white py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ${
              isMobile ? "w-[20rem]" : "w-[23rem]"
            }`}
          >
            {languageOptions.map((language) => {
              const isSelected = language === selectedLanguage

              return (
                <button
                  key={language}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setSelectedLanguage(language)
                    setIsOpen(false)
                  }}
                  className={`flex h-12 w-full items-center justify-between gap-4 px-5 text-left text-[1rem] font-[520] tracking-[-0.03em] transition-colors duration-150 ease-out hover:bg-black/[0.045] ${
                    isSelected ? "bg-black/[0.025] text-[#01AACF]" : "text-[#303236]"
                  }`}
                >
                  <span>{language}</span>
                  {isSelected ? (
                    <Check aria-hidden="true" className="h-[18px] w-[18px] shrink-0" strokeWidth={2.4} />
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}
