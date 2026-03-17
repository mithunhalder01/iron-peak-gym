import { cn } from '../lib/cn'

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: React.ReactNode
  tone?: 'neutral' | 'brand' | 'success'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1',
        tone === 'neutral' && 'bg-white/6 text-white/70 ring-white/10',
        tone === 'brand' && 'bg-[rgba(var(--brand),0.14)] text-[rgb(var(--brand))] ring-[rgba(var(--brand),0.25)]',
        tone === 'success' && 'bg-emerald-500/12 text-emerald-200 ring-emerald-500/20',
        className,
      )}
    >
      {children}
    </span>
  )
}

