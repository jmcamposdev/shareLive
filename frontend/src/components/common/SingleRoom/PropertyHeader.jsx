'use client'

import listings from '../../../data/roomsItems'
import React from 'react'

const PropertyHeader = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  return (
    <>
      <div className='flex-[0_0_auto] w-2/3 px-[12px]'>
        <div className='single-property-content mb30-md'>
          <h2 className='sp-lg-title'>{data.title}</h2>
          <div className='pd-meta mb15 d-md-flex align-items-center'>
            <p className='text fz15 mb-0 pr10 bdrrn-sm'>
              {data.address}
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className='flex-[0_0_auto] w-1/3 px-[12px]'>
        <div className='single-property-content'>
          <div className='property-action lg:text-right'>
            <div className='flex mb-[20px] mb10-md items-center justify-start lg:justify-end'>
              <a className='icon mr-[10px] !leading-[40px]' href='#'>
                <span className='flaticon-like' />
              </a>
              <a className='icon mr-[10px] !leading-[40px]' href='#'>
                <span className='flaticon-share-1' />
              </a>
            </div>
            <h3 className='price mb15'>${data.price} / month</h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  )
}

export default PropertyHeader
