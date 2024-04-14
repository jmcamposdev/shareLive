import React from 'react'
import { getImageURL } from '../../../utils/image-util'

const Review = ({ review, className }) => {
  const number = review.reviewRate

  return (
    <div className={`${className !== undefined ? className : 'md:w-full'}   p-5 pt-7 pb-7  border-[1px] dark:border-0 dark:bg-midnight my-4 bdrs12`}>
      <div className='mbp_first relative flex items-center justify-start mb30-sm'>
        <img alt='Avatar of user reviewing' loading='lazy' width='60' height='60' decoding='async' data-nimg='1' className='mr-3 text-transparent rounded-full' src={getImageURL(review.reviewerAvatar)} />
        <div className='ml20'>
          <h6 className='mt-0 mb-0 dark:text-white'>{`${review.reviewerFirstName} ${review.reviewerLastName}`}</h6>
          <div>
            <span className='fz14 text-gray-500'>12 March 2022</span>
            <div className='blog-single-review'>
              <ul className='mb0 ps-0'>
                {
                  Array.from({ length: number }).map((_, index) => (

                    <li key={index} className='list-inline-item me-0'>
                      <a href='#'>
                        <i className='fas fa-star review-color2 fz10 dark:text-white' />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className='text mt20 mb20 dark:text-white'>{review.reviewContent}</p>
      {/*
         <ul className='mb20 ps-0'>
                <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-3.jpg&amp;w=256&amp;q=75' /></li>
                <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-4.jpg&amp;w=256&amp;q=75' /></li>
                <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-5.jpg&amp;w=256&amp;q=75' /></li>
                <li className='list-inline-item mb5-xs'><img alt='review-img' loading='lazy' width='110' height='90' decoding='async' data-nimg='1' className='bdrs6 text-transparent' srcset='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=256&amp;q=75 2x' src='/_next/image?url=%2Fimages%2Fblog%2Fblog-single-6.jpg&amp;w=256&amp;q=75' /></li>
          </ul>
            */}

      <div className='review_cansel_btns flex '><a href='#' className='hover:dark:text-white'><i className='fas fa-thumbs-up text-gray-500 ' />Helpful ({review.helpful})</a><a href='#' className='hover:dark:text-white'><i className='fas fa-thumbs-down text-gray-500' />Not helpful ({review.notHelpful})</a></div>
    </div>
  )
}

export default Review
