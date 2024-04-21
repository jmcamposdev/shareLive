import { Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import useMenuLinks from '../../../hooks/useMenuLinks'

const ProSidebarContent = () => {
  const [menuLinks] = useMenuLinks()
  return (
    <Sidebar width='100%' backgroundColor='#fff' className='my-custom-class'>
      <Menu>
        {menuLinks.map((link, index) => (
          <MenuItem
            key={index}
            component={
              <Link
                className={`${link.active ? 'active' : 'dark:!text-white'} dark:bg-midnight hover:dark:!bg-lightmidnight`}
                to={link.link}
              />
          }
          >
            {link.name}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  )
}

export default ProSidebarContent
