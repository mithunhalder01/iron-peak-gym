import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Backdrop } from '../components/Backdrop'
import { Container } from '../components/Container'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { galleryImages } from '../data/content'
import { cn } from '../lib/cn'

export function GalleryPage() {
  const [active, setActive] = useState<number | null>(null)
  const images = useMemo(() => galleryImages, [])

  const close = () => setActive(null)
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length))

  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <section className="relative">
          <Container className="py-14 sm:py-20">
            <SectionHeading
              eyebrow="Gallery"
              title="A darker, cleaner training space."
              subtitle="Photos that show the vibe: minimal distractions, clear zones, and lighting that stays calm."
            />

            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setActive(idx)}
                  className="mb-4 w-full overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10 transition hover:brightness-110"
                >
                  <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </Container>
        </section>

        <AnimatePresence>
          {active !== null ? (
            <motion.div
              className="fixed inset-0 z-[60] bg-black/75 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <div className="absolute inset-0" />
              <motion.div
                className="absolute inset-x-0 top-6 mx-auto w-[min(1080px,calc(100%-24px))]"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/6 px-4 py-3 ring-1 ring-white/10">
                  <div className="text-sm text-white/70">
                    {active + 1} / {images.length}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={next}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                      aria-label="Next"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button
                      onClick={close}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 overflow-hidden rounded-3xl bg-white/4 ring-1 ring-white/10">
                  <img
                    src={images[active].src}
                    alt={images[active].alt}
                    className={cn('max-h-[76vh] w-full object-cover')}
                  />
                </div>
                <div className="mt-3 text-sm text-white/60">{images[active].alt}</div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}

