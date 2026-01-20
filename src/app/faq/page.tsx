"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ categories and their questions
const faqCategories = [
  {
    name: "Troubleshooting",
    questions: [
      {
        q: "My wallet won't connect or shows 'wrong network'",
        a: "• Confirm you selected the correct network in your wallet and in the app UI.\n• If using WalletConnect, try re-scanning the QR and reconnecting.\n• Clear browser cache or test in an incognito window.\n• If using a third-party frontend, try the official app to rule out frontend bugs.",
      },
      {
        q: "My Uniswap v3/v4 NFT position isn't showing",
        a: "• Confirm the NFT is in the same wallet you connected.\n• Check that the NFT is actually owned by your address on the blockchain (open the token ID in Etherscan/OpenSea).\n• If the NFT was transferred to the Vault but UI shows \"missing\", provide the deposit tx hash in a ticket. We will verify Vault receipts and sync issues.",
      },
      {
        q: "My deposit failed or transaction reverted",
        a: "• Copy the transaction hash and check it on the appropriate block explorer for the error message.\n• Common causes: insufficient gas, incorrect token approvals, reentrancy protections in other wrappers.\n• If you used a third-party service to sign the transaction, confirm the service supported this contract. Attach the error TX and wallet address to your ticket.",
      },
      {
        q: "My borrowable amount is lower than expected",
        a: "Borrow capacity = CollateralValue × collateralFactor. CollateralFactor = min(CF(token0), CF(token1)).\n\n• Full-range vs concentrated-range positions: if your position is concentrated, LTVs are likely lower or disallowed. Confirm position range requirements.\n• The UI shows per-pool LTV; check the per-pool parameter sheet in Docs. If mismatch persists, attach the position tx and screenshots.",
      },
      {
        q: "I tried to adjust liquidity but the action was blocked",
        a: "• If your position is collateralized and the change would bring collateral value below required threshold, the action will be blocked.\n• Either add collateral, repay, or partially close the loan first.\n• If you believe the block was incorrect, include the attempted tx hash in your ticket.",
      },
      {
        q: "I was liquidated — what happened and what next?",
        a: "Liquidation is triggered when debt > borrowing capacity. The process uses uncollected fees first, then unwinds the minimum value from the LP position to cover debt + liquidator premium.\n\nWhat you'll receive: any residual value after debt + premium is returned to you.\n\nAction steps: submit a ticket with your wallet and liquidation tx hash. We'll confirm the unwind steps and show the accounting. Also check whether you qualify for post-liquidation dispute (rare; must be supported by on-chain evidence).",
      },
      {
        q: "Fees or yield not updating or miscalculated",
        a: "Fee accrual is derived from on-chain pool state. UI caching or indexer lag can temporarily misreport. Wait a few minutes and refresh. If discrepancy persists for >1 hour, provide the pool contract, position ID, and screenshots.",
      },
      {
        q: "Questions about fixed tranches (30/90/180d)",
        a: "• Early repayment may be allowed with an early-exit fee to protect lenders (see tranche terms). Check the tranche terms page in the app before borrowing.\n• For conversion requests (rollover at maturity), submit a ticket at least 48 hours before tranche expiry if you need assistance.",
      },
      {
        q: "How do I open a support ticket?",
        a: "Use the Support Form or Discord #support channel. Include:\n\n• Ticket subject: short summary (e.g., \"NFT deposit failed — tx 0xabc…\")\n• Wallet address (public only)\n• Chain / Network (Ethereum / Arbitrum / Unichain / BSC / etc.)\n• App or adapter used (official app / frontend name)\n• UX flow (what you clicked) & timestamp (UTC)\n• Transaction hash(es) (critical!)\n• Short description of the problem (2–3 sentences)\n• Screenshots or screen recording (highlight errors)\n• Steps you've already tried (connect/disconnect wallet, clear cache, switch network)\n• Your preferred contact method (Discord / email)\n\nTickets without TX hashes or screenshots take longer to investigate.",
      },
    ],
  },
  {
    name: "Key Concepts",
    questions: [
      {
        q: "What is the core insight behind Amm Market?",
        a: "An LP position is not merely a bundle of two tokens; it is a sophisticated financial instrument whose value is composed of principal liquidity and accrued trading fees, all confined within a specific price range. Traditional lending protocols, which treat assets as fungible ERC20 tokens, cannot accurately assess or manage this type of collateral.\n\nAmm Market solves this by building on the proven foundation of Aave v4's battle-tested and audited codebase, specifically designed to integrate natively with Aave v4's Hub-and-Spoke model, allowing it to serve as a dedicated Spoke that manages this unique asset class while drawing liquidity from Aave's robust and capital-efficient Hubs.",
      },
      {
        q: "How does Amm Market handle LP positions as collateral?",
        a: "Amm Market is designed for both simplicity and security. A user begins by depositing their LP shares into Amm Market. This action is the foundation of the entire process, as the LP share serves as a unique, verifiable title to their liquidity position.\n\nLP shares carry path-dependent risk (impermanent loss, fee accrual, oracle drift). Amm Market is context-aware — it can track pool composition, volatility bands, and oracle quality, then tune LTVs and liquidation paths accordingly.",
      },
      {
        q: "How does the Spoke architecture work?",
        a: "Upon deposit, the user's LP shares are securely held within the Spoke, which then interacts with the Aave v4 Hub to establish a line of credit. This does not remove their liquidity from the pool; their LP share remains active, continuing to earn fees and provide liquidity whether on Balancer or Uniswap.\n\nBorrowing occurs by selecting an optimal Hub based on factors like available liquidity and premiums, drawing funds directly from the Hub while tracking debt shares internally. Interest accrues on debts using a compounded model via the interest rate model contract, incorporating utilization and reserve factors.\n\nThe architecture ensures risk isolation, with Amm Market managing per-position health checks and the Hub enforcing aggregate caps.",
      },
      {
        q: "How is my LP position valued for borrowing?",
        a: "The Spoke uses a sophisticated oracle system to determine the real-time value of the deposited NFT, taking into account the current prices of the two underlying tokens and the specific price range (ticks) of the LP.\n\nBased on this valuation and a predefined collateral factor, the Spoke calculates the maximum amount of an asset (such as USDC) that you can borrow. The user can then initiate a borrow transaction, and the Spoke sources the required funds from the Aave v4 Hub.",
      },
    ],
  },
  {
    name: "Supplying & Borrowing",
    questions: [
      {
        q: "How do I deposit my LP position?",
        a: "A user deposits their Uniswap V3 position by transferring the NFT to Amm Market. The NFT is cached and valued by an oracle that returns the full position value plus accumulated fees.\n\nInside the spoke, a user calls deposit(tokenId), which internally triggers a safeTransferFrom call to the Uniswap NonfungiblePositionManager, moving the NFT from the user's wallet into the Spoke's custody. This action fires the onERC721Received hook, where the Spoke performs its initialization logic — it records the NFT's ownership, caches the position's metadata (tokens, fee tier, tick range, liquidity), and creates a new, empty loan entry for the tokenId.",
      },
      {
        q: "How does borrowing work?",
        a: "When the owner requests a borrow, Amm Market converts the requested asset amount into debt shares using the current exchange rate, updates per-token and per-token-pair accounting, checks that the resulting loan is safe given the configured collateral factors, and then draws the requested asset from the chosen Hub.\n\nWith the NFT deposited, the user calls borrow(tokenId, amount). The Spoke first performs a series of checks: it verifies the caller is the NFT's owner, selects an appropriate Aave Hub based on available liquidity and cost, and checks the user's new debt against global and per-token debt limits.",
      },
      {
        q: "What health checks are performed when borrowing?",
        a: "The most critical check is the health check. The Spoke calls _requireLoanIsHealthy, which in turn calls the oracle to get the NFT's current value and calculates a collateralValue (e.g., fullValue * collateralFactorX32 / 2^32). If the user's requested debt exceeds this collateralValue, the transaction reverts.\n\nIf all checks pass, the Spoke updates its internal accounting, calculates the number of \"debt shares\" that represent the user's obligation (which allows it to accrue interest over time without constantly updating raw debt amounts), then calls _borrowFromHub to interact with the Aave Hub to draw the required funds.",
      },
      {
        q: "How is my loan monitored?",
        a: "The borrowing is not a direct interaction between the end-user and the Hub; instead, the Spoke acts as an intermediary, borrowing on behalf of the user. The user is responsible for repaying the borrowed amount plus interest.\n\nThe protocol continuously monitors the health of the loan by comparing the current value of the collateralized NFT against the outstanding debt. If the value of the collateral drops due to market movements, bringing the loan-to-value ratio above a critical threshold, the position becomes eligible for liquidation.",
      },
      {
        q: "What happens during liquidation?",
        a: "In a liquidation event, a liquidator can repay a portion of the debt and seize a corresponding portion of the NFT's underlying assets, ensuring the system remains solvent.\n\nCrucially, at any time, the user can reclaim their accrued trading fees by calling a dedicated function, which instructs the Spoke to collect the fees from the liquidity pools on their behalf — all without affecting the collateralized status of the NFT.",
      },
    ],
  },
  {
    name: "Managing Positions",
    questions: [
      {
        q: "Can I borrow more or make partial repayments?",
        a: "If a loan remains healthy and the maximum borrowing limit has not been reached, additional funds can be borrowed. To reduce exposure, users may make partial repayments. The interface also provides tools to monitor market conditions and assess their impact on collateral.\n\nIf the value of the LP NFT decreases and loan health declines, the application issues warnings. This proactive monitoring enables users to respond before a position becomes critical and subject to liquidation.",
      },
      {
        q: "What control do I retain over my collateralized LP?",
        a: "Users retain operational control of LPs even while they are collateralized, provided the loan remains healthy. They can:\n• Collect and compound accrued fees\n• Add or withdraw liquidity as long as the updated collateral value remains above the protocol's requirement\n• Fully withdraw the position by repaying all outstanding debt",
      },
      {
        q: "Can I change my position's price range?",
        a: "To change a position's price range, users must first withdraw liquidity and then create a new position at the desired range. Liquidity can also be reallocated to a different asset pair.\n\nIn both cases, the new pair must be approved as valid collateral by the protocol, and the resulting collateral value must be sufficient to maintain a healthy loan status.",
      },
      {
        q: "What constraints apply to position modifications?",
        a: "Key Constraints: Any modification that reduces collateral below the required threshold is either blocked or must be paired with additional collateral or partial repayment. These safeguards ensure loan stability and reduce liquidation risk.",
      },
    ],
  },
  {
    name: "Repaying & Withdrawing",
    questions: [
      {
        q: "How do I repay my loan?",
        a: "Repaying your debt is a straightforward process that strengthens the health of your loan and can eventually lead to the full withdrawal of your collateral. When the user repays, Amm Market reduces debt shares.\n\nTo repay, navigate to the loan management section for the specific loan. You can choose to repay a partial amount or the full debt. The app will show you the total amount due, including any accrued interest. By confirming the repayment transaction, you send the specified amount of the borrowed asset back to the Aave Hub. This action reduces your outstanding debt shares, which in turn improves your loan's health factor.",
      },
      {
        q: "How does repayment work technically?",
        a: "Inside the spoke, a user calls repay(tokenId, amount, isShare). The isShare parameter allows them to repay a specific amount of debt (in the borrowed asset) or a specific number of debt shares.\n\nThe _repay helper function is then executed. It calculates the exact number of shares to burn or assets to transfer, updates the user's loan, and reduces the Spoke's total debt.",
      },
      {
        q: "How do I withdraw my LP after repaying?",
        a: "If the repayment reduces the user's debt to zero, the function calls _cleanupLoan. This final step reverses the deposit process: it clears the loan data, removes the NFT from the user's internal ownership list, and executes a safeTransferFrom to send the NFT back to the user's wallet.\n\nThis is the \"withdraw\" of the collateral. There is no separate withdraw function for the NFT — its return is intrinsically tied to the full repayment of the loan. Withdraws of collateral occur implicitly when a loan is cleaned up or explicitly via transform or decrease liquidity operations executed by the token owner while health checks pass.",
      },
      {
        q: "Can I close my position and create a new one?",
        a: "Yes. Close the existing position and create a new one (e.g., change tick range) as long as both assets in the new position are approved collateral and the post-change collateral value maintains loan health.\n\nYou can then choose to keep it in the pool, adjust its parameters, or withdraw it from either Uniswap or Balancer entirely.",
      },
    ],
  },
  {
    name: "Claiming Fees",
    questions: [
      {
        q: "Can I claim trading fees without withdrawing my LP?",
        a: "Yes! Inspired by Revert Finance's implementation, Amm Market allows users to claim trading fees accrued from their LP positions without withdrawing liquidity. This means users can unlock the fees they have already earned while keeping their liquidity active in the pool.\n\nThis is accomplished through the decreaseLiquidityAndCollect function. A user can call this function with params.liquidity set to 0 and params.feeAmount0 and params.feeAmount1 set to type(uint128).max. The function then skips the liquidity removal step and proceeds directly to the collect call on the LP Position Manager.",
      },
      {
        q: "Does claiming fees affect my collateral status?",
        a: "The accrued fees are transferred to the specified recipient (usually the user's own wallet). Crucially, the Spoke performs a loan health check both before and after this action, ensuring that the removal of the fee value (which reduces the NFT's total fullValue) does not push the loan into an unhealthy state.\n\nThis allows users to continuously harvest their yield — a feature that is not possible in protocols that require full withdrawal of the NFT to access fees. This process is fully noncustodial and does not affect the collateralized status of LP shares.",
      },
      {
        q: "How does fee accounting work?",
        a: "Amm Market always caches lastFee0 and lastFee1 for bookkeeping. Fee accounting is included inside the oracle.getValue result which returns fullValue and feeValue. The feeValue is used in health checks and in liquidation calculations to ensure liquidators and Hubs consider accrued but uncollected fees.\n\nAmm Market ensures that users are not forced to choose between keeping their liquidity deployed and accessing accrued fees. With this functionality, liquidity remains productive while previously earned returns are made available at any time.",
      },
    ],
  },
  {
    name: "Collateral Factors",
    questions: [
      {
        q: "What is a Collateral Factor (CF)?",
        a: "Collateral Factor (CF) defines the portion of an asset's USD value a borrower can borrow against. For example, a CF (LTV) of 75% means that $100 of deposited collateral allows the user to borrow up to $75 (before applying liquidation rules, reserve factors, and other risk buffers).\n\nCollateral factor is configured per token and stored as a Q32 value. The effective collateral that counts toward health is the oracle fullValue plus feeValue times the minimum collateral factor of the two tokens in the position.",
      },
      {
        q: "How is collateral value calculated for LP positions?",
        a: "The formula is: collateralValue = (fullValue + feeValue) × collateralFactor / 2^32\n\nIf collateralValue is less than the required debt amount, the loan is not healthy.\n\nInside the spoke, collateral factors are not applied to the Spoke as a whole but to the individual tokens that compose the LP positions. The Spoke maintains a tokenConfigs mapping, where an asset like USDC might have a collateralFactorX32 of 0.85e9 (85%) and ETH might have 0.75e9 (75%).",
      },
      {
        q: "Why use the lower token CF for LP pairs?",
        a: "When a loan is checked for health, the Spoke calculates the minimum collateral factor between the two tokens in the LP pair. For an ETH/USDC position, this would be 75%.\n\nThis token-level granularity is crucial. It means that a stablecoin pair like USDC/USDT, where both tokens have a 90% factor, will have a higher borrowing power than a volatile pair like UNI/ETH, where UNI might only have a 50% factor, dragging the pair's effective factor down to 50%.\n\nThis system naturally prices the risk of the underlying assets, creating a clear incentive for users to provide more stable collateral to access better borrowing terms.",
      },
      {
        q: "What are the single token collateral factors?",
        a: "We assign LTVs for the most popular tokens as a baseline:\n\n• USDC: 85% (Stablecoin)\n• USDT: 85% (Stablecoin)\n• DAI: 80% (Stablecoin, slightly lower)\n• WETH: 77.5% (Blue-chip ETH)\n• WBTC: 70% (Blue-chip BTC)\n• LINK: 65% (Large-cap alt)\n• MKR: 60% (High value but concentrated)\n• AAVE: 55% (Protocol token)\n• UNI: 50% (Governance token)\n• COMP: 50% (Established governance)\n• SUSHI: 35% (Small-cap governance)\n• LDO: 30% (Governance / newer)",
      },
      {
        q: "What are the pool-level risk factors?",
        a: "On top of the lower-token CF, we apply a pool-level risk factor based on the type and volatility of the LP:\n\n• Stablecoin/Stablecoin LPs → 0.90\n• ETH/Stable LPs → 0.85\n• WBTC/Stable LPs → 0.85\n• ETH/WBTC LPs → 0.85\n• ETH/Alt LPs → 0.80\n• Alt/Alt LPs → 0.75\n• High-volatility / small LPs → 0.70\n\nFinal Borrowable LTV = Lower Token CF × Pool-Level Risk",
      },
      {
        q: "Can you show example borrowable calculations?",
        a: "Example A — Single Token (USDC):\n• User deposits $10,000 USDC\n• Target LTV: 85%\n• Borrowable = $10,000 × 85% = $8,500\n\nExample B — ETH/USDC LP:\n• LP Position Value: $963.51\n• Single-token CFs: WETH 77.5%, USDC 85%\n• Lower token CF = 77.5%\n• Pool-Level Risk Factor = 0.85\n• Final Borrowable = 963.51 × 77.5% × 0.85 ≈ $634.88\n\nLiquidation threshold, bonus, and reserve factor are applied separately by the protocol.",
      },
    ],
  },
  {
    name: "Health Factors",
    questions: [
      {
        q: "How is Health Factor calculated?",
        a: "We compute HF_spoke = totalCollateralUsd_spoke / totalDebtUsd_spoke (for that spoke). Bands apply per Spoke.",
      },
      {
        q: "What do the different Health Factor bands mean?",
        a: "• Green (HF ≥ 1.25) — Monitor. No action, normal borrow cost.\n\n• Yellow Warning (1.05 ≤ HF < 1.25) — UI warns borrower. No protocol action yet, but borrower is asked to add liquidity to the bad pool OR add a different approved pool (in the same Spoke) as collateral.\n\n• Yellow Penalty Accrual (1.00 < HF < 1.05) — Penalty kicks in (spoke-level penalty). Penalty rate example: 0.3% per day, accruing pro-rata. This is applied to the borrower's effective borrowing cost. Borrower has a grace period (e.g., up to 3 days) to recover.\n\n• Orange (HF ≤ 1.00) — Soft-unwind trigger. LiquidationAdapter may perform soft-unwind steps to return HF to target (e.g., 1.10). If soft-unwind fails, immediately execute hard liquidation.\n\n• Red (HF ≤ 0.95 or soft unwind failure) — Hard Liquidation. Liquidation actions fully execute to repay debt up to allowed close factors.",
      },
      {
        q: "Why use a penalty-first approach?",
        a: "The penalty mechanism reproduces the LLAMMA ethos of giving markets time to recover while still protecting lenders. Penalty nudges behavior and compensates protocol/spoke for carrying risk. It avoids immediate market churn on transient moves.\n\nIf the market recovers during penalty accrual, the penalty remains as an increased borrow rate (it doesn't disappear), but the user avoids collateral removal.",
      },
      {
        q: "What do the UI states show?",
        a: "• Healthy: Shows total collateral, borrow amount, health factor. Borrow/repay buttons enabled.\n\n• Warning: Banner \"Health Factor Dropping: Top up or repay soon.\" Quick actions: Add liquidity, repay debt.\n\n• At Risk: Banner \"Close to liquidation.\" Countdown or \"monitoring\" mode.\n\n• Liquidatable: Liquidators can trigger. User sees frozen borrowing UI, only repay/top-up allowed.\n\n• Partial Liquidation: UI shows which NFT was liquidated and impact. Position may survive if others healthy.\n\n• Full Liquidation: Dashboard shows \"Position Closed.\" Breakdown: Debt repaid, collateral seized.",
      },
      {
        q: "How does the penalty mechanism work?",
        a: "The penalty mechanism is an essential economic incentive that ensures the stability and efficiency of the liquidation process. When a loan is liquidated, the liquidator receives a discounted amount, with the difference being the penalty.\n\nThis penalty serves two vital purposes:\n1. It acts as a deterrent against malicious actors attempting to manipulate the market to trigger liquidations.\n2. It serves as a buffer for the protocol — the penalty is effectively a fee paid by the undercollateralized borrower, used to offset any potential shortfall in the collateral.\n\nThe size of the penalty is not fixed; it is often dynamic, meaning it can increase if the loan is significantly undercollateralized or if the system is under stress.",
      },
    ],
  },
  {
    name: "Fees & Costs",
    questions: [
      {
        q: "What is the frontend fee?",
        a: "Amm Market charges a single, flat frontend fee of 0.20% on each user action that interacts with our interface.\n\nThis fee is applied at the moment a user submits a transaction through the Amm Market web or mobile app and covers actions such as supplying collateral, borrowing, repaying, withdrawing, and claiming. The fee is not embedded into the lending protocol itself; it is an interface charge that funds the maintenance and improvement of Amm Market's user experience, infrastructure, security, and community initiatives.",
      },
      {
        q: "How is the frontend fee disclosed?",
        a: "Every transaction that incurs a frontend fee will present a clear, line-item disclosure inside the transaction confirmation modal before the user signs. The fee is computed as 0.20% of the fiat value of the asset being transacted.\n\nFor example, a $50,000 borrow initiated through the Amm Market app will show a fee of $100 and the signed transaction will include an on-chain or off-chain transfer that routes that $100 to the Amm Market fee wallet. We surface the fee as both a dollar amount and a percentage so users can instantly understand cost impact.",
      },
      {
        q: "How are collected fees used?",
        a: "Collected frontend fees are routed to the Amm Market treasury and are used exclusively to sustain product operations:\n• Hosting and API costs\n• Oracle subscriptions\n• Ongoing development\n• Audits and security reviews\n• User support\n• Community programs such as incentives or grants\n\nTreasury disbursements are managed under the protocol's governance framework; major allocations are subject to governance proposals and timelocked execution.",
      },
      {
        q: "Can I avoid the frontend fee?",
        a: "Transactions submitted directly to the underlying protocol contracts, or routed through third-party frontends that do not levy the Amm Market interface charge, will not pay the 0.20% fee.\n\nTo preserve choice and composability while protecting the integrity of the Amm Market interface, we publish a public registry of Amm Market-official frontends. Official frontends display a verified badge and a plain language explanation of the fee policy; integrations not on the registry are marked as third-party and may not be able to claim official support.",
      },
    ],
  },
  {
    name: "Risk & Security",
    questions: [
      {
        q: "What are the layers of risk management?",
        a: "Risk management in Amm Market is a multi-layered strategy:\n\n1. Per-loan health factor — enforced after every user action.\n\n2. Spoke-level integration with Aave v4's Risk Premium system — while the Spoke calculates its own internal interest rate for users, the rate it pays to the Hub is influenced by a \"Spoke Risk Premium.\" If the Hub detects that the Spoke's collateral is becoming riskier, it can increase the premium it charges the Spoke, which can then pass this cost on to users.\n\n3. Hard caps (globalDebtLimit and per-token maxDebtCeiling) — these prevent the Spoke from growing too large or becoming overexposed to a single asset.",
      },
      {
        q: "What are the hard caps?",
        a: "• Token-level per-collateral maxDebtCeiling prevents a single token category from concentrating too much drawn debt. For example, a maxDebtCeiling of $100M for ETH collateral means total debt from all loans backed by ETH can never exceed $100M.\n\n• globalDebtLimit prevents the Spoke from amassing too much outstanding borrow across all Hubs.\n\n• Per Hub draw caps are respected by calling getSpokeDrawCap for a Hub asset id.\n\nThe code also rejects token deposits that have zero liquidity and rejects borrow operations when the health check would fail, using conservative rounding.",
      },
      {
        q: "How is Impermanent Loss (IL) handled?",
        a: "The biggest risk isn't just price volatility of the underlying tokens, but the impermanent loss the LP position itself has experienced or might experience. An LP NFT worth $1000 in principal liquidity might only be worth $800 in a \"realized\" sense if IL has eroded $200 of value.\n\nAmm Market risk management prices the tokens but models the position's historical and potential future IL.\n\nMitigation: Tiered LTVs; conservative initial LTVs for volatile pairs; dynamic LTV adjustments using realized volatility metrics.\n\nRisk with narrow ranges: Narrow ranges can make a position effectively single-sided and illiquid.\nMitigation: Require full-range positions for initial collateral acceptance; allow concentrated ranges only after per-pool review and tighter LTVs.",
      },
      {
        q: "How do liquidations protect the system?",
        a: "The liquidation threshold is a pool-specific parameter, allowing the protocol to tailor its response to the unique risk profile of each pool. By implementing these controls at the pool level, Amm Market creates a dynamic risk framework that adapts to the inherent characteristics of the underlying assets.\n\nLiquidation risk for keepers: Liquidator must sell both sides into the debt asset, increasing slippage and complexity.\nMitigation: Specialized liquidation paths, price impact caps, and higher liquidation bonuses to compensate keepers.",
      },
      {
        q: "What security reminders should I follow?",
        a: "• Never share your wallet seed phrase, private key, or password. No Amm Market team member or moderator will ever ask for them.\n\n• Beware impersonators. Scammers will DM you pretending to be support. Only engage through official channels.\n\n• Never trust third-party links that claim \"official\" unless they appear in our official list.\n\n• No official app in app stores. If you see an Amm Market app in an app store, it is almost certainly malicious.\n\n• Check the URL before approving transactions. Small typos in domains are common phishing vectors (e.g., m0mo.finance vs ammmarket.finance).\n\n• Verify contract addresses from our Docs page or from within the app (links to block explorers). Do not rely on links embedded in DMs.",
      },
      {
        q: "How often are valuations updated?",
        a: "Valuations are computed on demand for borrow, repay, withdraw, liquidation, or UI queries. Chainlink is the primary feed, cross-checked with TWAPs. If feeds diverge beyond a tolerance, an extra discount or temporary restriction is applied.\n\nThe oracle layer is manipulation-resilient: it uses Chainlink feeds + TWAP + Aave IOracle, cross-checks with on-chain liquidity depth, and outputs a safe USD price for each token.",
      },
    ],
  },
]

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("Troubleshooting")
  const [searchTerm, setSearchTerm] = useState("")

  // Get questions for the active category or filter by search term
  // When searching, include category name for display
  const searchResults = searchTerm
    ? faqCategories
        .flatMap((category) => category.questions.map((q) => ({ ...q, category: category.name })))
        .filter(
          (q) =>
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    : []
  
  const categoryQuestions = !searchTerm 
    ? faqCategories.find((cat) => cat.name === activeCategory)?.questions || []
    : []

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Hero section - centered */}
          <div className="text-center py-12 lg:py-20 mb-8">
            <h1 className="text-4xl lg:text-5xl font-serif italic text-gray-900 mb-10">
              How can we help?
            </h1>

            {/* Centered search bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-12 pr-10 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-gray-800 placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm("")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category pills for quick selection */}
          <div
            className="mb-8 overflow-x-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#93c5fd transparent",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 6px;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background-color: #93c5fd;
                border-radius: 20px;
              }
            `}</style>
            <div className="flex space-x-2 pb-2">
              {faqCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name)
                    setSearchTerm("")
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 ${
                    activeCategory === category.name && !searchTerm
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-blue-50 text-gray-700 hover:bg-blue-100 hover:shadow-sm"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            {/* Main content */}
            <div>
              {searchTerm ? (
                <>
                  <h2 className="text-2xl font-medium mb-6">Search Results</h2>
                  {searchResults.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="text-gray-500">No results found for &quot;{searchTerm}&quot;</p>
                      <button className="mt-4 text-blue-600 hover:text-blue-800" onClick={() => setSearchTerm("")}>
                        Clear search
                      </button>
                    </div>
                  ) : (
                    <Accordion type="single" collapsible className="w-full">
                      {searchResults.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-b border-gray-200 pt-6 pb-6 last:border-b-0"
                        >
                          <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                            <div className="flex flex-col text-left">
                              <span>{faq.q}</span>
                              <span className="text-sm text-blue-600 mt-1 font-normal">Category: {faq.category}</span>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                            >
                              <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                            >
                              <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm md:text-base text-gray-600 pt-4 whitespace-pre-line leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-medium mb-6">{activeCategory}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {categoryQuestions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b border-gray-200 pt-6 pb-6 last:border-b-0"
                      >
                        <AccordionTrigger className="group text-base md:text-lg font-medium text-gray-900 hover:underline p-0 gap-4 text-left [&>svg.size-4]:hidden">
                          {faq.q}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=open]:hidden"
                          >
                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="shrink-0 text-gray-600 transition-transform duration-200 group-data-[state=closed]:hidden"
                          >
                            <path d="M20 12L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-base text-gray-600 pt-4 whitespace-pre-line leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
