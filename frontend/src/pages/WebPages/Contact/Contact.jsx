import WebLayout from '../../../layout/WebLayout'

import vector from '../../../assets/vectors/verticalMesh.svg'

import Paris from '../../../assets/vectors/paris.svg'
import London from '../../../assets/vectors/london.svg'
import NewYork from '../../../assets/vectors/newYork.svg'

import NeedHelpBox from '../../../components/common/needHelpBox/NeedHelpBox'
import PageIntroGrey from '../../../components/common/PageIntroGrey/PageIntroGrey'

const title = 'Contact'
const description = 'Contact us and let us help you find your next student home!'
const backgroundImage = '/src/assets/img/contact/ContactHeader.png'

function Contact () {
  return (
    <div>
      <WebLayout>
        <PageIntroGrey title={title} description={description} backgroundImage={backgroundImage} />
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
            <div className='flex flex-wrap items-end'>
              <div className='lg:w-2/5 pr-4 pl-4 relative'>
                <div className='home8-contact-form default-box-shadow1 rounded-[12px] border-[1px] border-solid border-[#DDDDDD] p-[30px] bg-white'>
                  <h4 className='form-title mb-[25px]'>
                    Have questions? Get in touch!
                  </h4>
                  <form className='relative '>
                    <div className='flex flex-wrap'>
                      <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                        <div className='mb-[20px]'>
                          <label className='text-[#181A20] font-[600] mb-[10px]'>
                            First Name
                          </label>
                          <input
                            type='text'
                            className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] shadow-none text-[14px] h-[55px] pl-[15px] w-full block font-[400] text-[#212529] leading-[21px] bg-clip-padding appearance-none'
                            placeholder='Your First Name'
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                        <div className='mb-[20px]'>
                          <label className='text-[#181A20] font-[600] mb-[10px]'>
                            Last Name
                          </label>
                          <input
                            type='text'
                            className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] shadow-none text-[14px] h-[55px] pl-[15px] w-full block font-[400] text-[#212529] leading-[21px] bg-clip-padding appearance-none'
                            placeholder='Your Last Name'
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                        <div className='mb-[20px]'>
                          <label className='text-[#181A20] font-[600] mb-[10px]'>
                            Email
                          </label>
                          <input
                            type='text'
                            className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] shadow-none text-[14px] h-[55px] pl-[15px] w-full block font-[400] text-[#212529] leading-[21px] bg-clip-padding appearance-none'
                            placeholder='Your Email'
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                        <div className='mb-[10px]'>
                          <label className='text-[#181A20] font-[600] mb-[10px] inline-block'>
                            Textarea
                          </label>
                          <textarea
                            cols={30}
                            rows={4}
                            placeholder='There are many variations of passages.'
                            className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] w-full h-auto scroll-py-[25px] scroll-px-[20px] resize-y m-0'
                            style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                            defaultValue=''
                            required
                          />
                        </div>
                      </div>
                      {/* End .col-lg-12 */}

                      <div className='w-full pr-4 pl-4'>
                        <div className='grid'>
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

              <div className='lg:w-2/5 pr-4 pl-4 lg:ml-[16.66666667%] md:mt-[3rem]'>
                <h2 className='mb-[30px] capitalize'>
                  We’d love to hear <br className='hidden lg:block' />
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

        <img className='absolute top-[1450px] scale-x-[-1]' src={vector} />

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
              <div className='sm:w-1/2 pr-4 pl-4 lg:w-1/3 grow'>
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
              <div className='sm:w-1/2 lg:w-1/3 pr-4 pl-4 sm:grow-0 grow'>
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
        <NeedHelpBox />
        {/* Our CTA */}
      </WebLayout>
    </div>
  )
}
export default Contact
