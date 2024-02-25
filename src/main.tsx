import React from 'react'
import ReactDOMClient from 'react-dom/client'

import { enableMSW } from './api/mocks/index.ts'
import { App } from './app.tsx'

enableMSW().then(() => {
  ReactDOMClient.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
