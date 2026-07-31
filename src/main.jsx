import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
// Calviq's, StockLyte's and FarmYieldIQ's custom CSS (glass/gradient/etc.
// classes) are imported here — in the always-loaded main bundle — rather
// than inside their own lazy-loaded route components. Those sub-apps are
// code-split via React.lazy(), which makes Vite emit their CSS as a separate
// per-chunk file that only loads once that chunk's JS resolves; importing
// them here instead guarantees the styles are already present before any of
// them paint, with no dependency on chunk-loading order/timing.
import './calviq/calviq.css'
import './stocklyte/stocklyte.css'
import './farmyieldiq/farmyieldiq.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)