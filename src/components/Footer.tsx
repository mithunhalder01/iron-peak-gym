import { NavLink } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, PhoneCall } from 'lucide-react'
import { navItems } from '../data/content'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-lg font-semibold tracking-wide">IRONPEAK</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
              Minimal, focused training with structured programming. Strength, conditioning,
              and recovery—all under one roof.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-white/70">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/55" /> Sector 18, Noida
              </div>
              <a className="inline-flex items-center gap-2 hover:text-white" href="tel:+910000000000">
                <PhoneCall className="h-4 w-4 text-white/55" /> +91 00000 00000
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:hello@ironpeak.fit">
                <Mail className="h-4 w-4 text-white/55" /> hello@ironpeak.fit
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="text-sm font-semibold text-white/80">Pages</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-2 py-2 text-sm text-white/65 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-white/80">Follow</div>
            <div className="mt-4 grid gap-2">
              <a
                className="inline-flex items-center justify-between rounded-xl bg-white/6 px-3 py-3 text-sm text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                href="#"
              >
                <span className="inline-flex items-center gap-2">
                  <Instagram className="h-4 w-4" /> Instagram
                </span>
                <span className="text-xs text-white/45">/ironpeak</span>
              </a>
              <a
                className="inline-flex items-center justify-between rounded-xl bg-white/6 px-3 py-3 text-sm text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                href="#"
              >
                <span className="inline-flex items-center gap-2">
                  <Facebook className="h-4 w-4" /> Facebook
                </span>
                <span className="text-xs text-white/45">/ironpeak</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} IRONPEAK Training Club. All rights reserved.</div>
          <div className="inline-flex items-center gap-3">
            <a className="hover:text-white/80" href="#">
              Privacy
            </a>
            <span className="text-white/20">/</span>
            <a className="hover:text-white/80" href="#">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

