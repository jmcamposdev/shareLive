import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const useAuth = () => {
  // Get the cookie from the browser
  const cookie = Cookies.get('_auth')

  let user = null
  let token = null

  if (cookie) {
    // Decode the JWT token
    const decodedToken = jwtDecode(cookie)
    user = decodedToken
    token = cookie
  }

  return { user, token }
}

export default useAuth
