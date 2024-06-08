import StatisticsImage from '../../../assets/img/home/statistics.png'

const Statistics = () => {
  return (
    <section className='pt90 pb90 bg-white dark:!bg-lightmidnight'>
      <div className='container mx-auto sm:px-4 relative flex items-center justify-between flex-col lg:flex-row gap-6 lg:gap-0'>
        <img src={StatisticsImage} alt='' />
        <div className='lg:absolute  bg-white right-0 px-12 py-14 w-full lg:max-w-2xl shadow-lg rounded-3xl gap-6 lg:gap-0 dark:!bg-midnight'>
          <h2 className='text-[40px] font-semibold dark:text-white'>We serve costumers all over the world</h2>
          <p className=' !mb-6 dark:text-white lg:max-w-lg '>We have been operating for over 15 years and are constantly growing, and thanks to our resources we have helped people like you find their perfect room.</p>
          <div className='statistics flex flex-wrap justify-between mb-6'>
            <div>
              <h3 className='text-[55px] font-semibold leading-none dark:text-white'>150<span className='text-orangePrimary'>K</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Published apartments</p>
            </div>
            <div>
              <h3 className='text-[55px] font-semibold leading-none dark:text-white'>540<span className='text-orangePrimary'>K</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Connected people</p>
            </div>
          </div>
          <div className='statistics flex flex-wrap justify-between'>
            <div>
              <h3 className='text-[55px] font-semibold leading-none dark:text-white'>87<span className='text-orangePrimary'>%</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Operate in the country</p>
            </div>
            <div>
              <h3 className='text-[55px] font-semibold leading-none dark:text-white'>240<span className='text-orangePrimary'>%</span></h3>
              <p className='text-[#5D5F63] text-[17px] font-semibold'>Efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
