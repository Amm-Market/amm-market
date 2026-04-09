type PlatformPlaceholderPanelProps = {
  title: string
  label?: string
  footer?: string
  chipClassName?: string
}

export default function PlatformPlaceholderPanel({
  title,
  label = "Placeholder Image",
  footer,
  chipClassName = "bg-white/80 text-slate-700",
}: PlatformPlaceholderPanelProps) {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
      <div
        aria-hidden="true"
        className="relative flex h-full w-full overflow-hidden rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_34%),linear-gradient(145deg,#f8fafc_0%,#e2e8f0_42%,#cbd5e1_100%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),transparent_42%,rgba(15,23,42,0.18)_100%)]" />
        <div className="absolute -left-[12%] top-[12%] h-[42%] w-[42%] rounded-full border border-white/55" />
        <div className="absolute right-[-10%] top-[10%] h-[52%] w-[52%] rounded-full border border-slate-500/20" />
        <div className="absolute left-[18%] top-[24%] h-[28%] w-[28%] rounded-full bg-white/45 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.28),transparent_34%,transparent_60%,rgba(255,255,255,0.1)_100%)]" />

        <div className="relative z-20 mt-auto flex w-full flex-col items-start px-4 pb-4 text-left">
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] backdrop-blur-sm ${chipClassName}`}>
            {label}
          </span>
          <span className="mt-3 text-sm font-medium tracking-[-0.02em] text-white/92">
            {title}
          </span>
          {footer ? (
            <span className="mt-1 text-[0.78rem] leading-5 text-white/78">
              {footer}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
