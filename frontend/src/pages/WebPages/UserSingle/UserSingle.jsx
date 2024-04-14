import React, { useState } from 'react'
import WebLayout from '../../../layout/WebLayout'
import RoomSimple from '../../../components/common/Room/RoomSimple/RoomSimple'
import Review from '../../../components/common/Review/Review'
import { getImageURL } from '../../../utils/image-util'
import Bounce1 from '../../../assets/img/users/bounce.png'
import Bounce2 from '../../../assets/img/users/bounce2.png'
import CircleOrange from '../../../assets/img/users/circleOrange.png'
import Bounce1Dark from '../../../assets/img/users/bounceDark.png'
import Bounce2Dark from '../../../assets/img/users/bounce2Dark.png'
import CircleOrangeDark from '../../../assets/img/users/circleOrangeDark.png'
import ContactFormSingle from '../../../components/common/contactFormSingle/ContactFormSingle'

const UserSingle = ({ user, rooms }) => {
  // Getting the reviews made of the user

  const reviewQuantity = user.reviews.length
  let reviewsMssg = ''
  // If there is at least 1 review
  if (reviewQuantity) {
    const totalRatingSum = user.reviews.reduce((acc, review) => acc + review.reviewRate, 0)
    const avgReview = (totalRatingSum / reviewQuantity).toFixed(1)
    reviewsMssg = `${avgReview} • ${reviewQuantity} Reviews`
  } else {
  // if not the message display the ausence of reviews
    reviewsMssg = 'No reviews yet ...'
  }

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  // ROOMS LOGIC

  const userIds = user.ownerRoomsIds // IDs de las habitaciones del usuario
  const allRooms = rooms

  // Filtrar las habitaciones que pertenecen al usuario
  const userRooms = allRooms.filter(room => userIds.includes(room.id))
  const userReviews = user.reviews

  // Funtion to open and close the rating window
  const openRating = () => {
    const ratingList = document.getElementById('ratingList')
    const chevron = document.getElementById('chevron')
    // if its closed then the opacity is set to one to make it visible
    // and a max height is set so an animation can be played
    // the chevron is rotated to indicate its opened
    if (ratingList.style.opacity === '0') {
      ratingList.style.maxHeight = '153px'
      ratingList.style.opacity = '1'
      chevron.style.transform = ''
    } else {
      // else the window is closed
      ratingList.style.maxHeight = '0'
      ratingList.style.opacity = '0'
      chevron.style.transform = 'rotate(180deg)'
    }
  }

  const setRating = e => {
    // if a rating option is clicked then
    // the window closes
    openRating()
    // i get the value picked by the user inside the li with the aria-value
    const rating = e.target.innerHTML
    // i didsplay the value on the fake option tag
    document.getElementById('displayRate').innerHTML = rating
    // i set the value of a hidden input with the picked value
    document.getElementById('rating').value = e.target.getAttribute('aria-value')
  }

  return (
    <WebLayout>
      {/* <RoomSimple room={RoomData[0]} /> */}
      <section className='agent-single pt-[150px] dark:bg-lightmidnight'>
        <div className='dark:bg-[#181a20] cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 relative mx20-lg'>
          <div className='container mx-auto sm:px-4'>
            <div className='flex flex-wrap  items-center'>
              <div className='xl:w-3/5 pr-4 pl-4'>
                <div className='agent-single sm:flex items-center'>
                  <div className='single-img mb30-sm'>
                    <img alt='agents' loading='lazy' width='172' height='172' decoding='async' data-nimg='1' className='text-transparent rounded-full object-cover z-20 relative' src={getImageURL(user.avatar)} />
                  </div>
                  <div className='single-contant ml30 ml0-xs'>
                    <h2 className='title mb-0 dark:text-white'>{`${user.firstName} ${user.lastName}`}</h2>
                    {/* <p className='fz15'>Renter in <b>`${user.zone}`</b></p> */}
                    <div className='agent-meta mb15 md:flex items-center'>
                      <a className='text fz15 pe-2 bdrr1 dark:text-white'>
                        <i className='fas fa-star fz10 review-color2 pr10 dark:text-white' />{reviewsMssg}
                      </a>
                      {user.phone ? (<a className='text fz15 pe-2 ps-2 bdrr1 dark:text-white'><i className='flaticon-call pe-1' />{user.phone}</a>) : ''}
                      {user.mobilePhone ? (<a className='text fz15 ps-2 dark:text-white'><i className='flaticon-smartphone pe-1' />{user.mobilePhone}</a>) : ''}
                    </div>
                    <div className='agent-social'>
                      {user.socials.facebook
                        ? (
                          <a className='mr20' href={`https://${user.socials.facebook}`}>
                            <i className='fab fa-facebook-f dark:text-white' />
                          </a>)
                        : ''}
                      {user.socials.instagram
                        ? (
                          <a className='mr20' href={`https://${user.socials.instagram}`}>
                            <i className='fab fa-instagram dark:text-white' />
                          </a>)
                        : ''}
                      {user.socials.linkedin
                        ? (
                          <a className='mr20' href={`https://${user.socials.linkedin}`}>
                            <i className='fab fa-linkedin-in dark:text-white' />
                          </a>)
                        : ''}
                      {user.socials.twitter
                        ? (
                          <a className='mr20 group' href={`https://${user.socials.twitter}`}>
                            <i className='fab fa-twitter text-transparent relative'>
                              <svg className='absolute top-[6px] left-0' width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path style={{ transition: 'all ease 0.4s' }} className='dark:group-hover:fill-white fill-black dark:fill-white group-hover:fill-orangePrimary' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
                              </svg>
                            </i>
                          </a>
                          )
                        : ''}

                    </div>
                  </div>
                </div>
                <div className='img-box-11 relative hidden xl:block'>
                  <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent dark:hidden' src={CircleOrange} />
                  <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent hidden dark:block !z-10' src={CircleOrangeDark} />
                  <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent dark:hidden' src={Bounce2} />
                  <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent hidden dark:block' src={Bounce2Dark} />
                  <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent dark:hidden' src={Bounce1} />
                  <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent hidden dark:block' src={Bounce1Dark} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap  wow fadeInUp' data-aos-delay='300'>
            <div className='lg:w-2/3 pr-4 pl-4 pr40 pr20-lg'>
              <div className='flex flex-wrap '>
                <div className='lg:w-full pr-4 pl-4'>
                  <div className='agent-single-details mt30 pb30 bdrb1'>
                    <h6 className='fz17 mb30 dark:text-white'>About {user.firstName}</h6>
                    <p className='text dark:text-white'>{user.description}</p>

                    {user.extraDescription.length > 0
                      ? (
                        <div className='agent-single-accordion'>
                          <div className='accordion accordion-flush' id='accordionFlushExample'>
                            <div className='accordion-item bg-transparent'>
                              <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                                <div className='accordion-body p-0 '>
                                  <p className='text dark:text-white '>{user.extraDescription}</p>
                                </div>
                              </div>
                              <h2 className='accordion-header' id='flush-headingOne'>
                                <button className='accordion-button p-0 collapsed  dark:text-white' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' onClick={toggleAccordion} aria-expanded={isExpanded} aria-controls='flush-collapseOne'>{isExpanded ? 'Show less' : 'Show more'}</button>
                              </h2>
                            </div>
                          </div>
                        </div>
                        )
                      : null}
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap  items-center mt20'>
                <div className='sm:w-1/3 pr-4 pl-4'>
                  <h6 className='fz17 dark:text-white'>{user.firstName}'s Rooms</h6>
                </div>
                <div className='sm:w-2/3 pr-4 pl-4' />
                <div className='lg:w-full pr-4 pl-4'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div className='tab-pane opacity-0 opacity-100 block active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
                      <div className='flex flex-wrap gap-[30px]'>

                        {allRooms.map(room => (
                          <div key={room.id} className='w-full md:w-calc-half-minus-30'>
                            <RoomSimple key={room.id} room={room} />
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                  <div className='d-grid pb30 bdrb1'><a className='ud-btn btn-white2' href='/single-v1/4'>Show all Rooms<i className='fal fa-arrow-right-long' /></a></div>
                </div>
              </div>
              <div className='flex flex-wrap '>
                <div className='lg:w-full pr-4 pl-4'>
                  <div className='product_single_content mb50'>
                    <div className='mbp_pagination_comments'>
                      <div className='flex flex-wrap '>
                        <div className='lg:w-full pr-4 pl-4'>
                          <div className='total_review flex items-center justify-between mb20 mt60'>
                            <h6 className='fz17 mb15 dark:text-white'><i className='fas fa-star fz12 pe-2 ' />{reviewsMssg}</h6>
                            <div className='page_control_shorting flex items-center justify-center sm:justify-end'>
                              <div className='pcs_dropdown mb15 flex items-center'>
                                <span className='min-w-[60px]'>Sort by</span>
                                <select className='form-select'>
                                  <option>Newest</option>
                                  <option>Best Seller</option>
                                  <option>Best Match</option>
                                  <option>Price Low</option>
                                  <option>Price High</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* REVIEWS */}

                        {userReviews.map(review => (
                          <Review key={review.id} review={review} />
                        ))}

                        {/* END REVIEWS */}
                        <div className='md:w-full pr-4 pl-4'>
                          <div className='relative bdrb1 pt30 pb20'><a href='#' className='ud-btn btn-white2'>Show all reviews<i className='fal fa-arrow-right-long' /></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bsp_reveiw_wrt'>
                    <h6 className='fz17 dark:text-white'>Leave A Review</h6>
                    <form className='comments_form mt30'>
                      <div className='flex flex-wrap '>
                        <div className='md:w-full'>
                          <div className='mb-4'><label className='fw600 ff-heading mb-2 dark:text-white'>Email</label><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 dark:!border-gray-100/40 rounded form-control dark:!bg-midnight dark:border-gray-200/40 placeholder:text-gray-200/40 dark:text-white focus:outline-white' placeholder='Your Email Here' required='' type='email' /></div>
                        </div>
                        <div className='md:w-1/2 pr-4'>
                          <div className='mb-4'><label className='fw600 ff-heading mb-2 dark:text-white'>Title</label><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control bg-white text-gray-800 border border-gray-200 dark:!border-gray-100/40 rounded form-control dark:!bg-midnight dark:border-gray-200/40 placeholder:text-gray-200/40 dark:text-white focus:outline-white' placeholder='Enter Title' required='' type='text' /></div>
                        </div>

                        <div className='md:w-1/2 pl-4'>
                          <input className='absolute w-0 h-0' id='rating' type='number' min='1' max='5' value={5} />
                          <div className='mb-4 relative'>
                            <label className='fw600 ff-heading mb-2 dark:text-white'>Rating</label>
                            <div className='dark:!border-gray-100/40 bg-white rounded-lg dark:text-white  relative block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control dark:!bg-red'>
                              <div onClick={openRating} className='dark:text-white rounded-lg !border-0 dark:bg-midnight absolute w-full h-full top-0 left-0 flex justify-between items-center py-2 px-4 pr-6 '>
                                <p id='displayRate' className='m-0 p-0 text-slate-500 dark:text-white '>Five Stars</p>
                                <div className='h-full border-l border-slate-300 absolute right-[17%]' />
                                <div id='chevron' style={{ transform: 'rotate(180deg)', transition: 'all 400ms ease' }} className=' fa-solid fa-chevron-down' />
                              </div>
                              <ul id='ratingList' style={{ maxHeight: '0', opacity: '0', transition: 'all 400ms ease' }} className='border border-slate-500 block m-0 p-0 w-full absolute left-0 top-[110%] rounded-lg overflow-auto max-h-[170px] bg-white dark:bg-midnight'>
                                <li aria-value={1} onClick={setRating} style={{ transition: 'all 400ms ease' }} className='hover:!bg-orangePrimary/50 hover:cursor-pointer w-full py-3 px-4 bg-white text-gray-800 mt-2'>One Star</li>
                                <li aria-value={2} onClick={setRating} style={{ transition: 'all 400ms ease' }} className='hover:!bg-orangePrimary/50 hover:cursor-pointer w-full py-3 px-4 bg-white text-gray-800 mt-1'>Two Stars</li>
                                <li aria-value={3} onClick={setRating} style={{ transition: 'all 400ms ease' }} className='hover:!bg-orangePrimary/50 hover:cursor-pointer w-full py-3 px-4 bg-white text-gray-800 mt-1'>Three Stars</li>
                                <li aria-value={4} onClick={setRating} style={{ transition: 'all 400ms ease' }} className='hover:!bg-orangePrimary/50 hover:cursor-pointer w-full py-3 px-4 bg-white text-gray-800  mt-1'>Four Stars</li>
                                <li aria-value={5} onClick={setRating} style={{ transition: 'all 400ms ease' }} className='hover:!bg-orangePrimary/50 hover:cursor-pointer w-full py-3 px-4 bg-white text-gray-800  mt-1 mb-2'>Five Stars</li>

                              </ul>

                            </div>
                          </div>
                        </div>

                        <div className='md:w-full'>
                          <div className='mb-4'><label className='fw600 ff-heading mb-2 dark:text-white'>Review</label><textarea className='pt15' rows='6' placeholder='Write a Review' required='' /></div>
                          <button type='submit' className='ud-btn btn-white2'>Submit Review<i className='fal fa-arrow-right-long' /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 pr-4 pl-4'>
              <ContactFormSingle title='Contact Me' />
              <div className='agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30 dark:bg-midnight'>
                <div className='widget-wrapper mb-0'>
                  <h6 className='title fz17 mb35 dark:text-white'>More Information</h6>
                  {user.phone
                    ? (
                      <div className='list-news-style flex items-center justify-between mb10'>
                        <div className='flex-shrink-0'>
                          <h6 className='fz14 mb-0 dark:text-white'>Telephone</h6>
                        </div>
                        <div className='news-content flex-shrink-1 ms-3 text-end'>
                          <p className='text mb-0 fz14 dark:text-white'>{user.phone}</p>
                        </div>
                      </div>
                      )
                    : ''}
                  {user.mobilePhone
                    ? (
                      <div className='list-news-style flex items-center justify-between mb10'>
                        <div className='flex-shrink-0'>
                          <h6 className='fz14 mb-0 dark:text-white'>Mobile</h6>
                        </div>
                        <div className='news-content flex-shrink-1 ms-3 text-end'>
                          <p className='text mb-0 fz14 dark:text-white'>{user.mobilePhone}</p>
                        </div>
                      </div>
                      )
                    : ''}
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0 dark:text-white'>Member since</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14 dark:text-white'>{user.joinDate.substring(0, 10)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </WebLayout>
  )
}

export default UserSingle
