"use client"

import { useEffect, useRef, useState } from "react"
import { Bot, Check, ChevronDown, Copy, Link } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { exportElementToMarkdown, getExportRootFromElement } from "@/lib/developer-doc-export"

interface LlmExportMenuProps {
  className?: string
}

type MenuAction =
  | "copy-markdown"
  | "copy-link"
  | "open-chatgpt"
  | "open-claude"
  | "open-grok"
  | "open-perplexity"

type MenuItem = {
  title: string
  description: string
  action: MenuAction
  icon?: LucideIcon
  logo?: string
}

function buildPagePrompt(root: HTMLElement): string {
  const title = document.title.replace(/\s+\|\s+Avana$/, "")
  const markdown = exportElementToMarkdown(root)
  return [
    `Review this Avana developer page and answer questions using the content below.`,
    `Page title: ${title}`,
    `Page URL: ${window.location.href}`,
    "",
    markdown,
  ]
    .join("\n")
    .slice(0, 9000)
}

function openPrefilledUrl(baseUrl: string, prompt: string) {
  window.open(`${baseUrl}${encodeURIComponent(prompt)}`, "_blank", "noopener,noreferrer")
}

const topAction: MenuItem = {
  title: "Copy page",
  description: "Copy page as Markdown",
  icon: Copy,
  action: "copy-markdown",
}

const TopActionIcon = topAction.icon ?? Copy

const aiItems: MenuItem[] = [
  {
    title: "Open in ChatGPT",
    description: "Ask questions about this page",
    logo: "https://cdn.simpleicons.org/openai/111111",
    action: "open-chatgpt",
  },
  {
    title: "Open in Claude",
    description: "Ask questions about this page",
    logo: "https://cdn.simpleicons.org/anthropic/111111",
    action: "open-claude",
  },
  {
    title: "Open in Grok",
    description: "Ask questions about this page",
    logo: "https://cdn.simpleicons.org/xai/111111",
    action: "open-grok",
  },
  {
    title: "Open in Perplexity",
    description: "Ask questions about this page",
    logo: "https://cdn.simpleicons.org/perplexity/111111",
    action: "open-perplexity",
  },
]

const utilityItems: MenuItem[] = [
  {
    title: "Copy page link",
    description: "Copy this page URL to clipboard",
    icon: Link,
    action: "copy-link",
  },
]

function MenuIcon({ item }: { item: MenuItem }) {
  if (item.logo) {
    return (
      <img
        src={item.logo}
        alt=""
        aria-hidden="true"
        className="h-2.5 w-2.5 object-contain opacity-75 grayscale"
      />
    )
  }

  const Icon = item.icon ?? Bot
  return <Icon className="h-2.5 w-2.5 text-slate-500" />
}

function MenuRow({
  item,
  onClick,
}: {
  item: MenuItem
  onClick: (action: MenuAction) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(item.action)}
      className="flex w-full items-start gap-1.25 rounded-[10px] px-[5px] py-[2px] text-left transition hover:bg-slate-50"
    >
      <span className="mt-0.5 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[7px] border border-slate-200 bg-white text-slate-500">
        <MenuIcon item={item} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="type-supporting block text-[0.79rem] font-semibold leading-[1.1rem] text-slate-900">
          {item.title}
          {item.action.startsWith("open-") ? (
            <span className="ml-1 align-middle text-[0.8em] text-slate-500">↗</span>
          ) : null}
        </span>
        <span className="type-supporting mt-0 block text-[0.65rem] leading-3 text-slate-500">
          {item.description}
        </span>
      </span>
    </button>
  )
}

export function LlmExportMenu({ className }: LlmExportMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  useEffect(() => {
    if (!copied) return
    const timeoutId = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [copied])

  const getExportRoot = () => getExportRootFromElement(containerRef.current)

  const handleCopyMarkdown = async () => {
    const root = getExportRoot()
    if (!root) return

    await navigator.clipboard.writeText(exportElementToMarkdown(root))
    setCopied(true)
    setIsOpen(false)
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setIsOpen(false)
  }

  const handleOpenPrefilled = (target: "chatgpt" | "claude" | "grok" | "perplexity") => {
    const root = getExportRoot()
    if (!root) return

    const prompt = buildPagePrompt(root)

    switch (target) {
      case "chatgpt":
        openPrefilledUrl("https://chatgpt.com/?q=", prompt)
        break
      case "claude":
        openPrefilledUrl("https://claude.ai/new?q=", prompt)
        break
      case "grok":
        openPrefilledUrl("https://grok.com/?q=", prompt)
        break
      case "perplexity":
        openPrefilledUrl("https://www.perplexity.ai/?q=", prompt)
        break
    }

    setIsOpen(false)
  }

  const handleAction = (action: MenuAction) => {
    switch (action) {
      case "copy-markdown":
        void handleCopyMarkdown()
        return
      case "copy-link":
        void handleCopyLink()
        return
      case "open-chatgpt":
        handleOpenPrefilled("chatgpt")
        return
      case "open-claude":
        handleOpenPrefilled("claude")
        return
      case "open-grok":
        handleOpenPrefilled("grok")
        return
      case "open-perplexity":
        handleOpenPrefilled("perplexity")
        return
    }
  }

  return (
    <div ref={containerRef} className={className}>
      <div ref={menuRef} className="relative self-start" data-export-skip>
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.25 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          <span className="text-[0.82rem] font-medium">{copied ? "Copied" : "Copy page"}</span>
          <span className="h-3.5 w-px bg-slate-300" aria-hidden="true" />
          <ChevronDown className={`h-3.5 w-3.5 transition ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div
            role="menu"
            className="absolute right-0 z-20 mt-2 w-[min(16.5rem,calc(100vw-1rem))] overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-[0_8px_18px_rgba(15,23,42,0.05)] sm:w-[16.5rem]"
          >
            <div className="p-[2px]">
              <button
                type="button"
                onClick={() => handleAction(topAction.action)}
                className="flex w-full items-start gap-1.25 rounded-[10px] px-[5px] py-[2px] text-left transition hover:bg-slate-50"
              >
                <span className="mt-0.5 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[7px] border border-slate-200 bg-white text-slate-500">
                  <TopActionIcon className="h-[9px] w-[9px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="type-supporting block text-[0.79rem] font-semibold leading-[1.1rem] text-slate-900">
                    {topAction.title}
                  </span>
                  <span className="type-supporting mt-0 block text-[0.65rem] leading-3 text-slate-500">
                    {topAction.description}
                  </span>
                </span>
              </button>

              <div className="my-[2px] h-px bg-slate-200" />

              <div className="space-y-0">
                {[...aiItems, ...utilityItems].map((item) => (
                  <MenuRow key={item.title} item={item} onClick={handleAction} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
