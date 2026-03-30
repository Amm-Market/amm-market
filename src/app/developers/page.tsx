import Link from "next/link"
import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BookOpen,
  Coins,
  Gauge,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { ScrollSpySidebar } from "@/components/scroll-spy-sidebar"

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "Introduction to AMM Market - LP-backed borrowing on Aave v4, Borrow Spokes, Invest Spoke, and Hub-mediated liquidity.",
}

const sections = [
  { id: "welcome", title: "Welcome" },
  { id: "what-is-amm-market", title: "What is AMM Market?" },
  { id: "how-it-works", title: "How It Works" },
  { id: "unlocking-lp-collateral", title: "Why LP Collateral Matters" },
  { id: "architecture", title: "Architecture" },
  { id: "current-development", title: "Current Scope" },
  { id: "next-steps", title: "Next Steps" },
]

const flowSteps = [
  {
    step: "01",
    title: "Deposit a supported LP position",
    description:
      "A user deposits an approved LP position into the appropriate Borrow Spoke while the underlying liquidity remains active in the AMM.",
  },
  {
    step: "02",
    title: "Value it conservatively",
    description:
      "The spoke reconstructs exposure, prices it through the oracle stack, and applies collateral factors plus pool-specific risk controls.",
  },
  {
    step: "03",
    title: "Borrow through the Hub",
    description:
      "Once capacity is available, debt is funded from shared Hub liquidity while health checks and liquidation logic stay spoke-aware.",
  },
]

const collateralHighlights: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Coins,
    title: "Keep capital productive",
    description:
      "Users can access liquidity without fully exiting the pools that continue generating fees and market exposure.",
  },
  {
    icon: Gauge,
    title: "Underwrite the real position",
    description:
      "Pool composition, fee accrual, price range, liquidity depth, and unwind quality all matter for borrow capacity.",
  },
  {
    icon: ShieldCheck,
    title: "Make liquidation enforceable",
    description:
      "LP collateral needs explicit recovery rules instead of being treated like a static token balance.",
  },
]

const architectureBlocks: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Workflow,
    title: "Borrow Spoke",
    description:
      "Receives LP collateral, values positions, tracks capacity, and enforces health and liquidation behavior.",
  },
  {
    icon: Layers3,
    title: "Hub",
    description:
      "Provides the shared monetary layer: reserves, accounting, interest rate logic, and liquidity coordination.",
  },
  {
    icon: Coins,
    title: "Invest Spoke",
    description:
      "Routes supplier capital into the Hub so LP-specific underwriting stays separate from capital entry.",
  },
]

const scopeFocus = [
  "Approved LP pool admission",
  "Position valuation and collateral factors",
  "Aggregate borrowing capacity inside each spoke",
  "Hub-mediated borrowing and repayment flows",
  "Health checks and liquidation discipline",
]

const operationalReferences = [
  "Testnet availability and rollout timing",
  "Campaigns, incentives, and rewards",
  "Deployment addresses and interface policies",
  "Operational fee settings and UI-level switches",
]

const nextStepGroups = [
  {
    title: "Start here",
    links: [
      {
        href: "/developers/introduction/key-concepts",
        label: "Key Concepts",
        description: "Understand the canonical LP-backed borrowing model.",
      },
    ],
  },
  {
    title: "Protocol architecture",
    links: [
      {
        href: "/developers/architecture",
        label: "Borrow Spoke",
        description: "See the borrower-facing execution layer.",
      },
      {
        href: "/developers/architecture/invest-spoke",
        label: "Invest Spoke",
        description: "See how lender capital enters through the Hub.",
      },
      {
        href: "/developers/architecture/collateral-factors",
        label: "Collateral Factors",
        description: "Understand how LP value becomes borrowable capacity.",
      },
    ],
  },
  {
    title: "Risk and pricing",
    links: [
      {
        href: "/developers/integrations/price-oracles",
        label: "Price Oracles",
        description: "Learn how LP collateral is priced conservatively.",
      },
    ],
  },
]

function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.9rem]">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{description}</p>
    </div>
  )
}

export default function DevelopersPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
      <div className="max-w-4xl">
        <section id="welcome" className="scroll-mt-32 border-b border-slate-200 pb-10">
          <p className="text-sm font-medium text-blue-600">Developer Docs</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Introduction
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            AMM Market turns supported LP positions into borrowable collateral inside Aave
            v4&apos;s Hub-and-Spoke architecture. This page is the mental-model overview: where LP
            specific underwriting lives, how shared Hub liquidity is used, and which deeper docs
            to read next.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/developers/introduction/key-concepts"
              className="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
            >
              Start with Key Concepts
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/developers/architecture"
              className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-slate-950 hover:underline"
            >
              Explore Borrow Spoke
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section id="what-is-amm-market" className="mt-12 scroll-mt-32">
          <SectionHeader
            title="What is AMM Market?"
            description="AMM Market is a lending protocol built for LP collateral that stays active in the underlying AMM. The protocol uses Aave v4&apos;s Hub-and-Spoke model so shared liquidity can stay in the Hub while LP-specific admissibility, valuation, and liquidation logic stays inside the spoke."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">Protocol thesis</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                LP collateral only works when the protocol can reason about what is in the pool,
                how it should be priced, how much can be borrowed against it, and how it can be
                unwound safely if the position deteriorates.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">How to read these docs</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Start with the canonical borrowing path first, then move into the Borrow Spoke,
                Invest Spoke, collateral factors, and pricing pages. The architecture and risk
                pages define the protocol model; testnet and operational pages are supporting
                references.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mt-12 scroll-mt-32">
          <SectionHeader
            title="How It Works"
            description="The borrowing flow is short at a high level, but each step carries LP-specific logic. Read it as the canonical path that the rest of the documentation expands."
          />

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <ol className="divide-y divide-slate-200">
              {flowSteps.map(({ step, title, description }) => (
                <li key={step} className="flex gap-4 px-6 py-6 sm:px-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                    {step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="unlocking-lp-collateral" className="mt-12 scroll-mt-32">
          <SectionHeader
            title="Why LP Collateral Matters"
            description="The point is not just to borrow against LPs. The point is to do it in a way that preserves productive capital and keeps the credit rules enforceable."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <ul className="space-y-5">
              {collateralHighlights.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="architecture" className="mt-12 scroll-mt-32">
          <SectionHeader
            title="Architecture"
            description="AMM Market separates LP-specific underwriting from the shared liquidity layer. The three blocks below are the simplest way to read that split."
          />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
            <div className="grid gap-4 lg:grid-cols-3">
              {architectureBlocks.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Borrow Spokes own admissibility, valuation, health checks, and liquidation behavior.
              The Hub owns shared reserves and accounting. The Invest Spoke routes lender capital
              into that shared liquidity layer.
            </p>
          </div>
        </section>

        <section id="current-development" className="mt-12 scroll-mt-32">
          <SectionHeader
            title="Current Scope"
            description="These docs focus on the core protocol model first. Operational details are documented separately so they do not redefine the main lending architecture."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Core protocol model</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {scopeFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Operational references</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {operationalReferences.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="next-steps" className="mt-12 scroll-mt-32">
          <SectionHeader
            title="Next Steps"
            description="Use the intro page to route into the specific part of the protocol you need. These links preserve the canonical reading path without turning the landing page into a grid of large cards."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {nextStepGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {group.links.map(({ href, label, description }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
                      >
                        {label}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ScrollSpySidebar
        sections={sections}
        pageSummary="High-level context for LP-backed borrowing, shared Hub liquidity, and the spoke-specific logic used by AMM Market."
        sectionColor="blue"
      />
    </div>
  )
}
