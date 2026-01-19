import BlogPostLayout from "@/components/blog-post-layout"

const tableOfContents = [
  { id: "fundamentals", title: "The Fundamentals of DeFi Lending" },
  { id: "traditional", title: "Traditional DeFi Lending Architecture" },
  { id: "limitations", title: "Limitations of Traditional Approaches" },
  { id: "modularity", title: "The Shift Toward Modularity" },
  { id: "dex-mini", title: "Introducing Dex Mini" },
  { id: "price-range", title: "Price Range-Based Collateralization" },
  { id: "credit", title: "Credit Management System" },
  { id: "comparison", title: "Comparison vs. Traditional Protocols" },
  { id: "benefits", title: "Benefits and Potential Risks" },
  { id: "conclusion", title: "Future Implications and Conclusion" },
]

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="How Dex Mini Revolutionizes Lending Through Price Range-Based Collateralization"
      date="March 12, 2025"
      description="Examining a next-generation lending protocol that leverages Uniswap v4 hooks to create an oracleless lending market."
      image="/images/blog/defi-lending-market.png"
      tableOfContents={tableOfContents}
      prevPost={{
        slug: "defi-liquidity-management",
        title: "DeFi Liquidity Management",
        date: "March 8, 2025",
      }}
      nextPost={{
        slug: "defi-leverage-market",
        title: "DeFi Leverage Market",
        date: "March 16, 2025",
      }}
    >
      {/* Abstract */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-10 rounded-r-lg not-prose">
        <p className="text-gray-800 leading-relaxed">
          This blog examines Dex Mini Borrow Hook, a next-generation lending protocol that leverages Uniswap v4 hooks
          to create an oracleless lending market through price range-based collateralization. By comparing Dex Mini to
          established protocols like Compound, Aave, and Fluid, we illustrate how this innovation addresses
          fundamental limitations in DeFi lending while enhancing capital efficiency, risk management, and
          accessibility for both retail and institutional users.
        </p>
      </div>

      <section id="fundamentals" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">The Fundamentals of DeFi Lending</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Decentralized finance lending operates on blockchain networks through smart contracts, eliminating
          traditional financial intermediaries. The typical DeFi lending model involves users (lenders) depositing
          cryptocurrency into lending pools, which are then utilized to provide loans to borrowers. This process is
          automated through self-executing smart contracts that contain the agreement terms directly in code,
          ensuring transparency and trustless operations. Interest rates in these systems are generally determined
          by supply and demand dynamics within the lending pools, offering significantly higher yields than
          traditional financial instruments, albeit with increased risk profiles.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The core components of traditional DeFi lending protocols include smart contracts that automate the
          lending and borrowing process, specific blockchain protocols that establish rules and parameters,
          liquidity providers who supply assets to earn interest, and borrowers who access funds by providing
          collateral. This model has proven successful, with total value locked (TVL) in DeFi lending platforms
          surpassing $50 billion during market peaks in early 2022, compared to nearly zero at the end of 2020.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Research into user motivations has revealed that depositing in DeFi lending pools is primarily driven by
          &quot;search for yield&quot; incentives, particularly among retail investors. Meanwhile, borrowing activities are
          largely motivated by speculative opportunities and, to some extent, governance benefits such as increased
          voting power in project development proposals. This understanding of user behavior provides crucial
          context for evaluating the evolutionary trajectory of DeFi lending protocols.
        </p>
      </section>

      <section id="traditional" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Traditional DeFi Lending Architecture</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The early DeFi lending ecosystem was dominated by monolithic protocols like MakerDAO, Aave, and Compound,
          which operated within pre-defined structures established by their respective core teams. These protocols
          pioneered the DeFi lending space but maintained relatively rigid architectures where all components
          functioned within a unified framework.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold mb-3 text-indigo-800">Compound</h3>
            <p className="text-gray-700 text-sm">
              Utilizes a pooled lending model where users deposit assets into a shared liquidity pool and earn
              interest based on market-driven rates. Features a unique token-based governance system but limits
              customization options and relies heavily on price oracles.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold mb-3 text-indigo-800">Aave</h3>
            <p className="text-gray-700 text-sm">
              Offers lending and borrowing capabilities with innovative features like flash loans, allowing users to
              borrow without collateral for extremely short time periods. Still faces challenges related to oracle
              dependencies and capital inefficiency.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold mb-3 text-indigo-800">Fluid</h3>
            <p className="text-gray-700 text-sm">
              A more recent evolution designed to address liquidity fragmentation with a Liquidity layer and
              Automated Limits that dynamically adjust debt and collateral ceilings. Still operates within
              oracle-dependent models.
            </p>
          </div>
        </div>
      </section>

      <section id="limitations" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Limitations of Traditional Approaches</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Traditional DeFi lending protocols face several fundamental challenges that limit their efficiency and
          resilience:
        </p>

        <div className="space-y-4 mb-6 not-prose">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="font-semibold text-gray-800">Oracle Dependency</h3>
            <p className="text-gray-700">
              Most lending platforms rely on external price oracles to determine collateral values and liquidation
              thresholds. This dependency introduces significant risks, as oracle failures or manipulations can
              trigger erroneous liquidations or create vulnerabilities for exploits.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="font-semibold text-gray-800">Capital Inefficiency</h3>
            <p className="text-gray-700">
              Traditional protocols typically require substantial over-collateralization to mitigate default risks,
              often demanding collateral values significantly exceeding loan amounts. This approach severely
              restricts capital efficiency.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="font-semibold text-gray-800">Fragmented Liquidity</h3>
            <p className="text-gray-700">
              The proliferation of lending protocols has led to liquidity fragmentation across the DeFi ecosystem,
              reducing market efficiency and increasing costs for users.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="font-semibold text-gray-800">Pro-cyclical Volatility</h3>
            <p className="text-gray-700">
              DeFi lending exhibits strong &quot;pro-cyclicality&quot; – a pronounced comovement between cryptocurrency prices
              and lending activities that can amplify market volatility during downturns.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          These limitations have driven innovation in the DeFi lending space, giving rise to more modular and
          customizable approaches that separate core lending functions and provide greater flexibility for users.
        </p>
      </section>

      <section id="modularity" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">The Shift Toward Modularity</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The DeFi lending landscape has recently witnessed a significant shift toward modular architectures that
          unbundle core lending functions. This evolution has spawned a new generation of protocols that create
          isolated markets, minimize governance requirements, separate risk management functions, liberalize oracle
          responsibilities, and remove single dependencies. This approach, colloquially termed &quot;Modular Lending,&quot;
          enables specialized innovation at each layer of the lending stack rather than focusing solely on end-user
          experience.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          A key motivator for this architectural shift is the elimination of single points of failure. DeFi lending
          requires vigilant risk monitoring, as even minor issues can lead to catastrophic losses. While monolithic
          lending protocols have attempted to build redundancy by incorporating multiple oracles, modular lending
          extends this hedging approach across every layer of the lending infrastructure.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ajna represents an early example of this transition, offering a &quot;truly permissionless model of oracleless
          pooled lending with no governance at any level.&quot; Its pools are established with unique pairs of
          quote/collateral assets provided by lenders and borrowers, allowing users to evaluate demand for either
          asset and allocate capital accordingly. Crucially, Ajna&apos;s oracleless design derives from lenders&apos; ability
          to specify their lending terms by determining the collateral amount borrowers must pledge per quote token.
        </p>
      </section>

      <section id="dex-mini" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Introducing Dex Mini: A Revolutionary Approach to DeFi Lending
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Dex Mini represents the next evolutionary stage in DeFi lending, combining the principles of modular
          design with concentrated liquidity and risk-aware lending mechanisms. As a cutting-edge liquidity
          protocol, Dex Mini integrates with Uniswap v4 hooks to create a seamless lending experience that
          eliminates oracle dependencies while maximizing capital efficiency for both retail and institutional
          users.
        </p>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg mb-6 not-prose">
          <h3 className="text-xl font-semibold mb-3 text-indigo-800">Core Innovation</h3>
          <p className="text-gray-700">
            The protocol&apos;s core innovation lies in its price range-based collateralization system, which allows
            users to define custom liquidity ranges for their collateral. This approach mirrors Uniswap v3&apos;s
            concentrated liquidity model but applies it to lending and borrowing activities, enabling unprecedented
            capital efficiency and risk customization.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Dex Mini&apos;s vision encompasses three interconnected components: a money market (lending and borrowing
          protocol), a decentralized exchange (DEX), and an underlying Liquidity Layer that facilitates liquidity
          flow across these protocols and future extensions. The DEX protocol introduces innovative concepts like
          Smart Debt and Smart Collateral, empowering users to utilize their debt and collateral positions as
          liquidity for trading purposes.
        </p>
      </section>

      <section id="price-range" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Price Range-Based Collateralization</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Dex Mini&apos;s architecture leverages Uniswap v4 hooks to create a seamless integration between lending
          protocols and decentralized exchange functionality. The system&apos;s swap execution flow begins when a user
          triggers Router.swap(), which then calls the beforeSwap() hook function for risk assessment. After trade
          execution, the afterSwap() hook performs critical post-trade validations, checking real-time prices via
          poolManager.getSlot0() and enforcing penalties or liquidations if collateral requirements aren&apos;t met.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-6 not-prose">
          <h3 className="text-lg font-semibold mb-3 text-indigo-800">Revolutionary Aspect</h3>
          <p className="text-gray-700 mb-4">
            The most revolutionary aspect of Dex Mini&apos;s architecture is its implementation of custom price ranges
            for collateral. Unlike traditional lending protocols that apply uniform collateralization requirements
            across all assets, Dex Mini allows borrowers to define position-specific parameters:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Price Range:</span> Users set tickLower and tickUpper values (e.g., ±100
              ticks from current market price) to define their risk tolerance.
            </li>
            <li>
              <span className="font-medium">Collateral:</span> They deposit token0 (e.g., ETH) within this defined
              range.
            </li>
            <li>
              <span className="font-medium">Loan Amount:</span> They can borrow token1 (e.g., USDC) up to a
              predetermined maximum loan-to-value (LTV) ratio, typically around 75%.
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          This system creates a dynamic relationship between price movements and position health. When prices remain
          within the specified range, positions remain active and generate fees. If prices move outside the range,
          positions freeze and may trigger penalties or liquidation processes depending on the severity of the
          deviation.
        </p>
      </section>

      <section id="credit" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Credit Management System</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Dex Mini implements a sophisticated credit management system that determines borrowing capacity based on
          supplied collateral. The system calculates a Credit Limit (maximum borrowing power) as the sum of supplied
          assets multiplied by their respective collateral factors. For example, a user supplying $1,000 USDC with a
          60% collateral factor would have a Credit Limit of $600.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6 not-prose">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Continuous Monitoring</h3>
          <p className="text-gray-700">
            The system continuously monitors Remaining Credit (available borrowing capacity), calculated as the
            Credit Limit minus the Borrowed Amount. When a user has borrowed $100 against a $600 Credit Limit, their
            Remaining Credit is $500, representing an 83.3% safety margin. This metric indicates they have utilized
            only 16.7% of their borrowing power.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          This approach provides users with clear visibility into their position health while enabling the protocol
          to manage risk efficiently. When Remaining Credit reaches zero, the position becomes immediately eligible
          for liquidation, triggering the protocol&apos;s liquidation processes.
        </p>
      </section>

      <section id="comparison" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Comparison: Dex Mini Borrow Hook vs. Traditional Lending Protocols
        </h2>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">Oracle Dependency and Price Discovery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-medium text-red-800 mb-2">Traditional Protocols</h4>
            <p className="text-gray-700 text-sm">
              Rely heavily on external price oracles to determine collateral values and trigger liquidations. This
              dependency introduces significant risks, as oracle failures or manipulations can lead to erroneous
              liquidations or create exploitation opportunities.
            </p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h4 className="font-medium text-green-800 mb-2">Dex Mini</h4>
            <p className="text-gray-700 text-sm">
              Eliminates oracle dependency entirely by leveraging Uniswap v4&apos;s price discovery mechanism. By
              allowing lenders to specify price ranges for their collateral, the protocol creates an oracleless
              lending environment where market forces directly determine collateral valuation.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">Capital Efficiency and Liquidation Mechanisms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 className="font-medium text-red-800 mb-2">Traditional Protocols</h4>
            <p className="text-gray-700 text-sm">
              Typically require substantial over-collateralization, with collateral values often exceeding loan
              amounts by 150-200%. This approach reduces systematic risk but severely limits capital utilization.
            </p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h4 className="font-medium text-green-800 mb-2">Dex Mini</h4>
            <p className="text-gray-700 text-sm">
              Revolutionizes capital efficiency through its concentrated liquidity approach to collateralization. By
              allowing users to define custom price ranges for their collateral, the protocol enables significantly
              higher capital utilization when prices remain within specified ranges.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">User Experience and Accessibility</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
            <h4 className="font-medium text-yellow-800 mb-2">Traditional Protocols</h4>
            <p className="text-gray-700 text-sm">
              Have established reputations for user-friendly interfaces that simplify the lending and borrowing
              process. Their straightforward designs have contributed significantly to their adoption, particularly
              among retail users seeking yield opportunities.
            </p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h4 className="font-medium text-green-800 mb-2">Dex Mini</h4>
            <p className="text-gray-700 text-sm">
              Offers a more sophisticated yet still accessible user experience through its intuitive dApp. The
              protocol bridges simplicity with advanced functionality, allowing users to implement complex
              strategies like concentrated liquidity provision and custom price ranges through a streamlined
              interface.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Benefits and Potential Risks of Dex Mini&apos;s Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 not-prose">
          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-2">For Liquidity Providers</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Multi-stream revenue from swap fees, borrowing interest, and liquidation rewards</li>
              <li>Diversified income structure enhances yield potential</li>
              <li>Concentrated liquidity approach enables optimized capital deployment</li>
            </ul>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-2">For Borrowers</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Low-slippage leverage with real-time risk monitoring</li>
              <li>Customizable collateralization parameters</li>
              <li>Smart Debt feature transforms borrowing into potential yield-generating activity</li>
            </ul>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-2">For Market Makers</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Deep, low-slippage liquidity with built-in risk controls</li>
              <li>Adaptive fee structures</li>
              <li>Unique arbitrage opportunities</li>
              <li>Enhanced market stability during volatile conditions</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">Potential Risks and Challenges</h3>
        <div className="space-y-3 mb-4 not-prose">
          <div className="flex items-start">
            <div className="bg-red-100 text-red-800 p-1 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Complexity Risk</h4>
              <p className="text-sm text-gray-700">
                The protocol&apos;s sophisticated architecture introduces higher complexity compared to traditional
                lending platforms, potentially leading to unforeseen interactions between components.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-100 text-red-800 p-1 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Liquidity Fragmentation</h4>
              <p className="text-sm text-gray-700">
                The customizable nature of Dex Mini&apos;s price ranges could potentially lead to liquidity fragmentation
                across numerous small ranges rather than consolidated pools.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-red-100 text-red-800 p-1 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Smart Contract Risk</h4>
              <p className="text-sm text-gray-700">
                The integration with Uniswap v4 hooks introduces additional complexity that could potentially
                contain vulnerabilities, despite rigorous security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Future Implications and Conclusion</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Dex Mini represents a significant evolutionary leap in DeFi lending through its innovative price
          range-based collateralization system and Smart Debt/Smart Collateral primitives. By eliminating oracle
          dependencies and enhancing capital efficiency, the protocol addresses fundamental limitations that have
          constrained traditional lending platforms like Compound, Aave, and Fluid.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The protocol&apos;s integration with Uniswap v4 hooks demonstrates the power of composability in DeFi, creating
          a seamless experience that combines lending, borrowing, and trading functionalities. This integration
          reflects the broader trend toward modular DeFi architectures that separate core functions while
          maintaining interoperability across the ecosystem.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Dex Mini&apos;s approach holds profound implications for the future of DeFi lending. By transforming both debt
          and collateral into productive assets, the protocol fundamentally redefines the economics of lending and
          borrowing in decentralized ecosystems. This transformation could potentially attract significant liquidity
          from traditional finance as users seek more efficient capital deployment opportunities.
        </p>
        <p className="text-gray-700 leading-relaxed">
          While challenges remain, particularly around complexity management and user education, Dex Mini&apos;s
          revolutionary approach to lending demonstrates the continuing innovation potential within decentralized
          finance. By reimagining fundamental aspects of lending and collateralization, the protocol establishes new
          possibilities for capital efficiency, risk management, and financial innovation in the rapidly evolving
          DeFi landscape.
        </p>
      </section>
    </BlogPostLayout>
  )
}
