import { Link } from 'react-router-dom'
import useMenuLinks from '../../hooks/useMenuLinks'

const MainMenu = () => {
  const [menuLinks] = useMenuLinks()
  return (
    <ul className='ace-responsive-menu'>
      {
        menuLinks.map((page, index) => {
          return (
            <li key={index} className='visible_list dropitem'>
              <Link
                to={page.link}
                className='list-item'
              >
                <span className={page.active ? 'title menuActive' : 'title'}>
                  {page.name}
                </span>
              </Link>
            </li>
          )
        })
      }
      {/* End homeItems */}
    </ul>
  )
}

export default MainMenu
