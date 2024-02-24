import React from 'react'
import ReactDOMClient from 'react-dom/client'

import { enableMSW } from './api/mocks/index.ts'
import { App } from './app.tsx'

const root = document.getElementById('root') as Element

enableMSW().then(() => {
  ReactDOMClient.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
