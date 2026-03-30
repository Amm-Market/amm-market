"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Globe, Search, X } from "lucide-react"
import { useGT, useLocaleSelector } from "gt-next/client"
import { getLocalizedPathname, SITE_LOCALE_COOKIE } from "@/lib/locales"

interface LanguageRegionPickerProps {
  mobile?: boolean
}

const ease = [0.22, 1, 0.36, 1] as const

function persistSiteLocale(nextLocale: string) {
  window.document.cookie = `${SITE_LOCALE_COOKIE}=${nextLocale}; path=/; SameSite=Lax`
}

export default function LanguageRegionPicker({
  mobile = false,
}: LanguageRegionPickerProps): React.JSX.Element {
  const t = useGT()
  const router = useRouter()
  const pathname = usePathname()
  const { locale, locales, setLocale, getLocaleProperties } = useLocaleSelector()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  const openPicker = () => {
    setIsOpen(true)
  }

  const closePicker = () => {
    setIsOpen(false)
    setQuery("")
  }

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePicker()
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const localeRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return locales
      .map((localeCode) => {
        const properties = getLocaleProperties(localeCode)
        const searchText = [
          properties.code,
          properties.name,
          properties.nativeName,
          properties.languageName,
          properties.nativeLanguageName,
          properties.nameWithRegionCode,
          properties.nativeNameWithRegionCode,
          properties.regionName,
          properties.nativeRegionName,
        ]
          .join(" ")
          .toLowerCase()

        return {
          code: localeCode,
          language: properties.nativeLanguageName,
          region: properties.regionName,
          searchText,
        }
      })
      .filter((item) => !normalizedQuery || item.searchText.includes(normalizedQuery))
  }, [getLocaleProperties, locales, query])

  const handleSelectLocale = (nextLocale: string) => {
    closePicker()

    if (nextLocale === locale) {
      return
    }

    persistSiteLocale(nextLocale)
    setLocale(nextLocale)

    const nextPathname = getLocalizedPathname(pathname || "/", nextLocale)
    const nextSearch = typeof window !== "undefined" ? window.location.search : ""

    router.push(`${nextPathname}${nextSearch}`)
  }

  return (
    <>
      <motion.button
        type="button"
        whileTap={{ scale: 0.975 }}
        className={`inline-flex items-center justify-center rounded-full border border-black/12 bg-white text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:border-black/18 hover:bg-black/[0.02] ${
          mobile ? "h-11 w-11" : "h-10 w-10"
        }`}
        aria-label={t("Choose language")}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={openPicker}
      >
        <Globe className={mobile ? "h-5 w-5" : "h-[18px] w-[18px]"} />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label={t("Close language selector")}
              className="fixed inset-0 z-[70] bg-black/12 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              onClick={closePicker}
            />

            <motion.section
              role="dialog"
              aria-modal="true"
              aria-label={t("Language and region")}
              initial={mobile ? { opacity: 0, y: 16 } : { opacity: 0, y: -10, scale: 0.985 }}
              animate={mobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1 }}
              exit={mobile ? { opacity: 0, y: 12 } : { opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: mobile ? 0.42 : 0.28, ease }}
              className={`fixed z-[71] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] ${
                mobile
                  ? "inset-x-4 top-24 bottom-4"
                  : "right-6 top-20 w-[26rem] lg:right-8"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="type-section-title text-slate-900">{t("Language and region")}</p>
                  <p className="type-supporting mt-1 text-slate-500">
                    {t("Browse available locales for this site.")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closePicker}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                  aria-label={t("Close")}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-6 pb-6 pt-5">
                <label className="sr-only" htmlFor={`language-search-${mobile ? "mobile" : "desktop"}`}>
                  {t("Search languages")}
                </label>
                <div className="flex items-center gap-3 rounded-full bg-slate-100 px-4 py-3 text-slate-500">
                  <Search className="h-4 w-4 shrink-0" />
                  <input
                    id={`language-search-${mobile ? "mobile" : "desktop"}`}
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t("Search")}
                    className="type-body-copy w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="h-[calc(100%-10.75rem)] overflow-y-auto px-3 pb-4">
                {localeRows.length > 0 ? (
                  <ul className="space-y-1">
                    {localeRows.map((item) => {
                      const isSelected = item.code === locale

                      return (
                        <li key={item.code}>
                          <button
                            type="button"
                            onClick={() => handleSelectLocale(item.code)}
                            className="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left transition hover:bg-slate-50"
                          >
                            <span className="min-w-0">
                              <span className="type-body-copy block font-semibold text-slate-950">
                                {item.language}
                              </span>
                              <span className="type-supporting mt-1 block text-slate-500">
                                {item.region}
                              </span>
                            </span>
                            <span className="shrink-0">
                              {isSelected ? (
                                <Check className="h-5 w-5 text-emerald-600" />
                              ) : (
                                <span className="block h-5 w-5 rounded-full border border-transparent" />
                              )}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <div className="px-4 py-8 text-center text-slate-500">
                    <p className="type-body-copy">{t("No matching language found.")}</p>
                  </div>
                )}
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
