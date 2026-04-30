import type { Metadata } from "next"
import EarlyAdoptersShowcaseSection from "@/components/early-adopters-showcase"
import { InlineFaqSection, type InlineFaqItem } from "@/components/InlineFaqSection"
import { buildOgImagePath, SITE_NAME, siteRoutes } from "@/lib/site"

export const metadata: Metadata = {
  title: `Early Adopters - ${SITE_NAME}`,
  description:
    "Explore Avana's Early Adopters NFT sale: a static ERC-1155 collection page with lore, staged release details, utility notes, and OpenSea and contract links.",
  alternates: {
    canonical: siteRoutes.earlyAdopters,
  },
  openGraph: {
    title: `Early Adopters - ${SITE_NAME}`,
    description:
      "Explore Avana's Early Adopters NFT sale: a static ERC-1155 collection page with lore, staged release details, utility notes, and OpenSea and contract links.",
    url: siteRoutes.earlyAdopters,
    images: [
      {
        url: buildOgImagePath({
          title: `Early Adopters - ${SITE_NAME}`,
          subtitle: "Static NFT sale for the first adopters",
        }),
        alt: `Early Adopters - ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Early Adopters - ${SITE_NAME}`,
    description:
      "Explore Avana's Early Adopters NFT sale: a static ERC-1155 collection page with lore, staged release details, utility notes, and OpenSea and contract links.",
    images: [
      buildOgImagePath({
        title: `Early Adopters - ${SITE_NAME}`,
        subtitle: "Static NFT sale for the first adopters",
      }),
    ],
  },
  keywords: [
    "Early Adopters",
    "NFT sale",
    "ERC-1155",
    "OpenSea",
    "Kalea",
    "Altered",
    "Avana",
  ],
}

const worldNotes = [
  {
    label: "Origin",
    title: "The cataclysm",
    description:
      "Centuries ago, Milankovitch Cycles changed Earth forever and pulled beings from the world of stories and dreams into reality.",
  },
  {
    label: "Haven",
    title: "Kalea holds",
    description:
      "Civilization adapted inside the walls of Kalea, but a larger population and scarcer resources now force the next generation outward.",
  },
  {
    label: "Threat",
    title: "The Siphoning",
    description:
      "Magic, once the strongest tool of the civilized races, has become unpredictable after an unknown effect began draining its reliability.",
  },
] as const

const utilityItems = [
  {
    title: "AI service access",
    description: "Utility for AI-related services, including workflows that depend on model output and compute time.",
  },
  {
    title: "GPU processing",
    description: "A collection identity built around access to heavier machine workloads and infrastructure-backed services.",
  },
  {
    title: "GPT generation",
    description: "A tokenized entry point for generated responses, assisted creation, and future Avana-powered product flows.",
  },
  {
    title: "Kalea points",
    description: "A way to connect Uniswap and Unichain interactions to a richer points layer inside the Kalea story.",
  },
] as const

const factionTypes = [
  "ElberWick",
  "Tamram",
  "RedCove",
  "Galium",
  "Wintersum",
  "lllllllll",
] as const

const factionArchetypes = [
  {
    title: "Axiom",
    theme: "Engineers",
    description:
      "Ingenious builders who assemble permanent engines, Reserve synergies, Resupply lines, and late-game momentum.",
  },
  {
    title: "Bravos",
    theme: "Adventurers",
    description:
      "Fast, direct, and dangerous early. Bravos pressure the board quickly, then dare opponents to answer before the window closes.",
  },
  {
    title: "Lyra",
    theme: "Chaos",
    description:
      "Rule-benders with dice, surprise lines, and region-specific tricks. Lyra wins by making the expected game disappear.",
  },
  {
    title: "Muna",
    theme: "Nature",
    description:
      "Patient protectors who anchor plants, grow them over time, and turn the battlefield into something hard to cross.",
  },
  {
    title: "Ordis",
    theme: "Recruits",
    description:
      "Token makers and bureaucrats who build systems of pressure through recruits, passive effects, and disciplined scaling.",
  },
  {
    title: "Yzmir",
    theme: "Disruption",
    description:
      "Reactive tacticians with removal, draw, sacrifice lines, and forbidden magic that rewards preparation.",
  },
] as const

const releaseItems = [
  "World and collection identity",
  "Utility and points expansion",
  "Faction-linked story fragments",
  "Secret roadmap chapters",
] as const

const earlyAdoptersFaqItems: InlineFaqItem[] = [
  {
    value: "ea-1",
    question: "Is this a live minting flow?",
    answer:
      "No. This is a static sale page with outbound links to OpenSea and the contract on Etherscan. It presents the collection without adding a wallet flow.",
  },
  {
    value: "ea-2",
    question: "How many NFTs are obtainable?",
    answer:
      "The collection is structured around 1,000,000 obtainable NFTs, released in stages rather than all at once.",
  },
  {
    value: "ea-3",
    question: "What is the NFT standard?",
    answer:
      "The collection is presented as ERC-1155, with the contract linked directly from the page for review and verification.",
  },
  {
    value: "ea-4",
    question: "What do the NFTs do?",
    answer:
      "They are positioned as utility tokens for AI-related services, GPU processing time, GPT-driven workflows, and Kalea-linked points on Uniswap and Unichain.",
  },
  {
    value: "ea-5",
    question: "What is the secret roadmap?",
    answer:
      "The page acknowledges a staged release plan, but the later chapters are intentionally withheld. Some discovery is reserved for future holders.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-[720px]">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a642f]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-medium leading-none tracking-normal text-[#101312] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[620px] text-base leading-7 text-[#51605a]">{description}</p>
      ) : null}
    </div>
  )
}

export default function EarlyAdoptersPage() {
  return (
    <main className="bg-white">
      <EarlyAdoptersShowcaseSection />

      <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-6 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {worldNotes.map((note) => (
            <article key={note.title} className="border-t border-[#c9b27a] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a642f]">{note.label}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-normal text-[#101312]">{note.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#51605a]">{note.description}</p>
            </article>
          ))}
        </div>

        <section className="mt-24 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="Collection Utility"
            title="Built as access, not just inventory."
            description="The sale page keeps the mechanics simple, but the collection positioning is broader: AI services, compute, generation, and interaction-linked points."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {utilityItems.map((item) => (
              <article key={item.title} className="border border-gray-200 bg-[#faf9f5] p-5">
                <h3 className="text-xl font-semibold tracking-normal text-[#101312]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#51605a]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionHeading
            eyebrow="Faction Type"
            title="Choose your banner before the world gets bigger."
            description="The first layer is identity: six collectible faction names arranged like field marks from inside Kalea."
          />

          <div className="mt-10 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {factionTypes.map((faction) => (
              <article key={faction} className="bg-white p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-normal text-[#101312]">{faction}</h3>
                  <span className="text-sm tracking-[0.16em] text-[#b8872e]">*****</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#51605a]">
                  A faction marker for early adopters entering the Kalea release cycle.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionHeading
            eyebrow="Archetypes"
            title="Six ways the altered world can play."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {factionArchetypes.map((faction, index) => (
              <article key={faction.title} className="min-h-[260px] border border-gray-200 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a642f]">{faction.theme}</p>
                    <h3 className="mt-3 text-3xl font-medium tracking-normal text-[#101312]">{faction.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-8 text-sm leading-6 text-[#51605a]">{faction.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 bg-[#101312] p-6 text-white md:p-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8c7a3]">Secret Roadmap</p>
              <h2 className="mt-3 text-4xl font-medium leading-none tracking-normal md:text-5xl">
                Some chapters stay behind the walls.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/68">
                The project release is broken into stages. The public page shows the shape of the journey while keeping
                the later reveals closed until future phases.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
              {releaseItems.map((item, index) => (
                <div key={item} className="bg-[#101312] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8c7a3]">
                    Stage {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-24">
          <InlineFaqSection
            eyebrow="Early adopters FAQ"
            eyebrowTone="amber"
            items={earlyAdoptersFaqItems}
          />
        </div>
      </div>
    </main>
  )
}
