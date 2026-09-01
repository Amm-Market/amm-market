"use client"

import { Check, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"
import { useSyncExternalStore } from "react"

export type ThemePreference = "light" | "dark" | "system"

const iconButtonClassName =
  "inline-flex h-9 w-9 items-center justify-center text-black/62 transition-colors duration-200 ease-out hover:text-type-accent dark:text-white/70 dark:hover:text-type-accent"

const THEME_OPTIONS: Array<{
  value: ThemePreference
  Icon: typeof Sun
}> = [
  { value: "system", Icon: Monitor },
  { value: "light", Icon: Sun },
  { value: "dark", Icon: Moon },
]

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

  return { mounted, activeTheme, setTheme }
}

function themeLabel(t: ReturnType<typeof useTranslations>, value: ThemePreference) {
  if (value === "light") return t("theme.lightMode")
  if (value === "dark") return t("theme.darkMode")
  return t("theme.systemMode")
}

export function HeaderThemeToggle() {
  const t = useTranslations("common")
  const { mounted, activeTheme, setTheme } = useThemePreference()

  return (
    <div
      className="inline-flex items-center gap-0.5"
      role="group"
      aria-label={t("a11y.themeToggle")}
    >
      {THEME_OPTIONS.map(({ value, Icon }) => {
        const isActive = mounted && activeTheme === value
        const label = themeLabel(t, value)

        return (
          <button
            key={value}
            type="button"
            className={`${iconButtonClassName} ${isActive ? "text-type-accent" : ""}`}
            aria-label={label}
            aria-pressed={isActive}
            title={label}
            onClick={() => setTheme(value)}
          >
            <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.1} />
          </button>
        )
      })}
    </div>
  )
}

export function HeaderThemeToggleMobileRows() {
  const t = useTranslations("common")
  const { mounted, activeTheme, setTheme } = useThemePreference()

  return (
    <>
      {THEME_OPTIONS.map(({ value, Icon }) => {
        const isActive = mounted && activeTheme === value
        const label = themeLabel(t, value)

        return (
          <button
            key={value}
            type="button"
            className="flex w-full items-center justify-between gap-4 py-3 text-start"
            aria-pressed={isActive}
            onClick={() => setTheme(value)}
          >
            <span className="inline-flex items-center gap-3">
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-type-accent" strokeWidth={2.1} />
              <span className="text-[1rem] font-medium tracking-[-0.02em] text-foreground">{label}</span>
            </span>
            {isActive ? (
              <Check aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-type-accent" strokeWidth={2.4} />
            ) : (
              <span aria-hidden="true" className="h-[18px] w-[18px] shrink-0" />
            )}
          </button>
        )
      })}
    </>
  )
}
