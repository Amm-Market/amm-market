import { defaultLocale } from "@/i18n/locales"

type MessageTree = Record<string, unknown>

function isObject(value: unknown): value is MessageTree {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function mergeMessages(base: MessageTree, overlay: MessageTree): MessageTree {
  const result: MessageTree = { ...base }

  for (const [key, value] of Object.entries(overlay)) {
    const existing = result[key]
    if (isObject(existing) && isObject(value)) {
      result[key] = mergeMessages(existing, value)
    } else {
      result[key] = value
    }
  }

  return result
}

export async function loadMessages(locale: string): Promise<MessageTree> {
  const en = (await import(`../../../messages/${defaultLocale}.json`)).default as MessageTree
  if (locale === defaultLocale) {
    return en
  }

  try {
    const localized = (await import(`../../../messages/${locale}.json`)).default as MessageTree
    return mergeMessages(en, localized)
  } catch {
    return en
  }
}
