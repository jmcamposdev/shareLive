const MySocial = () => {
    return (
        <div className='ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative dark:bg-[#181a20]'>
            <h4 className='title fz17 mb30 dark:text-white'>Social Media</h4>
            <form className='form-style1'>
                <div className='row'>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Facebook Url</label>
                            <input type='text' className='form-control' placeholder='Your Facebook Url' control-id='ControlID-12' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Pinterest Url</label>
                            <input type='text' className='form-control' placeholder='Your Pinterest Url' control-id='ControlID-13' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Instagram Url</label>
                            <input type='text' className='form-control' placeholder='Your Instagram Url' control-id='ControlID-14' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Twitter Url</label>
                            <input type='text' className='form-control' placeholder='Your Twitter Url' control-id='ControlID-15' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Linkedin Url</label>
                            <input type='text' className='form-control' placeholder='Your Linkedin Url' control-id='ControlID-16' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-xl-4'>
                        <div className='mb20'>
                            <label className='heading-color ff-heading fw600 mb10 dark:text-white'>Website Url (without http)</label>
                            <input type='text' className='form-control' placeholder='Your Website Url' control-id='ControlID-17' />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='text-end'>
                            <a className='ud-btn btn-dark dark:border-[#dddddd26]' href='page-contact.html dark:text-white'>Update Social<i className='fal fa-arrow-right-long' /></a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MySocial
