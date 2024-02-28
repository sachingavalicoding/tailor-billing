import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppwriteProvider } from './context/AppwriteProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppwriteProvider>
    <App />
    </AppwriteProvider>
  </React.StrictMode>,
)
