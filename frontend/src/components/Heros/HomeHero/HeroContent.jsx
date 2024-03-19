const HeroContent = () => {
  return (
    <div className='advance-style2 mt140 mt80-md mb60 mx-auto' data-aos='fade-up'>
      <div className='tab-content'>
        <div
          className='active tab-pane'
        >
          <div className='advance-content-style2'>
            <div className='flex md:flex-wrap  items-center justify-start md:justify-center'>
              <div className='basis-auto grow pr-4'>
                <div className='advance-search-field relative text-start bdrr1 bdrrn-sm'>
                  <form className='form-search relative'>
                    <div className='box-search'>
                      <span className='icon flaticon-home-1' />
                      <input
                        className='form-control'
                        type='text'
                        name='search'
                        placeholder='Find your dream room'
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className='w-fit pr-4 pl-4'>
                <div className='flex items-center justify-center md:justify-end md:mt-0'>
                  <button
                    className='advance-search-btn flex justify-center items-center'
                    type='button'
                    data-bs-toggle='modal'
                    data-bs-target='#advanceSeachModal'
                  >
                    <span className='flaticon-settings flex' /> Advanced
                  </button>
                  <button
                    className='advance-search-icon ud-btn btn-thm ms-4 !flex !justify-center !items-center'
                    type='button'
                  >
                    <span className='flaticon-search flex' />
                  </button>
                </div>
              </div>
              {/* End .col-md-64 */}
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End tab-content */}
    </div>
  )
}

export default HeroContent
