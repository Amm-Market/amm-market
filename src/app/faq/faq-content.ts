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
      {
        id: "is-avana-protocol-or-interface",
        q: "Is Avana only an interface, or is it a protocol too?",
        a: "Avana is a protocol with LP-specific borrowing logic, not just a frontend. The interface is one way to interact with that logic, but the core collateral valuation, debt controls, and liquidation pathways live at the protocol layer.",
      },
      {
        id: "why-use-aave-v4-architecture",
        q: "Why is Aave v4's Hub-and-Spoke architecture important here?",
        a: "It lets Avana isolate LP-specific underwriting inside Borrow Spokes while still drawing from shared liquidity and accounting at the Hub. That architecture is useful when collateral needs specialized risk logic without fragmenting the rest of the market.",
      },
      {
        id: "can-one-account-hold-multiple-positions",
        q: "Can one account use multiple LP positions at the same time?",
        a: "Yes. Borrowing capacity can be aggregated from multiple approved positions inside the same Borrow Spoke, provided each position is supported and each one passes the protocol's valuation and risk checks.",
      },
      {
        id: "what-makes-lp-collateral-productive",
        q: "What makes LP collateral productive compared with standard token collateral?",
        a: "LP collateral can keep earning trading fees and maintain AMM exposure while it supports borrowing. That makes it more dynamic than idle token collateral, but it also requires more careful valuation and health monitoring.",
      },
      {
        id: "does-avana-replace-the-amm",
        q: "Does Avana replace the AMM where the liquidity sits?",
        a: "No. The AMM still handles trading activity, pool state, and fee generation. Avana wraps risk management and borrowing logic around supported LP positions without replacing the underlying venue.",
      },
      {
        id: "will-all-lp-formats-work-the-same-way",
        q: "Will every LP format work exactly the same way on Avana?",
        a: "No. Fungible LP tokens and concentrated liquidity positions can behave very differently, so the protocol has to treat them according to their actual structure, recoverability, and liquidation path.",
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
      {
        id: "which-lp-types-can-be-deposited",
        q: "Which kinds of LP positions can be deposited?",
        a: "Only supported pools and approved LP formats can be used as collateral. Support depends on whether Avana can value the position conservatively and define a credible unwind path for it under stress.",
      },
      {
        id: "do-i-need-token-approvals",
        q: "Do I need approvals before depositing LP collateral?",
        a: "Yes. Like other DeFi flows, the protocol needs permission to move the LP asset into the collateral path. The exact approval and signature sequence depends on the LP format and the interface being used.",
      },
      {
        id: "can-i-deposit-part-of-a-position",
        q: "Can I deposit only part of a position?",
        a: "That depends on the LP format. Fungible LP tokens may allow partial sizing more easily, while NFT-like concentrated positions often need protocol-defined handling for full deposit, partial withdrawal, or position replacement.",
      },
      {
        id: "what-does-custody-mean-here",
        q: "What does protocol custody mean once I deposit?",
        a: "It means the collateral path controls whether the position can be withdrawn, modified, or claimed against while debt is outstanding. The position is still recognized as yours, but it is subject to collateral enforcement rules until released.",
      },
      {
        id: "can-i-deposit-on-one-chain-and-borrow-on-another",
        q: "Can I deposit on one chain and borrow on another?",
        a: "Not by default. Cross-chain workflows depend on how specific spokes and hub liquidity are configured. If multi-chain support exists, the interface and documentation should state exactly how positions and debt are coordinated.",
      },
      {
        id: "what-if-a-supported-pool-changes",
        q: "What if a supported pool becomes riskier after I deposit?",
        a: "Avana can update risk treatment if a pool's liquidity, volatility, or unwind assumptions change materially. That does not automatically remove your position, but it can reduce available headroom or require more conservative account management.",
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
      {
        id: "does-every-pool-have-the-same-collateral-factor",
        q: "Does every supported pool have the same borrowing treatment?",
        a: "No. Different pools can have different collateral factors, valuation assumptions, and liquidation controls depending on liquidity quality, token behavior, concentration risk, and expected unwind conditions.",
      },
      {
        id: "can-borrow-capacity-change-after-deposit",
        q: "Can my borrowing capacity change after I deposit?",
        a: "Yes. Capacity can move as prices change, fees accrue, ranges shift, debt changes, or protocol risk settings are updated. Deposit is not a one-time valuation event; health has to be monitored continuously.",
      },
      {
        id: "how-does-concentrated-liquidity-affect-valuation",
        q: "How does concentrated liquidity affect valuation?",
        a: "Concentrated liquidity can behave more like one-sided exposure when price moves outside the active range. That can change recoverable value sharply, so concentrated positions usually need more state-aware pricing and more conservative borrow assumptions.",
      },
      {
        id: "do-unclaimed-fees-increase-borrow-power-immediately",
        q: "Do unclaimed fees automatically increase borrow power?",
        a: "Not always in a one-to-one way. Fees may improve recognized value, but borrow power still depends on how those fees are treated under the current risk model and whether they remain available after conservative stress assumptions are applied.",
      },
      {
        id: "can-multiple-positions-increase-capacity-together",
        q: "Can multiple approved positions increase borrowing capacity together?",
        a: "Yes. Avana can aggregate borrowable contributions across approved positions inside the same spoke. The aggregate result still has to satisfy the spoke's account-level health and liquidation logic.",
      },
      {
        id: "why-app-value-differs-from-borrow-power",
        q: "Why can the value I see in the interface differ from actual borrow power?",
        a: "Because display value and borrowable value are not the same thing. Borrow power is usually the more conservative figure after haircuts, pool-specific risk controls, and liquidation assumptions are applied.",
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
      {
        id: "can-i-borrow-more-when-close-to-threshold",
        q: "Can I keep borrowing if I am already close to the limit?",
        a: "Only if the new borrow still leaves the account within allowed health boundaries. In practice, accounts close to liquidation thresholds should expect new borrowing requests to be constrained or blocked.",
      },
      {
        id: "does-repaying-improve-health-immediately",
        q: "Does repaying improve health immediately?",
        a: "Yes. Repayment directly reduces debt, so it should improve health as soon as the protocol recognizes the repayment and refreshes the account's borrowing state.",
      },
      {
        id: "can-liquidation-be-partial",
        q: "Can liquidations be partial instead of fully closing the position?",
        a: "Yes. The protocol should unwind only as much collateral as needed to restore solvency when possible. Full closure is usually a fallback for cases where a smaller unwind is not sufficient or not operationally clean.",
      },
      {
        id: "are-fees-used-before-principal",
        q: "Are unclaimed fees used before principal liquidity during liquidation?",
        a: "That is generally the cleaner path when feasible, because fees are already separated from principal in the protocol's accounting model. But the exact liquidation sequence still depends on what is necessary to restore the account safely.",
      },
      {
        id: "will-the-app-warn-before-liquidation",
        q: "Will the interface warn me before my account becomes liquidatable?",
        a: "A well-designed interface should surface health warnings, available headroom, and actions that would reduce safety margin. Those warnings help, but users still need to monitor positions actively in volatile conditions.",
      },
      {
        id: "can-automation-help-health-management",
        q: "Can automation help manage health before liquidation?",
        a: "Yes. Automation can watch account conditions and help trigger predefined actions such as repayment, deleveraging, or exposure reduction before the account crosses into liquidation territory.",
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
      {
        id: "is-there-a-separate-protocol-origination-fee",
        q: "Is there a separate protocol origination fee?",
        a: "That depends on the live protocol configuration. Interface fees and protocol-level economics are distinct concepts, so users should verify whether any additional protocol charges exist in current documentation or the live app.",
      },
      {
        id: "do-interface-fees-change-health-factor",
        q: "Do interface fees change my health factor directly?",
        a: "Not in the same way debt and collateral do. Interface fees are operational charges, while health factor is based on collateral value and debt state. The fee may still affect net proceeds, which matters for user experience even if it does not redefine core health logic.",
      },
      {
        id: "can-i-avoid-interface-fees",
        q: "Can I avoid interface fees if I use another access path?",
        a: "Potentially yes. If a fee is frontend-specific, other frontends or direct contract interactions may not apply the same policy. Users should verify the exact path they are taking before submitting transactions.",
      },
      {
        id: "are-interface-fees-refunded-on-failed-transactions",
        q: "Are interface fees refunded if a transaction fails?",
        a: "That depends on how the interface implements the fee. In many cases, failed transactions still consume gas while no frontend fee is finalized, but the exact behavior should be disclosed clearly in the live flow.",
      },
      {
        id: "where-is-the-fee-shown-before-signature",
        q: "Where should the fee appear before I sign?",
        a: "It should appear clearly in the interface before signature, alongside the source of the fee and how it differs from gas costs or protocol borrowing effects. Ambiguous fee presentation is a poor user experience and should be avoided.",
      },
      {
        id: "can-governance-change-interface-policy",
        q: "Can governance or operations change interface-fee policy over time?",
        a: "Yes. Interface policy can change as the product matures, governance formalizes revenue treatment, or new integrations launch. Any such changes should be communicated clearly and reflected in the live interface.",
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
      {
        id: "are-concentrated-positions-riskier",
        q: "Are concentrated liquidity positions generally riskier than standard LP tokens?",
        a: "They can be. Concentrated positions are more sensitive to range drift and can become highly one-sided when price moves, which can make valuation and liquidation behavior less forgiving under stress.",
      },
      {
        id: "what-if-oracle-data-goes-stale",
        q: "What happens if oracle or market data goes stale?",
        a: "A robust protocol should fall back to conservative handling, slow down sensitive actions, or restrict new borrowing until pricing confidence returns. Stale data is exactly the kind of condition that should push the system toward caution.",
      },
      {
        id: "is-there-smart-contract-risk",
        q: "Does smart contract risk still apply even if valuation is conservative?",
        a: "Yes. Conservative risk logic does not eliminate smart contract risk. Users should still consider contract security, integration complexity, and the protocol's audit and operational maturity when using any DeFi system.",
      },
      {
        id: "can-markets-be-paused",
        q: "Can risky markets or actions be paused if something goes wrong?",
        a: "Responsible protocols often retain emergency controls for severe cases such as oracle failures, discovered vulnerabilities, or abnormal market conditions. The exact scope of those controls should be documented clearly.",
      },
      {
        id: "should-i-use-a-hardware-wallet",
        q: "Should I use a hardware wallet for LP borrowing activity?",
        a: "For meaningful capital, yes. Hardware wallets reduce the chance that a compromised browser or device can directly expose signing keys, which is especially important when interacting with complex collateral positions.",
      },
      {
        id: "how-should-i-think-about-leverage-loops",
        q: "How should users think about leverage loops with LP collateral?",
        a: "Very carefully. Looping can amplify yield, but it can also amplify liquidation risk, one-sided exposure, and operational complexity. If users cannot explain the liquidation path clearly, the position is probably too aggressive.",
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

function computeFaqContentVersion(categories: readonly FaqCategory[]) {
  const source = JSON.stringify(categories)
  let hash = 5381

  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 33) ^ source.charCodeAt(index)
  }

  return `v${(hash >>> 0).toString(36)}`
}

export const FAQ_CONTENT_VERSION = computeFaqContentVersion(faqCategories)

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
  ["faq-categories", FAQ_CONTENT_VERSION],
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
