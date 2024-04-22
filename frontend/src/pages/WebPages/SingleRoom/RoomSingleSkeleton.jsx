import React, { useState, useEffect } from 'react'
import WebLayout from '../../../layout/WebLayout'
import { Link } from 'react-router-dom'

const RoomSingleSkeleton = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (

    <WebLayout>
      {/* Property All Single V1 */}
      <section className='pt-[87px] pb-[90px] bg-[#F7F7F7]'>
        <div
          className={`hidden lg:block absolute h-[87px] w-full top-0 ${!isScrolled ? 'bg-midnight' : 'bg-transparent'
              }`}
        />
        <div className='container'>
          <div className='py-12 flex'>
            <Link
              to='/rooms'
              className='flex gap-3 items-center text-base back-link transition duration-300'
            >
              <svg className='transition duration-300' width='31' height='16' viewBox='0 0 31 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 8.6001H31' stroke='inherit' strokeMiterlimit='10' />
                <path d='M8.55556 16.1111L1 8.55556L8.55556 1' stroke='inherid' strokeMiterlimit='10' />
              </svg>
              BACK
            </Link>
          </div>
          <div className='flex flex-wrap mb-[30px]'>
            {/* <PropertyGallery images={room.images} /> */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap'>
            {/* <PropertyHeader
              title={room.title}
              address={`${room.address}, ${room.city !== room.state ? room.city : ''} ${room.state}, ${room.country}`}
              price={room.price}
            />{' '}
            {/* params.id */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap'>
            <div className='lg:w-2/3 pr-[12px] pl-[12px]'>
              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                <h4 className='title fz17 mb30'>Overview</h4>
                <div className='flex flex-wrap '>
                  {/* <OverView
                    bedroom={room.bedrooms}
                    bath={room.bathrooms}
                    yearbuilt={room.yearBuilt}
                    garage={room.garageNumber === 0 ? 'Not available' : room.garageNumber}
                    squareMeters={room.squareMeters}
                    propertytype={room.structureType}
            /> */}
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                <h4 className='title fz17 mb30'>Property Description</h4>
                {/* <Description
                  description={room.description}
                  excerpt={room.excerpt}
                />
                {/* End property description */}
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                <h4 className='title fz17 mb30'>Features &amp; Amenities</h4>
                <div className='flex flex-wrap '>
                  {/* <FeaturesAminites amenities={room.amenities} /> */}
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                <h4 className='title fz17 mb30 mt30'>Address</h4>
                <div className='flex flex-wrap gap-x-16'>
                  {/* <Address
                    address={room.address}
                    city={room.city}
                    state={room.state}
                    postalCode={room.postalCode}
                    countryCode={room.countryCode}
                    country={room.country}
                    latitude={room.latitude}
                    longitude={room.longitude}
        /> */}
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                <h4 className='title fz17 mb30'>Walkscore</h4>
                <div className='flex flex-wrap '>
                  {/* <WalkScore
                    address={room.address}
                    city={room.city}
                    state={room.state}
                    postalCode={room.postalCode}
                    latitude={room.latitude}
                    longitude={room.longitude}
    /> */}
                </div>
              </div>
              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className='lg:w-1/3 pr-[12px] pl-[12px]'>
              <div className='column'>
                <div className='default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative'>
                  <h4 className='form-title mb-8'>Schedule a tour</h4>
                  {/* <ScheduleTour id={1} /> */}
                  {/* <ContactFormSingle title={'Schedule a tour'} /> */}
                </div>
                {/* End .Schedule a tour */}

                <div className='agen-personal-info default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative mt30'>
                  <div className='widget-wrapper !mb-0'>
                    <h4 className='form-title mb-8'>Get More Information</h4>
                    {/* <ContactWithAgent user={room.user} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          {/* End .row */}

          {/* <NearbySimilarProperty /> */}
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}
    </WebLayout>
  )
}

export default RoomSingleSkeleton
