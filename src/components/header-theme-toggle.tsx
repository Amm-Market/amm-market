"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useTranslations } from "next-intl"
import { useSyncExternalStore } from "react"

export type ThemePreference = "light" | "dark" | "system"

const iconButtonClassName =
  "inline-flex h-9 w-9 items-center justify-center text-foreground/62 transition-colors duration-200 ease-out hover:text-type-accent"

const THEME_CYCLE: ThemePreference[] = ["system", "light", "dark"]

const THEME_ICONS = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

function useThemePreference() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  const activeTheme: ThemePreference =
    mounted && (theme === "light" || theme === "dark" || theme === "system") ? theme : "system"

  const cycleTheme = () => {
    const currentIndex = THEME_CYCLE.indexOf(activeTheme)
    const nextTheme = THEME_CYCLE[(currentIndex + 1) % THEME_CYCLE.length]
    setTheme(nextTheme)
  }

  return { mounted, activeTheme, cycleTheme }
}

function themeLabel(t: ReturnType<typeof useTranslations>, value: ThemePreference) {
  if (value === "light") return t("theme.lightMode")
  if (value === "dark") return t("theme.darkMode")
  return t("theme.systemMode")
}

export function HeaderThemeToggle() {
  const t = useTranslations("common")
  const { mounted, activeTheme, cycleTheme } = useThemePreference()
  const label = themeLabel(t, activeTheme)
  const Icon = THEME_ICONS[activeTheme]

  return (
    <button
      type="button"
      className={iconButtonClassName}
      aria-label={label}
      title={label}
      onClick={cycleTheme}
    >
      {!mounted ? (
        <Sun aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.1} />
      ) : (
        <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.1} />
      )}
    </button>
  )
}

export function HeaderThemeToggleMobileRow() {
  const t = useTranslations("common")
  const { mounted, activeTheme, cycleTheme } = useThemePreference()
  const label = themeLabel(t, activeTheme)
  const Icon = THEME_ICONS[activeTheme]

  return (
    <button
      type="button"
      className="flex w-full items-center justify-between gap-4 py-3 text-start"
      aria-label={label}
      onClick={cycleTheme}
    >
      <span className="inline-flex items-center gap-3">
        {!mounted ? (
          <Sun aria-hidden="true" className="h-5 w-5 shrink-0 text-type-accent" strokeWidth={2.1} />
        ) : (
          <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-type-accent" strokeWidth={2.1} />
        )}
        <span className="text-[1rem] font-medium tracking-[-0.02em] text-foreground">{label}</span>
      </span>
      <span className="text-xs font-medium tracking-[-0.02em] text-type-tertiary">{t("theme.tapToChange")}</span>
    </button>
  )
}
