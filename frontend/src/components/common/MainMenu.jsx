import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MainMenu = () => {
  const pages = [
    {
      name: 'home',
      link: '/'
    },
    {
      name: 'about',
      link: '/about'
    },
    {
      name: 'contact',
      link: '/contact'
    },
    {
      name: 'rooms',
      link: '/rooms'
    }
  ]
  const pathname = useLocation()
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const path = pathname.pathname
    const pathArray = path?.split('/')
    const activeLink = pathArray[1]
    if (activeLink === '') {
      setActiveLink('home')
    } else {
      setActiveLink(activeLink)
    }
  }, [pathname])

  return (
    <ul className='ace-responsive-menu'>
      {
        pages.map((page, index) => {
          return (
            <li key={index} className='visible_list dropitem'>
              <a
                href={page.link}
                className='list-item'
              >
                <span className={activeLink === page.name ? 'title menuActive' : 'title'}>
                  {page.name}
                </span>
              </a>
            </li>
          )
        })
      }
      {/* End homeItems */}
    </ul>
  )
}

export default MainMenu
