import { withDocsI18n } from "@/lib/content-i18n/with-docs-i18n"
import { Link } from "@/i18n/navigation"
import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Bot,
  Brain,
  Globe,
  BarChart,
  Zap,
  Repeat,
  Clock,
  Shield,
  Cpu,
  Sparkles,
} from "lucide-react"
import { DeveloperScrollSpyRail } from "@/components/developer-scroll-spy-rail"
import { DeveloperDocPageHeader } from "@/components/developer-doc-page-header"
import { createDocsMetadata } from "@/lib/content-i18n/docs-metadata"

export async function generateMetadata(): Promise<Metadata> {
  return createDocsMetadata("copilot", {
    title: "Ask AI",
    description:
      "How Avana's Ask AI turns natural-language investment intent into data-driven, automated DeFi actions.",
  })
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "router", title: "Router Contract" },
  { id: "core-features", title: "Core Features" },
  { id: "strategies", title: "Trading Strategies" },
  { id: "benefits", title: "Key Benefits" },
]

const coreFeatures: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Bot,
    title: "Conversational interface",
    body: "Engage with DeFi in natural language. Analyze assets, execute swaps, or track trends with simple commands, and receive real-time context through AI-driven alerts.",
  },
  {
    icon: Brain,
    title: "Intelligence hub",
    body: "Automated summaries and recaps on tracked assets turn raw data, historical patterns, and emerging market narratives into actionable insights you can drill into with a click.",
  },
  {
    icon: Globe,
    title: "Multi-DEX integration",
    body: "The router aggregates liquidity across decentralized exchanges for the best rates, and bridges assets between chains through secure cross-chain messaging.",
  },
]

const strategies: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: BarChart,
    title: "Market analysis engine",
    body: "Uses moving averages, RSI, Bollinger Bands, MACD, and order book depth to identify trends, volatility, and momentum shifts.",
  },
  {
    icon: Zap,
    title: "Real-time execution",
    body: "Scans the market around the clock, executing at machine speed while managing risk with stop-losses and diversification.",
  },
  {
    icon: Repeat,
    title: "Strategy backtesting",
    body: "Tests and refines strategies against historical data to optimize risk-reward ratios before any capital is deployed.",
  },
]

const benefits: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Clock,
    title: "24/7 automation",
    body: "Round-the-clock trading and market monitoring so opportunities are not missed while you are away.",
  },
  {
    icon: Shield,
    title: "Emotion-free decisions",
    body: "Replaces impulsive reactions with rule-based, AI-driven logic applied consistently.",
  },
  {
    icon: Cpu,
    title: "Speed and precision",
    body: "Executes in milliseconds, capitalizing on short-lived opportunities across venues.",
  },
  {
    icon: Sparkles,
    title: "Holistic risk management",
    body: "Prioritizes capital preservation with dynamic stop-losses and cross-chain diversification.",
  },
]

export default async function CopilotIntroductionPage() {
  return withDocsI18n("copilot", (
    <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-start xl:gap-12">
      <div data-developer-doc-export-root className="min-w-0 w-full max-w-3xl flex-1">
        <DeveloperDocPageHeader
          title="Ask AI"
          description="An AI-driven layer that simplifies how people discover, assess, and act on DeFi opportunities on Avana."
        />

        <section id="overview" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Overview</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana&apos;s Ask AI deploys independent operators to automate a wide range of DeFi
            tasks from a single, conversational interface. It combines language understanding with
            real-time data aggregation so users can execute complex operations, track project
            updates, and analyze market trends without stitching together separate tools.
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            Ask AI is built to lower the barrier to entry for liquidity provision. It
            identifies and implements pool strategies while abstracting away wallet selection, chain
            switching, and LP setup, so more users can reach the earning potential of active LP
            positions.
          </p>
        </section>

        <section id="router" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Router Contract</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Avana introduces a router contract that standardizes interaction between DeFi
            applications. It acts as a universal communication layer, much like a USB port for
            DeFi, giving the AI a consistent way to connect and act across protocols and fostering
            interoperability across the ecosystem.
          </p>
          <p className="text-sm text-gray-600">
            See the{" "}
            <Link href="/developers/integrations/router-contract" className="text-[#01AACF] hover:underline">
              Router &amp; Adapters
            </Link>{" "}
            reference and{" "}
            <Link href="/developers/copilot/protocols" className="text-[#01AACF] hover:underline">
              Supported Protocols
            </Link>{" "}
            for the adapter interfaces this relies on.
          </p>
        </section>

        <section id="core-features" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Core Features</h2>
          <div className="space-y-4">
            {coreFeatures.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[#01AACF]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="strategies" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Trading Strategies</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Ask AI navigates volatile markets with a combination of established indicators and
            adaptive machine learning.
          </p>
          <div className="space-y-4">
            {strategies.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[#01AACF]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="mb-12">
          <h2 className="mb-4 type-section-title text-gray-900">Key Benefits</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-[#01AACF]" />
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/developers/copilot/workflow"
              className="inline-flex items-center gap-2 font-medium text-[#01AACF] transition hover:opacity-80 hover:underline"
            >
              See the agent workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/developers/copilot/query-example"
              className="inline-flex items-center gap-2 font-medium text-gray-700 transition hover:text-gray-900 hover:underline"
            >
              Explore prompt examples
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      <DeveloperScrollSpyRail
        sections={sections}
        pageSummary="How Ask AI turns natural-language intent into automated, risk-aware DeFi actions across supported protocols."
        sectionColor="cyan"
      />
    </div>
  ))
}
