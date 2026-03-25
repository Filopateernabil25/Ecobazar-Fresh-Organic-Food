import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ApiProducts from './services/ApiProducts.jsx'
import ApiCategories from './services/ApiCategories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApiCategories>
        <ApiProducts>
          <App />
        </ApiProducts>
      </ApiCategories>
    </BrowserRouter>
  </StrictMode>,
)
