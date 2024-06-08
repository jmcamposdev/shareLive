import React, { useEffect, useRef, useState } from 'react'

const RoomShareButton = ({ room }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const tooltipRef = useRef(null)

  const handleShare = (platform) => {
    const url = `https://sharelive.jmcampos.dev/rooms/${room._id}`
    const text = `Check out this room: ${room.title}`

    let shareUrl = ''
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      default:
        return
    }

    window.open(shareUrl, '_blank')
  }

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setShowTooltip(false)
    }
  }

  const handleScroll = () => {
    setShowTooltip(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={tooltipRef} className='relative'>
      <a
        className='icon mr-[10px] !leading-[40px] dark:bg-midnight dark:!border-none dark:hover:!bg-orangePrimary/10'
        href='#'
        onClick={(e) => {
          e.preventDefault()
          setShowTooltip(!showTooltip)
        }}
      >
        <span className='flaticon-share-1 dark:text-white' />
      </a>
      {showTooltip && (
        <div className='absolute top-full right-0 mt-2 w-40 p-2 bg-white dark:bg-midnight border border-gray-200 dark:border-gray-700 rounded shadow-lg z-40'>
          <button onClick={() => handleShare('twitter')} className='flex gap-1 items-center w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800'>
            <svg className='inline' width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path className='transition-all duration-500 ease group-hover:fill-white fill-[#181A20] ' d='M10.6945 0.163574H12.7717L8.23961 5.3629L13.59 12.438H9.38522L6.10574 8.1451L2.329 12.438H0.264374L5.13008 6.8736L0 0.163574H4.2929L7.26395 4.0851L10.6945 0.163574ZM9.96432 11.1917H11.1162L3.66974 1.34066H2.41083L9.96432 11.1917Z' />
            </svg>
            Twitter
          </button>
          <button onClick={() => handleShare('whatsapp')} className='flex gap-1 items-center w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800'>
            <span className='flaticon-whatsapp dark:text-white' /> WhatsApp
          </button>
          <button onClick={() => handleShare('facebook')} className='flex gap-1 items-center w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800'>
            <i className='w-[12px] fab fa-facebook-f list-inline-item dark:text-white' /> Facebook
          </button>
        </div>
      )}
    </div>
  )
}

export default RoomShareButton
