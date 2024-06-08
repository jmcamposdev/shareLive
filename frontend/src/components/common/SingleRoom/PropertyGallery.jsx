import React, { useState, useEffect } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

const PropertyGallery = ({ images }) => {
  const [imageDimensions, setImageDimensions] = useState([])

  useEffect(() => {
    if (images) {
      const newImageDimensions = []
      images.forEach((image, index) => {
        const img = new window.Image()
        img.src = image
        img.onload = () => {
          newImageDimensions[index] = {
            width: img.naturalWidth,
            height: img.naturalHeight
          }
          if (newImageDimensions.length === images.length) {
            setImageDimensions(newImageDimensions)
          }
        }
      })
    }
  }, [images])

  if (!images || imageDimensions.length !== images.length) {
    return null
  }

  return (
    <>
      <Gallery>
        {(images.length >= 5) && (
          <div className='flex gap-3 lg:h-[600px]'>
            <div className='w-1/2'>
              <div className='sp-img-content mb15-md h-full'>
                <div className='popup-img preview-img-2 sp-img !rounded-xl h-full'>
                  <Item
                    original={images[0]}
                    thumbnail={images[0]}
                    width={imageDimensions[0].width}
                    height={imageDimensions[0].height}
                  >
                    {({ ref, open }) => (
                      <img
                        src={images[0]}
                        ref={ref}
                        onClick={open}
                        alt='image'
                        role='button'
                        className='w-100 h-100 cover'
                      />
                    )}
                  </Item>
                </div>
              </div>
            </div>
            <div className='w-1/2 flex gap-3'>
              <div className='w-1/2 flex flex-col gap-3'>
                <div className='sp-img-content h-full'>
                  <div className='popup-img preview-img-3 sp-img !rounded-xl h-full'>
                    <Item
                      original={images[1]}
                      thumbnail={images[1]}
                      width={imageDimensions[1].width}
                      height={imageDimensions[1].height}
                    >
                      {({ ref, open }) => (
                        <img
                          src={images[1]}
                          ref={ref}
                          onClick={open}
                          alt='image'
                          role='button'
                          className='w-100 h-100 cover'
                        />
                      )}
                    </Item>
                  </div>
                </div>
                <div className='sp-img-content h-full'>
                  <div className='popup-img preview-img-4 sp-img !rounded-xl h-full'>
                    <Item
                      original={images[2]}
                      thumbnail={images[2]}
                      width={imageDimensions[2].width}
                      height={imageDimensions[2].height}
                    >
                      {({ ref, open }) => (
                        <img
                          src={images[2]}
                          ref={ref}
                          onClick={open}
                          alt='image'
                          role='button'
                          className='w-100 h-100 cover'
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
              <div className='w-1/2 flex flex-col gap-3'>
                <div className='sp-img-content h-full'>
                  <div className='popup-img preview-img-3 sp-img !rounded-xl h-full'>
                    <Item
                      original={images[3]}
                      thumbnail={images[3]}
                      width={imageDimensions[3].width}
                      height={imageDimensions[3].height}
                    >
                      {({ ref, open }) => (
                        <img
                          src={images[3]}
                          ref={ref}
                          onClick={open}
                          alt='image'
                          role='button'
                          className='w-100 h-100 cover'
                        />
                      )}
                    </Item>
                  </div>
                </div>
                <div className='sp-img-content h-full'>
                  <div className='popup-img preview-img-4 sp-img !rounded-xl h-full'>
                    <Item
                      original={images[4]}
                      thumbnail={images[4]}
                      width={imageDimensions[4].width}
                      height={imageDimensions[4].height}
                    >
                      {({ ref, open }) => (
                        <img
                          src={images[4]}
                          ref={ref}
                          onClick={open}
                          alt='image'
                          role='button'
                          className='w-100 h-100 cover'
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(images.length >= 3 && images.length < 5) && (
          <div className='flex gap-3 lg:h-[600px]'>
            <div className='w-2/3'>
              <div className='sp-img-content mb15-md h-full'>
                <div className='popup-img preview-img-2 sp-img !rounded-xl h-full'>
                  <Item
                    original={images[0]}
                    thumbnail={images[0]}
                    width={imageDimensions[0].width}
                    height={imageDimensions[0].height}
                  >
                    {({ ref, open }) => (
                      <img
                        src={images[0]}
                        ref={ref}
                        onClick={open}
                        alt='image'
                        role='button'
                        className='w-100 h-100 cover'
                      />
                    )}
                  </Item>
                </div>
              </div>
            </div>
            <div className='w-1/3 flex gap-3 flex-col'>
              <div className=''>
                <div className='sp-img-content'>
                  <div className='popup-img preview-img-3 sp-img !rounded-xl'>
                    <Item
                      original={images[1]}
                      thumbnail={images[1]}
                      width={imageDimensions[1].width}
                      height={imageDimensions[1].height}
                    >
                      {({ ref, open }) => (
                        <img
                          src={images[1]}
                          ref={ref}
                          onClick={open}
                          alt='image'
                          role='button'
                          className='w-100 h-100 cover'
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='sp-img-content'>
                  <div className='popup-img preview-img-4 sp-img !rounded-xl'>
                    <Item
                      original={images[2]}
                      thumbnail={images[2]}
                      width={imageDimensions[2].width}
                      height={imageDimensions[2].height}
                    >
                      {({ ref, open }) => (
                        <img
                          src={images[2]}
                          ref={ref}
                          onClick={open}
                          alt='image'
                          role='button'
                          className='w-100 h-100 cover'
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {images.length === 2 && (
          <div className='flex gap-3 lg:h-[600px]'>
            <div className='w-1/2'>
              <div className='sp-img-content mb15-md h-full'>
                <div className='popup-img preview-img-2 sp-img !rounded-xl h-full'>
                  <Item
                    original={images[0]}
                    thumbnail={images[0]}
                    width={imageDimensions[0].width}
                    height={imageDimensions[0].height}
                  >
                    {({ ref, open }) => (
                      <img
                        src={images[0]}
                        ref={ref}
                        onClick={open}
                        alt='image'
                        role='button'
                        className='w-100 h-100 cover'
                      />
                    )}
                  </Item>
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='sp-img-content mb15-md h-full'>
                <div className='popup-img preview-img-3 sp-img !rounded-xl h-full'>
                  <Item
                    original={images[1]}
                    thumbnail={images[1]}
                    width={imageDimensions[1].width}
                    height={imageDimensions[1].height}
                  >
                    {({ ref, open }) => (
                      <img
                        src={images[1]}
                        ref={ref}
                        onClick={open}
                        alt='image'
                        role='button'
                        className='w-100 h-100 cover'
                      />
                    )}
                  </Item>
                </div>
              </div>
            </div>
          </div>
        )}

        {images.length === 1 && (
          <div className='sp-img-content mb15-md w-full lg:h-[600px]'>
            <div className='popup-img preview-img-1 sp-img !rounded-xl'>
              <Item
                original={images[0]}
                thumbnail={images[0]}
                width={imageDimensions[0].width}
                height={imageDimensions[0].height}
              >
                {({ ref, open }) => (
                  <img
                    src={images[0]}
                    ref={ref}
                    onClick={open}
                    alt='image'
                    role='button'
                    className='w-100 h-100 cover'
                  />
                )}
              </Item>
            </div>
          </div>
        )}
      </Gallery>
    </>
  )
}

export default PropertyGallery
