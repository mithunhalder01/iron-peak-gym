import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// #region agent log
fetch('http://127.0.0.1:7591/ingest/7e3fce9d-dd11-45ef-b44f-134e647a9542',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'80f449'},body:JSON.stringify({sessionId:'80f449',runId:'pre-fix',hypothesisId:'H2',location:'src/main.tsx:7',message:'App bootstrap env + url',data:{href:window.location.href,pathname:window.location.pathname,baseUrl:import.meta.env.BASE_URL},timestamp:Date.now()})}).catch(()=>{});
// #endregion

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
