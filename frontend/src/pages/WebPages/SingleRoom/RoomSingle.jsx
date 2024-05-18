import RoomSingleSkeleton from './RoomSingleSkeleton'
import WebLayout from '../../../layout/WebLayout'
import PropertyGallery from '../../../components/common/SingleRoom/PropertyGallery'
import OverView from '../../../components/common/SingleRoom/Overview'
import Description from '../../../components/common/SingleRoom/Description'
import FeaturesAminites from '../../../components/common/SingleRoom/FeaturesAminites'
import Address from '../../../components/common/SingleRoom/Address'
import WalkScore from '../../../components/common/SingleRoom/WalkScore'
import NearbySimilarProperty from '../../../components/common/SingleRoom/NearbySimilarProperty'
import ScheduleTour from '../../../components/common/SingleRoom/ScheduleTour'
import ContactWithAgent from '../../../components/common/SingleRoom/ContactWithAgent'
import PropertyHeader from '../../../components/common/SingleRoom/PropertyHeader'
import { Link, useParams } from 'react-router-dom'
import { useRoomSingle } from '../../../context/RoomSingleContext'

const RoomSingle = () => {
  const { id } = useParams()
  const { loading, room } = useRoomSingle(id)

  if (loading) return <RoomSingleSkeleton />

  return (
    <WebLayout>
      {/* Property All Single V1 */}
      <section className='pt-[87px] pb-[90px] dark:bg-lightmidnight bg-f7f7f7'>
        <div className='container'>
          <div className='py-12 flex'>
            <Link
              to='/rooms'
              className='flex gap-3 items-center text-base back-link transition duration-300 dark:text-white dark:hover:text-orangePrimary'
            >
              <svg className='transition duration-300 dark:stroke-white' width='31' height='16' viewBox='0 0 31 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 8.6001H31' stroke='inherit' strokeMiterlimit='10' />
                <path d='M8.55556 16.1111L1 8.55556L8.55556 1' stroke='inherid' strokeMiterlimit='10' />
              </svg>
              BACK
            </Link>
          </div>
          <div className='flex flex-wrap mb-[30px]'>
            <PropertyGallery images={room.images} />
          </div>
          {/* End .row */}

          <div className='flex flex-wrap'>
            <PropertyHeader
              title={room.title}
              address={`${room.address}, ${room.city !== room.state ? room.city : ''} ${room.state}, ${room.country}`}
              price={room.price}
            />{' '}
            {/* params.id */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap'>
            <div className='lg:w-2/3 pr-[12px] pl-[12px]'>
              <div className=' ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Overview</h4>
                <div className='flex flex-wrap'>
                  <OverView
                    bedroom={room.bedrooms}
                    bath={room.bathrooms}
                    yearbuilt={room.yearBuilt}
                    garage={room.garageNumber === 0 ? 'Not available' : room.garageNumber}
                    squareMeters={room.squareMeters}
                    propertytype={room.structureType}
                  />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Property Description</h4>
                <Description
                  description={room.description}
                  excerpt={room.excerpt}
                />
                {/* End property description */}
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Features &amp; Amenities</h4>
                <div className='flex flex-wrap '>
                  <FeaturesAminites amenities={room.amenities} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 mt30 dark:text-white'>Address</h4>
                <div className='flex !flex-wrap gap-x-16'>
                  <Address
                    address={room.address}
                    city={room.city}
                    state={room.state}
                    postalCode={room.postalCode}
                    countryCode={room.countryCode}
                    country={room.country}
                    latitude={room.latitude}
                    longitude={room.longitude}
                  />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative dark:bg-midnight'>
                <h4 className='title fz17 mb30 dark:text-white'>Walkscore</h4>
                <div className='flex flex-wrap dark:text-white'>
                  <WalkScore
                    address={room.address}
                    city={room.city}
                    state={room.state}
                    postalCode={room.postalCode}
                    latitude={room.latitude}
                    longitude={room.longitude}
                  />
                </div>
              </div>
              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className='lg:w-1/3 pr-[12px] pl-[12px]'>
              <div className='column'>
                <div className='default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative dark:bg-midnight dark:border-borderColor/20'>
                  <h4 className='form-title dark:text-white !mb-[32px]'>Schedule a tour</h4>
                  <ScheduleTour id={1} />
                  {/* <ContactFormSingle title={'Schedule a tour'} /> */}
                </div>
                {/* End .Schedule a tour */}

                <div className='agen-personal-info default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative mt30 dark:bg-midnight dark:border-borderColor/20'>
                  <div className='widget-wrapper !mb-0'>
                    <h4 className='form-title mb-[32px] dark:text-white'>Get More Information</h4>
                    <ContactWithAgent user={room.user} />
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
export default RoomSingle
