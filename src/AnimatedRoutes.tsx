import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { GalleryPage } from './pages/Gallery'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { PricingPage } from './pages/Pricing'
import { ProgramsPage } from './pages/Programs'
import { SchedulePage } from './pages/Schedule'
import { TrainersPage } from './pages/Trainers'

export function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

