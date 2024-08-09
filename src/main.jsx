import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './Router/AppRouter.jsx';
import './stylesheet/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppRouter/>
  </StrictMode>,
)
