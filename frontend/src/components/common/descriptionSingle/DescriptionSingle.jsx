import { useState } from 'react'

const DescriptionSingle = ({ title, description, extraDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='lg:w-full pr-4 pl-4'>
      <div className='agent-single-details mt30 pb30 bdrb1'>
        <h6 className='fz17 mb30 dark:text-white'>{title}</h6>
        <p className='text dark:text-white'>{description}</p>

        {extraDescription !== undefined
          ? (
            <div className='agent-single-accordion'>
              <div className='accordion accordion-flush' id='accordionFlushExample'>
                <div className='accordion-item bg-transparent'>
                  <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                    <div className='accordion-body p-0 '>
                      <p className='text dark:text-white '>{extraDescription}</p>
                    </div>
                  </div>
                  <h2 className='accordion-header' id='flush-headingOne'>
                    <button className='accordion-button p-0 collapsed  dark:text-white' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' onClick={toggleAccordion} aria-expanded={isExpanded} aria-controls='flush-collapseOne'>{isExpanded ? 'Show less' : 'Show more'}</button>
                  </h2>
                </div>
              </div>
            </div>
            )
          : null}
      </div>
    </div>
  )
}

export default DescriptionSingle
