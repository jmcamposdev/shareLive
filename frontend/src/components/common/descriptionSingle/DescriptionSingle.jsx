import { useState } from 'react'

const DescriptionSingle = ({ title, description, amountOfWords = 36 }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = description.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : description
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  const toggleAccordion = () => {
    // Set the isExpanded to the opposite value
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='flex flex-wrap '>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='agent-single-details mt30 pb30 bdrb1'>
          <h6 className='fz17 mb30 dark:text-white'>{title}</h6>
          <p
            className='text dark:text-white transition-all duration-300 overflow-y-hidden'
            style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
          >
            {beginText} {itCanOverflow && !isExpanded ? '...' : ''} {isExpanded ? endText : ''}
          </p>

          {endText !== undefined
            ? (
              <div className='agent-single-accordion'>
                <div className='accordion accordion-flush' id='accordionFlushExample'>
                  <div className='accordion-item bg-transparent'>
                    <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                      <div className='accordion-body p-0 '>
                        <p className='text dark:text-white' style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                          {beginText} {endText}
                        </p>
                      </div>
                    </div>
                    <h2 className='accordion-header' id='flush-headingOne'>
                      <button className='accordion-button p-0 collapsed  dark:text-white' type='button' onClick={toggleAccordion} aria-expanded={isExpanded} aria-controls='flush-collapseOne'>{isExpanded ? 'Show less' : 'Show more'}</button>
                    </h2>
                  </div>
                </div>
              </div>
              )
            : null}
        </div>
      </div>
    </div>
  )
}

export default DescriptionSingle
