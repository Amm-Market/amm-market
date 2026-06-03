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
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"

export const metadata: Metadata = {
  title: "Introduction",
  description: "Avana turns supported LP positions into borrowable collateral.",
}

const sections = [
  { id: "welcome", title: "Welcome" },
  { id: "what-is-avana", title: "What is Avana?" },
  { id: "how-it-works", title: "How It Works" },
  { id: "unlocking-lp-collateral", title: "Why LP Collateral Matters" },
  { id: "architecture", title: "Architecture" },
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
    title: "Lend Spoke",
    description:
      "Routes supplier capital into the Hub so LP-specific underwriting stays separate from capital entry.",
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
      <h2 className="type-section-title text-slate-950">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl type-body-copy text-slate-600">{description}</p>
    </div>
  )
}

export default function DevelopersPage() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
      <div data-developer-doc-export-root className="max-w-4xl">
        <section id="welcome" className="scroll-mt-32 pb-10">
          <DeveloperDocPageHeader
            title="Introduction"
            description="Avana lets users borrow against supported LP positions. Avana turns supported LP positions into borrowable collateral. Avana uses the Hub-and-Spoke model to keep LP risk separate from shared liquidity."
          />
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/developers/introduction/key-concepts"
              className="inline-flex items-center gap-2 font-medium text-[#01AACF] transition hover:opacity-80 hover:underline"
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

        <section id="what-is-avana" className="deferred-viewport mt-12 scroll-mt-32">
          <SectionHeader
            title="What is Avana?"
            description="Avana is a lending protocol built for LP collateral that stays active in the underlying AMM. The protocol uses Aave v4&apos;s Hub-and-Spoke model so shared liquidity can stay in the Hub while LP-specific admissibility, valuation, and liquidation logic stays inside the spoke."
          />

          <p className="max-w-3xl text-sm leading-7 text-slate-600">
            LP collateral only works when the protocol can reason about what is in the pool, how
            it should be priced, how much can be borrowed against it, and how it can be unwound
            safely if the position deteriorates.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Start with the canonical borrowing path first, then move into the Borrow Spoke, Lend
            Spoke, collateral factors, and pricing pages.
          </p>
        </section>

        <section id="how-it-works" className="deferred-viewport mt-12 scroll-mt-32">
          <SectionHeader
            title="How It Works"
            description="The borrowing flow is short at a high level, but each step carries LP-specific logic. Read it as the canonical path that the rest of the documentation expands."
          />

          <ol className="space-y-4">
            {flowSteps.map(({ step, title, description }) => (
              <li key={step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-semibold text-[#01AACF]">
                  {step}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="unlocking-lp-collateral" className="deferred-viewport mt-12 scroll-mt-32">
          <SectionHeader
            title="Why LP Collateral Matters"
            description="The point is not just to borrow against LPs. The point is to do it in a way that preserves productive capital and keeps the credit rules enforceable."
          />

          <ul className="space-y-4">
            {collateralHighlights.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[#01AACF]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="architecture" className="deferred-viewport mt-12 scroll-mt-32">
          <SectionHeader
            title="Architecture"
            description="Avana separates LP-specific underwriting from the shared liquidity layer. The three blocks below are the simplest way to read that split."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {architectureBlocks.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-[#01AACF]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Borrow Spokes own admissibility, valuation, health checks, and liquidation behavior.
            The Hub owns shared reserves and accounting. The Lend Spoke routes lender capital into
            that shared liquidity layer.
          </p>
        </section>

      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="High-level context for LP-backed borrowing, shared Hub liquidity, and the spoke-specific logic used by Avana."
        sectionColor="blue"
      />
    </div>
  )
}
