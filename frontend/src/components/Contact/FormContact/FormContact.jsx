const FormContact = () => {
  return (
    <div className=' dark:bg-lightmidnight'>
      <section className='p-0'>
        <iframe
          className='home8-map contact-page dark:invert-[100%] dark:hue-rotate-180'
          loading='lazy'
          src='https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near'
          title='London Eye, London, United Kingdom'
          aria-label='London Eye, London, United Kingdom'
        />
      </section>
      <section>
        <div className='container mx-auto sm:px-4 '>
          <div className='flex flex-wrap items-end'>
            <div className='lg:w-2/5 pr-4 pl-4 relative'>
              <div className='home8-contact-form default-box-shadow1 rounded-[12px] border-[1px] border-solid border-[#DDDDDD] p-[30px] bg-white dark:!bg-midnight dark:!border-[#181A20] z-20 relative'>
                <h4 className='form-title mb-[25px] dark:text-white'>
                  Have questions? Get in touch!
                </h4>
                <form className='relative'>
                  <div className='flex flex-wrap'>
                    <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                      <div className='mb-[20px]'>
                        <label className='text-[#181A20] font-[600] mb-[10px] dark:text-white'>
                          First Name
                        </label>
                        <input
                          type='text'
                          className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] placeholder:text-borderColor/40 dark:border-borderColor/20 shadow-none text-[14px] h-[55px] pl-[15px] w-full block font-[400] text-[#212529] leading-[21px] bg-clip-padding appearance-none dark:!bg-midnight '
                          placeholder='Your First Name'
                          required
                        />
                      </div>
                    </div>

                    <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                      <div className='mb-[20px]'>
                        <label className='text-[#181A20] font-[600] mb-[10px] dark:text-white'>
                          Last Name
                        </label>
                        <input
                          type='text'
                          className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] placeholder:text-borderColor/40 dark:border-borderColor/20 shadow-none text-[14px] h-[55px] pl-[15px] w-full block font-[400] text-[#212529] leading-[21px] bg-clip-padding appearance-none dark:!bg-midnight'
                          placeholder='Your Last Name'
                          required
                        />
                      </div>
                    </div>

                    <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                      <div className='mb-[20px]'>
                        <label className='text-[#181A20] font-[600] mb-[10px] dark:text-white'>
                          Email
                        </label>
                        <input
                          type='text'
                          className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] placeholder:text-borderColor/40 dark:border-borderColor/20 shadow-none text-[14px] h-[55px] pl-[15px] w-full block font-[400] text-[#212529] leading-[21px] bg-clip-padding appearance-none dark:!bg-midnight'
                          placeholder='Your Email'
                          required
                        />
                      </div>
                    </div>

                    <div className='w-full pr-4 pl-4 flex-[0_0_auto]'>
                      <div className='mb-[10px]'>
                        <label className='text-[#181A20] font-[600] mb-[10px] inline-block dark:text-white'>
                          Textarea
                        </label>
                        <textarea
                          cols={30}
                          rows={4}
                          placeholder='There are many variations of passages.'
                          className='rounded-[8px] border-[1px] border-solid border-[#DDDDDD] placeholder:text-borderColor/40 dark:!border-borderColor/20 w-full h-auto scroll-py-[25px] scroll-px-[20px] resize-y m-0 dark:!bg-midnight dark:!border-[#ffffff] dark:border-[1px] dark:focus-visible:border-[2px]'
                          style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                          defaultValue=''
                          required
                        />
                      </div>
                    </div>

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

            <div className='lg:w-2/5 pr-4 pl-4 lg:ml-[16.66666667%] mt-[3rem] '>
              <h2 className='mb-[30px] capitalize dark:text-white'>
                We’d love to hear <br className='hidden lg:block' />
                from you.
              </h2>
              <p className='text dark:text-white'>
                We are here to answer any question you may have. As the leader in our sector
                we can help you with any question you may have.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormContact
