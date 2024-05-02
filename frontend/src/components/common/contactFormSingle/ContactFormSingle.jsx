const ContactFormSingle = ({ title }) => {
  return (
    <div className='agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative dark:bg-midnight dark:border-slate-400/20  '>
      <h4 className='form-title mb25 dark:text-white'>{title}</h4>
      <form className='form-style1'>
        <div className='flex flex-wrap '>
          <div className='w-full'>
            <div className='mb20'><input className=' form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Your Name' required='' type='text' /></div>
          </div>
          <div className='w-full'>
            <div className='mb20'><input className='form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Phone' required='' type='text' /></div>
          </div>
          <div className='w-full'>
            <div className='mb20'><input className='form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Email' required='' type='email' /></div>
          </div>
          <div className='w-full'>
            <div className='mb10'><textarea className='placeholder:text-[#717171]' cols='30' rows='4' placeholder='There are many variations of passages.' required='' /></div>
          </div>
          <div className='w-full'>
            <div className='d-grid'><button type='submit' className='ud-btn btn-thm mb15'>Send Message<i className='fal fa-arrow-right-long' /></button><a className='ud-btn btn-white2' href='/contact'>Call<i className='fal fa-arrow-right-long' /></a></div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactFormSingle
