import { useLocation } from 'react-router-dom'
import menuLinks from '../data/headerMenus'
import { useEffect, useState } from 'react'

const useMenuLinks = () => {
  const [menu, setMenu] = useState(menuLinks)
  const pathname = useLocation()

  useEffect(() => {
    const path = pathname.pathname
    const pathArray = path?.split('/')
    const activeLink = pathArray[1]
    if (activeLink === '') {
      // Buscar el links del home el cual tiene name a home
      const newMenu = menu.map(link => {
        if (link.name === 'home') {
          link.active = true
        } else {
          link.active = false
        }
        return link
      }
      )
      setMenu(newMenu)
    } else {
      const newMenu = menu.map(link => {
        if (link.name === activeLink) {
          link.active = true
        } else {
          link.active = false
        }
        return link
      }
      )
      setMenu(newMenu)
    }
  }, [pathname])

  return [menuLinks]
}

export default useMenuLinks
