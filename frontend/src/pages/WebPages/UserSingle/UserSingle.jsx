import WebLayout from '../../../layout/WebLayout'
import RoomSimple from '../../../components/common/Room/RoomSimple'
import RoomData from '../../../data/roomsItems'
import { getImageURL } from '../../../utils/image-util'
const UserSingle = ({ user }) => {
  // Getting the reviews made of the user
  const reviewsUser = user.reviews
  const reviewQuantity = reviewsUser.length
  const totalRatingSum = reviewsUser.reduce((acc, review) => acc + review.reviewRate, 0)
  const avgReview = (totalRatingSum / reviewQuantity).toFixed(1)

  return (
    <WebLayout>
      {/* <RoomSimple room={RoomData[0]} /> */}
      <section className='agent-single pt-52'>
        <div className='cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 relative mx20-lg'>
          <div className='container mx-auto sm:px-4'>
            <div className='flex flex-wrap  items-center'>
              <div className='xl:w-3/5 pr-4 pl-4'>
                <div className='agent-single sm:flex items-center'>
                  <div className='single-img mb30-sm'>
                    <img alt='agents' loading='lazy' width='172' height='172' decoding='async' data-nimg='1' className='text-transparent rounded-full object-cover' src={getImageURL(user.avatar)} />
                  </div>
                  <div className='single-contant ml30 ml0-xs'>
                    <h2 className='title mb-0'>{`${user.firstName} ${user.lastName}`}</h2>
                    {/* <p className='fz15'>Renter in <b>`${user.zone}`</b></p> */}
                    <div className='agent-meta mb15 md:flex items-center'><a className='text fz15 pe-2 bdrr1' href='#'><i className='fas fa-star fz10 review-color2 pr10' />{`${avgReview} • ${reviewQuantity} Reviews`}</a><a className='text fz15 pe-2 ps-2 bdrr1' href='#'><i className='flaticon-call pe-1' />{user.phone}</a><a className='text fz15 ps-2' href='#'><i className='flaticon-smartphone pe-1' />{user.mobilePhone}</a></div>
                    <div className='agent-social'>
                      <a className='mr20' href={`https://${user.socials.facebook}`}>
                        <i className='fab fa-facebook-f' />
                      </a>
                      <a className='mr20 group' href={`https://${user.socials.twitter}`}>
                        <i className='fab fa-twitter text-transparent relative'>
                          <svg className='absolute top-[6px] left-0' width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path style={{ transition: 'all ease 0.4s' }} className='fill-black group-hover:fill-orangePrimary' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
                          </svg>
                        </i>
                      </a>
                      <a className='mr20' href={`https://${user.socials.instagram}`}>
                        <i className='fab fa-instagram' />
                      </a>
                      <a className='mr20' href={`https://${user.socials.facebook}`}>
                        <i className='fab fa-linkedin-in' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='img-box-11 relative hidden xl:block'>
                  <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent' srcset='/_next/image?url=%2Fimages%2Fabout%2Felement-3.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fabout%2Felement-3.png&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fabout%2Felement-3.png&amp;w=256&amp;q=75' />
                  <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent' srcset='/_next/image?url=%2Fimages%2Fabout%2Felement-5.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimages%2Fabout%2Felement-5.png&amp;w=96&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fabout%2Felement-5.png&amp;w=96&amp;q=75' />
                  <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent' srcset='/_next/image?url=%2Fimages%2Fabout%2Felement-7.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Fabout%2Felement-7.png&amp;w=128&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fabout%2Felement-7.png&amp;w=128&amp;q=75' />

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
                    <h6 className='fz17 mb30'>About Agents</h6>
                    <p className='text'>This 3-bed with a loft, 2-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you'll find stainless steel appliances and a tile backsplash, as well as a breakfast bar.</p>
                    <div className='agent-single-accordion'>
                      <div className='accordion accordion-flush' id='accordionFlushExample'>
                        <div className='accordion-item'>
                          <div id='flush-collapseOne' className='accordion-collapse hidden' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                            <div className='accordion-body p-0'>
                              <p className='text'>Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.</p>
                            </div>
                          </div>
                          <h2 className='accordion-header' id='flush-headingOne'><button className='accordion-button p-0 collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>Show more</button></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap  items-center mt20'>
                <div className='sm:w-1/3 pr-4 pl-4'>
                  <h6 className='fz17'>Listing 27</h6>
                </div>
                <div className='sm:w-2/3 pr-4 pl-4'>
                  <div className='dark-light-navtab style4 mt-0 lg:mt-6 mb30'>
                    <ul className='flex flex-wrap list-none pl-0 mb-0  justify-start sm:justify-end' id='pills-tab' role='tablist'>
                      <li className='' role='presentation'><button className='inline-block py-2 px-4 no-underline active'>All</button></li>
                      <li className='' role='presentation'><button className='inline-block py-2 px-4 no-underline'>For Rent</button></li>
                      <li className='' role='presentation'><button className='inline-block py-2 px-4 no-underline me-0'>For Sale</button></li>
                    </ul>
                  </div>
                </div>
                <div className='lg:w-full pr-4 pl-4'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div className='tab-pane opacity-0 opacity-100 block active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
                      <div className='flex flex-wrap '>
                        <div className='md:w-1/2 pr-4 pl-4'>
                          <div className='listing-style1'>
                            <div className='list-thumb'>
                              <img alt='listings' loading='lazy' width='382' height='248' decoding='async' data-nimg='1' className='w-full h-full cover text-transparent' srcset='/_next/image?url=%2Fimages%2Flistings%2Fg1-1.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flistings%2Fg1-1.jpg&amp;w=828&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Flistings%2Fg1-1.jpg&amp;w=828&amp;q=75' />
                              <div className='sale-sticker-wrap'>
                                <div className='list-tag fz12'><span className='flaticon-electricity me-2' />FEATURED</div>
                              </div>
                              <div className='list-price'>$14,000 / <span>mo</span></div>
                            </div>
                            <div className='list-content'>
                              <h6 className='list-title'><a href='/single-v1/1'>Equestrian Family Home</a></h6>
                              <p className='list-text'>New York City, CA, USA</p>
                              <div className='list-meta flex items-center'><a href='#'><span className='flaticon-bed' /> 1 bed</a><a href='#'><span className='flaticon-shower' /> 2 bath</a><a href='#'><span className='flaticon-expand' /> 1200 sqft</a></div>
                              <hr className='mt-2 mb-2' />
                              <div className='list-meta2 flex justify-between items-center'>
                                <span className='for-what'>For Rent</span>
                                <div className='icons flex items-center'><a href='#'><span className='flaticon-fullscreen' /></a><a href='#'><span className='flaticon-new-tab' /></a><a href='#'><span className='flaticon-like' /></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='md:w-1/2 pr-4 pl-4'>
                          <div className='listing-style1'>
                            <div className='list-thumb'>
                              <img alt='listings' loading='lazy' width='382' height='248' decoding='async' data-nimg='1' className='w-full h-full cover text-transparent' srcset='/_next/image?url=%2Fimages%2Flistings%2Fg1-2.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flistings%2Fg1-2.jpg&amp;w=828&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Flistings%2Fg1-2.jpg&amp;w=828&amp;q=75' />
                              <div className='sale-sticker-wrap' />
                              <div className='list-price'>$82,000 / <span>mo</span></div>
                            </div>
                            <div className='list-content'>
                              <h6 className='list-title'><a href='/single-v1/2'>Luxury villa in Rego Park</a></h6>
                              <p className='list-text'>Los Angeles City, CA, USA</p>
                              <div className='list-meta flex items-center'><a href='#'><span className='flaticon-bed' /> 2 bed</a><a href='#'><span className='flaticon-shower' /> 1 bath</a><a href='#'><span className='flaticon-expand' /> 1300 sqft</a></div>
                              <hr className='mt-2 mb-2' />
                              <div className='list-meta2 flex justify-between items-center'>
                                <span className='for-what'>For Rent</span>
                                <div className='icons flex items-center'><a href='#'><span className='flaticon-fullscreen' /></a><a href='#'><span className='flaticon-new-tab' /></a><a href='#'><span className='flaticon-like' /></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='md:w-1/2 pr-4 pl-4'>
                          <div className='listing-style1'>
                            <div className='list-thumb'>
                              <img alt='listings' loading='lazy' width='382' height='248' decoding='async' data-nimg='1' className='w-full h-full cover text-transparent' srcset='/_next/image?url=%2Fimages%2Flistings%2Fg1-3.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flistings%2Fg1-3.jpg&amp;w=828&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Flistings%2Fg1-3.jpg&amp;w=828&amp;q=75' />
                              <div className='sale-sticker-wrap' />
                              <div className='list-price'>$14,000 / <span>mo</span></div>
                            </div>
                            <div className='list-content'>
                              <h6 className='list-title'><a href='/single-v1/3'>Equestrian Family Home</a></h6>
                              <p className='list-text'>Texas City, CA, USA</p>
                              <div className='list-meta flex items-center'><a href='#'><span className='flaticon-bed' /> 3 bed</a><a href='#'><span className='flaticon-shower' /> 3 bath</a><a href='#'><span className='flaticon-expand' /> 1000 sqft</a></div>
                              <hr className='mt-2 mb-2' />
                              <div className='list-meta2 flex justify-between items-center'>
                                <span className='for-what'>For Rent</span>
                                <div className='icons flex items-center'><a href='#'><span className='flaticon-fullscreen' /></a><a href='#'><span className='flaticon-new-tab' /></a><a href='#'><span className='flaticon-like' /></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='md:w-1/2 pr-4 pl-4'>
                          <div className='listing-style1'>
                            <div className='list-thumb'>
                              <img alt='listings' loading='lazy' width='382' height='248' decoding='async' data-nimg='1' className='w-full h-full cover text-transparent' srcset='/_next/image?url=%2Fimages%2Flistings%2Fg1-4.jpg&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flistings%2Fg1-4.jpg&amp;w=828&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Flistings%2Fg1-4.jpg&amp;w=828&amp;q=75' />
                              <div className='sale-sticker-wrap'>
                                <div className='list-tag fz12'><span className='flaticon-electricity me-2' />FEATURED</div>
                              </div>
                              <div className='list-price'>$82,000 / <span>mo</span></div>
                            </div>
                            <div className='list-content'>
                              <h6 className='list-title'><a href='/single-v1/4'>Luxury villa in Rego Park</a></h6>
                              <p className='list-text'>New Jersey City, CA, USA</p>
                              <div className='list-meta flex items-center'><a href='#'><span className='flaticon-bed' /> 4 bed</a><a href='#'><span className='flaticon-shower' /> 5 bath</a><a href='#'><span className='flaticon-expand' /> 1200 sqft</a></div>
                              <hr className='mt-2 mb-2' />
                              <div className='list-meta2 flex justify-between items-center'>
                                <span className='for-what'>For Rent</span>
                                <div className='icons flex items-center'><a href='#'><span className='flaticon-fullscreen' /></a><a href='#'><span className='flaticon-new-tab' /></a><a href='#'><span className='flaticon-like' /></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-grid pb30 bdrb1'><a className='ud-btn btn-white2' href='/single-v1/4'>Show all 134 property<i className='fal fa-arrow-right-long' /></a></div>
                </div>
              </div>
              <div className='flex flex-wrap '>
                <div className='lg:w-full pr-4 pl-4'>
                  <div className='product_single_content mb50'>
                    <div className='mbp_pagination_comments'>
                      <div className='flex flex-wrap '>
                        <div className='lg:w-full pr-4 pl-4'>
                          <div className='total_review flex items-center justify-between mb20 mt60'>
                            <h6 className='fz17 mb15'><i className='fas fa-star fz12 pe-2' />5.0 · 3 reviews</h6>
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
                        <div className='md:w-full pr-4 pl-4'>
                          <div className='mbp_first relative flex items-center justify-start mt30 mb30-sm'>
                            <img alt='comments-2.png' loading='lazy' width='60' height='60' decoding='async' data-nimg='1' className='mr-3 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fcomments-2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fcomments-2.png&amp;w=128&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fcomments-2.png&amp;w=128&amp;q=75' />
                            <div className='ml20'>
                              <h6 className='mt-0 mb-0'>Bessie Cooper</h6>
                              <div>
                                <span className='fz14'>12 March 2022</span>
                                <div className='blog-single-review'>
                                  <ul className='mb0 ps-0'>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className='text mt20 mb20'>Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.</p>
                          <ul className='mb20 ps-0'>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=256&amp;q=75' /></li>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=256&amp;q=75' /></li>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=256&amp;q=75' /></li>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=256&amp;q=75' /></li>
                          </ul>
                          <div className='review_cansel_btns flex bdrb1 pb30'><a href='#'><i className='fas fa-thumbs-up' />Helpful</a><a href='#'><i className='fas fa-thumbs-down' />Not helpful</a></div>
                        </div>
                        <div className='md:w-full pr-4 pl-4'>
                          <div className='mbp_first relative flex items-center justify-start mt30 mb30-sm'>
                            <img alt='comments-2.png' loading='lazy' width='60' height='60' decoding='async' data-nimg='1' className='mr-3 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fcomments-2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fcomments-2.png&amp;w=128&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fcomments-2.png&amp;w=128&amp;q=75' />
                            <div className='ml20'>
                              <h6 className='mt-0 mb-0'>Darrell Steward</h6>
                              <div>
                                <span className='fz14'>12 March 2022</span>
                                <div className='blog-single-review'>
                                  <ul className='mb0 ps-0'>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                    <li className='list-inline-item me-0'><a href='#'><i className='fas fa-star review-color2 fz10' /></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className='text mt20 mb20'>Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.</p>
                          <ul className='mb20 ps-0'>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=256&amp;q=75' /></li>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=256&amp;q=75' /></li>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=256&amp;q=75' /></li>
                            <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=256&amp;q=75' /></li>
                          </ul>
                          <div className='review_cansel_btns flex bdrb1 pb30'><a href='#'><i className='fas fa-thumbs-up' />Helpful</a><a href='#'><i className='fas fa-thumbs-down' />Not helpful</a></div>
                        </div>
                        <div className='md:w-full pr-4 pl-4'>
                          <div className='relative bdrb1 pt30 pb20'><a href='#' className='ud-btn btn-white2'>Show all 134 reviews<i className='fal fa-arrow-right-long' /></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bsp_reveiw_wrt'>
                    <h6 className='fz17'>Leave A Review</h6>
                    <form className='comments_form mt30'>
                      <div className='flex flex-wrap '>
                        <div className='md:w-full pr-4 pl-4'>
                          <div className='mb-4'><label className='fw600 ff-heading mb-2'>Email</label><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='ibthemes21@gmail.com' required='' type='email' /></div>
                        </div>
                        <div className='md:w-1/2 pr-4 pl-4'>
                          <div className='mb-4'><label className='fw600 ff-heading mb-2'>Title</label><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Enter Title' required='' type='text' /></div>
                        </div>
                        <div className='md:w-1/2 pr-4 pl-4'>
                          <div className='widget-wrapper sideborder-dropdown mb-4'>
                            <label className='fw600 ff-heading mb-2'>Rating</label>
                            <div className='form-style2 relative flex items-stretch w-full'>
                              <div className='custom-react_select css-b62m3t-container'>
                                <span id='react-select-4-live-region' className='css-7pg0cj-a11yText' /><span aria-live='polite' aria-atomic='false' aria-relevant='additions text' className='css-7pg0cj-a11yText' />
                                <div className='select__control css-13cymwt-control'>
                                  <div className='select__value-container select__value-container--has-value css-hlgwow'>
                                    <div className='select__single-value css-1dimb5e-singleValue'>Five Star</div>
                                    <div className='select__input-container css-19bb58m' data-value=''><input className='select__input text-inherit bg-center opacity-100 w-full col-span-1 row-span-1 font-inherit min-w-2 border-0 m-0 outline-none p-0' autocapitalize='none' autocomplete='off' autocorrect='off' id='react-select-4-input' spellcheck='false' tabindex='0' aria-autocomplete='list' aria-expanded='false' aria-haspopup='true' aria-required='true' role='combobox' type='text' value='' /></div>
                                  </div>
                                  <div className='select__indicators css-1wy0on6'>
                                    <span className='select__indicator-separator css-1u9des2-indicatorSeparator' />
                                    <div className='select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer' aria-hidden='true'>
                                      <svg height='20' width='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false' className='css-8mmkcg'>
                                        <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <input type='hidden' value='Five Star' name='colors' />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='md:w-full pr-4 pl-4'>
                          <div className='mb-4'><label className='fw600 ff-heading mb-2'>Review</label><textarea className='pt15' rows='6' placeholder='Write a Review' required='' /></div>
                          <button type='submit' className='ud-btn btn-white2'>Submit Review<i className='fal fa-arrow-right-long' /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 pr-4 pl-4'>
              <div className='agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative'>
                <h4 className='form-title mb25'>Contact Form</h4>
                <form className='form-style1'>
                  <div className='flex flex-wrap '>
                    <div className='lg:w-full pr-4 pl-4'>
                      <div className='mb20'><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Your Name' required='' type='text' /></div>
                    </div>
                    <div className='lg:w-full pr-4 pl-4'>
                      <div className='mb20'><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Phone' required='' type='text' /></div>
                    </div>
                    <div className='md:w-full pr-4 pl-4'>
                      <div className='mb20'><input className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' placeholder='Email' required='' type='email' /></div>
                    </div>
                    <div className='md:w-full pr-4 pl-4'>
                      <div className='mb10'><textarea cols='30' rows='4' placeholder='There are many variations of passages.' required='' /></div>
                    </div>
                    <div className='md:w-full pr-4 pl-4'>
                      <div className='d-grid'><button type='submit' className='ud-btn btn-thm mb15'>Send Message<i className='fal fa-arrow-right-long' /></button><a className='ud-btn btn-white2' href='/contact'>Call<i className='fal fa-arrow-right-long' /></a></div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30'>
                <div className='widget-wrapper mb-0'>
                  <h6 className='title fz17 mb35'>Professional Information</h6>
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0'>Broker address</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14'>House on the Northridge</p>
                    </div>
                  </div>
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0'>Office</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14'>(484) 524-3699</p>
                    </div>
                  </div>
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0'>Mobile</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14'>(484) 524-7963</p>
                    </div>
                  </div>
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0'>Fax</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14'>(484) 524-1023</p>
                    </div>
                  </div>
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0'>Websites</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14'>www.realton.com</p>
                    </div>
                  </div>
                  <div className='list-news-style flex items-center justify-between mb10'>
                    <div className='flex-shrink-0'>
                      <h6 className='fz14 mb-0'>Member since</h6>
                    </div>
                    <div className='news-content flex-shrink-1 ms-3 text-end'>
                      <p className='text mb-0 fz14'>10-01-2022</p>
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
