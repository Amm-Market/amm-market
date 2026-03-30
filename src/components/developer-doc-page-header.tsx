"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, Copy, FileText } from "lucide-react"
import { useGT } from "gt-next/client"
import {
  exportElementToMarkdown,
  exportElementToPlainText,
  getExportRootFromElement,
} from "@/lib/developer-doc-export"

interface DeveloperDocPageHeaderProps {
  title: string
  description: string
}

function createTextBlobUrl(content: string): string {
  return URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }))
}

const llmMenuItems = [
  {
    title: "Copy page",
    description: "Copy page as Markdown for LLMs",
    icon: Copy,
    action: "copy" as const,
  },
  {
    title: "View as Markdown",
    description: "Open raw Markdown in a new tab",
    icon: FileText,
    action: "markdown" as const,
  },
]

export function DeveloperDocPageHeader({ title, description }: DeveloperDocPageHeaderProps) {
  const t = useGT()
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  useEffect(() => {
    if (!copied) {
      return
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [copied])

  const getExportRoot = () => getExportRootFromElement(containerRef.current)

  const openRawView = (mode: "markdown" | "text") => {
    const root = getExportRoot()
    if (!root) {
      return
    }

    const content =
      mode === "markdown" ? exportElementToMarkdown(root) : exportElementToPlainText(root)
    const url = createTextBlobUrl(content)
    window.open(url, "_blank", "noopener,noreferrer")
    setIsOpen(false)

    window.setTimeout(() => {
      URL.revokeObjectURL(url)
    }, 60_000)
  }

  const handleCopyMarkdown = async () => {
    const root = getExportRoot()
    if (!root) {
      return
    }

    const content = exportElementToMarkdown(root)
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="mb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="type-page-title min-w-0 text-slate-950">
          {t(title)}
        </h1>

        <div ref={menuRef} className="relative self-start" data-export-skip>
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="type-supporting inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
            aria-expanded={isOpen}
            aria-haspopup="menu"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? t("Copied") : t("Copy for LLM")}
            <span className="h-4 w-px bg-slate-300" aria-hidden="true" />
            <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div
              role="menu"
              className="absolute right-0 z-20 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-lg"
            >
              {llmMenuItems.map((item) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.action}
                    type="button"
                    onClick={() => {
                      if (item.action === "copy") {
                        void handleCopyMarkdown()
                        return
                      }

                      openRawView(item.action)
                    }}
                    className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50"
                  >
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                    <span className="min-w-0">
                      <span className="type-supporting block font-medium text-slate-900">{t(item.title)}</span>
                      <span className="type-supporting mt-0.5 block text-slate-500">
                        {t(item.description)}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 border-b border-slate-200" />

      <p className="type-page-lead mt-6 max-w-4xl text-slate-600">{t(description)}</p>
    </div>
  )
}
