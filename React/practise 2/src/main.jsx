import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RecipieContext from './assets/context/RecipieContext.jsx'

createRoot(document.getElementById('root')).render(
  <RecipieContext>
    <BrowserRouter>
    
      <App />
      <ToastContainer position='top-center' />
    </BrowserRouter>

  </RecipieContext>
)
