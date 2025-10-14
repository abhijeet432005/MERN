import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecipieContext from './context/RecipieContext.jsx'

createRoot(document.getElementById('root')).render(
  <RecipieContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </RecipieContext>
)
