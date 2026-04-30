import { ExternalLink } from "lucide-react"

export const earlyAdoptersOpenSeaHref =
  "https://opensea.io/assets/ethereum/0xa7206d878c5c3871826dfdb42191c49b1d11f466/1"
export const earlyAdoptersContractHref =
  "https://etherscan.io/address/0xa7206d878c5c3871826dfdb42191c49b1d11f466#code"

const saleFacts = [
  { label: "Supply", value: "1,000,000" },
  { label: "Standard", value: "ERC-1155" },
  { label: "Release", value: "Staged" },
] as const

export default function EarlyAdoptersShowcaseSection() {
  return (
    <section className="pt-8 md:pt-12">
      <div className="relative overflow-hidden bg-[#101312] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,18,0.12)_0%,rgba(16,19,18,0.58)_62%,rgba(16,19,18,0.96)_100%)]" />
        <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative min-h-[560px] px-5 py-6 sm:px-8 md:min-h-[620px] md:px-10 md:py-8">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c7a3]">
              Avana NFT Sale
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-white/55 sm:inline">
              World of Kalea
            </span>
          </div>

          <div className="absolute inset-x-5 top-24 h-[300px] sm:inset-x-10 md:top-20 md:h-[380px]">
            <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent_0%,rgba(207,220,211,0.14)_100%)]" />
            <div className="absolute left-[6%] top-[28%] h-36 w-16 rounded-t-full border border-[#d8c7a3]/40 bg-[#151b19]/70" />
            <div className="absolute left-[18%] top-[18%] h-52 w-24 rounded-t-full border border-[#d8c7a3]/45 bg-[#171f1d]/75" />
            <div className="absolute left-[34%] top-[34%] h-32 w-20 rounded-t-full border border-[#d8c7a3]/35 bg-[#151b19]/60" />
            <div className="absolute right-[22%] top-[24%] h-44 w-24 rounded-t-full border border-[#d8c7a3]/45 bg-[#171f1d]/75" />
            <div className="absolute right-[7%] top-[34%] h-32 w-16 rounded-t-full border border-[#d8c7a3]/35 bg-[#151b19]/65" />
            <div className="absolute bottom-8 left-0 right-0 h-px bg-[#d8c7a3]/35" />
            <div className="absolute bottom-0 left-[12%] h-16 w-[76%] rounded-t-[999px] border border-[#d8c7a3]/35 bg-[#d8c7a3]/10" />
            <div className="absolute bottom-10 left-[50%] h-28 w-20 -translate-x-1/2 rounded-t-full border border-[#d8c7a3]/60 bg-[#090c0b]/80" />
            <div className="absolute left-[10%] top-[10%] h-2 w-2 rounded-full bg-[#d8c7a3]/70" />
            <div className="absolute left-[46%] top-[4%] h-1.5 w-1.5 rounded-full bg-white/65" />
            <div className="absolute right-[18%] top-[13%] h-2 w-2 rounded-full bg-[#d8c7a3]/70" />
          </div>

          <div className="relative z-10 flex min-h-[500px] flex-col justify-end md:min-h-[560px]">
            <div className="max-w-[760px] pb-8 md:pb-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d8c7a3]">
                Early Adopters
              </p>
              <h1 className="text-[4rem] font-medium leading-[0.93] tracking-normal text-white sm:text-[5.5rem] md:text-[7rem]">
                Avana Early Adopters
              </h1>
              <p className="mt-6 max-w-[560px] text-base leading-7 text-white/72 md:text-lg md:leading-8">
                A static NFT sale page for the first people entering Kalea, where scarce resources,
                failing magic, and staged collection access become the opening chapter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-8 w-[calc(100%-2rem)] max-w-[1120px] border border-gray-200 bg-white p-4 shadow-[0_18px_54px_rgba(16,19,18,0.08)] md:-mt-10 md:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-3">
            {saleFacts.map((fact) => (
              <div key={fact.label} className="border border-gray-100 bg-gray-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">{fact.label}</p>
                <p className="mt-1 text-lg font-semibold text-[#101312]">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={earlyAdoptersOpenSeaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#252b28]"
            >
              Trade on OpenSea
              <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href={earlyAdoptersContractHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-[#101312] transition-colors hover:bg-gray-50"
            >
              View contract
              <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
