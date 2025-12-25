"use client"

import { useEffect, useState } from "react"
import { marked } from "marked"

interface MarkdownContentProps {
  content?: string
}

export default function MarkdownContent({ content = "" }: MarkdownContentProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    // Parse markdown to HTML on the client side only if content is defined
    if (content) {
      try {
        setHtml(marked.parse(content))
      } catch (error) {
        console.error("Error parsing markdown:", error)
        setHtml("<p>Error rendering content</p>")
      }
    } else {
      setHtml("") // Set empty HTML if content is undefined/null/empty
    }
  }, [content])

  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-blue-800 prose-strong:font-semibold prose-li:text-gray-700 prose-li:marker:text-blue-500"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

