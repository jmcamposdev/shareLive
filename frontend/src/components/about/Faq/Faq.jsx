import FaqAccordion from './FaqAccordion'

const Faq = () => {
  return (
    <section className='our-faq pb90 pt-0'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap  wow fadeInUp' data-wow-delay='300ms'>
          <div className='w-full pr-4 pl-4'>
            <div className='ui-content'>
              <h4 className='title'>Question About Selling</h4>
              <div className='accordion-style1 faq-page mb-4 lg:mb-12'>
                <div className='accordion' id='accordionExample'>
                  <FaqAccordion collapseNumber={1} question='Pregunta 1' answer='Respuesta 1' />
                  <FaqAccordion collapseNumber={2} question='Pregunta 1' answer='Respuesta 1' />
                  <FaqAccordion collapseNumber={3} question='Pregunta 1' answer='Respuesta 1' />
                  <FaqAccordion collapseNumber={4} question='Pregunta 1' answer='Respuesta 1' />
                </div>
              </div>
            </div>
            <div className='ui-content'>
              <h4 className='title'>Question About Renting</h4>
              <div className='accordion-style1 faq-page mb-4 lg:mb-12'>
                <div className='accordion' id='accordionExample2'>
                  <FaqAccordion collapseNumber={5} question='Pregunta 1' answer='Respuesta 1' />
                  <FaqAccordion collapseNumber={6} question='Pregunta 1' answer='Respuesta 1' />
                  <FaqAccordion collapseNumber={7} question='Pregunta 1' answer='Respuesta 1' />
                  <FaqAccordion collapseNumber={8} question='Pregunta 1' answer='Respuesta 1' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
