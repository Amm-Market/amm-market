"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"
import { THEME_STORAGE_KEY } from "@/lib/theme"

export type ThemePreference = "light" | "dark" | "system"

type ThemeContextValue = {
  theme?: string
  setTheme: Dispatch<SetStateAction<string>>
  resolvedTheme?: string
  systemTheme?: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextValue>({
  setTheme: () => {},
})

function readStoredTheme(): ThemePreference {
  if (typeof window === "undefined") return "system"

  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (value === "light" || value === "dark" || value === "system") return value
  } catch {}

  return "system"
}

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function resolveTheme(theme: ThemePreference): "light" | "dark" {
  return theme === "system" ? getSystemTheme() : theme
}

function applyResolvedTheme(resolved: "light" | "dark") {
  document.documentElement.classList.toggle("dark", resolved === "dark")
  document.documentElement.style.colorScheme = resolved
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(() =>
    typeof window === "undefined" ? "system" : readStoredTheme(),
  )
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() =>
    typeof window === "undefined" ? "light" : getSystemTheme(),
  )

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onSystemChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light")
    }

    media.addEventListener("change", onSystemChange)
    return () => media.removeEventListener("change", onSystemChange)
  }, [])

  useEffect(() => {
    applyResolvedTheme(resolveTheme(theme))
  }, [theme, systemTheme])

  const setTheme = useCallback<Dispatch<SetStateAction<string>>>((value) => {
    setThemeState((current) => {
      const next =
        typeof value === "function"
          ? (value(current) as ThemePreference)
          : (value as ThemePreference)
      const normalized: ThemePreference =
        next === "light" || next === "dark" || next === "system" ? next : current

      try {
        localStorage.setItem(THEME_STORAGE_KEY, normalized)
      } catch {}

      return normalized
    })
  }, [])

  const resolvedTheme = theme === "system" ? systemTheme : theme

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      systemTheme,
    }),
    [theme, setTheme, resolvedTheme, systemTheme],
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
