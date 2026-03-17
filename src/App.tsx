import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './AnimatedRoutes'

export default function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return (
    <BrowserRouter basename={base}>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
