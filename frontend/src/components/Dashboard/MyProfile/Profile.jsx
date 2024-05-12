import PhotoProfile from './UpdateProfile/PhotoProfile'

const MyProfile = () => {
  return (

    <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative dark:bg-[#181a20]'>
      <PhotoProfile />
      <div className='col-lg-12'>
        <form className='form-style1'>
          <div className='row'>
            <div className='col-sm-6 col-xl-4'>
              <div className='mb20'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Username</label>
                <input type='text' className='form-control' placeholder='Your Username' control-id='ControlID-1' />
              </div>
            </div>
            <div className='col-sm-6 col-xl-4'>
              <div className='mb20'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Email</label>
                <input type='email' className='form-control' placeholder='Your Email' control-id='ControlID-2' />
              </div>
            </div>
            <div className='col-sm-6 col-xl-4'>
              <div className='mb20'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Phone</label>
                <input type='text' className='form-control' placeholder='Your Phone' control-id='ControlID-3' />
              </div>
            </div>
            <div className='col-sm-6 col-xl-4'>
              <div className='mb20'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>First Name</label>
                <input type='text' className='form-control' placeholder='Your First Name' control-id='ControlID-4' />
              </div>
            </div>
            <div className='col-sm-6 col-xl-4'>
              <div className='mb20'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Last Name</label>
                <input type='text' className='form-control' placeholder='Your Last Name' control-id='ControlID-5' />
              </div>
            </div>
            <div className='col-sm-6 col-xl-4'>
              <div className='mb20'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Mobile Phone</label>
                <input type='text' className='form-control' placeholder='Your Mobile Phone' control-id='ControlID-6' />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mb10'>
                <label className='heading-color ff-heading fw600 mb10 dark:text-white'>About me</label>
                <textarea cols='30' rows='4' placeholder='There are many variations of passages.' control-id='ControlID-7' />
              </div>
            </div>
            <div className='col-md-12'>
              <div className='text-end'>
                <a className='ud-btn btn-dark dark:border-[#dddddd26]' href='page-contact.html'>Update Profile<i className='fal fa-arrow-right-long' /></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MyProfile
