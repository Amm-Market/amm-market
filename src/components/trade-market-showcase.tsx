"use client"

import { useEffect, useMemo, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

type MarketCategory = "crypto" | "equities" | "indices" | "forex"
type LogoSet = [string, string?]

type MarketItem =
  | {
      name: string
      ticker: string
      category: MarketCategory
      logos: LogoSet
    }
  | {
      name: string
      ticker: string
      category: "forex"
      logos: LogoSet
    }

const tabs: { id: MarketCategory; label: string }[] = [
  { id: "crypto", label: "Crypto" },
  { id: "equities", label: "Equities" },
  { id: "indices", label: "Indices" },
  { id: "forex", label: "Forex" },
]

const coinLogo = (slug: string) => `https://coin-logos.simplr.sh/images/${slug}/standard.png`
const simpleIconLogo = (slug: string) => `https://cdn.simpleicons.org/${slug}/111111`
const siteFaviconLogo = (domain: string) => `https://www.google.com/s2/favicons?sz=128&domain=${domain}`
const flagLogo = (code: string) => `https://flagcdn.com/w40/${code}.png`
const fallbackLogo = "/file.svg"

const marketItems: MarketItem[] = [
  // Crypto
  { name: "Bitcoin", ticker: "BTC", category: "crypto", logos: [coinLogo("bitcoin")] },
  { name: "Ethereum", ticker: "ETH", category: "crypto", logos: [coinLogo("ethereum")] },
  { name: "Solana", ticker: "SOL", category: "crypto", logos: [coinLogo("solana")] },
  { name: "XRP", ticker: "XRP", category: "crypto", logos: [coinLogo("ripple")] },
  { name: "USDC", ticker: "USDC", category: "crypto", logos: [coinLogo("usd-coin")] },
  { name: "USDT", ticker: "USDT", category: "crypto", logos: [coinLogo("tether")] },
  { name: "Aave", ticker: "AAVE", category: "crypto", logos: [coinLogo("aave")] },
  { name: "Uniswap", ticker: "UNI", category: "crypto", logos: [coinLogo("uniswap")] },
  { name: "Curve", ticker: "CRV", category: "crypto", logos: [coinLogo("curve-dao-token")] },
  { name: "Chainlink", ticker: "LINK", category: "crypto", logos: ["https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771af9ca656af840dff83e8264ecf986ca/logo.png"] },
  { name: "BNB", ticker: "BNB", category: "crypto", logos: ["https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png"] },
  { name: "Dogecoin", ticker: "DOGE", category: "crypto", logos: [coinLogo("dogecoin")] },
  { name: "Sui", ticker: "SUI", category: "crypto", logos: [coinLogo("sui")] },
  { name: "Ton", ticker: "TON", category: "crypto", logos: [coinLogo("the-open-network")] },
  { name: "PancakeSwap", ticker: "CAKE", category: "crypto", logos: [coinLogo("pancakeswap-token")] },
  { name: "Raydium", ticker: "RAY", category: "crypto", logos: [coinLogo("raydium")] },
  { name: "Sushi", ticker: "SUSHI", category: "crypto", logos: [coinLogo("sushi")] },
  { name: "Orca", ticker: "ORCA", category: "crypto", logos: [coinLogo("orca")] },

  // Equities
  { name: "Tesla", ticker: "TSLA", category: "equities", logos: [simpleIconLogo("tesla")] },
  { name: "Nvidia", ticker: "NVDA", category: "equities", logos: [simpleIconLogo("nvidia")] },
  { name: "Apple", ticker: "AAPL", category: "equities", logos: [simpleIconLogo("apple")] },
  { name: "Google", ticker: "GOOG", category: "equities", logos: [simpleIconLogo("google")] },
  { name: "Microsoft", ticker: "MSFT", category: "equities", logos: [simpleIconLogo("microsoft")] },
  { name: "Oracle", ticker: "ORCL", category: "equities", logos: [simpleIconLogo("oracle")] },
  { name: "Amazon", ticker: "AMZN", category: "equities", logos: [simpleIconLogo("amazon")] },
  { name: "OpenAI", ticker: "OPENAI", category: "equities", logos: [simpleIconLogo("openai")] },
  { name: "Anthropic", ticker: "ANTHROPIC", category: "equities", logos: [simpleIconLogo("anthropic")] },
  { name: "SpaceX", ticker: "SPACEX", category: "equities", logos: [simpleIconLogo("spacex")] },
  { name: "Samsung", ticker: "SMSN", category: "equities", logos: [simpleIconLogo("samsung")] },
  { name: "Alibaba", ticker: "BABA", category: "equities", logos: [simpleIconLogo("alibaba")] },
  { name: "CoreWeave", ticker: "CRWV", category: "equities", logos: [siteFaviconLogo("coreweave.com")] },
  { name: "SK Hynix", ticker: "SKHX", category: "equities", logos: [siteFaviconLogo("skhynix.com")] },

  // Indices
  { name: "Nasdaq 100", ticker: "NDX", category: "indices", logos: [simpleIconLogo("nasdaq"), siteFaviconLogo("nasdaq.com")] },
  { name: "S&P 500", ticker: "SPX", category: "indices", logos: [siteFaviconLogo("spglobal.com"), siteFaviconLogo("spglobal.com")] },
  { name: "Dow Jones", ticker: "DJI", category: "indices", logos: [siteFaviconLogo("dowjones.com"), siteFaviconLogo("dowjones.com")] },
  { name: "MSCI World", ticker: "MSCI", category: "indices", logos: [siteFaviconLogo("msci.com"), siteFaviconLogo("msci.com")] },
  { name: "FTSE 100", ticker: "FTSE", category: "indices", logos: [siteFaviconLogo("lseg.com"), siteFaviconLogo("lseg.com")] },
  { name: "Cboe VIX", ticker: "VIX", category: "indices", logos: [siteFaviconLogo("cboe.com"), siteFaviconLogo("cboe.com")] },

  // Forex
  { name: "EUR / USD", ticker: "EUR/USD", category: "forex", logos: [flagLogo("eu"), flagLogo("us")] },
  { name: "GBP / USD", ticker: "GBP/USD", category: "forex", logos: [flagLogo("gb"), flagLogo("us")] },
  { name: "USD / JPY", ticker: "USD/JPY", category: "forex", logos: [flagLogo("us"), flagLogo("jp")] },
  { name: "USD / CHF", ticker: "USD/CHF", category: "forex", logos: [flagLogo("us"), flagLogo("ch")] },
  { name: "AUD / USD", ticker: "AUD/USD", category: "forex", logos: [flagLogo("au"), flagLogo("us")] },
  { name: "USD / CAD", ticker: "USD/CAD", category: "forex", logos: [flagLogo("us"), flagLogo("ca")] },

]

function repeatItems<T>(items: T[], count: number, offset: number) {
  if (items.length === 0) return []

  const output: T[] = []
  for (let i = 0; i < count; i += 1) {
    output.push(items[(offset + i) % items.length])
  }
  return output
}

function LogoPill({ logos }: { logos: LogoSet }) {
  if (logos.length === 2) {
    const [firstLogo, secondLogo] = logos as [string, string]
    if (firstLogo === secondLogo) {
      return <LogoImage src={firstLogo} className="h-[2.25rem] w-[2.25rem]" />
    }

    return (
      <div className="flex items-center -space-x-1.5">
        <LogoImage src={firstLogo} className="h-8 w-8" />
        <LogoImage src={secondLogo} className="h-8 w-8" />
      </div>
    )
  }

  return <LogoImage src={logos[0]} fallbackSrc={logos[1]} className="h-[2.25rem] w-[2.25rem]" />
}

function LogoImage({ src, fallbackSrc, className }: { src: string; fallbackSrc?: string; className: string }) {
  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`${className} rounded-none object-contain`}
      onError={() => {
        if (currentSrc === src && fallbackSrc) {
          setCurrentSrc(fallbackSrc)
          return
        }

        if (currentSrc !== fallbackLogo) {
          setCurrentSrc(fallbackLogo)
        }
      }}
    />
  )
}

function MarketChip({ item }: { item: MarketItem }) {
  return (
    <article className="flex h-[3.45rem] w-[8.6rem] shrink-0 items-center gap-2.5 rounded-full border border-[#d8e1ef] bg-white px-2.5 shadow-[0_3px_8px_rgba(15,23,42,0.02)] sm:w-[8.95rem]">
      <LogoPill logos={item.logos} />
      <div className="min-w-0">
        <div className="truncate text-[0.8rem] font-semibold leading-tight tracking-[-0.02em] text-slate-800">
          {item.name}
        </div>
        <div className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.1em] text-slate-500">
          {item.ticker}
        </div>
      </div>
    </article>
  )
}

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: MarketItem[]
  reverse?: boolean
  duration: number
}) {
  const trackClass = reverse ? "animate-scroll-right" : "animate-scroll-left"
  const visibleItems = useMemo(() => repeatItems(items, 18, 0), [items])

  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />
      <div className={`flex w-max items-center gap-2.5 ${trackClass}`} style={{ animationDuration: `${duration}s` }}>
        {visibleItems.map((item, index) => (
          <MarketChip key={`${item.name}-${item.ticker}-${index}-a`} item={item} />
        ))}
        {visibleItems.map((item, index) => (
          <MarketChip key={`${item.name}-${item.ticker}-${index}-b`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function TradeMarketShowcase() {
  const [selectedTab, setSelectedTab] = useState<MarketCategory>("crypto")

  const filteredItems = useMemo(() => {
    return marketItems.filter((item) => item.category === selectedTab)
  }, [selectedTab])

  const rows = useMemo(() => {
    if (filteredItems.length === 0) return [[], [], [], []] as MarketItem[][]

    return [
      repeatItems(filteredItems, 18, 0),
      repeatItems(filteredItems, 18, 5),
      repeatItems(filteredItems, 18, 10),
      repeatItems(filteredItems, 18, 15),
    ]
  }, [filteredItems])

  return (
    <section className="relative bg-white py-8 md:py-10">
      <div className="site-content-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="rose">What&apos;s new</SectionEyebrow>
            <SectionTitle className="max-w-[16ch] md:max-w-none md:whitespace-nowrap">
              Multiply 250+ markets.
            </SectionTitle>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <div className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-full border border-[#d5ddeb] bg-white p-1 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              {tabs.map((tab) => {
                const active = selectedTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedTab(tab.id)}
                    className={[
                      "rounded-full px-4 py-2.5 text-[0.93rem] font-semibold tracking-[-0.02em] transition-colors sm:px-5",
                      active ? "bg-[#0f172a] text-white" : "text-slate-400 hover:text-slate-700",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2 md:mt-10">
          <MarqueeRow items={rows[0]} duration={126} />
          <MarqueeRow items={rows[1]} reverse duration={138} />
          <MarqueeRow items={rows[2]} duration={132} />
          <MarqueeRow items={rows[3]} reverse duration={144} />
        </div>
      </div>
    </section>
  )
}
