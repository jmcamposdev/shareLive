const FaqAccordion = ({ collapseNumber, question, answer }) => {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingThree'><button className='accordion-button ' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${collapseNumber}`} aria-expanded='true' aria-controls={`collapse${collapseNumber}`}>{question}</button></h2>
      <div id={`collapse${collapseNumber}`} className='accordion-collapse opacity-100 block collapse' aria-labelledby='headingThree' data-parent='#accordionExample2'>
        <div className='accordion-body'>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqAccordion
