// import Image from 'next/image'
import { Link } from 'react-router-dom'
import React from 'react'

const ContactWithAgent = () => {
  return (
    <>
      <div className='agent-single d-sm-flex align-items-center pb25'>
        <div className='single-img mb30-sm'>
          {/* <Image
            width={90}
            height={90}
            className='w90'
            src='/images/team/agent-3.png'
            alt='avatar'
          /> */}
        </div>
        <div className='single-contant ml20 ml0-xs'>
          <h6 className='title mb-1'>Arlene McCoy</h6>
          <div className='agent-meta mb10 d-md-flex align-items-center'>
            <a className='text fz15' href='#'>
              <i className='flaticon-call pe-1' />
              (920) 012-3421
            </a>
          </div>
          {/* REVIEWS */}
        </div>
      </div>
      {/* End agent-single */}

      <div className='d-grid'>
        <Link href='/agent-single/3' className='ud-btn btn-white2'>
          Contact Agent
          <i className='fal fa-arrow-right-long' />
        </Link>
      </div>
    </>
  )
}

export default ContactWithAgent
