"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { usePathname } from "next/navigation"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname()

  React.useEffect(() => {
    console.log(`[DEBUG] ThemeProvider mounted on ${pathname}`)

    return () => {
      console.log(`[DEBUG] ThemeProvider unmounted on ${pathname}`)
    }
  }, [pathname])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

