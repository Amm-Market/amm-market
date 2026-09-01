"use client"

import { Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

const iconButtonClassName =
  "inline-flex h-9 w-9 items-center justify-center text-black/62 transition-colors duration-200 ease-out hover:text-type-accent"

function ThemeToggleSwitch({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-[46px] shrink-0 rounded-full transition-colors duration-200 ease-out ${
        checked ? "bg-type-accent" : "bg-black/15"
      }`}
    >
      <span
        className={`absolute top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full bg-white shadow-[0_1px_3px_rgba(15,23,42,0.18)] transition-[left] duration-200 ease-out ${
          checked ? "left-[21px]" : "left-[3px]"
        }`}
      />
    </button>
  )
}

export function HeaderThemeToggle() {
  const t = useTranslations("common")
  const [isLightMode, setIsLightMode] = useState(true)
  const modeLabel = isLightMode ? t("theme.lightMode") : t("theme.darkMode")

  return (
    <button
      type="button"
      className={iconButtonClassName}
      aria-label={modeLabel}
      title={modeLabel}
      onClick={() => setIsLightMode((current) => !current)}
    >
      {isLightMode ? (
        <Sun aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.1} />
      ) : (
        <Moon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.1} />
      )}
    </button>
  )
}

export function HeaderThemeToggleMobileRow() {
  const t = useTranslations("common")
  const [isLightMode, setIsLightMode] = useState(true)
  const modeLabel = isLightMode ? t("theme.lightMode") : t("theme.darkMode")

  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="inline-flex items-center gap-3">
        {isLightMode ? (
          <Sun aria-hidden="true" className="h-5 w-5 shrink-0 text-type-accent" strokeWidth={2.1} />
        ) : (
          <Moon aria-hidden="true" className="h-5 w-5 shrink-0 text-type-accent" strokeWidth={2.1} />
        )}
        <span className="text-[1rem] font-medium tracking-[-0.02em] text-black/95">{modeLabel}</span>
      </span>
      <ThemeToggleSwitch
        checked={isLightMode}
        onChange={setIsLightMode}
        label={modeLabel}
      />
    </div>
  )
}
