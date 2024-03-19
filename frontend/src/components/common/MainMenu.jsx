import useMenuLinks from '../../hooks/useMenuLinks'

const MainMenu = () => {
  const [menuLinks] = useMenuLinks()
  return (
    <ul className='ace-responsive-menu'>
      {
        menuLinks.map((page, index) => {
          return (
            <li key={index} className='visible_list dropitem'>
              <a
                href={page.link}
                className='list-item'
              >
                <span className={page.active ? 'title menuActive' : 'title'}>
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
