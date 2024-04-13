import PageIntro from '../../../components/common/PageIntroGrey/PageIntroGrey'
import WebLayout from '../../../layout/WebLayout'
import RoomBackgroundImage from '../../../assets/img/rooms/rooms-background.jpg'
import ListingSidebar from '../../../components/Rooms/ListingSidebar/ListingSidebar'
import { RoomProvider } from '../../../context/roomContext'
import { useLocation } from 'react-router-dom'
import useRooms from '../../../hooks/useRooms'
import RoomsSidebar from '../../../components/Rooms/RoomsSidebar/RoomsSidebar'

const Rooms = () => {
  const location = useLocation()
  const { rooms, loading } = useRooms()
  const queryParams = new URLSearchParams(location.search)
  const dataString = queryParams.get('data')
  const urlFilters = JSON.parse(dataString)
  return (
    <RoomProvider roomsData={rooms} defaultFilters={urlFilters} loading={loading}>
      <WebLayout>
        <PageIntro title='Rooms' description='Find the perfect room for your stay' backgroundImage={RoomBackgroundImage} />

        <section className='pt0 pb90 bgc-f7'>
          <div className='container'>
            <div className='row gx-xl-5'>
              <div className='col-lg-4 d-none d-lg-block'>
                <ListingSidebar />
              </div>
              {/* End .col-lg-4 */}

              {/* start mobile filter sidebar */}
              <div
                className='offcanvas offcanvas-start p-0'
                tabIndex='-1'
                id='listingSidebarFilter'
                aria-labelledby='listingSidebarFilterLabel'
              >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title' id='listingSidebarFilterLabel'>
                    Listing Filter
                  </h5>
                  <button
                    type='button'
                    className='btn-close text-reset'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  />
                </div>
                <div className='offcanvas-body p-0'>
                  <ListingSidebar />
                </div>
              </div>
              {/* End mobile filter sidebar */}

              <div className='col-lg-8' id='roomsListing'>
                <RoomsSidebar />
                {/* End .row */}
              </div>
              {/* End .col-lg-8 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      </WebLayout>
    </RoomProvider>
  )
}

export default Rooms
