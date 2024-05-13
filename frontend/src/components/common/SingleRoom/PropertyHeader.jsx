import React from 'react'
import { useRoomSingle } from '../../../context/RoomSingleContext'
import RoomFavouriteIcon from '../Room/RoomFavouriteIcon'

const PropertyHeader = ({ title, address, price }) => {
  const { room } = useRoomSingle()

  return (
    <>
      <div className='flex-[0_0_auto] w-full md:w-2/3 px-[12px] '>
        <div className='single-property-content mb30-md'>
          <h2 className='sp-lg-title dark:text-white'>{title}</h2>
          <div className='pd-meta mb15 d-md-flex align-items-center'>
            <p className='text fz15 mb-0 pr10 bdrrn-sm dark:text-white'>
              {address}
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className='flex-[0_0_auto] w-full md:w-1/3 px-[12px]'>
        <div className='single-property-content'>
          <div className='property-action lg:text-right'>
            <div className='flex mb-[20px] mb10-md items-center justify-start lg:justify-end'>
              <RoomFavouriteIcon roomId={room._id} className='!leading-[40px]' />
              <a className='icon mr-[10px] !leading-[40px] dark:bg-midnight dark:!border-none  dark:hover:!bg-orangePrimary/10' href='#'>
                <span className='flaticon-share-1 dark:text-white' />
              </a>
            </div>
            <h3 className='price mb15 dark:text-white'>${price} / month</h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  )
}

export default PropertyHeader
