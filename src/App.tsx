import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './AnimatedRoutes'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
