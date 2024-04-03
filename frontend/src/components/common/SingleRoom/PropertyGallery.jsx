'use client'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import Image from 'next/image'
import listings from '@/data/listings'

const images = [
  {
    src: '/images/listings/listing-single-2.jpg',
    alt: '2.jpg'
  },
  {
    src: '/images/listings/listing-single-3.jpg',
    alt: '3.jpg'
  },
  {
    src: '/images/listings/listing-single-4.jpg',
    alt: '4.jpg'
  },
  {
    src: '/images/listings/listing-single-5.jpg',
    alt: '5.jpg'
  }
]

const PropertyGallery = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  return (
    <>
      <Gallery>
        <div className='sm:w-1/2 pr-4 pl-4'>
          <div className='sp-img-content mb15-md'>
            <div className='popup-img preview-img-1 sp-img'>
              <Item
                original={data.image}
                thumbnail={data.image}
                width={610}
                height={510}
              >
                {({ ref, open }) => (
                  <Image
                    src={data.image}
                    width={591}
                    height={558}
                    ref={ref}
                    onClick={open}
                    alt='image'
                    role='button'
                    className='w-full h-full cover'
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className='sm:w-1/2 pr-4 pl-4'>
          <div className='flex flex-wrap '>
            {images.map((image, index) => (
              <div className='w-1/2 sm:ps-0' key={index}>
                <div className='sp-img-content'>
                  <div
                    className={`popup-img preview-img-${index + 2} sp-img mb10`}
                  >
                    <Item
                      original={image.src}
                      thumbnail={image.src}
                      width={270}
                      height={250}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={270}
                          height={250}
                          className='w-full h-full cover'
                          ref={ref}
                          onClick={open}
                          role='button'
                          src={image.src}
                          alt={image.alt}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  )
}

export default PropertyGallery
