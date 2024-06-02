import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div className='social-style1'>
      <Link to='#'>
        <i className='fab fa-facebook-f list-inline-item' />
      </Link>
      <Link to='#' className='inline-flex justify-center align-center'>
        <i className='fab fa-twitter list-inline-item !text-transparent relative group'>
          <svg style={{ left: 'calc(50% - 7px)', scale: '0.95' }} className='absolute top-[13px]' width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path className='transition-all duration-400 ease group-hover:fill-white fill-[#bebdbd] ' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
          </svg>
        </i>
      </Link>
      <Link to='#'>
        <i className='fab fa-instagram list-inline-item' />
      </Link>
      <Link to='#'>
        <i className='fab fa-linkedin-in list-inline-item' />
      </Link>
    </div>
  )
}

export default Social
