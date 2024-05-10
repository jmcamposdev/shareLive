const PhotoProfile = ({ user }) => {
    return (
        <div className='col-xl-7'>
            <div className='profile-box position-relative d-md-flex align-items-end mb50'>
                <div className='profile-img position-relative overflow-hidden bdrs12 mb20-sm'>
                    <img className='w-100' src='https://creativelayers.net/themes/homez-html/images/listings/profile-1.jpg' alt='' />
                    <a href='' className='tag-del' data-bs-toggle='tooltip' data-bs-placement='top' title='' data-bs-original-title='Delete Image' aria-label='Delete Item'><span className='fas fa-trash-can' /></a>
                </div>
                <div className='profile-content ml30 ml0-sm'>
                    <a href='' className='ud-btn btn-white2 mb30 dark:text-white'>Upload Profile Files<i className='fal fa-arrow-right-long' /></a>
                    <p className='text dark:text-white'>Photos must be JPEG or PNG format and least 2048x768</p>
                </div>
            </div>
        </div>
    )
}

export default PhotoProfile
