"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useServerInsertedHTML } from "next/navigation"
import type React from "react"
import { THEME_STORAGE_KEY, themeInitScript } from "@/lib/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
  ))

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
