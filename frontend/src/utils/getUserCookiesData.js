import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const getUserCookiesData = () => {
  const tokenCookie = Cookies.get('_auth')
  const userCookie = Cookies.get('_auth_state')

  let user = null
  let token = null

  // If the cookie is available, decode the token and check if it is expired
  if (tokenCookie && userCookie) {
    // Decode the token
    const decoded = jwtDecode(tokenCookie)
    const isExpired = decoded?.exp < Date.now() / 1000 // Check if the token is expired

    if (isExpired) {
      Cookies.remove('_auth')
    } else {
      user = JSON.parse(userCookie)
      token = tokenCookie
    }
  }

  return { user, token }
}

export default getUserCookiesData
