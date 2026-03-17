import { Backdrop } from '../components/Backdrop'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { galleryImages, schedule } from '../data/content'
import { formatTimeRange } from '../lib/format'

const days: Array<(typeof schedule)[number]['day']> = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
]

export function SchedulePage() {
  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <section className="relative">
          <Container className="py-14 sm:py-20">
            <SectionHeading
              eyebrow="Schedule"
              title="A timetable you can actually follow."
              subtitle="Levels are clear, sessions are structured, and coaches stay consistent. Call or message to reserve your first class."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10">
                  <div className="grid grid-cols-7 gap-px bg-white/10 text-xs text-white/60">
                    {days.map((d) => (
                      <div key={d} className="bg-black/30 px-3 py-3 text-center font-semibold text-white/75">
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
                    {days.map((d) => {
                      const items = schedule
                        .filter((s) => s.day === d)
                        .sort((a, b) => a.time.start.localeCompare(b.time.start))
                      return (
                        <div key={d} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold">{d}</div>
                            <Badge>{items.length} classes</Badge>
                          </div>
                          <div className="mt-3 grid gap-3">
                            {items.map((s) => (
                              <div
                                key={`${s.day}-${s.time.start}-${s.title}`}
                                className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <div className="text-sm font-semibold">{s.title}</div>
                                    <div className="mt-1 text-sm text-white/60">
                                      {formatTimeRange(s.time.start, s.time.end)} · Coach {s.coach}
                                    </div>
                                  </div>
                                  <Badge tone="brand">{s.level}</Badge>
                                </div>
                              </div>
                            ))}
                            {items.length === 0 ? (
                              <div className="rounded-2xl bg-black/30 p-4 text-sm text-white/55 ring-1 ring-white/10">
                                Rest / open gym
                              </div>
                            ) : null}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10">
                  <img
                    src={galleryImages[11]!.src}
                    alt={galleryImages[11]!.alt}
                    className="h-52 w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="text-sm font-semibold">Quick notes</div>
                    <ul className="mt-4 grid gap-2 text-sm text-white/65">
                      <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        Arrive 10 minutes early for warm-up.
                      </li>
                      <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        Beginner-friendly scaling is always available.
                      </li>
                      <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        First-time visit includes a quick movement screen.
                      </li>
                    </ul>
                    <div className="mt-6 rounded-2xl bg-[rgba(var(--brand),0.10)] p-4 ring-1 ring-[rgba(var(--brand),0.22)]">
                      <div className="text-xs text-[rgb(var(--brand))]">Tip</div>
                      <div className="mt-1 text-sm text-white/75">
                        Start with 2–3 sessions/week for the first month, then ramp up.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  )
}

