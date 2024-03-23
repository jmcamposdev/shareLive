import popularCitiesData from '../../../data/home/popularCities'
import { Link } from 'react-router-dom'
import CityCard from './CityCard/CityCard'

const PopularCities = () => {
  return (
    <section className='pt120 pb60 pb30-md bgc-white'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap justify-between  items-center' data-aos='fade-up'>
          <div className='lg:w-3/4 w-auto pr-4 pl-4'>
            <div className='main-title2'>
              <h2 className='title'>Popular Cities</h2>
              <p className='paragraph'>
                See our most rented cities
              </p>
            </div>
          </div>
          <div className='lg:w-1/4 w-auto pr-4 pl-4'>
            <div className='text-end sm:text-start mb-3'>
              <Link className='ud-btn2' href='/grid-full-3-col'>
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
