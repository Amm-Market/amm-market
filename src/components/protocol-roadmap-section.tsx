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
    title: "Phase 1 - Borrow Market",
    summary: "Borrow against LP positions with pricing, risk checks, and liquidation controls.",
    timeframe: "Q2 2026",
    milestones: [
      { label: "Borrow pricing engine", status: "Released" },
      { label: "Oracle and risk parameters", status: "Released" },
      { label: "Health factor model", status: "Released" },
      { label: "Borrow / repay contracts", status: "In Progress" },
      { label: "LP valuation model", status: "In Progress" },
      { label: "Liquidation engine", status: "In Progress" },
      { label: "Testnet LP support", status: "In Progress" },
      { label: "Borrow dashboard", status: "Q2" },
      { label: "Real-time risk monitoring", status: "Q2" },
      { label: "Mainnet borrow launch", status: "Q2" },
    ],
  },
  {
    title: "Phase 2 - Lend Market",
    summary: "Supply capital to back LP borrowing and earn yield from the market.",
    timeframe: "Q3 2026",
    milestones: [
      { label: "Supply and withdraw flows", status: "Q3" },
      { label: "Yield accrual engine", status: "Q3" },
      { label: "Lender dashboard", status: "Q3" },
      { label: "Incentive distribution", status: "Q3" },
      { label: "Market reporting", status: "Q3" },
      { label: "Lend market launch", status: "Q3" },
      { label: "Liquidity routing support", status: "Q3" },
      { label: "Smart contract audit V2", status: "Q3" },
      { label: "Governance v1", status: "Q3" },
    ],
  },
  {
    title: "Phase 3 - Multiply Market",
    summary: "Open LP-backed leverage positions and manage them with a single workflow.",
    timeframe: "Q4 2026",
    milestones: [
      { label: "Multiply workflow design", status: "Q3" },
      { label: "Position packaging", status: "Q3" },
      { label: "Loop and leverage engine", status: "Q3" },
      { label: "Auto-deleverage controls", status: "Q3" },
      { label: "Cross-chain support", status: "Q3" },
      { label: "LP pair coverage", status: "Q3" },
      { label: "Multiply risk controls", status: "Q4" },
      { label: "Smart contract audit V3", status: "Q4" },
      { label: "Multiply market launch", status: "Q4" },
    ],
  },
]

function getRoadmapStatusClass() {
  return "text-[#01AACF]"
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
    "Borrow pricing engine": "Pricing engine",
    "Oracle and risk parameters": "Oracle and risk parameters",
    "Borrow / repay contracts": "Borrow / repay contracts",
    "Real-time risk monitoring": "Risk monitoring",
    "Mainnet borrow launch": "Borrow launch",
    "Supply and withdraw flows": "Supply / withdraw flows",
    "Yield accrual engine": "Yield accrual engine",
    "Lend market launch": "Lend launch",
    "Liquidity routing support": "Routing support",
    "Multiply workflow design": "Workflow design",
    "Loop and leverage engine": "Loop engine",
    "Auto-deleverage controls": "Auto-deleverage controls",
    "Cross-chain support": "Cross-chain support",
    "LP pair coverage": "LP pair coverage",
    "Multiply market launch": "Multiply launch",
  }

  return shortLabels[label] ?? label
}

function RoadmapMilestoneIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase()
  const iconClassName = "h-3.5 w-3.5 text-[#01AACF]"

  if (
    normalized.includes("risk") ||
    normalized.includes("liquidation") ||
    normalized.includes("ltv") ||
    normalized.includes("oracle") ||
    normalized.includes("audit") ||
    normalized.includes("health")
  ) {
    return <ShieldCheck className={iconClassName} aria-hidden="true" />
  }

  if (
    normalized.includes("dashboard") ||
    normalized.includes("interface") ||
    normalized.includes("ui") ||
    normalized.includes("monitoring")
  ) {
    return <LayoutDashboard className={iconClassName} aria-hidden="true" />
  }

  if (normalized.includes("token") || normalized.includes("ava")) {
    return <Coins className={iconClassName} aria-hidden="true" />
  }

  if (normalized.includes("loop") || normalized.includes("leverage")) {
    return <RefreshCcw className={iconClassName} aria-hidden="true" />
  }

  if (
    normalized.includes("base") ||
    normalized.includes("arbitrum") ||
    normalized.includes("cross-chain") ||
    normalized.includes("deployment")
  ) {
    return <Globe2 className={iconClassName} aria-hidden="true" />
  }

  if (normalized.includes("pool")) {
    return <Layers3 className={iconClassName} aria-hidden="true" />
  }

  if (normalized.includes("launch") || normalized.includes("sandbox") || normalized.includes("testnet")) {
    return <Rocket className={iconClassName} aria-hidden="true" />
  }

  return <Code2 className={iconClassName} aria-hidden="true" />
}

export default function ProtocolRoadmapSection() {
  return (
    <section className="space-y-8" id="roadmap">
      <div className="space-y-3">
        <SectionEyebrow tone="cyan">What comes next</SectionEyebrow>
        <SectionTitle>Roadmap</SectionTitle>
      </div>

      <p className="text-[1.08rem] leading-[1.68] tracking-[-0.025em] text-gray-600 sm:text-[1.12rem]">
        Avana develops in three phases. Each phase builds on the one before it: Borrow Markets,
        Lend Markets, then Multiply Markets.
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
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#01AACF]">
                    {phase.timeframe}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600">{phase.summary}</p>
              </div>

              <div className="space-y-3">
                {groupedMilestones.map((group) => (
                  <div key={`${phase.title}-${group.status}`} className={`space-y-2 ${getRoadmapGroupOpacity(group.status)}`}>
                    <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${getRoadmapStatusClass()}`}>
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
