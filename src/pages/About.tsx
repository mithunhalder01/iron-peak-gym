import { motion } from 'framer-motion'
import { Award, Check, Shield, Timer, Users } from 'lucide-react'
import { Container } from '../components/Container'
import { Backdrop } from '../components/Backdrop'
import { Badge } from '../components/Badge'
import { SectionHeading } from '../components/SectionHeading'
import { PageTransition } from '../components/PageTransition'
import { galleryImages } from '../data/content'

export function AboutPage() {
  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />

        <section className="relative overflow-hidden">
          <Container className="py-14 sm:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
                  About IRONPEAK
                </div>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  A gym for people who like{' '}
                  <span className="text-[rgb(var(--brand))]">clarity</span>.
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65">
                  We built IRONPEAK around a simple idea: give people a clean space, strong
                  coaching, and a program that makes consistency easy.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Users, title: 'Coached sessions', desc: 'Small groups with real attention.' },
                    { icon: Timer, title: 'On-time classes', desc: 'Warm-up, main work, finish strong.' },
                    { icon: Shield, title: 'Safe progress', desc: 'Technique-first and scalable intensity.' },
                    { icon: Award, title: 'Track results', desc: 'Assessments that keep you improving.' },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                          <f.icon className="h-5 w-5 text-white/90" />
                        </div>
                        <div className="text-sm font-semibold">{f.title}</div>
                      </div>
                      <div className="mt-3 text-sm text-white/60">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {galleryImages.slice(0, 4).map((img, idx) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      className={[
                        'overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10',
                        idx === 0 ? 'sm:row-span-2' : '',
                      ].join(' ')}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={idx === 0 ? 'h-[420px] w-full object-cover' : 'h-52 w-full object-cover'}
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-black/20">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="What you get"
              title="A clean setup that supports your training."
              subtitle="Equipment, coaching, and spacing designed for smooth flow—no chaos."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: 'Strength zone',
                  points: ['Racks, benches, barbells', 'Dumbbells and cable stations', 'Clear walkways, no crowding'],
                  image: galleryImages[9]!.src,
                },
                {
                  title: 'Conditioning bay',
                  points: ['Rowers, sleds, ropes', 'Interval-friendly layout', 'Timer + playlists that don’t distract'],
                  image: galleryImages[4]!.src,
                },
                {
                  title: 'Recovery corner',
                  points: ['Mobility tools', 'Stretching mats', 'Breathing + cool-down flow'],
                  image: galleryImages[14]!.src,
                },
              ].map((c) => (
                <article
                  key={c.title}
                  className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10"
                >
                  <img src={c.image} alt={c.title} className="h-48 w-full object-cover opacity-90" loading="lazy" />
                  <div className="p-6">
                    <div className="text-sm font-semibold">{c.title}</div>
                    <div className="mt-4 grid gap-2">
                      {c.points.map((p) => (
                        <div key={p} className="flex items-start gap-2 text-sm text-white/70">
                          <Check className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative">
          <Container className="py-14 sm:py-18">
            <SectionHeading
              eyebrow="Values"
              title="Minimal design. Maximum intent."
              subtitle="We cut noise, keep standards high, and build a place people want to return to."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Consistency', desc: 'Simple sessions that fit real schedules.' },
                { title: 'Quality', desc: 'Form-first coaching and thoughtful progressions.' },
                { title: 'Focus', desc: 'A space that feels calm even when training is hard.' },
                { title: 'Community', desc: 'Friendly, serious, and supportive.' },
              ].map((v) => (
                <div key={v.title} className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">{v.title}</div>
                    <Badge tone="brand">IRONPEAK</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{v.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  )
}

