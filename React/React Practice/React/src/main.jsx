import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './React.pr/index.css'
import App from './React.pr/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
