"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.log("Error caught by boundary:", event.error)
      setHasError(true)
      // Prevent the error from bubbling up
      event.preventDefault()
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-xl font-semibold text-red-700 mb-3">Something went wrong</h2>
          <p className="text-gray-700 mb-4">
            We encountered an error while loading this content. Please try refreshing the page.
          </p>
          <button
            onClick={() => setHasError(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

