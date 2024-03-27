import roomData from '../../../data/roomsItems'
import PageIntro from '../../../components/common/PageIntroGrey/PageIntroGrey'
import WebLayout from '../../../layout/WebLayout'
import RoomBackgroundImage from '../../../assets/img/rooms/rooms-background.png'
import ListingSidebar from '../../../components/Rooms/ListingSidebar/ListingSidebar'
import TopFilterBar from '../../../components/Rooms/TopFilterBar/TopFilterBar'

import RoomListings from '../../../components/Rooms/RoomListings/RoomListings'
import { RoomProvider } from '../../../context/roomContext'

const Rooms = () => {
  return (
    <RoomProvider roomsData={roomData}>
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

              <div className='col-lg-8'>
                <div className='row align-items-center mb20'>
                  <TopFilterBar />
                </div>
                {/* End TopFilterBar */}

                <RoomListings />
                {/* End .row */}

                <div className='row'>
                  {/* <PaginationTwo
                  pageCapacity={6}
                  data={sortedFilteredData}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                /> */}
                </div>
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
