type PlatformPlaceholderPanelProps = {
  title: string
  label?: string
  footer?: string
  chipClassName?: string
  zone?: "safe" | "warning" | "danger" | "default"
  variant?: number
}

const zoneConfig = {
  safe: {
    bg: "linear-gradient(160deg,#d1fae5 0%,#a7f3d0 40%,#6ee7b7 100%)",
    accent: "#059669",
    bottom: "from-emerald-900/60",
  },
  warning: {
    bg: "linear-gradient(160deg,#fef3c7 0%,#fde68a 40%,#fcd34d 100%)",
    accent: "#d97706",
    bottom: "from-amber-900/60",
  },
  danger: {
    bg: "linear-gradient(160deg,#fecdd3 0%,#fda4af 40%,#fb7185 100%)",
    accent: "#e11d48",
    bottom: "from-rose-900/60",
  },
  default: {
    bg: "linear-gradient(160deg,#f1f5f9 0%,#e2e8f0 42%,#cbd5e1 100%)",
    accent: "#64748b",
    bottom: "from-slate-900/55",
  },
}

/* Unique inner visualization per variant — all with continuous infinite animations */
function PanelVisualization({ variant, zone }: { variant: number; zone: string }) {
  const v = variant % 7

  if (v === 0) {
    /* Financing: Flexible settlement — scrolling ticker + breathing "1" credit line */
    const labels = "Multi-venue \u00b7 Single credit \u00b7 Fast settle \u00b7 Cross-chain"
    const repeated = `${labels} \u00a0\u00a0\u00a0 ${labels} \u00a0\u00a0\u00a0 `
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden">
        {/* Breathing "1" credit line */}
        <div className="pp-breathe flex flex-col items-center gap-1">
          <span className="text-[3.5rem] font-light leading-none tracking-[-0.04em] text-white/80">1</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">credit line</span>
        </div>
        {/* Horizontal scrolling ticker */}
        <div className="w-full overflow-hidden">
          <div className="pp-scroll-h flex w-max whitespace-nowrap">
            <span className="text-[11px] font-medium tracking-wide text-white/45">{repeated}</span>
            <span className="text-[11px] font-medium tracking-wide text-white/45">{repeated}</span>
          </div>
        </div>
      </div>
    )
  }

  if (v === 1) {
    /* Financing: Unlock capital efficiency — pulsing metric bars */
    const metrics = [
      { label: "Leverage", value: "4x", width: "75%" },
      { label: "Short", value: "2x", width: "50%" },
      { label: "Yield", value: "+8.2%", width: "88%" },
    ]
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
        {metrics.map((m, i) => (
          <div key={i} className="w-full max-w-[13rem]">
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/50">{m.label}</span>
              <span className="text-[13px] font-semibold text-white/75">{m.value}</span>
            </div>
            <div className="h-[5px] w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="pp-bar-grow h-full origin-left rounded-full bg-white/50"
                style={{ width: m.width, animationDelay: `${i * 1.5}s` }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (v === 2) {
    /* Financing: Hub-spoke network — orbiting dots + pulsing center glow */
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[140px] w-[140px]">
          {/* Outer orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/20" />
          {/* Inner ring */}
          <div className="absolute inset-[28px] rounded-full border border-white/25" />
          {/* Center glow */}
          <div className="absolute inset-[46px] rounded-full bg-white/20 pp-pulse" />
          <div className="absolute inset-[52px] rounded-full bg-white/30" />
          {/* Orbiting dots container — slow rotation */}
          <div className="pp-orbit absolute inset-0">
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div
                key={deg}
                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-white/55"
                style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-60px)` }}
              />
            ))}
          </div>
          {/* Spoke lines */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <svg key={`l-${deg}`} className="absolute left-1/2 top-1/2 h-[120px] w-[120px]" style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}>
              <line x1="60" y1="60" x2="60" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </svg>
          ))}
        </div>
      </div>
    )
  }

  if (v === 3) {
    /* Financing: Shield/control — breathing shield + scrolling security labels */
    const labels = "Your custody \u00b7 Zero counterparty \u00b7 Full control \u00b7 Self-sovereign"
    const repeated = `${labels} \u00a0\u00a0\u00a0 ${labels} \u00a0\u00a0\u00a0 `
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 overflow-hidden">
        <div className="pp-breathe flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/35 bg-white/20 backdrop-blur-sm">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/80">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Horizontal scrolling security labels */}
        <div className="w-full overflow-hidden">
          <div className="pp-scroll-h flex w-max whitespace-nowrap">
            <span className="text-[10px] font-medium tracking-wide text-white/40">{repeated}</span>
            <span className="text-[10px] font-medium tracking-wide text-white/40">{repeated}</span>
          </div>
        </div>
      </div>
    )
  }

  if (v === 4) {
    /* Safety: Safe Zone — breathing gauge + pulsing metric bars */
    const circumference = 2 * Math.PI * 38
    const safeOffset = circumference - (0.85 * circumference)
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <svg className="pp-breathe h-[100px] w-[100px] -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="5" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="5" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={safeOffset} />
        </svg>
        <div className="mt-3 flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/60 pp-pulse" />
          <span className="text-[11px] font-medium text-white/70">Health: Strong</span>
        </div>
        {/* Metric bars */}
        <div className="mt-4 flex gap-2.5">
          {[{ w: "2.8rem", d: "0s" }, { w: "2rem", d: "2s" }, { w: "1.4rem", d: "4s" }].map((bar, i) => (
            <div key={i} className="h-[4px] rounded-full bg-white/30 pp-bar-grow" style={{ width: bar.w, animationDelay: bar.d }} />
          ))}
        </div>
      </div>
    )
  }

  if (v === 5) {
    /* Safety: Warning Zone — cycling bar widths + pulsing warning */
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
        {[
          { label: "Collateral", delay: "0s" },
          { label: "Buffer", delay: "1.5s" },
          { label: "Margin", delay: "3s" },
        ].map((item, i) => (
          <div key={i} className="w-full max-w-[14rem] rounded-xl border border-white/25 bg-white/15 px-4 py-2.5 backdrop-blur-sm">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/45">{item.label}</span>
            </div>
            <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="pp-warn-bar h-full origin-left rounded-full bg-white/55"
                style={{ animationDelay: item.delay }}
              />
            </div>
          </div>
        ))}
        <div className="pp-pulse mt-1 flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
          <span className="text-[10px] font-medium text-white/65">Approaching limit</span>
        </div>
      </div>
    )
  }

  /* v === 6: Liquidation — scrolling decline chart + fast pulsing label + declining bars */
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden px-6">
      {/* Continuously scrolling chart line */}
      <div className="w-full max-w-[16rem] overflow-hidden">
        <div className="pp-scroll-h" style={{ width: "200%" }}>
          <svg className="inline-block h-[60px] w-[50%]" viewBox="0 0 300 60" preserveAspectRatio="none">
            <path d="M0,8 C30,10 60,14 100,22 S180,42 230,50 L300,56" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0,18 C40,20 90,26 150,36 S230,50 300,54" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4" />
          </svg>
          <svg className="inline-block h-[60px] w-[50%]" viewBox="0 0 300 60" preserveAspectRatio="none">
            <path d="M0,8 C30,10 60,14 100,22 S180,42 230,50 L300,56" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0,18 C40,20 90,26 150,36 S230,50 300,54" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 4" />
          </svg>
        </div>
      </div>
      {/* Declining metric bars */}
      <div className="flex gap-2">
        {[{ w: "2.4rem", d: "0s" }, { w: "1.6rem", d: "1.5s" }, { w: "0.8rem", d: "3s" }].map((bar, i) => (
          <div key={i} className="h-[4px] rounded-full bg-white/30 pp-bar-grow" style={{ width: bar.w, animationDelay: bar.d }} />
        ))}
      </div>
      {/* Fast pulsing label */}
      <div className="pp-pulse-fast flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 backdrop-blur-sm">
        <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
        <span className="text-[10px] font-medium text-white/70">Below threshold</span>
      </div>
    </div>
  )
}

export default function PlatformPlaceholderPanel({
  title,
  label,
  footer,
  chipClassName = "bg-white/80 text-slate-700",
  zone = "default",
  variant = 0,
}: PlatformPlaceholderPanelProps) {
  const config = zoneConfig[zone]

  return (
    <div className="group/panel relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/30 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div
        aria-hidden="true"
        className="relative flex h-full w-full overflow-hidden rounded-[inherit]"
        style={{ background: `radial-gradient(circle at top left,rgba(255,255,255,0.9),transparent 40%),${config.bg}` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_42%,rgba(0,0,0,0.05)_100%)]" />

        <PanelVisualization variant={variant} zone={zone} />

        <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${config.bottom} to-transparent`} />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.25),transparent_34%,transparent_60%,rgba(255,255,255,0.08)_100%)]" />

        <div className="relative z-20 mt-auto flex w-full flex-col items-start px-4 pb-4 text-left">
          {label && (
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] backdrop-blur-sm ${chipClassName}`}>
              {label}
            </span>
          )}
          <span className={`${label ? 'mt-3' : ''} text-sm font-medium tracking-[-0.02em] text-white/92`}>
            {title}
          </span>
          {footer ? (
            <span className="mt-1 text-[0.78rem] leading-5 text-white/78">
              {footer}
            </span>
          ) : null}
        </div>
      </div>
      <style>{`
        .pp-scroll-h { animation: ppsh 14s linear infinite; }
        @keyframes ppsh { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .pp-pulse { animation: pppu 2s ease-in-out infinite; }
        @keyframes pppu { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(1.6); } }
        .pp-pulse-fast { animation: pppu 1.2s ease-in-out infinite; }
        .pp-breathe { animation: ppbr 3s ease-in-out infinite; }
        @keyframes ppbr { 0%,100% { opacity:1; } 50% { opacity:0.7; } }
        .pp-bar-grow { animation: ppbg 12s ease-in-out infinite; }
        @keyframes ppbg { 0%,45% { transform:scaleX(0.6); } 50%,95% { transform:scaleX(1); } 100% { transform:scaleX(0.6); } }
        .pp-orbit { animation: pporb 20s linear infinite; }
        @keyframes pporb { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        .pp-warn-bar { animation: ppwb 6s ease-in-out infinite; width:80%; }
        @keyframes ppwb { 0%,100% { transform:scaleX(1); } 50% { transform:scaleX(0.3); } }
      `}</style>
    </div>
  )
}
