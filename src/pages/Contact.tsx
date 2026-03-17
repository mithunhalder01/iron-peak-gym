import { useState } from 'react'
import { Mail, MapPin, PhoneCall, Send, Timer } from 'lucide-react'
import { Backdrop } from '../components/Backdrop'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { galleryImages } from '../data/content'

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', phone: '', goal: '', message: '' })

  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <section className="relative">
          <Container className="py-14 sm:py-20">
            <SectionHeading
              eyebrow="Contact"
              title="Book a visit. Meet a coach."
              subtitle="Tell us your goal and preferred time. We’ll suggest the best first class and plan."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10">
                  <img
                    src={galleryImages[5]!.src}
                    alt={galleryImages[5]!.alt}
                    className="h-52 w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="grid gap-3 text-sm text-white/75">
                      <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        <MapPin className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
                        <div>
                          <div className="font-semibold">Address</div>
                          <div className="mt-1 text-white/60">Sector 18, Noida (near Metro)</div>
                        </div>
                      </div>
                      <a
                        href="tel:+910000000000"
                        className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                      >
                        <PhoneCall className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="mt-1 text-white/60">+91 00000 00000</div>
                        </div>
                      </a>
                      <a
                        href="mailto:hello@ironpeak.fit"
                        className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                      >
                        <Mail className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="mt-1 text-white/60">hello@ironpeak.fit</div>
                        </div>
                      </a>
                      <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        <Timer className="mt-0.5 h-4 w-4 text-[rgb(var(--brand))]" />
                        <div>
                          <div className="font-semibold">Hours</div>
                          <div className="mt-1 text-white/60">Mon–Sun · 6:00 AM – 11:00 PM</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-[rgba(var(--brand2),0.10)] p-4 ring-1 ring-[rgba(var(--brand2),0.18)]">
                      <div className="text-xs text-[rgb(var(--brand2))]">Quick tip</div>
                      <div className="mt-1 text-sm text-white/70">
                        If you’re new, choose <b>Beginner</b> sessions for the first 2 weeks—then we scale up.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setStatus('sent')
                    setTimeout(() => setStatus('idle'), 4500)
                    setForm({ name: '', phone: '', goal: '', message: '' })
                  }}
                  className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">Send a message</div>
                    {status === 'sent' ? <Badge tone="success">Sent</Badge> : <Badge>Fast reply</Badge>}
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm text-white/70">
                      Name
                      <input
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        required
                        className="h-11 rounded-2xl bg-black/40 px-3 text-sm text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none focus:ring-[rgba(var(--brand),0.35)]"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-white/70">
                      Phone
                      <input
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        required
                        className="h-11 rounded-2xl bg-black/40 px-3 text-sm text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none focus:ring-[rgba(var(--brand),0.35)]"
                        placeholder="+91..."
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-white/70 sm:col-span-2">
                      Goal
                      <input
                        value={form.goal}
                        onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                        className="h-11 rounded-2xl bg-black/40 px-3 text-sm text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none focus:ring-[rgba(var(--brand),0.35)]"
                        placeholder="Fat loss, strength, stamina, mobility..."
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-white/70 sm:col-span-2">
                      Message
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="min-h-[140px] resize-y rounded-2xl bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/35 ring-1 ring-white/10 outline-none focus:ring-[rgba(var(--brand),0.35)]"
                        placeholder="Preferred time, experience level, injuries (if any)..."
                      />
                    </label>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-white/45">
                      By submitting, you agree to be contacted for booking.
                    </div>
                    <Button type="submit" variant="primary" className="justify-between sm:w-auto">
                      Send <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {galleryImages.slice(12, 15).map((img) => (
                    <div key={img.src} className="overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10">
                      <img src={img.src} alt={img.alt} className="h-32 w-full object-cover opacity-90" loading="lazy" />
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

