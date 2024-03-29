import { useLocation, Link } from 'react-router-dom'
import sidebarLinksAdmin from '../../../../data/dashboard/sidebarLinksDashboard.admin.jsx'

const SidebarDashboard = () => {
  const { pathname } = useLocation()

  return (
    <div className='dashboard__sidebar d-none d-lg-block'>
      <div className='dashboard_sidebar_list'>
        {sidebarLinksAdmin.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? 'mt-0' : 'mt30'
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className='sidebar_list_item'>
                <Link
                  href={item.href}
                  className={`items-center   ${pathname === item.href ? '-is-active' : ''} ${item.className}`}
                >
                  {item.icon}
                  <span>{item.text}</span>
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
