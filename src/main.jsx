import { createRoot } from 'react-dom/client'
import './assets/global.css'
import AppLayout from './layouts/appLayout/AppLayout'
import { ThemeProvider } from './components/contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AppLayout />
  </ThemeProvider>,
)
