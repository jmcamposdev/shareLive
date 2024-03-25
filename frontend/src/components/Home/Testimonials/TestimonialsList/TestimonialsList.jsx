import { getImageURL } from '../../../../utils/image-util'

const TestimonialsList = ({ testimonials }) => {
  return (
    <>
      <div className='tab-content' id='pills-tabContent'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`tab-pane fade ${
              testimonial.id === '2nd' ? 'show active' : ''
            }`}
            id={`pills-${testimonial.id}`}
            role='tabpanel'
            aria-labelledby={`pills-${testimonial.id}-tab`}
          >
            <div className='testi-content text-center'>
              <span className='icon fas fa-quote-left' />
              <h4 className='testi-text text-white'>{testimonial.text}</h4>
              <h6 className='name text-white'>{testimonial.name}</h6>
              <p className='design text-white'>{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
      {/* End tab-content */}
      <div className='tab-list position-relative'>
        <ul
          className='nav nav-pills justify-content-center'
          id='pills-tab'
          role='tablist'
        >
          {testimonials.map((testimonial) => (
            <li className='nav-item' role='presentation' key={testimonial.id}>
              <button
                className={`nav-link ${
                  testimonial.id === '1st' ? 'ps-0' : ''
                } ${testimonial.id === '2nd' ? 'active' : ''} ${
                  testimonial.id === '5th' ? 'pe-0' : ''
                }`}
                id={`pills-${testimonial.id}-tab`}
                data-bs-toggle='pill'
                data-bs-target={`#pills-${testimonial.id}`}
                type='button'
                role='tab'
                aria-controls={`pills-${testimonial.id}`}
                aria-selected={testimonial.id === '2nd' ? 'true' : 'false'}
              >
                <img
                  width={70}
                  height={71}
                  src={getImageURL(testimonial.imageSrc)}
                  alt=''
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TestimonialsList
