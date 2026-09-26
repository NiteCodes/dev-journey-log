import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './IntroNode/styles.css'
import App from './IntroNode/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
