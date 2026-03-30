"use client"

import type React from "react"
import { PageNavigation } from "./page-navigation"

export function DeveloperContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="developer-content" data-developer-doc-shell>
      {children}
      <div data-export-skip>
        <PageNavigation />
      </div>
    </div>
  )
}
