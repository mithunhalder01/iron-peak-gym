import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BadgePercent, Menu, PhoneCall, X } from 'lucide-react'
import { navItems } from '../data/content'
import { cn } from '../lib/cn'
import { Container } from './Container'
import { LinkButton } from './LinkButton'

const ANNOUNCE_KEY = 'ironpeak:announceDismissed:session:v1'
const ANNOUNCE_SCROLL_HIDE_Y = 12

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 ring-1 ring-white/12">
        <div className="h-3 w-3 rounded-sm bg-[rgb(var(--brand))] shadow-[0_0_30px_rgba(232,255,0,0.3)]" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">IRONPEAK</div>
        <div className="text-xs text-white/60">Training Club</div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [announceOpen, setAnnounceOpen] = useState(true)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    try {
      const v = window.sessionStorage.getItem(ANNOUNCE_KEY)
      if (v === '1') setAnnounceOpen(false)
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (y > ANNOUNCE_SCROLL_HIDE_Y) {
        setAnnounceOpen(false)
        try {
          window.sessionStorage.setItem(ANNOUNCE_KEY, '1')
        } catch {
          // ignore
        }
      }
      // #region agent log
      fetch('http://127.0.0.1:7591/ingest/7e3fce9d-dd11-45ef-b44f-134e647a9542',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'80f449'},body:JSON.stringify({sessionId:'80f449',runId:'bar-debug',hypothesisId:'H_bar',location:'src/components/Navbar.tsx:onScroll',message:'scroll + announcement state',data:{y,scrolled:y>8,announceWillClose:y>ANNOUNCE_SCROLL_HIDE_Y},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const primaryItems = useMemo(() => navItems.slice(0, 6), [])
  const moreItems = useMemo(() => navItems.slice(6), [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/10 backdrop-blur',
        scrolled ? 'bg-black/55' : 'bg-black/35',
      )}
    >
      <AnimatePresence initial={false}>
        {announceOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(232,255,0,0.92),rgba(0,203,255,0.35))]"
          >
            <Container className="py-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="flex min-w-0 items-center gap-2 text-xs font-semibold text-[rgb(10,10,12)] sm:text-sm">
                  <BadgePercent className="h-4 w-4 shrink-0" />
                  <span className="line-clamp-2 sm:truncate">
                    Limited offer: 20% off Pro plan this week. New members only.
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <NavLink
                    to="/pricing"
                    className="inline-flex h-8 items-center gap-2 rounded-full bg-black/10 px-3 text-xs font-semibold text-[rgb(10,10,12)] ring-1 ring-black/10 transition hover:bg-black/15"
                  >
                    View plans <ArrowRight className="h-4 w-4" />
                  </NavLink>
                  <button
                    type="button"
                    className="grid h-8 w-8 place-items-center rounded-full bg-black/10 text-[rgb(10,10,12)] ring-1 ring-black/10 transition hover:bg-black/15"
                    aria-label="Dismiss announcement"
                    onClick={() => {
                      setAnnounceOpen(false)
                      try {
                        window.sessionStorage.setItem(ANNOUNCE_KEY, '1')
                      } catch {
                        // ignore
                      }
                    }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="shrink-0">
            <Brand />
          </NavLink>

          <nav className="hidden items-center gap-2 lg:flex">
            {primaryItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/6 hover:text-white',
                    isActive && 'bg-white/8 text-white ring-1 ring-white/10',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="h-6 w-px bg-white/10" />
            {moreItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/6 hover:text-white',
                    isActive && 'bg-white/8 text-white ring-1 ring-white/10',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 rounded-xl bg-white/6 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden xl:inline">+91 00000 00000</span>
            </a>
            <LinkButton to="/pricing" variant="primary" size="md">
              Join now <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/6 text-white ring-1 ring-white/10 transition hover:bg-white/10 active:bg-white/12 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 lg:hidden"
          >
            <Container className="py-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'rounded-2xl px-3 py-3 text-sm text-white/75 ring-1 ring-transparent transition hover:bg-white/8 hover:text-white',
                        isActive && 'bg-white/8 text-white ring-white/10',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-2 grid gap-2">
                  <a
                    href="tel:+910000000000"
                    className="inline-flex items-center justify-between gap-2 rounded-xl bg-white/6 px-3 py-3 text-sm text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <PhoneCall className="h-4 w-4" />
                      Call
                    </span>
                    <span className="text-white/50">+91 00000 00000</span>
                  </a>
                  <LinkButton to="/pricing" variant="primary" size="lg" className="justify-between">
                    Join now <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

