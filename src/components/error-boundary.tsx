"use client"

/**
 * ErrorBoundary - A client-side error boundary component.
 * 
 * @description
 * Catches unhandled JavaScript errors in child components and displays
 * a user-friendly error message instead of crashing the entire app.
 * 
 * Uses a window error event listener since React 18 error boundaries
 * require class components, and this provides similar functionality
 * for functional components.
 * 
 * @features
 * - Catches unhandled errors via window.addEventListener
 * - Displays friendly error UI with retry option
 * - Prevents error from bubbling up
 * - Logs errors to console (consider adding Sentry in production)
 * 
 * @param children - Child components to wrap and protect
 * 
 * @example
 * <ErrorBoundary>
 *   <ComponentThatMightError />
 * </ErrorBoundary>
 * 
 * @todo Integrate with Sentry or similar error tracking service
 * @todo Add option to report error to support
 */
import type React from "react"
import { useEffect, useState } from "react"

interface ErrorBoundaryProps {
  /** Child components to wrap and protect from errors */
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps): React.JSX.Element {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.error("Error caught by boundary:", event.error)
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

