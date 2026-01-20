"use client"

/**
 * ThemeProvider - Wrapper component for next-themes functionality.
 * 
 * @description
 * Provides theme context to the application, enabling:
 * - Light/dark mode toggle
 * - System preference detection
 * - Theme persistence via localStorage
 * 
 * @param children - Child components to wrap
 * @param props - All ThemeProviderProps from next-themes
 * 
 * @example
 * // In layout.tsx
 * <ThemeProvider
 *   attribute="class"
 *   defaultTheme="system"
 *   enableSystem
 *   disableTransitionOnChange
 * >
 *   {children}
 * </ThemeProvider>
 * 
 * @see https://github.com/pacocoursey/next-themes
 */
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps): React.JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

