"use client"

import { useEffect, useState } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"

/**
 * MarkdownContent - Safely renders markdown content with XSS protection.
 * 
 * @description
 * This component parses markdown strings and renders them as HTML.
 * All output is sanitized through DOMPurify to prevent XSS attacks.
 * 
 * @param content - The markdown string to render
 * 
 * @example
 * <MarkdownContent content="# Hello World\n\nThis is **bold** text." />
 * 
 * @security
 * - Uses DOMPurify to sanitize all HTML output
 * - Restricts allowed tags and attributes
 * - Blocks script, style, iframe, and form elements
 * - Removes dangerous event handlers (onclick, onerror, etc.)
 */
interface MarkdownContentProps {
  content?: string
}

// DOMPurify configuration for safe HTML rendering
const DOMPURIFY_CONFIG = {
  ALLOWED_TAGS: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
    'p', 'a', 'ul', 'ol', 'li', 
    'code', 'pre', 'blockquote', 
    'strong', 'em', 'b', 'i',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'br', 'hr', 'img', 'span', 'div'
  ],
  ALLOWED_ATTR: [
    'href', 'src', 'alt', 'title', 
    'class', 'id', 'target', 'rel'
  ],
  ALLOW_DATA_ATTR: false,
  FORBID_TAGS: ['script', 'style', 'iframe', 'form', 'input', 'button'],
  FORBID_ATTR: ['onerror', 'onclick', 'onload', 'onmouseover', 'onfocus', 'onblur']
}

export default function MarkdownContent({ content = "" }: MarkdownContentProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    const parseMarkdown = async () => {
      if (content) {
        try {
          // Parse markdown to raw HTML (marked v5+ returns Promise)
          const rawHtml = await marked.parse(content)
          
          // Sanitize HTML to prevent XSS attacks
          const sanitizedHtml = DOMPurify.sanitize(rawHtml, DOMPURIFY_CONFIG)
          
          setHtml(sanitizedHtml)
        } catch (error) {
          console.error("Error parsing markdown:", error)
          setHtml("<p>Error rendering content</p>")
        }
      } else {
        setHtml("")
      }
    }
    
    parseMarkdown()
  }, [content])

  return (
    <div
      className="site-editorial-content prose max-w-none prose-headings:text-blue-900 prose-h1:text-2xl prose-h2:text-xl prose-h2:mt-8 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-blue-800 prose-strong:font-semibold prose-li:text-gray-700 prose-li:marker:text-blue-500"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
