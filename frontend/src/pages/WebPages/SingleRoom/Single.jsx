import WebLayout from '../../../layout/WebLayout'

import PropertyGallery from '../../../components/common/SingleRoom/PropertyGallery'

const Single = ({ params }) => {
  return (
    <>
      <WebLayout>

        {/* Property All Single V1 */}
        <section className='pt60 pb90 bgc-f7'>
          <div className='container mx-auto sm:px-4'>
            <div className='flex flex-wrap  mb30 mt30'>
              <PropertyGallery id={params.id} />
            </div>
            {/* End .row */}

            <div className='flex flex-wrap '>
              {/* <PropertyHeader id={params.id} /> */}
            </div>
            {/* End .row */}

            <div className='flex flex-wrap  wrap'>
              <div className='lg:w-2/3 pr-4 pl-4'>
                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Overview</h4>
                  <div className='flex flex-wrap '>
                    {/* <OverView /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Property Description</h4>
                  {/* <ProperytyDescriptions /> */}
                  {/* End property description */}

                  <h4 className='title fz17 mb30 mt50'>Property Details</h4>
                  <div className='flex flex-wrap '>
                    {/* <PropertyDetails /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30 mt30'>Address</h4>
                  <div className='flex flex-wrap '>
                    {/* <PropertyAddress /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Features &amp; Amenities</h4>
                  <div className='flex flex-wrap '>
                    {/* <PropertyFeaturesAminites /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Energy Class</h4>
                  <div className='flex flex-wrap '>
                    {/* <EnergyClass /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Floor Plans</h4>
                  <div className='flex flex-wrap '>
                    <div className='md:w-full pr-4 pl-4'>
                      <div className='accordion-style1 style2'>
                        {/* <FloorPlans /> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 '>
                  <h4 className='title fz17 mb30'>Video</h4>
                  <div className='flex flex-wrap '>
                    {/* <PropertyVideo /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>360° Virtual Tour</h4>
                  <div className='flex flex-wrap '>
                    {/* <VirtualTour360 /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>What&apos;s Nearby?</h4>
                  <div className='flex flex-wrap '>
                    {/* <PropertyNearby /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Walkscore</h4>
                  <div className='flex flex-wrap '>
                    <div className='md:w-full pr-4 pl-4'>
                      <h4 className='fw400 mb20'>
                        10425 Tabor St Los Angeles CA 90034 USA
                      </h4>
                      {/* <WalkScore /> */}
                    </div>
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Mortgage Calculator</h4>
                  <div className='flex flex-wrap '>
                    {/* <MortgageCalculator /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <div className='flex flex-wrap '>
                    {/* <PropertyViews /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Home Value</h4>
                  <div className='flex flex-wrap '>
                    {/* <HomeValueChart /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Get More Information</h4>
                  {/* <InfoWithForm /> */}
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <div className='flex flex-wrap '>
                    {/* <AllComments /> */}
                    {/* <AllReviews /> */}
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative'>
                  <h4 className='title fz17 mb30'>Leave A Review</h4>
                  <div className='flex flex-wrap '>
                    {/* <ReviewBoxForm /> */}
                  </div>
                </div>
                {/* End .ps-widget */}
              </div>
              {/* End .col-8 */}

              <div className='lg:w-1/3 pr-4 pl-4'>
                <div className='column'>
                  <div className='default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative'>
                    <h4 className='form-title mb5'>Schedule a tour</h4>
                    <p className='text'>Choose your preferred day</p>
                    {/* <ScheduleTour /> */}
                  </div>
                  {/* End .Schedule a tour */}

                  <div className='agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30'>
                    <div className='widget-wrapper mb-0'>
                      <h6 className='title fz17 mb30'>Get More Information</h6>
                      {/* <ContactWithAgent /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className='flex flex-wrap  mt30 items-center justify-between'>
              <div className='col-auto'>
                <div className='main-title'>
                  <h2 className='title'>Discover Our Featured Listings</h2>
                  <p className='paragraph'>
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
              {/* End header */}

              <div className='col-auto mb30'>
                <div className='flex flex-wrap  items-center justify-center'>
                  <div className='col-auto'>
                    <button className='featured-prev__active swiper_button'>
                      <i className='far fa-arrow-left-long' />
                    </button>
                  </div>
                  {/* End prev */}

                  <div className='col-auto'>
                    <div className='flex list-reset pl-0 rounded swiper--pagination featured-pagination__active' />
                  </div>
                  {/* End pagination */}

                  <div className='col-auto'>
                    <button className='featured-next__active swiper_button'>
                      <i className='far fa-arrow-right-long' />
                    </button>
                  </div>
                  {/* End Next */}
                </div>
                {/* End .col for navigation and pagination */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .row */}

            <div className='flex flex-wrap '>
              <div className='lg:w-full pr-4 pl-4'>
                <div className='property-city-slider'>
                  {/* <NearbySimilarProperty /> */}
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End Property All Single V1  */}
      </WebLayout>
    </>
  )
}
export default Single
