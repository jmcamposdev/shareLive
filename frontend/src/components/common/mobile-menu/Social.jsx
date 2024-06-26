import { Link } from 'react-router-dom'

const Social = () => {
  const socialLinks = [
    {
      id: 1,
      iconClass: 'fab fa-facebook-f',
      href: '#'
    },
    {
      id: 2,
      iconClass: 'fab fa-twitter',
      href: '#'
    },
    {
      id: 3,
      iconClass: 'fab fa-instagram',
      href: '#'
    },
    {
      id: 4,
      iconClass: 'fab fa-linkedin-in',
      href: '#'
    }
  ]

  return (
    <>

      <Link className='me-3' to={socialLinks[0].href}>
        <i className={`${socialLinks[0].iconClass} transition-all duration-500 ease dark:text-white dark:hover:text-orangePrimary`} />
      </Link>
      <Link className='me-3 group' to={socialLinks[1].href}>
        <svg width='13' height='12' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path className='transition-all duration-500 ease fill-black group-hover:!fill-orangePrimary dark:fill-white ' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
        </svg>

      </Link>

      <Link className='me-3' to={socialLinks[2].href}>
        <i className={`${socialLinks[2].iconClass} transition-all duration-500 ease dark:text-white dark:hover:text-orangePrimary`} />
      </Link>
      <Link className='me-3' to={socialLinks[3].href}>
        <i className={`${socialLinks[3].iconClass} transition-all duration-500 ease dark:text-white dark:hover:text-orangePrimary`} />
      </Link>

    </>
  )
}

  <i className='fab fa-twitter list-inline-item !text-transparent relative group'>
    <svg style={{ left: 'calc(50% - 7px)', scale: '0.95' }} className='absolute top-[13px]' width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path className='transition-all duration-500 ease group-hover:fill-white fill-[#bebdbd] ' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
    </svg>
  </i>

export default Social
