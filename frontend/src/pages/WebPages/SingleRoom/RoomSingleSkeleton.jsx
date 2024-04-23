import React, { useState, useEffect } from 'react'

import LoadingSkeleton from '../../../components/common/Loading/LoadingSkeleton'

import WebLayout from '../../../layout/WebLayout'
import PropertyGallerySkeleton from '../../../components/common/SingleRoom/PropertyGallerySkeleton'// si si
import OverViewSkeleton from '../../../components/common/SingleRoom/OverViewSkeleton'// si si
import DescriptionSkeleton from '../../../components/common/SingleRoom/DescriptionSkeleton'// si si
import FeaturesAminitesSkeleton from '../../../components/common/SingleRoom/FeaturesAminitesSkeleton'// si si
import AddressSkeleton from '../../../components/common/SingleRoom/AddressSkeleton'// si si
import WalkScoreSkeleton from '../../../components/common/SingleRoom/WalkScoreSkeleton'// si si
import NearbySimilarProperty from '../../../components/common/SingleRoom/NearbySimilarProperty'
import ScheduleTourSkeleton from '../../../components/common/SingleRoom/ScheduleTourSkeleton'// si si
import ContactWithAgentSkeleton from '../../../components/common/SingleRoom/ContactWithAgentSkeleton'// si si
import PropertyHeaderSkeleton from '../../../components/common/SingleRoom/PropertyHeaderSkeleton' // si
import { Link, useParams } from 'react-router-dom'
import { useRoomSingle } from '../../../context/RoomSingleContext'
// import ContactFormSingle from '../../../components/common/contactFormSingle/ContactFormSingle'

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
      <section className='pt-[87px] pb-[90px] bg-[#F7F7F7] dark:bg-lightmidnight'>
        <div
          className={`hidden lg:block absolute h-[87px] w-full top-0 ${!isScrolled ? 'bg-midnight' : 'bg-transparent'
              }`}
        />
        <div className='container'>
          <div className='py-12 flex'>
            <div
              className='flex gap-3 items-center text-base back-link transition duration-300 dark:text-white dark:hover:text-orangePrimary'
            >
              <LoadingSkeleton className='w-20 h-6' />
            </div>
          </div>
          <div className='flex flex-wrap mb-[30px]'>
            <PropertyGallerySkeleton />
          </div>
          {/* End .row */}

          <div className='flex flex-wrap'>
            <PropertyHeaderSkeleton />{' '}
            {/* params.id */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap'>
            <div className='lg:w-2/3 pr-[12px] pl-[12px]'>
              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Overview</h4>
                <div className='flex flex-wrap '>
                  <OverViewSkeleton />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Property Description</h4>
                <DescriptionSkeleton />
                {/* End property description */}
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Features &amp; Amenities</h4>
                <div className='flex flex-wrap '>
                  <FeaturesAminitesSkeleton />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 mt30 dark:text-white'>Address</h4>
                <div className='flex flex-wrap gap-x-16'>
                  <AddressSkeleton />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Walkscore</h4>
                <div className='flex flex-wrap dark:text-white'>
                  <WalkScoreSkeleton />
                </div>
              </div>
              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className='lg:w-1/3 pr-[12px] pl-[12px]'>
              <div className='column'>
                <div className='default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative dark:bg-midnight dark:border-borderColor/20'>
                  <h4 className='form-title mb-8 dark:text-white'>Schedule a tour</h4>
                  <ScheduleTourSkeleton />
                  {/* <ContactFormSingle title={'Schedule a tour'} /> */}
                </div>
                {/* End .Schedule a tour */}

                <div className='agen-personal-info default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative mt30 dark:bg-midnight dark:border-borderColor/20'>
                  <div className='widget-wrapper !mb-0'>
                    <h4 className='form-title mb-8 dark:text-white'>Get More Information</h4>
                    <ContactWithAgentSkeleton />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          {/* End .row */}

          <NearbySimilarProperty />
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}
    </WebLayout>
  )
}
export default RoomSingleSkeleton
