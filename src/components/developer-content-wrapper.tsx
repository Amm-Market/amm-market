"use client"

import type React from "react"
import { PageNavigation } from "./page-navigation"

export function DeveloperContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="developer-content">
      {children}
      <PageNavigation />
    </div>
  )
}
