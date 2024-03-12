import { createRoot } from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

createRoot(document.getElementById('app')).render(
  <>
    <App />
  </>
)
