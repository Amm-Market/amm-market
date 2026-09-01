"use client"

import { useServerInsertedHTML } from "next/navigation"

/**
 * Injects the blocking theme script during SSR only. The component itself
 * always returns null so React 19 never sees a <script> in the client tree.
 */
export function ThemeInitScript() {
  useServerInsertedHTML(() => (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script src="/theme-init.js" />
  ))

  return null
}
