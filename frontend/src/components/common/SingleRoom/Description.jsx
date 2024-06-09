import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

const ProperytyDescriptions = ({ description, excerpt }) => {
  const btnRef = useRef(null)

  useEffect(() => {
    const btn = btnRef.current
    btn.addEventListener('click', () => {
      btn.innerHTML = btn.innerHTML === 'Show more' ? 'Show less' : 'Show more'
    })
  }
  , [btnRef])

  return (
    <div className='overview-element flex items-center'>
      <div>
        <p className='text mb10 dark:text-white'>{excerpt}</p>
        <div className='agent-single-accordion'>
          <div
            className='accordion accordion-flush'
            id='accordionFlushExample'
          >
            <div className='accordion-item dark:bg-midnight'>
              <div
                id='flush-collapseOne'
                className='accordion-collapse collapse'
                aria-labelledby='flush-headingOne'
                data-bs-parent='#accordionFlushExample'
                style={{}}
              >
                <div className='accordion-body p-0 dark:bg-midnight'>
                  <p className='text dark:text-white'>{description}</p>
                </div>
              </div>
              <h2 className='accordion-header' id='flush-headingOne'>
                <button
                  className='accordion-button p-0 collapsed dark:text-white dark:bg-midnight'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseOne'
                  aria-expanded='false'
                  aria-controls='flush-collapseOne'
                  ref={btnRef}
                >
                  Show more
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProperytyDescriptions.propTypes = {
  description: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
}

export default ProperytyDescriptions
