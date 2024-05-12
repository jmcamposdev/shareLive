import { useLocation, Link } from 'react-router-dom'
import sidebarLinksAdmin from '../../../../data/dashboard/sidebarLinksDashboard.admin.jsx'
import sidebarLinksUser from '../../../../data/dashboard/sidebarLinksDashboard.user.jsx'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { isAdministrator } from '../../../../utils/user.utils.js'

const SidebarDashboard = () => {
  const user = useAuthUser()
  const isAdmin = isAdministrator(user.roles)
  const { pathname } = useLocation()

  const comparePaths = (path, href) => {
    // Eliminar la última "/" del primer string si la tiene
    if (path.endsWith('/')) {
      path = path.slice(0, -1)
    }

    // Comparar los strings y devolver true si son iguales
    return path === href
  }

  const sidebarLinks = isAdmin ? sidebarLinksAdmin : sidebarLinksUser

  return (
    <div className='dashboard__sidebar d-none d-lg-block dark:bg-midnight'>
      <div className='dashboard_sidebar_list'>
        {sidebarLinks.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading dark:text-white ${
                sectionIndex === 0 ? 'mt-0' : 'mt30'
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className='sidebar_list_item'>
                <Link
                  to={item.href}
                  className={`items-center dark:!text-white  ${comparePaths(pathname, item.href) ? '-is-active dark:!bg-lightmidnight' : 'dark:hover:!bg-lightmidnight '} ${item.className}`}
                >
                  {item.icon}
                  <span className='dark:!text-white'>{item.text}</span>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarDashboard
