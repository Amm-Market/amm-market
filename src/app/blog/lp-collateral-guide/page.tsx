import type { Metadata } from "next"
import BlogPostLayout from "@/components/blog-post-layout"

export const metadata: Metadata = {
  title: "Beginner's Guide to LP Collateral: Risks and Rewards",
  description: "Understanding LP positions as collateral—LTV, impermanent loss, liquidation, and fee harvesting explained for new users.",
}

const tableOfContents = [
  { id: "what-is-lp-position", title: "What is an LP position, really?" },
  { id: "why-different", title: "Why treat LP tokens differently?" },
  { id: "key-concepts", title: "Key concepts" },
  { id: "how-borrowing-works", title: "How borrowing works" },
  { id: "safe-beginner-rules", title: "Safe beginner rules" },
  { id: "why-this-matters", title: "Why this matters" },
]

export default function LPCollateralGuidePage() {
  return (
    <BlogPostLayout
      title="Beginner's Guide to LP Collateral: Risks and Rewards"
      date="January 19, 2026"
      description="Liquidity providing is one of the most popular ways to earn yield in DeFi. Learn how Avana lets you use LP positions as collateral."
      image="/images/blog/lp-collateral-guide.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "integration-guide",
        title: "Building on Avana: Integration Guide for Developers",
        date: "January 20, 2026",
      }}
      nextPost={{
        slug: "avana-lp-collateral",
        title: "Avana Empowering Liquidity Providers With Collateral",
        date: "January 18, 2026",
      }}
    >
      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Providing liquidity has become one of the simplest ways to earn passive yield in DeFi — but what if your LP 
        tokens could do more than sit in a pool? Avana lets you use those LP positions as collateral to borrow 
        against them, unlocking capital while your liquidity keeps earning. Here&apos;s a jargon-free primer on the 
        essentials every beginner should know.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Liquidity providing is one of the most popular ways to earn yield in DeFi, but for many users LP tokens still 
        feel passive. Once funds are deposited into a pool, the position earns fees, but the capital itself often sits 
        locked until withdrawn. Avana changes that dynamic by allowing LP positions to be used as collateral for 
        borrowing, unlocking liquidity while keeping positions active. For new users, understanding how this works and 
        what risks are involved is essential.
      </p>

      <section id="what-is-lp-position" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">What is an LP position, really?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          An LP position (e.g., a Uniswap V3/Uniswap V4 or Balancer position) represents two things: the principal 
          tokens you deposited and the trading fees you&apos;ve earned over time. In concentrated-liquidity pools it also 
          carries a &quot;price range&quot; (ticks) that affects exposure. That combination—principal + accrued fees + range—is 
          what Avana treats as the collateral asset.
        </p>
        <p className="text-gray-700 leading-relaxed">
          An LP position is not just two tokens sitting in a pool. It represents principal liquidity combined with 
          accumulated trading fees and, in the case of concentrated liquidity pools like Uniswap V3 or V4, a defined 
          price range. That means the value of an LP position changes over time based on price movement, fee generation, 
          and whether liquidity remains in range. Avana is built specifically to understand these factors rather 
          than treating LP tokens like simple fungible assets.
        </p>
      </section>

      <section id="why-different" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Why treat LP tokens differently from plain ERC-20s?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike a vanilla token, an LP&apos;s value changes with price moves inside or outside your chosen range and with 
          fee accrual. Traditional lending markets often can&apos;t account for those dynamics. Avana&apos;s Spoke model 
          understands the nuance: it values your LP position in real time and sets borrowing limits accordingly.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When a user deposits an LP position into Avana, the protocol evaluates its real time value using on chain 
          pool data and price oracles. Based on that valuation, Avana determines how much the user can safely borrow. 
          This borrowing power is expressed as a loan to value ratio, or LTV. A lower LTV means more safety and a larger 
          buffer against price changes. A higher LTV allows more borrowing but increases liquidation risk.
        </p>
      </section>

      <section id="key-concepts" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Key concepts (plain language)</h2>
        
        <div className="space-y-6 not-prose">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-indigo-900 mb-2">LTV (Loan-to-Value)</h3>
            <p className="text-gray-700">
              This is the percentage of your LP&apos;s value you can borrow. A conservative LTV gives you more buffer against 
              price swings. Avana tunes LTVs per position based on pool volatility and oracle confidence.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Impermanent Loss (IL)</h3>
            <p className="text-gray-700">
              When token prices move, your LP can be worth less than simply holding the tokens separately. IL affects your 
              collateral value and therefore your available borrowing power. One of the most common concerns for LPs is 
              impermanent loss. When token prices move relative to each other, the LP position may be worth less than 
              holding the tokens outright. This directly impacts the value of LP collateral. Avana accounts for this 
              by adjusting collateral factors based on pool volatility and price behavior, helping reduce the chance of 
              sudden undercollateralization.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-red-900 mb-2">Liquidation</h3>
            <p className="text-gray-700">
              If the collateral value falls so your debt exceeds allowed LTV, your position may be partially liquidated. 
              Avana&apos;s liquidations aim to be precise — only the portion necessary is seized — and are driven by 
              oracle-backed health checks. If the value of the LP position falls and the loan exceeds safe thresholds, 
              the position can be partially liquidated to repay debt and protect the system. Avana is designed to 
              liquidate only what is necessary rather than fully unwinding a position. This makes the process more 
              predictable and less punitive for users.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
            <h3 className="font-semibold text-green-900 mb-2">Fee harvesting</h3>
            <p className="text-gray-700">
              Good news — you can collect trading fees while your LP is collateralized. Avana exposes a &quot;collect fees&quot; 
              action so you don&apos;t need to unwind your loan to claim rewards. A major advantage of LP collateralization is 
              fee harvesting. Even while an LP position is used as collateral, users can still collect trading fees. This 
              means the position continues to generate yield while also unlocking borrowing power, creating a more capital 
              efficient experience.
            </p>
          </div>
        </div>
      </section>

      <section id="how-borrowing-works" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">How borrowing works (simple flow)</h2>
        
        <div className="not-prose">
          <ol className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <div className="pt-1">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Deposit LP NFT</strong> into Avana Spoke (it stays in the pool earning fees).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <div className="pt-1">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Spoke values your position</strong> using on-chain pool data + price oracles.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <div className="pt-1">
                <p className="text-gray-700">
                  <strong className="text-gray-900">You borrow assets</strong> (USDC, etc.) from an Aave v4 Hub via the Spoke.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <div className="pt-1">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Interest accrues</strong>; you can repay at any time, collect fees, or adjust liquidity without fully withdrawing.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="safe-beginner-rules" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Safe beginner rules</h2>
        
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 not-prose">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">Start small:</strong> borrow a conservative amount (low LTV) until you understand how price moves affect your health factor.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">Use stablecoins</strong> for borrowed capital if you want steady yield without extra exposure.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">Monitor health factor</strong> and enable automated alerts. Avana&apos;s dashboard is designed to keep those signals easy to read.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">Don&apos;t loop</strong> (re-borrow to re-add) until you&apos;re comfortable with liquidation mechanics.
              </p>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6">
          For beginners, the safest approach is to borrow conservatively, monitor position health, and avoid leverage 
          until comfortable with how LP valuations change. Avana is designed to make LP collateral safer and more 
          transparent, but understanding the fundamentals remains the most important protection.
        </p>
      </section>

      <section id="why-this-matters" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Why this matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Using LPs as collateral turns passive liquidity into active capital. You keep earning fees while unlocking 
          borrowing power for other opportunities. For beginners, the trick is to be conservative at first, understand 
          LTV and IL, and use built-in safeguards to prevent surprises.
        </p>
      </section>
    </BlogPostLayout>
  )
}
