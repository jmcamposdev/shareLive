import popularCitiesData from '../../../data/home/popularCities'
import { Link } from 'react-router-dom'
import CityCard from './CityCard/CityCard'

const PopularCities = () => {
  return (
    <section className='pt90 pb90 bg-white dark:!bg-lightmidnight'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap justify-between  items-center' data-aos='fade-up'>
          <div className='lg:w-3/4 w-auto pr-4 pl-4'>
            <div className='main-title2'>
              <h2 className='title dark:text-white'>Popular Cities</h2>
              <p className='paragraph dark:text-white'>
                See our most rented cities
              </p>
            </div>
          </div>
          <div className='lg:w-1/4 w-auto pr-4 pl-4'>
            <div className='text-end sm:text-start mb-3'>
              <Link className='ud-btn2 dark:text-white' to='/rooms'>
                See All Cities
                <i className='fal fa-arrow-right-long' />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-wrap justify-between items-center gap-8'>
            {popularCitiesData.map(city => (
              <CityCard key={city.name} city={city} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCities
