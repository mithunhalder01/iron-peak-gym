import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import { Backdrop } from '../components/Backdrop'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { programs } from '../data/content'
import { cn } from '../lib/cn'

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const
const intensities = ['All', 'Low', 'Medium', 'High'] as const

export function ProgramsPage() {
  const [q, setQ] = useState('')
  const [level, setLevel] = useState<(typeof levels)[number]>('All')
  const [intensity, setIntensity] = useState<(typeof intensities)[number]>('All')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return programs.filter((p) => {
      if (level !== 'All' && p.level !== level) return false
      if (intensity !== 'All' && p.intensity !== intensity) return false
      if (!query) return true
      const hay = `${p.title} ${p.blurb} ${p.tags.join(' ')}`.toLowerCase()
      return hay.includes(query)
    })
  }, [q, level, intensity])

  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <section className="relative">
          <Container className="py-14 sm:py-20">
            <SectionHeading
              eyebrow="Programs"
              title="Training tracks that scale with you."
              subtitle="Pick your focus and we’ll keep the plan simple: quality reps, clear intensity, measurable progress."
            />

            <div className="mt-8 grid gap-4 rounded-3xl bg-white/4 p-5 ring-1 ring-white/10 lg:grid-cols-12">
              <div className="relative lg:col-span-6">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search programs, tags, goals..."
                  className="h-11 w-full rounded-2xl bg-black/40 pl-10 pr-3 text-sm text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none focus:ring-[rgba(var(--brand),0.35)]"
                />
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Filter className="h-4 w-4" /> Level
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {levels.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLevel(l)}
                      className={cn(
                        'rounded-full px-3 py-2 text-xs ring-1 transition',
                        l === level
                          ? 'bg-[rgba(var(--brand),0.14)] text-[rgb(var(--brand))] ring-[rgba(var(--brand),0.25)]'
                          : 'bg-white/6 text-white/65 ring-white/10 hover:bg-white/10 hover:text-white',
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Filter className="h-4 w-4" /> Intensity
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {intensities.map((i) => (
                    <button
                      key={i}
                      onClick={() => setIntensity(i)}
                      className={cn(
                        'rounded-full px-3 py-2 text-xs ring-1 transition',
                        i === intensity
                          ? 'bg-[rgba(var(--brand2),0.12)] text-[rgb(var(--brand2))] ring-[rgba(var(--brand2),0.22)]'
                          : 'bg-white/6 text-white/65 ring-white/10 hover:bg-white/10 hover:text-white',
                      )}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, idx) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="group overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-52 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold">
                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                          <p.icon className="h-5 w-5 text-white/90" />
                        </span>
                        {p.title}
                      </div>
                      <Badge tone="brand">{p.level}</Badge>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{p.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>{p.durationMins} min</Badge>
                      <Badge>{p.intensity}</Badge>
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="mt-10 rounded-3xl bg-white/4 p-8 text-sm text-white/65 ring-1 ring-white/10">
                No programs match your filters. Try clearing search or selecting <b>All</b>.
              </div>
            ) : null}
          </Container>
        </section>
      </div>
    </PageTransition>
  )
}

