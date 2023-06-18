import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Strict mode does additional checks for potential errors, but only runs in development
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
