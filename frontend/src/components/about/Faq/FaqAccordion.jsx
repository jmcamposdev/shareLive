import PropTypes from 'prop-types'

const FaqAccordion = ({ collapseNumber, question, answer }) => {
  return (
    <div className='border dark:!border-lightmidnight accordion-item dark:bg-midnight/80'>
      <h2 className=' accordion-header' id='headingThree'>
        <button className='dark:text-white accordion-button ' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${collapseNumber}`} aria-expanded='true' aria-controls={`collapse${collapseNumber}`}>
          <span style={{ fontFamily: 'var(--icon-font-family)', color: 'white' }} className='hidden dark:block absolute text-[8px] left-0 font-bold'></span>
          {question}
        </button>
      </h2>
      <div id={`collapse${collapseNumber}`} className='accordion-collapse opacity-100 block collapse' aria-labelledby='headingThree' data-parent='#accordionExample2'>
        <div className='accordion-body'>
          <p className='dark:text-white'>{answer}</p>
        </div>
      </div>
    </div>
  )
}

FaqAccordion.propTypes = {
  collapseNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default FaqAccordion
