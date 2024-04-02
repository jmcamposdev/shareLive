import { Link } from 'react-router-dom'
import { getImageURL } from '../../../../utils/image-util'
import './CityCard.css'

const CityCard = ({ city }) => {
  return (
    <Link to={city.link} className='flex-grow'>
      <div className='city-card relative flex flex-col justify-between flex-grow rounded-3xl p-5 bg-center min-h-[580px] overflow-hidden '>
        <div className='z-10'>
          <h4 className='text-orangePrimary text-[14px]'>{city.subtitle}</h4>
          <h3 className='text-white text-[40px]'>{city.name}</h3>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-fit z-10'>
          <div className='city-line' />
          <h5 className='text-white text-[18px] city-title'>{city.title}</h5>
        </div>
        <img className='city-card-img absolute z-0 w-full h-full top-0 left-0 object-cover rounded-3xl brightness-90 transition ease-in-out duration-300' src={getImageURL(city.image)} alt={city.title} />
      </div>
    </Link>

  )
}

export default CityCard
