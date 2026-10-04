import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './src/useEffect/Index.jsx'
import App from './useEffect/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
export default App