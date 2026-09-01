"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type React from "react"
import { THEME_STORAGE_KEY } from "@/lib/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
