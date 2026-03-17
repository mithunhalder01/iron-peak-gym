import { Check, HelpCircle } from 'lucide-react'
import { Backdrop } from '../components/Backdrop'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { LinkButton } from '../components/LinkButton'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { galleryImages, pricing } from '../data/content'

export function PricingPage() {
  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <section className="relative">
          <Container className="py-14 sm:py-20">
            <SectionHeading
              eyebrow="Pricing"
              title="Pick a plan that matches your consistency."
              subtitle="No complicated add-ons. Start simple, then upgrade when your schedule stabilizes."
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
                      <div className="text-sm text-white/60">Monthly membership</div>
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
                    Start {p.name}
                    <span aria-hidden className="text-base">
                      →
                    </span>
                  </LinkButton>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10">
                  <img
                    src={galleryImages[16]!.src}
                    alt={galleryImages[16]!.alt}
                    className="h-56 w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="text-sm font-semibold">Included in every plan</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { title: 'Clean programming', desc: 'Structured sessions that scale by level.' },
                        { title: 'Form standards', desc: 'Coaches cue technique, not just volume.' },
                        { title: 'Progress tracking', desc: 'Simple assessments and PR targets.' },
                        { title: 'Community vibe', desc: 'Focused environment, no chaos.' },
                      ].map((f) => (
                        <div key={f.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                          <div className="text-sm font-semibold">{f.title}</div>
                          <div className="mt-2 text-sm text-white/60">{f.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <HelpCircle className="h-4 w-4 text-[rgb(var(--brand))]" />
                    FAQ
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      {
                        q: 'Do you have a trial?',
                        a: 'Yes—book a free walkthrough and we’ll suggest a first class based on your level.',
                      },
                      {
                        q: 'Can beginners join?',
                        a: 'Absolutely. Every session includes scaling and technique cues.',
                      },
                      {
                        q: 'Do plans auto-renew?',
                        a: 'No forced renewals. Renew monthly when you’re ready.',
                      },
                      {
                        q: 'Is personal training available?',
                        a: 'Elite includes 1:1 coaching; extra PT slots can be added anytime.',
                      },
                    ].map((f) => (
                      <div key={f.q} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                        <div className="text-sm font-semibold">{f.q}</div>
                        <div className="mt-2 text-sm text-white/60">{f.a}</div>
                      </div>
                    ))}
                  </div>
                  <LinkButton to="/contact" variant="primary" size="lg" className="mt-6 w-full justify-between">
                    Talk to us
                    <span aria-hidden className="text-base">
                      →
                    </span>
                  </LinkButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  )
}

