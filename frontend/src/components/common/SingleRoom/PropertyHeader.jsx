'use client'

import listings from '../../../data/roomsItems'
import React from 'react'

const PropertyHeader = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  return (
    <>
      <div className='col-lg-8'>
        <div className='single-property-content mb30-md'>
          <h2 className='sp-lg-title'>{data.title}</h2>
          <div className='pd-meta mb15 d-md-flex align-items-center'>
            <p className='text fz15 mb-0 bdrr1 pr10 bdrrn-sm'>
              {data.address}
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className='col-lg-4'>
        <div className='single-property-content'>
          <div className='property-action text-lg-end'>
            <div className='d-flex mb20 mb10-md align-items-center justify-content-lg-end'>
              <a className='icon mr10' href='#'>
                <span className='flaticon-like' />
              </a>
              <a className='icon mr10' href='#'>
                <span className='flaticon-share-1' />
              </a>
            </div>
            <h3 className='price mb-0'>${data.price} / month</h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  )
}

export default PropertyHeader
