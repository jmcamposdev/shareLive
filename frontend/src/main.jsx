import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { LocationProvider } from './context/LocationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LocationProvider>
    <Router>
      <App />
    </Router>
  </LocationProvider>
)
