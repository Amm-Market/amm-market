import { Code2, Coins, Globe2, LayoutDashboard, Layers3, RefreshCcw, Rocket, ShieldCheck } from "lucide-react"
import { SectionEyebrow, SectionTitle } from "@/components/shared"

type RoadmapStatus = "Released" | "In Progress" | "Q2" | "Q3" | "Q4"

const roadmapPhases: {
  title: string
  summary: string
  timeframe: string
  milestones: { label: string; status: RoadmapStatus }[]
}[] = [
  {
    title: "Phase 1 - Token Markets",
    summary: "Deposit LP positions as collateral to borrow single assets.",
    timeframe: "Q2 2026",
    milestones: [
      { label: "LP Collateral Pricing Engine", status: "Released" },
      { label: "Oracles and Risk Parameters", status: "Released" },
      { label: "Spokes Framework", status: "Released" },
      { label: "Collateral Health Factor", status: "Released" },
      { label: "Lightpaper", status: "Released" },
      { label: "Sandbox Launch", status: "Released" },
      { label: "LP Token Valuation Model", status: "In Progress" },
      { label: "LP Token Liquidation Engine", status: "In Progress" },
      { label: "Borrow & Repay Core Contracts", status: "In Progress" },
      { label: "Testnet Uniswap V3 LP Support", status: "In Progress" },
      { label: "Testnet Balancer V3 LP Support", status: "In Progress" },
      { label: "Smart Contract Audit V1", status: "In Progress" },
      { label: "Ethereum Mainnet Launch", status: "Q2" },
      { label: "Lender Dashboard & Borrower Interface", status: "Q2" },
      { label: "Real-time Pool Risk Monitoring", status: "Q2" },
      { label: "AVA Token", status: "Q2" },
    ],
  },
  {
    title: "Phase 2 - Pool Markets",
    summary: "Deposit LP positions as collateral to borrow pool positions.",
    timeframe: "Q3 2026",
    milestones: [
      { label: "Pool Market Architecture & Spec", status: "Q2" },
      { label: "LP-to-Pool Borrow Mechanism", status: "Q2" },
      { label: "Borrowed Pool Position Packaging", status: "Q2" },
      { label: "Dynamic LTV Engine V2 (LP composition-aware)", status: "Q2" },
      { label: "Liquidation Engine V2", status: "Q2" },
      { label: "Base & Arbitrum Deployment", status: "Q2" },
      { label: "Uniswap V2 LP Support", status: "Q2" },
      { label: "Balancer V2 LP Support", status: "Q2" },
      { label: "Aerodrome Basic Stable LP Support", status: "Q2" },
      { label: "Aerodrome Basic Volatile LP Support", status: "Q2" },
      { label: "Cross-chain Collateral Risk Parameters", status: "Q2" },
      { label: "Smart Contract Audit V2", status: "Q2" },
      { label: "Curve LP Support", status: "Q3" },
      { label: "Secondary Pool Position Market", status: "Q3" },
      { label: "Lender Credit Exit Facility", status: "Q3" },
      { label: "Protocol-to-Protocol Pool API", status: "Q3" },
    ],
  },
  {
    title: "Phase 3 - Leverage Markets",
    summary:
      "Deposit LP positions as collateral, borrow assets or pools, and loop into leveraged yield positions.",
    timeframe: "Q4 2026",
    milestones: [
      { label: "Loop Strategy Engine", status: "Q4" },
      { label: "One-Click Loop UX", status: "Q4" },
      { label: "Leverage Tiers (2x / 5x / 10x)", status: "Q4" },
      { label: "Loop Health Monitor & Auto-Deleverage", status: "Q4" },
      { label: "Slippage & Rebalance Optimizer", status: "Q4" },
      { label: "Cross-chain Loop Support (Ethereum, Base, Arbitrum)", status: "Q4" },
      { label: "Institutional Access & REST API", status: "Q4" },
      { label: "Smart Contract Audit V3", status: "Q4" },
      { label: "Governance V1", status: "Q4" },
    ],
  },
]

function getRoadmapStatusClass(status: RoadmapStatus) {
  if (status === "Released") return "text-emerald-700"
  if (status === "In Progress") return "text-blue-700"
  return "text-slate-700"
}

function getRoadmapStatusLabel(status: RoadmapStatus) {
  if (status === "Released") return "Released"
  if (status === "In Progress") return "In Progress"
  return `Target ${status} 2026`
}

function getRoadmapGroupOpacity(status: RoadmapStatus) {
  if (status === "Released" || status === "In Progress") return ""
  if (status === "Q2") return "opacity-95"
  if (status === "Q3") return "opacity-85"
  return "opacity-75"
}

function getRoadmapDisplayLabel(label: string) {
  const shortLabels: Record<string, string> = {
    "Lender Dashboard & Borrower Interface": "Dashboard & Borrower UI",
    "Real-time Pool Risk Monitoring": "Pool Risk Monitoring",
    "Borrowed Pool Position Packaging": "Pool Position Packaging",
    "Dynamic LTV Engine V2 (LP composition-aware)": "Dynamic LTV Engine V2",
    "Cross-chain Collateral Risk Parameters": "Cross-chain Risk Parameters",
    "Secondary Pool Position Market": "Secondary Pool Market",
    "Protocol-to-Protocol Pool API": "Protocol Pool API",
    "Cross-chain Loop Support (Ethereum, Base, Arbitrum)": "Cross-chain Loop Support",
    "Leverage Tiers (2x / 5x / 10x)": "Leverage Tiers",
    "Loop Health Monitor & Auto-Deleverage": "Loop Health & Auto-Deleverage",
    "Institutional Access & REST API": "Institutional Access & API",
  }

  return shortLabels[label] ?? label
}

function RoadmapMilestoneIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase()

  if (
    normalized.includes("risk") ||
    normalized.includes("liquidation") ||
    normalized.includes("ltv") ||
    normalized.includes("oracle") ||
    normalized.includes("audit") ||
    normalized.includes("health")
  ) {
    return <ShieldCheck className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (
    normalized.includes("dashboard") ||
    normalized.includes("interface") ||
    normalized.includes("ui") ||
    normalized.includes("monitoring")
  ) {
    return <LayoutDashboard className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("token") || normalized.includes("ava")) {
    return <Coins className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("loop") || normalized.includes("leverage")) {
    return <RefreshCcw className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (
    normalized.includes("base") ||
    normalized.includes("arbitrum") ||
    normalized.includes("cross-chain") ||
    normalized.includes("deployment")
  ) {
    return <Globe2 className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("pool")) {
    return <Layers3 className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  if (normalized.includes("launch") || normalized.includes("sandbox") || normalized.includes("testnet")) {
    return <Rocket className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
  }

  return <Code2 className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
}

export default function ProtocolRoadmapSection() {
  return (
    <section className="space-y-8" id="roadmap">
      <div className="space-y-3">
        <SectionEyebrow tone="cyan">What comes next</SectionEyebrow>
        <SectionTitle>Roadmap</SectionTitle>
      </div>

      <p className="text-[1rem] leading-[1.72] tracking-[-0.02em] text-gray-600 sm:text-[1.05rem]">
        Avana develops in three phases. Each phase builds on the one before it: Token Markets,
        Pool Markets, then Leverage Markets.
      </p>

      <div className="flex flex-col gap-10">
        {roadmapPhases.map((phase, index) => {
          const statusOrder: RoadmapStatus[] = ["Released", "In Progress", "Q2", "Q3", "Q4"]
          const groupedMilestones = statusOrder
            .map((status) => ({
              status,
              items: phase.milestones.filter((milestone) => milestone.status === status),
            }))
            .filter((group) => group.items.length > 0)

          return (
            <div key={phase.title} className={index === 0 ? "space-y-4" : "space-y-4 pt-2"}>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className={`mb-0 text-base font-semibold ${index === 2 ? "text-gray-700" : "text-gray-900"}`}>
                    {phase.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-gray-500">
                    {phase.timeframe}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600">{phase.summary}</p>
              </div>

              <div className="space-y-3">
                {groupedMilestones.map((group) => (
                  <div key={`${phase.title}-${group.status}`} className={`space-y-2 ${getRoadmapGroupOpacity(group.status)}`}>
                    <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${getRoadmapStatusClass(group.status)}`}>
                      {getRoadmapStatusLabel(group.status)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((milestone) => (
                        <div
                          key={milestone.label}
                          className="flex items-center gap-2 rounded-md bg-gray-100 px-2.5 py-1.5"
                        >
                          <RoadmapMilestoneIcon label={milestone.label} />
                          <span className={`text-[12px] font-medium leading-5 ${index === 2 ? "text-gray-700" : "text-gray-800"}`}>
                            {getRoadmapDisplayLabel(milestone.label)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
