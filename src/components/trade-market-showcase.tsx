"use client"

import { useEffect, useMemo, useState } from "react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

type MarketCategory = "stablecoins" | "ethereum" | "bitcoin" | "others"
type LogoSet = [string, string?]

type MarketItem = {
  name: string
  ticker: string
  category: MarketCategory
  logos: LogoSet
}

const tabs: { id: MarketCategory; label: string }[] = [
  { id: "stablecoins", label: "Stablecoins" },
  { id: "ethereum", label: "Ethereum" },
  { id: "bitcoin", label: "Bitcoin" },
  { id: "others", label: "Others" },
]

const coinLogo = (slug: string) => `https://coin-logos.simplr.sh/images/${slug}/standard.png`
const siteFaviconLogo = (domain: string) => `https://www.google.com/s2/favicons?sz=128&domain=${domain}`
const fallbackLogo = "/file.svg"
const MARKET_ITEMS_PER_ROW = 9

const marketItems: MarketItem[] = [
  // Stablecoins
  { name: "USD Coin", ticker: "USDC", category: "stablecoins", logos: [coinLogo("usd-coin")] },
  { name: "Tether", ticker: "USDT", category: "stablecoins", logos: [coinLogo("tether")] },
  { name: "Dai", ticker: "DAI", category: "stablecoins", logos: [coinLogo("dai")] },
  { name: "GHO", ticker: "GHO", category: "stablecoins", logos: [coinLogo("gho")] },
  { name: "Curve USD", ticker: "crvUSD", category: "stablecoins", logos: [coinLogo("crvusd")] },
  { name: "Frax", ticker: "FRAX", category: "stablecoins", logos: [coinLogo("frax")] },
  { name: "USDe", ticker: "USDe", category: "stablecoins", logos: [coinLogo("ethena-usde")] },
  { name: "PayPal USD", ticker: "PYUSD", category: "stablecoins", logos: [coinLogo("paypal-usd")] },
  { name: "LUSD", ticker: "LUSD", category: "stablecoins", logos: [coinLogo("liquity-usd")] },
  { name: "USDD", ticker: "USDD", category: "stablecoins", logos: [coinLogo("usdd")] },

  // Ethereum-based
  { name: "Ether", ticker: "ETH", category: "ethereum", logos: [coinLogo("ethereum")] },
  { name: "Wrapped Ether", ticker: "WETH", category: "ethereum", logos: [coinLogo("weth")] },
  { name: "stETH", ticker: "stETH", category: "ethereum", logos: [coinLogo("staked-ether")] },
  { name: "wstETH", ticker: "wstETH", category: "ethereum", logos: [coinLogo("wrapped-steth")] },
  { name: "rETH", ticker: "rETH", category: "ethereum", logos: [coinLogo("rocket-pool-eth")] },
  { name: "cbETH", ticker: "cbETH", category: "ethereum", logos: [coinLogo("coinbase-wrapped-staked-eth")] },
  { name: "weETH", ticker: "weETH", category: "ethereum", logos: [coinLogo("wrapped-eeth")] },
  { name: "ETHx", ticker: "ETHx", category: "ethereum", logos: [siteFaviconLogo("staderlabs.com")] },
  { name: "osETH", ticker: "osETH", category: "ethereum", logos: [siteFaviconLogo("stakewise.io")] },

  // Bitcoin-based
  { name: "Wrapped Bitcoin", ticker: "WBTC", category: "bitcoin", logos: [coinLogo("wrapped-bitcoin")] },
  { name: "tBTC", ticker: "tBTC", category: "bitcoin", logos: [coinLogo("tbtc")] },
  { name: "cbBTC", ticker: "cbBTC", category: "bitcoin", logos: [siteFaviconLogo("coinbase.com")] },
  { name: "renBTC", ticker: "renBTC", category: "bitcoin", logos: [coinLogo("renbtc")] },
  { name: "sBTC", ticker: "sBTC", category: "bitcoin", logos: [siteFaviconLogo("synthetix.io")] },
  { name: "LBTC", ticker: "LBTC", category: "bitcoin", logos: [siteFaviconLogo("lombard.finance")] },

  // Others
  { name: "Aave", ticker: "AAVE", category: "others", logos: [coinLogo("aave")] },
  { name: "Uniswap", ticker: "UNI", category: "others", logos: [coinLogo("uniswap")] },
  { name: "Chainlink", ticker: "LINK", category: "others", logos: [coinLogo("chainlink")] },
  { name: "Curve", ticker: "CRV", category: "others", logos: [coinLogo("curve-dao-token")] },
  { name: "Lido", ticker: "LDO", category: "others", logos: [coinLogo("lido-dao")] },
  { name: "Compound", ticker: "COMP", category: "others", logos: [coinLogo("compound-governance-token")] },
  { name: "Maker", ticker: "MKR", category: "others", logos: [coinLogo("maker")] },
  { name: "Synthetix", ticker: "SNX", category: "others", logos: [coinLogo("synthetix-network-token")] },
  { name: "The Graph", ticker: "GRT", category: "others", logos: [coinLogo("the-graph")] },
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

  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />
      <div className={`flex w-max items-center gap-2.5 ${trackClass}`} style={{ animationDuration: `${duration}s` }}>
        {items.map((item, index) => (
          <MarketChip key={`${item.name}-${item.ticker}-${index}-a`} item={item} />
        ))}
        {items.map((item, index) => (
          <MarketChip key={`${item.name}-${item.ticker}-${index}-b`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function TradeMarketShowcase() {
  const [selectedTab, setSelectedTab] = useState<MarketCategory>("stablecoins")

  const filteredItems = useMemo(() => {
    return marketItems.filter((item) => item.category === selectedTab)
  }, [selectedTab])

  const rows = useMemo(() => {
    if (filteredItems.length === 0) return [[], [], [], []] as MarketItem[][]

    return [
      repeatItems(filteredItems, MARKET_ITEMS_PER_ROW, 0),
      repeatItems(filteredItems, MARKET_ITEMS_PER_ROW, 5),
      repeatItems(filteredItems, MARKET_ITEMS_PER_ROW, 10),
      repeatItems(filteredItems, MARKET_ITEMS_PER_ROW, 15),
    ]
  }, [filteredItems])

  return (
    <section className="relative bg-white site-section-gap">
      <div className="site-content-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-[600px] flex-col gap-2">
            <SectionEyebrow tone="emerald">Supply markets</SectionEyebrow>
            <SectionTitle className="max-w-[16ch] md:max-w-none md:whitespace-nowrap">
              Lend across markets.
            </SectionTitle>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2">
              {tabs.map((tab) => {
                const active = selectedTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedTab(tab.id)}
                    className={[
                      "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                      active
                        ? "bg-[#01AACF] text-white hover:bg-[#00a0c2]"
                        : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
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
