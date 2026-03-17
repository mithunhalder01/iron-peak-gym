import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { Container } from '../components/Container'
import { Backdrop } from '../components/Backdrop'
import { LinkButton } from '../components/LinkButton'
import { Badge } from '../components/Badge'
import { SectionHeading } from '../components/SectionHeading'
import {
  featureBullets,
  galleryImages,
  pricing,
  programs,
  schedule,
  testimonials,
  trainers,
} from '../data/content'
import { PageTransition } from '../components/PageTransition'
import { formatTimeRange } from '../lib/format'

export function HomePage() {
  const heroImg = galleryImages[8]?.src ?? galleryImages[0]!.src

  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />

        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <img
              src={heroImg}
              alt=""
              className="h-full w-full object-cover opacity-[0.14] blur-[2px] scale-[1.03]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[rgb(var(--bg))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(232,255,0,0.14),transparent_45%)]" />
          </div>
          <Container className="relative py-12 sm:py-16 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
                    <Sparkles className="h-4 w-4 text-[rgb(var(--brand))]" />
                    Minimal gym. Max results.
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
                    <Star className="h-4 w-4 text-[rgb(var(--brand2))]" />
                    4.9 rating
                  </div>
                </div>

                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                  Train with structure.
                  <span className="text-[rgb(var(--brand))]"> Look sharp.</span>
                  <span className="text-white/90"> Move better.</span>
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                  IRONPEAK is a dark, focused training club built for consistency. Strength,
                  conditioning, and recovery—with coaching that keeps you progressing.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <LinkButton to="/pricing" variant="primary" size="lg" className="w-full justify-between sm:w-auto">
                    View membership <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton to="/programs" variant="secondary" size="lg" className="w-full justify-between sm:w-auto">
                    Explore programs <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <ShieldCheck className="h-4 w-4 text-white/75" /> Coach-led
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <BadgeCheck className="h-4 w-4 text-white/75" /> Progress tracking
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <Clock className="h-4 w-4 text-white/75" /> On-time sessions
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {featureBullets.map((f) => (
                    <div
                      key={f.title}
                      className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/7"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 ring-1 ring-white/10">
                        <f.icon className="h-5 w-5 text-white/85" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{f.title}</div>
                        <div className="mt-1 text-sm text-white/60">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-white/4 p-5 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-white/50">Trusted by</div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {['APEX STUDIO', 'METRO RUN', 'NOVA WELL', 'FORGE LAB'].map((b) => (
                      <div
                        key={b}
                        className="grid h-10 place-items-center rounded-2xl bg-black/30 text-xs font-semibold tracking-wide text-white/60 ring-1 ring-white/10"
                      >
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_120px_-40px_rgba(0,0,0,0.8)]">
                  <img
                    src={heroImg}
                    alt="Gym training"
                    className="aspect-[4/5] w-full object-cover opacity-90 sm:aspect-[16/15] lg:aspect-[6/5]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { label: 'Open', value: '6AM – 11PM' },
                        { label: 'Groups', value: '10–14 max' },
                        { label: 'Programs', value: '6 core tracks' },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10 backdrop-blur"
                        >
                          <div className="text-xs text-white/60">{s.label}</div>
                          <div className="mt-1 text-sm font-semibold">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2 text-white/75">
                        <Clock className="h-4 w-4" /> Next class
                      </span>
                      <Badge tone="brand">Today</Badge>
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                      {schedule[0]?.title ?? 'HIIT Engine'}
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      {formatTimeRange(schedule[0]?.time.start ?? '06:30', schedule[0]?.time.end ?? '07:20')} ·{' '}
                      Coach {schedule[0]?.coach ?? 'Sara'}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2 text-white/75">
                        <MapPin className="h-4 w-4" /> Location
                      </span>
                      <Badge>Parking</Badge>
                    </div>
                    <div className="mt-2 text-sm font-semibold">Sector 18, Noida</div>
                    <div className="mt-1 text-sm text-white/60">2 min from Metro · Safe late hours</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-black/20">
          <Container className="py-10">
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { label: 'Members trained', value: '2,400+' },
                { label: 'Avg. attendance', value: '4.1 / week' },
                { label: 'Coach ratio', value: '1 : 12' },
                { label: 'Programs', value: 'Strength + Engine' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-2 text-lg font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="Programs"
              title="Pick a track. We’ll build the engine."
              subtitle="Six core programs designed for progression. Clean programming, clear intensity, and sessions that start on time."
              right={<LinkButton to="/programs" variant="secondary">See all <ArrowRight className="h-4 w-4" /></LinkButton>}
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {programs.slice(0, 6).map((p, idx) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group relative overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 ring-1 ring-white/12">
                          <p.icon className="h-5 w-5 text-white" />
                        </span>
                        {p.title}
                      </div>
                      <Badge tone="brand">{p.level}</Badge>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{p.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>{p.durationMins} min</Badge>
                      <Badge>{p.intensity}</Badge>
                      {p.tags.slice(0, 2).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-black/20">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="Schedule"
              title="Weekly timetable, zero confusion."
              subtitle="Fast check-in, clear levels, and consistent coaching. Book your week in minutes."
              right={<LinkButton to="/schedule" variant="secondary">Full schedule <ArrowRight className="h-4 w-4" /></LinkButton>}
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10 lg:col-span-2">
                <div className="grid gap-3 sm:grid-cols-2">
                  {schedule.slice(0, 8).map((s) => (
                    <div
                      key={`${s.day}-${s.time.start}-${s.title}`}
                      className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold">{s.title}</div>
                        <Badge tone="neutral">
                          {s.day} · {formatTimeRange(s.time.start, s.time.end)}
                        </Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/60">
                        <Badge tone="brand">{s.level}</Badge>
                        <span>Coach {s.coach}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold">How booking works</div>
                <div className="mt-4 grid gap-3">
                  {[
                    'Choose your track (Strength / HIIT / Recovery).',
                    'Pick a time slot and level.',
                    'Arrive 10 minutes early for warm-up.',
                    'Track PRs monthly with your coach.',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-lg bg-[rgba(var(--brand),0.16)] text-[rgb(var(--brand))] ring-1 ring-[rgba(var(--brand),0.25)]">
                        <Check className="h-4 w-4" />
                      </span>
                      <div className="text-sm text-white/70">{t}</div>
                    </div>
                  ))}
                </div>
                <LinkButton to="/contact" variant="primary" size="lg" className="mt-6 w-full justify-between">
                  Book a visit <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="Coaches"
              title="Real coaching, not just counting reps."
              subtitle="Small group classes with genuine attention to technique, pacing, and progression."
              right={<LinkButton to="/trainers" variant="secondary">Meet trainers <ArrowRight className="h-4 w-4" /></LinkButton>}
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trainers.map((t, idx) => (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-56 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="mt-1 text-sm text-white/60">{t.role}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {t.focus.slice(0, 3).map((f) => (
                        <Badge key={f}>{f}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-black/20">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple plans. Strong defaults."
              subtitle="Pick a plan based on your schedule. Upgrade anytime as you get consistent."
              right={<LinkButton to="/pricing" variant="secondary">All plans <ArrowRight className="h-4 w-4" /></LinkButton>}
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {pricing.map((p) => (
                <article
                  key={p.name}
                  className={[
                    'relative overflow-hidden rounded-3xl bg-white/4 p-6 ring-1 ring-white/10',
                    p.highlight ? 'ring-[rgba(var(--brand),0.35)] shadow-[0_0_0_1px_rgba(232,255,0,0.20)]' : '',
                  ].join(' ')}
                >
                  {p.highlight ? (
                    <div className="absolute right-5 top-5">
                      <Badge tone="brand">Most popular</Badge>
                    </div>
                  ) : null}
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                      <p.icon className="h-5 w-5 text-white/90" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="text-sm text-white/60">Monthly</div>
                    </div>
                  </div>
                  <div className="mt-5 text-3xl font-semibold tracking-tight">
                    ₹{p.priceMonthly}
                    <span className="text-sm font-medium text-white/55"> / mo</span>
                  </div>
                  <div className="mt-5 grid gap-2">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-white/70">
                        <Check className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <LinkButton
                    to="/contact"
                    variant={p.highlight ? 'primary' : 'secondary'}
                    size="lg"
                    className="mt-6 w-full justify-between"
                  >
                    Start {p.name} <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="Testimonials"
              title="Built for consistency."
              subtitle="Minimal friction, maximum adherence. Our members keep showing up."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/10"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-sm text-white/60">{t.title}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/70">“{t.quote}”</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10 bg-black/30">
          <Container className="py-14 sm:py-18">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Want a <span className="text-[rgb(var(--brand))]">free</span> gym walkthrough?
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                  See the space, meet a coach, and get a simple plan for your first two weeks.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <LinkButton to="/contact" variant="primary" size="lg" className="justify-between">
                    Book a visit <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton to="/gallery" variant="secondary" size="lg" className="justify-between">
                    View gallery <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {galleryImages.slice(0, 9).map((g) => (
                    <div
                      key={g.src}
                      className="overflow-hidden rounded-2xl bg-white/4 ring-1 ring-white/10"
                    >
                      <img
                        src={g.src}
                        alt={g.alt}
                        className="h-28 w-full object-cover opacity-90 transition duration-500 hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  )
}

