const RoomPagination = () => {
  return (
    <div className='col-auto'>
      <div className='flex flex-wrap  items-center justify-center'>
        <div className='px-3'>
          <button className='rooms_prev__active swiper_button'>
            <i className='far fa-arrow-left-long' />
          </button>
        </div>
        {/* End prev */}

        <div className='px-3'>
          <div className='flex list-reset pl-0 rounded swiper--pagination rooms_pagination__active' />
        </div>
        {/* End pagination */}

        <div className='px-3'>
          <button className='rooms_next__active swiper_button'>
            <i className='far fa-arrow-right-long' />
          </button>
        </div>
        {/* End Next */}
      </div>
    </div>
  )
}

export default RoomPagination
