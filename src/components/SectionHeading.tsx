import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  right,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  className?: string
  right?: ReactNode
}) {
  return (
    <div className={cn('flex items-end justify-between gap-6', className)}>
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand2))]" />
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-pretty text-sm leading-relaxed text-white/65 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      {right ? <div className="hidden sm:block">{right}</div> : null}
    </div>
  )
}

