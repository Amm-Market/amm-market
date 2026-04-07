import { revalidateTag, unstable_cache } from "next/cache"

/**
 * Canonical FAQ content and small server-side helpers for the `/faq` route.
 * The data lives in one place so the page can stay server-rendered and cached.
 */
export type FaqQuestion = {
  id: string
  q: string
  a: string
}

export type FaqCategory = {
  id: string
  name: string
  summary: string
  questions: FaqQuestion[]
}

export type FaqSearchResult = FaqQuestion & {
  category: string
}

export const defaultFaqCategory = "Core Concepts"
export const FAQ_CONTENT_TAG = "faq-content"

export const faqCategories: FaqCategory[] = [
  {
    id: "core-concepts",
    name: "Core Concepts",
    summary: "How Avana values LP positions and routes them through the protocol.",
    questions: [
      {
        id: "what-is-avana",
        q: "What is Avana?",
        a: "Avana is an LP-collateral lending protocol built around Aave v4's Hub-and-Spoke architecture. Borrow Spokes underwrite supported LP positions, while the Hub coordinates shared liquidity and debt accounting.",
      },
      {
        id: "why-lp-collateral-different",
        q: "Why are LP positions treated differently from standard token collateral?",
        a: "An LP position is productive collateral, not a static token balance. Its value depends on the underlying assets, pool composition, fee accrual, liquidity structure, and how much value can realistically be recovered during unwind.",
      },
      {
        id: "what-is-borrow-spoke",
        q: "What does the Borrow Spoke do?",
        a: "The Borrow Spoke is the LP-specific execution layer. It receives supported collateral, values each position, aggregates borrowing capacity, monitors health, and routes liquidation behavior while shared capital stays coordinated at the Hub.",
      },
      {
        id: "how-hub-fits-in",
        q: "How does the Hub fit into the borrowing flow?",
        a: "Once a user's collateral supports borrowing capacity inside a Borrow Spoke, the spoke draws liquidity from the Hub. That separation lets Avana keep LP-specific risk logic inside the spoke while shared reserves and accounting stay in the Hub.",
      },
    ],
  },
  {
    id: "depositing-lp-collateral",
    name: "Depositing LP Collateral",
    summary: "What happens when a supported LP position enters collateral accounting.",
    questions: [
      {
        id: "what-happens-on-deposit",
        q: "What happens when I deposit a supported LP position?",
        a: "The position moves into the appropriate Borrow Spoke for collateral accounting. The spoke records the position, values it under the protocol's risk model, and uses it to build borrowing capacity.",
      },
      {
        id: "does-liquidity-stay-active",
        q: "Does depositing remove my liquidity from the pool?",
        a: "No. The LP position remains active in the underlying AMM while the protocol takes custody for collateral purposes. That means the position can continue earning fees and retaining market exposure while it supports borrowing.",
      },
      {
        id: "can-claim-fees",
        q: "Can I claim LP fees while the position is being used as collateral?",
        a: "Yes, subject to health checks. Avana distinguishes principal liquidity from accrued fees, but if removing the fee value would leave the account too close to or beyond the allowed borrowing boundary, the claim should be blocked until debt is reduced or more collateral is added.",
      },
      {
        id: "withdraw-or-modify-collateral",
        q: "When can I withdraw or modify collateralized LP positions?",
        a: "Collateral can be released once debt is repaid or whenever the post-change account still passes the same valuation and health checks used everywhere else in the protocol. Full repayment is the cleanest path, but some resizing or approved replacements may also be possible while debt remains outstanding.",
      },
    ],
  },
  {
    id: "borrowing-capacity-and-valuation",
    name: "Borrowing Capacity & Valuation",
    summary: "How recoverable value becomes borrowing capacity inside a Borrow Spoke.",
    questions: [
      {
        id: "how-borrowing-capacity-calculated",
        q: "How is borrowing capacity calculated?",
        a: "Each approved LP position is valued independently. Its borrowable contribution is built from position value after collateral factors and pool-specific risk controls are applied, then those contributions are aggregated inside the Borrow Spoke and enforced through the Hub.",
      },
      {
        id: "why-borrow-power-lower-than-full-value",
        q: "Why is borrow power lower than the full position value?",
        a: "Avana borrows against discounted, recoverable value rather than optimistic net asset value. Haircuts reflect unwind slippage, impermanent loss, one-sided range exposure, and stressed liquidation assumptions.",
      },
      {
        id: "how-prices-determined",
        q: "How are LP positions priced?",
        a: "Robust external asset prices anchor the underlying tokens, while pool data and position state are used to reconstruct exposure. TWAP and venue-specific checks help verify pricing, but borrow power is still based on conservative recoverable-value assumptions rather than raw AMM spot state.",
      },
      {
        id: "are-fees-included-in-valuation",
        q: "Are accrued trading fees part of valuation?",
        a: "Yes. Avana tracks principal liquidity and accrued fees separately so the protocol can reason about productive collateral more accurately. Fees may contribute to recognized value, but claiming them still changes collateral and remains subject to health checks.",
      },
    ],
  },
  {
    id: "health-and-liquidation",
    name: "Health & Liquidation",
    summary: "How health factor, repayment, and liquidation work together.",
    questions: [
      {
        id: "what-is-health-factor",
        q: "What is the health factor?",
        a: "The health factor is the relationship between adjusted collateral value and outstanding debt inside one Borrow Spoke. It uses the same valuation, collateral-factor, and liquidation assumptions that the protocol uses everywhere else.",
      },
      {
        id: "what-affects-health",
        q: "What actions change my health factor?",
        a: "Borrowing more lowers health because debt rises. Repaying improves health immediately, and adding approved collateral can increase headroom. Claiming fees, withdrawing collateral, or re-ranging positions may reduce health and must still pass protocol checks.",
      },
      {
        id: "what-happens-during-liquidation",
        q: "What happens if my position becomes liquidatable?",
        a: "Once debt exceeds the allowed borrowing boundary, liquidation can unwind the minimum collateral path needed to restore solvency. Uncollected fees may be applied first, principal liquidity may be unwound if needed, and any residual value after debt and liquidation premium remains with the borrower.",
      },
      {
        id: "who-can-liquidate",
        q: "Who can liquidate an unhealthy position?",
        a: "Liquidations remain permissionless, and Avana also operates specialized liquidation nodes to improve coverage for complex LP collateral. The Hub can also trigger spoke-level handling when broader system settlement is required.",
      },
    ],
  },
  {
    id: "fees-and-interface-policy",
    name: "Fees & Interface Policy",
    summary: "How interface fees differ from protocol economics and how they are disclosed.",
    questions: [
      {
        id: "interface-vs-protocol-fees",
        q: "Are interface fees part of the core borrowing logic?",
        a: "No. Interface fees are an operational policy on specific frontends or service paths. Protocol economics still govern debt accrual, collateral treatment, and liquidation outcomes.",
      },
      {
        id: "are-interface-fees-fixed",
        q: "Are interface fees fixed across all Avana integrations?",
        a: "Not necessarily. Exact fee rates, exemptions, and rollout status are operational settings that should be verified in the live interface or release materials. Direct contract integrations or third-party frontends may follow different assumptions.",
      },
      {
        id: "how-fees-disclosed",
        q: "How should interface fees be disclosed?",
        a: "Any interface fee should be shown clearly before signature so users can distinguish it from gas costs, swap fees, and protocol-level borrowing effects. Good disclosure identifies the fee source, whether it is optional or interface-specific, and where proceeds are directed.",
      },
      {
        id: "how-fees-used",
        q: "What are interface fees used for?",
        a: "If interface fees are collected, they typically fund product operations such as infrastructure, monitoring, security work, documentation, and support. Governance may formalize or change those policies over time.",
      },
    ],
  },
  {
    id: "risk-and-security",
    name: "Risk & Security",
    summary: "Oracle, market, and user-security guidance for LP borrowing.",
    questions: [
      {
        id: "main-risks",
        q: "What are the main risks of borrowing against LP collateral?",
        a: "The main risks are market moves in the underlying assets, impermanent loss, range drift for concentrated positions, and account actions that reduce collateral buffer while debt remains outstanding. If those forces weaken health enough, the position can become liquidatable.",
      },
      {
        id: "how-oracle-risk-reduced",
        q: "How does Avana reduce oracle and pricing risk?",
        a: "The protocol uses robust external feeds, deterministic position reconstruction, venue-specific verification, and recoverable-value haircuts instead of trusting raw spot prices. That reduces the chance of inflated collateral marks and manipulation-driven borrowing capacity.",
      },
      {
        id: "why-recoverable-value",
        q: "Why does Avana focus on recoverable value instead of optimistic NAV?",
        a: "Because borrowing and liquidation must settle in real markets. Avana anchors both borrow power and liquidation behavior to value that can realistically be realized during unwind, not to a best-case mark that may disappear under stress.",
      },
      {
        id: "user-security-reminders",
        q: "What security habits should users follow?",
        a: "Protect your seed phrase and private keys, verify URLs and contract addresses from official docs or the live app, treat direct messages and impersonation attempts as hostile by default, and review transaction details carefully before signing.",
      },
    ],
  },
]

const schemaQuestionIds = [
  "what-is-avana",
  "what-happens-on-deposit",
  "how-borrowing-capacity-calculated",
  "what-is-health-factor",
  "are-interface-fees-fixed",
  "main-risks",
]

const faqQuestionLookup = new Map(
  faqCategories.flatMap((category) => category.questions.map((question) => [question.id, question])),
)

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: schemaQuestionIds.map((id) => {
    const question = faqQuestionLookup.get(id)

    if (!question) {
      throw new Error(`Missing FAQ schema question for id: ${id}`)
    }

    return {
      "@type": "Question",
      name: question.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.a,
      },
    }
  }),
}

const getCachedFaqCategories = unstable_cache(
  async () => faqCategories,
  ["faq-categories"],
  {
    revalidate: 3600,
    tags: [FAQ_CONTENT_TAG],
  },
)

export async function getFaqCategories() {
  try {
    return await getCachedFaqCategories()
  } catch (error) {
    if (error instanceof Error && error.message.includes("incrementalCache missing")) {
      return faqCategories
    }

    throw error
  }
}

export function normalizeFaqCategory(
  requestedCategory?: string,
  categories: readonly FaqCategory[] = faqCategories,
) {
  return categories.find((category) => category.name === requestedCategory)?.name ?? defaultFaqCategory
}

export function getFaqQuestionsForCategory(
  categories: readonly FaqCategory[],
  categoryName: string,
) {
  return categories.find((category) => category.name === categoryName)?.questions ?? []
}

export function searchFaqQuestions(
  categories: readonly FaqCategory[],
  rawSearchTerm: string,
): FaqSearchResult[] {
  const searchTerm = rawSearchTerm.trim().toLowerCase()

  if (!searchTerm) {
    return []
  }

  return categories
    .flatMap((category) =>
      category.questions.map((question) => ({
        ...question,
        category: category.name,
      })),
    )
    .filter(
      (question) =>
        question.q.toLowerCase().includes(searchTerm) ||
        question.a.toLowerCase().includes(searchTerm),
    )
}

export function revalidateFaqContent() {
  revalidateTag(FAQ_CONTENT_TAG, "max")
}
