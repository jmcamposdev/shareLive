import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { LocationProvider } from './context/LocationContext.jsx'
import ScrollToTop from './features/ScrollToTop.js'
import AuthProvider from 'react-auth-kit/AuthProvider'
import createStore from 'react-auth-kit/createStore'
import AuthUserProvider from './context/AuthContext.jsx'

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider
    store={store}
  >
    <AuthUserProvider>
      <LocationProvider>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </LocationProvider>
    </AuthUserProvider>
  </AuthProvider>
)
