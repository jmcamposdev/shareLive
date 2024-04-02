import StatisticsImage from '../../../assets/img/home/statistics.png'

const Statistics = () => {
  return (
    <section className='pt90 pb90 bgc-white'>
      <div className='container mx-auto sm:px-4 relative flex items-center justify-between flex-col lg:flex-row gap-6 lg:gap-0'>
        <img src={StatisticsImage} alt='' />
        <div className='lg:absolute  bg-white right-0 px-12 py-14 w-full lg:max-w-2xl shadow-lg rounded-3xl gap-6 lg:gap-0'>
          <h2 className='text-[40px] font-semibold'>We serve costumers all over the world</h2>
          <p className='max-w-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
          <div className='statistics flex flex-wrap justify-between mb-6'>
            <div>
              <h3 className='text-[55px] font-semibold leading-none'>150<span className='text-orangePrimary'>K</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Published apartments</p>
            </div>
            <div>
              <h3 className='text-[55px] font-semibold leading-none'>540<span className='text-orangePrimary'>K</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Connected people</p>
            </div>
          </div>
          <div className='statistics flex flex-wrap justify-between'>
            <div>
              <h3 className='text-[55px] font-semibold leading-none'>87<span className='text-orangePrimary'>%</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Operate in the country</p>
            </div>
            <div>
              <h3 className='text-[55px] font-semibold leading-none'>240<span className='text-orangePrimary'>%</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
