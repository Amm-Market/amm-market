"use client"

import { useEffect } from "react"

// A minimal version of the header for diagnostic purposes
export default function HeaderDiagnostic() {
  useEffect(() => {
    console.log("[DIAGNOSTIC] HeaderDiagnostic mounted")

    return () => {
      console.log("[DIAGNOSTIC] HeaderDiagnostic unmounted")
    }
  }, [])

  return (
    <header className="p-4 bg-blue-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold">Diagnostic Header</h1>
        <p>This is a minimal header for diagnostic purposes.</p>
      </div>
    </header>
  )
}

