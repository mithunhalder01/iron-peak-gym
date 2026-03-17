import { Backdrop } from '../components/Backdrop'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { trainers } from '../data/content'

export function TrainersPage() {
  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <section className="relative">
          <Container className="py-14 sm:py-20">
            <SectionHeading
              eyebrow="Trainers"
              title="Coaches who care about form and progression."
              subtitle="Each coach has a clear specialty, but everyone follows the same standard: safe, structured training."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {trainers.map((t) => (
                <article
                  key={t.name}
                  className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10"
                >
                  <div className="grid gap-0 sm:grid-cols-5">
                    <div className="sm:col-span-2">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-64 w-full object-cover opacity-90 sm:h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:col-span-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-base font-semibold">{t.name}</div>
                          <div className="mt-1 text-sm text-white/60">{t.role}</div>
                        </div>
                        <Badge tone="brand">{t.experienceYears} yrs</Badge>
                      </div>

                      <div className="mt-5">
                        <div className="text-xs font-semibold text-white/55">Focus</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {t.focus.map((f) => (
                            <Badge key={f}>{f}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-white/70 ring-1 ring-white/10">
                        Ask this coach about: technique cues, scaling options, and a simple weekly plan.
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  )
}

