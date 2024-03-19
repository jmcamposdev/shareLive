import WebLayout from '../../../layout/WebLayout'
import Paris from '../../../assets/vectors/paris.svg'
import London from '../../../assets/vectors/london.svg'
import NewYork from '../../../assets/vectors/newYork.svg'

function Contact () {
  return (
    <div>
      <WebLayout>
        <section className='p-0'>
          <iframe
            className='home8-map contact-page'
            loading='lazy'
            src='https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near'
            title='London Eye, London, United Kingdom'
            aria-label='London Eye, London, United Kingdom'
          />
        </section>
        <section>
          <div className='container mx-auto sm:px-4'>
            <div className='flex flex-wrap  flex items-end'>
              <div className='lg:w-2/5 pr-4 pl-4 relative'>
                <div className='home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white'>
                  <h4 className='form-title mb25'>
                    Have questions? Get in touch!
                  </h4>
                  <form className='form-style1'>
                    <div className='flex flex-wrap '>
                      <div className='lg:w-full pr-4 pl-4'>
                        <div className='mb20'>
                          <label className='heading-color ff-heading fw600 mb10'>
                            First Name
                          </label>
                          <input
                            type='text'
                            className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                            placeholder='Your Name'
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='lg:w-full pr-4 pl-4'>
                        <div className='mb20'>
                          <label className='heading-color ff-heading fw600 mb10'>
                            Last Name
                          </label>
                          <input
                            type='text'
                            className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                            placeholder='Your Name'
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='md:w-full pr-4 pl-4'>
                        <div className='mb20'>
                          <label className='heading-color ff-heading fw600 mb10'>
                            Email
                          </label>
                          <input
                            type='email'
                            className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                            placeholder='Your Name'
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='md:w-full pr-4 pl-4'>
                        <div className='mb10'>
                          <label className='heading-color ff-heading fw600 mb10'>
                            Textarea
                          </label>
                          <textarea
                            cols={30}
                            rows={4}
                            placeholder='There are many variations of passages.'
                            defaultValue=''
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='md:w-full pr-4 pl-4'>
                        <div className='d-grid'>
                          <button type='submit' className='ud-btn btn-thm'>
                            Submit
                            <i className='fal fa-arrow-right-long' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End .col */}

              <div className='col-lg-5 offset-lg-2'>
                <h2 className='mb30 text-capitalize'>
                  We’d love to hear <br className='d-none d-lg-block' />
                  from you.
                </h2>
                <p className='text'>
                  We are here to answer any question you may have. As a partner
                  of corporates, realton has more than 9,000 offices of all
                  sizes and all potential of session.
                </p>
              </div>
              {/* End .col */}
            </div>
          </div>
        </section>
        {/* End Our Contact Form */}

        {/* Visit our Office */}
        <section className='pt0 pb90 pb10-md'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-lg-6 m-auto'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <div className='main-title text-center'>
                  <h2 className='title'>Visit Our Office</h2>
                  <p className='paragraph'>
                    Realton has more than 9,000 offices of all sizes and all
                    potential of session.
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}
            <div className='flex flex-wrap mt-0 justify-center items-center'>
              <div className='sm:w-1/2 lg:w-1/3 pr-4 pl-4 grow wow fadeInLeft' dataWowDelay='0ms' style={{ visibility: 'visible', animationDelay: '0ms', animationName: 'fadeInLeft' }}>
                <div className='iconbox-style8 text-center'>
                  <div className='icon'>
                    <img src={Paris} alt='Paris' style={{ height: '120px', width: '120px', display: 'inline' }} />
                  </div>
                  <div className='iconbox-content'>
                    <h4 className='title'>Paris</h4>
                    <p className='text mb-1'>1301 2nd Ave, Seattle, WA 98101</p>
                    <h6 className='mb10'>(315) 905-2321</h6>
                    <a className='text-decoration-underline' href='#'>
                      Open Google Map
                    </a>
                  </div>
                </div>
              </div>
              <div className='sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 grow'>
                <div className='iconbox-style8 text-center active'>
                  <div className='icon'>
                    <img src={London} alt='London' style={{ height: '120px', width: '120px', display: 'inline' }} />
                  </div>
                  <div className='iconbox-content'>
                    <h4 className='title'>London</h4>
                    <p className='text mb-1'>1301 2nd Ave, Seattle, WA 98101</p>
                    <h6 className='mb10'>(315) 905-2321</h6>
                    <a className='text-decoration-underline' href='#'>
                      Open Google Map
                    </a>
                  </div>
                </div>
              </div>
              <div className='sm:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 sm:grow-0 grow'>
                <div className='iconbox-style8 text-center'>
                  <div className='icon'>
                    <img src={NewYork} alt='New York' style={{ height: '120px', width: '120px', display: 'inline' }} />
                  </div>
                  <div className='iconbox-content'>
                    <h4 className='title'>New York</h4>
                    <p className='text mb-1'>1301 2nd Ave, Seattle, WA 98101</p>
                    <h6 className='mb10'>(315) 905-2321</h6>
                    <a className='text-decoration-underline' href='#'>
                      Open Google Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
        </section>
        {/* End Visit our Office */}

        {/* Our CTA */}
        {/* <CallToActions /> */}
        {/* Our CTA */}
      </WebLayout>
    </div>
  )
}
export default Contact
