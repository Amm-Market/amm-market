import Link from "next/link"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

export type NewsroomPost = {
  date: string
  title: string
  byline: string
  description: string
  href: string
}

export const homepageNewsroomPosts: NewsroomPost[] = [
  {
    date: "January 23, 2026",
    title: "Introducing Automate: Set-and-Forget LP Management",
    byline: "Product update",
    description:
      "Meet Automate, Avana's automation layer for hands-off LP management, from auto-compounding fees to rebalancing positions and protecting against liquidation.",
    href: "/blog/introducing-automate",
  },
  {
    date: "January 22, 2026",
    title: "Avana v1.1: New Features and Improvements",
    byline: "Protocol release",
    description:
      "A closer look at Avana v1.1, including multi-position collateral, improved oracle handling, gas optimizations, and a refreshed dashboard experience.",
    href: "/blog/v1-1-release",
  },
  {
    date: "January 21, 2026",
    title: "Smart Contract Architecture: Avana Technical Reference",
    byline: "Developer deep dive",
    description:
      "A technical walkthrough of Avana's smart contract architecture, covering Hub and Spoke design, oracle integration, and the contract-level structure behind LP-backed borrowing.",
    href: "/blog/smart-contract-architecture",
  },
]

export const borrowNewsroomPosts: NewsroomPost[] = [
  {
    date: "January 20, 2026",
    title: "LP Collateral Guide: Borrow Without Unwinding",
    byline: "Borrowing guide",
    description:
      "A practical walkthrough of using LP positions as collateral, from supported pool types to repayment flow and how borrowing power is set.",
    href: "/blog/lp-collateral-guide",
  },
  {
    date: "January 18, 2026",
    title: "Avana LP Collateral: How It Works",
    byline: "Protocol explainer",
    description:
      "An overview of Avana's LP-backed borrowing model, including collateral onboarding, valuation logic, and why positions stay productive while borrowed against.",
    href: "/blog/avana-lp-collateral",
  },
  {
    date: "January 15, 2026",
    title: "Unleashing LP Tokens as Productive Collateral",
    byline: "Market thesis",
    description:
      "Why idle LP exposure should act like working capital, and how Avana turns liquidity positions into flexible borrowing capacity without forcing exits.",
    href: "/blog/unleashing-lp-tokens",
  },
]

export const investNewsroomPosts: NewsroomPost[] = [
  {
    date: "January 24, 2026",
    title: "Institutional Use Cases for LP-Backed Capital",
    byline: "Strategy brief",
    description:
      "How treasuries, funds, and active allocators can use LP-backed credit lines to manage working capital, re-entry timing, and portfolio flexibility.",
    href: "/blog/institutional-use-cases",
  },
  {
    date: "January 17, 2026",
    title: "DeFi UX Challenges in Capital Deployment",
    byline: "Product research",
    description:
      "A look at the friction users face when moving between saving, investing, and borrowing, and how tighter product flows improve capital efficiency.",
    href: "/blog/defi-ux-challenges",
  },
  {
    date: "January 14, 2026",
    title: "Integration Guide for Avana Workflows",
    byline: "Builder resource",
    description:
      "Documentation and patterns for plugging Avana into frontends, automation layers, and portfolio tooling that coordinate deposits, credit, and allocation.",
    href: "/blog/integration-guide",
  },
]

export const earnNewsroomPosts: NewsroomPost[] = [
  {
    date: "January 25, 2026",
    title: "Yield Looping Playbook for LP-Backed Positions",
    byline: "Yield playbook",
    description:
      "A closer look at recursive capital strategies, where borrowed liquidity can be redeployed carefully while LP positions continue earning base fees.",
    href: "/blog/yield-looping-playbook",
  },
  {
    date: "January 19, 2026",
    title: "How to Hedge an LP Position Without Exiting",
    byline: "Risk strategy",
    description:
      "Tactics for staying invested while reducing directional exposure, including how borrowed stable liquidity can help manage changing market conditions.",
    href: "/blog/hedge-lp-position",
  },
  {
    date: "January 16, 2026",
    title: "Security Deep Dive: Safeguards Behind Avana",
    byline: "Security review",
    description:
      "An inside look at isolation, pricing checks, and position monitoring systems that support safer capital deployment across active LP-backed strategies.",
    href: "/blog/security-deep-dive",
  },
]

export const platformNewsroomPosts: NewsroomPost[] = [
  {
    date: "January 26, 2026",
    title: "Aave v4 and the Avana Spoke Design",
    byline: "Architecture overview",
    description:
      "How Avana uses Aave v4's modular foundation to support LP-aware borrowing, isolated markets, and cleaner routing between protocol components.",
    href: "/blog/aave-v4-avana-spoke",
  },
  {
    date: "January 21, 2026",
    title: "Smart Contract Architecture: Avana Technical Reference",
    byline: "Developer deep dive",
    description:
      "A technical walkthrough of Hub and Spoke structure, contract boundaries, and the execution model behind collateral onboarding and position management.",
    href: "/blog/smart-contract-architecture",
  },
  {
    date: "January 22, 2026",
    title: "Avana v1.1: New Features and Improvements",
    byline: "Protocol release",
    description:
      "Product updates across monitoring, collateral support, and interface improvements that shape the latest version of the Avana platform experience.",
    href: "/blog/v1-1-release",
  },
]

type HomepageNewsroomSectionProps = {
  eyebrow?: string
  title?: string
  posts?: NewsroomPost[]
  showDividers?: boolean
}

export default function HomepageNewsroomSection({
  eyebrow = "Newsroom",
  title = "Latest from Avana",
  posts = homepageNewsroomPosts,
  showDividers = true,
}: HomepageNewsroomSectionProps) {
  return (
    <section>
      <div className="mb-8 flex max-w-[48rem] flex-col gap-3 md:mb-10">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
      </div>

      <div className={showDividers ? "border-t border-gray-200" : ""}>
        {posts.map((post) => (
          <article
            key={post.href}
            className={`grid gap-4 py-6 md:grid-cols-[9.5rem_minmax(0,20rem)_minmax(0,1fr)_auto] md:gap-8 md:py-8 ${
              showDividers ? "border-b border-gray-200" : ""
            }`}
          >
            <p className="text-sm text-gray-500">{post.date}</p>

            <div className="space-y-2">
              <h3 className="max-w-[22rem] text-[1.45rem] font-medium leading-[1.08] tracking-[-0.045em] text-[#18323c]">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.byline}</p>
            </div>

            <p className="max-w-[38rem] text-sm leading-6 text-gray-600 md:pt-1">
              {post.description}
            </p>

            <div className="md:justify-self-end">
              <Link
                href={post.href}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
              >
                Read blog
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
