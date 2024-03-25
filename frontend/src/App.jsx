import { Route, Routes } from 'react-router-dom'
import Home from './pages/WebPages/Home/Home'
import AboutUs from './pages/WebPages/AboutUs/AboutUs'
import NotFound from './pages/WebPages/404/404'
import './css/style.css'
import './css/clarityCity.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Rooms from './pages/WebPages/Rooms/Rooms.jsx'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='rooms' element={<Rooms />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
