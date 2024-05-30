import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const UserSocials = ({ user }) => {
  const socials = useMemo(() => user.socials)
  return (
    <div className='agent-social'>
      {user.socials.facebook
        ? (
          <Link className='mr20' to={socials.facebook}>
            <i className='fab fa-facebook-f dark:text-white' />
          </Link>)
        : ''}
      {user.socials.instagram
        ? (
          <Link className='mr20' to={socials.instagram}>
            <i className='fab fa-instagram dark:text-white' />
          </Link>)
        : ''}
      {user.socials.linkedin
        ? (
          <Link className='mr20' to={socials.linkedin}>
            <i className='fab fa-linkedin-in dark:text-white' />
          </Link>)
        : ''}
      {user.socials.twitter
        ? (
          <Link className='mr20 group' to={socials.twitter}>
            <i className='fab fa-twitter text-transparent relative'>
              <svg className='absolute top-[6px] left-0' width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path style={{ transition: 'all ease 0.4s' }} className='dark:group-hover:fill-white fill-black dark:fill-white group-hover:fill-orangePrimary' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
              </svg>
            </i>
          </Link>
          )
        : ''}

    </div>
  )
}

export default UserSocials
