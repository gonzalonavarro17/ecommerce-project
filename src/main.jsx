import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContext } from './context/CartContext.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'
import { AuthContext } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <AuthContext>
        <CartContext>
          <App />
        </CartContext>
      </AuthContext>
    </ThemeContext>
  </React.StrictMode>,
)
