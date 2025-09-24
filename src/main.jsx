import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import './assets/variables.css'
import AppLayout from './layouts/appLayout/AppLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
