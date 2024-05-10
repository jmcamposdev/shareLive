const MyPassword = () => {
    return (
        <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative dark:bg-[#181a20]'>
            <h4 className='title fz17 mb30 dark:text-white'>Change password</h4>
            <form className='form-style1'>
                <div className='row'>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Old Password</label>
                            <input type='text' className='form-control' placeholder='Your Old Password' control-id='ControlID-18' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>New Password</label>
                            <input type='text' className='form-control' placeholder='Your New Password' control-id='ControlID-19' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Confirm New Password</label>
                            <input type='text' className='form-control' placeholder='Your Confirm New Password' control-id='ControlID-20' />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='text-end'>
                            <a className='ud-btn btn-dark dark:border-[#dddddd26]' href='page-contact.htm dark:text-white'>Change Password<i className='fal fa-arrow-right-long' /></a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyPassword
