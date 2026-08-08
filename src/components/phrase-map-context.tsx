"use client"

import { createContext, useContext, type ReactNode } from "react"

/**
 * Phrase map for client components that keep English string constants.
 * Filled by LocalizedMarketing; look up with useLocalizedPhrase.
 */
const PhraseMapContext = createContext<Record<string, string>>({})

function normalizePhrase(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
}

export function lookupPhrase(map: Record<string, string>, value: string): string {
  if (!value || !map || Object.keys(map).length === 0) return value
  if (map[value]) return map[value]
  const trimmed = value.trim()
  if (map[trimmed]) return map[trimmed]
  const collapsed = trimmed.replace(/\s+/g, " ")
  if (map[collapsed]) return map[collapsed]
  const normalized = normalizePhrase(value)
  if (map[normalized]) return map[normalized]
  for (const [from, to] of Object.entries(map)) {
    if (normalizePhrase(from) === normalized) return to
  }
  return value
}

export function PhraseMapProvider({
  map,
  children,
}: {
  map: Record<string, string>
  children: ReactNode
}) {
  return <PhraseMapContext.Provider value={map}>{children}</PhraseMapContext.Provider>
}

export function usePhraseMap(): Record<string, string> {
  return useContext(PhraseMapContext)
}

/** Translate an English source string when a map entry exists. */
export function useLocalizedPhrase(text: string): string {
  return lookupPhrase(useContext(PhraseMapContext), text)
}
