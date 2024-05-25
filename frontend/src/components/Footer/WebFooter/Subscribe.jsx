const Subscribe = () => {
  return (
    <div className='mailchimp-widget mb-4 lg:mb-12'>
      <h6 className='title text-white mb20'>Keep Yourself Up to Date</h6>
      <div className='mailchimp-style1'>
        <input type='email' className='!text-midnight form-control mx-2 placeholder:text-[#6c757d] bg-white !rounded-2xl' placeholder='Your Email' />
        <button style={{ top: 'calc(41px + 50% - (133.3px / 2)' }} type='submit' className='ud-btn btn-thm !bg-orangePrimary'>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe
