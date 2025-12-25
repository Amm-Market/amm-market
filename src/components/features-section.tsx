import {
  Database,
  Fingerprint,
  BadgeIcon as IdCard,
  BarChartIcon as ChartBarIncreasing,
  ChevronDown,
} from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className="pb-16 md:pb-32 max-w-5xl mx-auto">
      {/* Add the new section here */}
      <div className="grid gap-6 md:grid-cols-2 md:gap-12 mb-12">
        <h2 className="text-4xl font-medium">The Lyra ecosystem brings together our models, products and platforms.</h2>
        <div className="space-y-6">
          <p>
            Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products to the
            APIs and platforms helping developers and businesses innovate.
          </p>
        </div>
      </div>

      <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
        <div data-slot="accordion" className="w-full" data-orientation="vertical">
          <div
            data-state="open"
            data-orientation="vertical"
            data-slot="accordion-item"
            className="border-b last:border-b-0"
          >
            <h3 data-orientation="vertical" data-state="open" className="flex">
              <button
                type="button"
                aria-expanded="true"
                data-state="open"
                aria-disabled="true"
                data-orientation="vertical"
                data-slot="accordion-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
              >
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Database Visualization
                </div>
                <ChevronDown className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 rotate-180" />
              </button>
            </h3>
            <div
              data-state="open"
              role="region"
              data-orientation="vertical"
              data-slot="accordion-content"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            >
              <div className="pt-0 pb-4">
                Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms
                helping developers and businesses innovate.
              </div>
            </div>
          </div>

          <div
            data-state="closed"
            data-orientation="vertical"
            data-slot="accordion-item"
            className="border-b last:border-b-0"
          >
            <h3 data-orientation="vertical" data-state="closed" className="flex">
              <button
                type="button"
                aria-expanded="false"
                data-state="closed"
                data-orientation="vertical"
                data-slot="accordion-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
              >
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Advanced Authentication
                </div>
                <ChevronDown className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              </button>
            </h3>
            <div
              data-state="closed"
              hidden
              role="region"
              data-orientation="vertical"
              data-slot="accordion-content"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            ></div>
          </div>

          <div
            data-state="closed"
            data-orientation="vertical"
            data-slot="accordion-item"
            className="border-b last:border-b-0"
          >
            <h3 data-orientation="vertical" data-state="closed" className="flex">
              <button
                type="button"
                aria-expanded="false"
                data-state="closed"
                data-orientation="vertical"
                data-slot="accordion-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
              >
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Identity Management
                </div>
                <ChevronDown className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              </button>
            </h3>
            <div
              data-state="closed"
              hidden
              role="region"
              data-orientation="vertical"
              data-slot="accordion-content"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            ></div>
          </div>

          <div
            data-state="closed"
            data-orientation="vertical"
            data-slot="accordion-item"
            className="border-b last:border-b-0"
          >
            <h3 data-orientation="vertical" data-state="closed" className="flex">
              <button
                type="button"
                aria-expanded="false"
                data-state="closed"
                data-orientation="vertical"
                data-slot="accordion-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
              >
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasing className="size-4" />
                  Analytics Dashboard
                </div>
                <ChevronDown className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              </button>
            </h3>
            <div
              data-state="closed"
              hidden
              role="region"
              data-orientation="vertical"
              data-slot="accordion-content"
              className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            ></div>
          </div>
        </div>

        <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
          <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
          <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
            <div
              className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
              style={{ opacity: 1, transform: "none" }}
            >
              <img
                alt="Database visualization"
                loading="lazy"
                width="1207"
                height="929"
                className="size-full object-cover object-left-top dark:mix-blend-lighten"
                style={{ color: "transparent" }}
                src="/placeholder.svg?height=929&width=1207"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
            <div
              className="absolute aspect-square bg-gradient-to-l from-transparent via-yellow-700 to-transparent dark:via-white/50"
              style={{
                width: "200px",
                offsetPath: "rect(0px auto auto 0px round 200px)",
                "--color-from": "#ffaa40",
                "--color-to": "#9c40ff",
                offsetDistance: "55.85%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

