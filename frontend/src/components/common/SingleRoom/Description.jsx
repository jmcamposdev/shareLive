import listings from '../../../data/roomsItems'
import React from 'react'

const ProperytyDescriptions = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  const overviewData = [
    {
      description: data.description,
      excerpt: data.excerpt
    }
  ]
  return (
    <>
      {overviewData.map((item, index) => (
        <div key={index} className={`col-sm-6 col-lg-4 ${item.xs ? 'mb-2.5' : 'mb-6'}`}>
          <div className='overview-element flex items-center'>
            <div className='ml-3'>
              <p className='text mb10'>{item.description}</p>
              <div className='agent-single-accordion'>
                <div className='accordion accordion-flush' id='accordionFlushExample'>
                  <div className='accordion-item'>
                    <div
                      id='flush-collapseOne'
                      className='accordion-collapse collapse'
                      aria-labelledby='flush-headingOne'
                      data-bs-parent='#accordionFlushExample'
                      style={{}}
                    >
                      <div className='accordion-body p-0'>
                        <p className='text'>{item.excerpt}</p>
                      </div>
                    </div>
                    <h2 className='accordion-header' id='flush-headingOne'>
                      <button
                        className='accordion-button p-0 collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseOne'
                        aria-expanded='false'
                        aria-controls='flush-collapseOne'
                      >
                        Show more
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProperytyDescriptions
