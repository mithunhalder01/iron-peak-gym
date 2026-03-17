import { ArrowLeft } from 'lucide-react'
import { Backdrop } from '../components/Backdrop'
import { Container } from '../components/Container'
import { LinkButton } from '../components/LinkButton'
import { PageTransition } from '../components/PageTransition'

export function NotFoundPage() {
  return (
    <PageTransition>
      <div className="relative">
        <Backdrop />
        <Container className="py-20">
          <div className="mx-auto max-w-xl rounded-3xl bg-white/4 p-8 text-center ring-1 ring-white/10">
            <div className="text-sm text-white/60">404</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">Page not found</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="mt-6 flex justify-center">
              <LinkButton to="/" variant="secondary" size="lg" className="justify-between">
                <ArrowLeft className="h-4 w-4" />
                Back home
              </LinkButton>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  )
}

