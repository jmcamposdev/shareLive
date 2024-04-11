import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import DebounceInput from '../../common/DebounceInput/DebounceInput'
import useCities from '../../../hooks/useCities'
import { RoomContext } from '../../../context/roomContext'

const HeroContent = () => {
  const navigate = useNavigate()
  const [visibleList, setVisibleList] = useState(false)
  const { filterBy, filters } = useContext(RoomContext)
  const [searchValue, setSearchValue] = useState('')
  const { cities, citiesLoading } = useCities({ searchValue })

  const handleSearch = (value) => {
    setSearchValue(value)
    filterBy.location(cities[0] || 'all')
  }

  const handleSelectCity = (city) => {
    setSearchValue(city.addressLabel || city.street)
    filterBy.location(city)
    setVisibleList(false)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    const queryParams = new URLSearchParams()
    queryParams.append('data', JSON.stringify(filters))

    navigate(`/rooms?${queryParams.toString()}`)
  }
  return (
    <div className='advance-style2 mt140 mt80-md mb60 mx-auto' data-aos='fade-up'>
      <div className='tab-content'>
        <div
          className='active tab-pane'
        >
          <div className='advance-content-style2'>
            <div className='flex md:flex-wrap  items-center justify-start md:justify-center'>
              <div className='basis-auto grow pr-4'>
                <div className='advance-search-field relative text-start bdrr1 bdrrn-sm'>
                  <form className='form-search relative' onSubmit={handleSearchSubmit}>
                    <div className='box-search relative'>
                      <span className='icon flaticon-home-1' />
                      <DebounceInput
                        className='form-control'
                        inputName='search'
                        placeholder='Find your dream room'
                        value={searchValue}
                        onDebouncedValueChange={handleSearch}
                        onFocus={() => setVisibleList(true)}
                        onFocusOut={() => setTimeout(() => setVisibleList(false), 200)}
                      />
                    </div>
                    {/* List of results of the search input */}
                    {visibleList && (
                      <ul className='list-results absolute bg-white w-full pr-0 rounded-lg mt-6 max-h-96 overflow-y-scroll'>
                        {citiesLoading
                          ? (
                            <li className='flex items-center gap-3 px-4 py-4 cursor-pointer hover:bg-[#FEF7F6] transition-all'>
                              <span className='icon fa-regular fa-city text-xl' />
                              <div>
                                <p className='m-0 leading-none mb-2 text-base'>Loading...</p>
                              </div>
                            </li>
                            )
                          : cities.map((city, index) => (
                            <li
                              className={`flex items-center gap-3 px-4 py-4 cursor-pointer hover:bg-[#FEF7F6] transition-all ${index === cities.length - 1 ? '' : 'bdrb1'}`}
                              key={city.addressLabel}
                              onClick={() => handleSelectCity(city)}
                            >
                              <span className='icon fa-regular fa-city text-xl' />
                              <div>
                                <p className='m-0 leading-none mb-2 text-base'>{city.addressLabel || city.street}</p>
                                <p className='m-0 leading-none text-sm text-gray-600'>{city.city}, {city.state}, {city.country}</p>
                              </div>
                            </li>
                          ))}
                      </ul>
                    )}

                  </form>
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className='w-fit pr-4 pl-4'>
                <div className='flex items-center justify-center md:justify-end md:mt-0'>
                  <button
                    className='advance-search-btn flex justify-center items-center'
                    type='button'
                    data-bs-toggle='modal'
                    data-bs-target='#advanceSeachModal'
                  >
                    <span className='flaticon-settings flex' /> Advanced
                  </button>
                  <button
                    className='advance-search-icon ud-btn btn-thm ms-4 !flex !justify-center !items-center'
                    type='button'
                    onClick={handleSearchSubmit}
                  >
                    <span className='flaticon-search flex' />
                  </button>
                </div>
              </div>
              {/* End .col-md-64 */}
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End tab-content */}
    </div>
  )
}

export default HeroContent
