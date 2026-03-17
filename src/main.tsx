import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// GitHub Pages SPA redirect support:
// If we landed on /?p=/some/route, restore the route.
const params = new URLSearchParams(window.location.search)
const p = params.get('p')
if (p) {
  params.delete('p')
  const rest = params.toString()
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const nextPath = `${base}${p}` + (rest ? (p.includes('?') ? '&' : '?') + rest : '')
  window.history.replaceState(null, '', nextPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
