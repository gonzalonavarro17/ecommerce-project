import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CestaProvider } from './context/CestaContext.jsx'
import { ThemeContext } from './context/ThemeContext.jsx'
import { UserContext } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <UserContext>
        <CestaProvider>
          <App />
        </CestaProvider>
      </UserContext>
    </ThemeContext>
  </React.StrictMode>,
)
