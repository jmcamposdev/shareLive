import { Route, Routes } from 'react-router-dom'
import Home from './pages/WebPages/Home/Home'
import AboutUs from './pages/WebPages/AboutUs/AboutUs'
import Contact from './pages/WebPages/Contact/Contact'
import Single from './pages/WebPages/SingleRoom/Single'
import Login from './pages/WebPages/Login/Login.jsx'
import Register from './pages/WebPages/Register/Register.jsx'
import NotFound from './pages/WebPages/404/404'
import './css/style.css'
import './css/clarityCity.css'
import UserSingle from './pages/WebPages/UserSingle/UserSingle.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Rooms from './pages/WebPages/Rooms/Rooms.jsx'
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome.jsx'
import DshSearchRooms from './pages/Dashboard/DshSearchRooms/DshSearchRooms.jsx'
import usersItems from './data/usersItems.js'
import RoomItems from './data/roomsItems.js'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import AuthProvider from './context/AuthContext.jsx'
import RequireAuth from './features/auth/RequireAuth.jsx'
import { ROLES } from './constants/roles.constants.js'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Add event listener de body class change to know if the dark mode is activated
  useEffect(() => {
    const body = document.querySelector('body')

    body.addEventListener('change', () => {
      setIsDarkMode(body.classList.contains('dark'))
    })

    return () => {
      body.removeEventListener('change', () => {
        setIsDarkMode(body.classList.contains('dark'))
      })
    }
  }
    , [])
  return (
    <AuthProvider>
      <Routes>
        {/* Routes for the web pages */}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path='contact' element={<Contact />} />

        {/* Single room */}
        <Route path='single' element={<Single />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        {/* Routes for Dinamic pages like user, room */}
        <Route path='user' element={<UserSingle user={usersItems[0]} rooms={RoomItems} />} />

        {/* Routes for the Dashboard */}
        <Route element={<RequireAuth allowedRoles={[ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER]} />}>
          <Route path='dashboard' element={<DashboardHome />} />
          <Route path='dashboard/rooms' element={<DshSearchRooms />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? 'dark' : 'light'}
        stacked
      />
    </AuthProvider>
  )
}

export default App;
