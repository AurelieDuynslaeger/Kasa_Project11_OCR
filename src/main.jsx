import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter';
import './stylesheet/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppRouter/>
  </StrictMode>,
)
