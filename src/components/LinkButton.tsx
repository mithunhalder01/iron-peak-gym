import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

export function LinkButton({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: LinkProps & { variant?: Variant; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <Link
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none outline-none transition select-none whitespace-nowrap',
        'focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-11 px-4 text-sm',
        size === 'lg' && 'h-12 px-5 text-base',
        variant === 'primary' &&
          'bg-[rgb(var(--brand))] text-[rgb(10,10,12)] shadow-[0_10px_40px_-18px_rgba(232,255,0,0.35)] [text-shadow:0_1px_0_rgba(255,255,255,0.15)] hover:brightness-95 active:brightness-90',
        variant === 'secondary' &&
          'bg-white/12 text-white/90 hover:bg-white/16 active:bg-white/18 ring-1 ring-white/12',
        variant === 'ghost' && 'bg-transparent text-white hover:bg-white/8 active:bg-white/10',
        className,
      )}
      {...props}
    />
  )
}

