import React from 'react'

const ScheduleTour = () => {
  return (
    <div className='ps-navtab'>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          role='tabpanel'
        >
          <form className='form-style1'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='mb20'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Time'
                    required
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className='col-lg-12'>
                <div className='mb20'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className='col-lg-12'>
                <div className='mb20'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Phone'
                    required
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className='col-md-12'>
                <div className='mb20'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    required
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className='col-md-12'>
                <div className='mb10'>
                  <textarea
                    cols={30}
                    rows={4}
                    placeholder='Enter Your Messages'
                    defaultValue=''
                  />
                </div>
              </div>
              {/* End .col-12 */}

              <div className='col-md-12'>
                <div className='d-grid'>
                  <button type='submit' className='ud-btn btn-thm'>
                    Submit a Tour Request
                    <i className='fal fa-arrow-right-long' />
                  </button>
                </div>
              </div>
              {/* End .col-12 */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTour
