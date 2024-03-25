import PageIntro from '../../../components/common/PageIntroGrey/PageIntroGrey'
import WebLayout from '../../../layout/WebLayout'
import RoomBackgroundImage from '../../../assets/img/rooms/rooms-background.png'
import { useEffect, useState } from 'react'
import ListingSidebar from '../../../components/Rooms/ListingSidebar/ListingSidebar'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const [currentSortingOption, setCurrentSortingOption] = useState('Newest')

  const [sortedFilteredData, setSortedFilteredData] = useState([])

  const [pageNumber, setPageNumber] = useState(1)
  const [colstyle, setColstyle] = useState(false)
  const [pageItems, setPageItems] = useState([])
  const [pageContentTrac, setPageContentTrac] = useState([])

  useEffect(() => {
    setPageItems(
      sortedFilteredData.slice((pageNumber - 1) * 6, pageNumber * 6)
    )
    setPageContentTrac([
      (pageNumber - 1) * 6 + 1,
      pageNumber * 6,
      sortedFilteredData.length
    ])
  }, [pageNumber, sortedFilteredData])

  const [listingStatus, setListingStatus] = useState('All')
  const [propertyTypes, setPropertyTypes] = useState([])
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [bedrooms, setBedrooms] = useState(0)
  const [bathroms, setBathroms] = useState(0)
  const [location, setLocation] = useState('All Cities')
  const [squirefeet, setSquirefeet] = useState([])
  const [yearBuild, setyearBuild] = useState([])
  const [categories, setCategories] = useState([])

  const resetFilter = () => {
    setListingStatus('All')
    setPropertyTypes([])
    setPriceRange([0, 100000])
    setBedrooms(0)
    setBathroms(0)
    setLocation('All Cities')
    setSquirefeet([])
    setyearBuild([0, 2050])
    setCategories([])
    setCurrentSortingOption('Newest')
    document.querySelectorAll('.filterInput').forEach(function (element) {
      element.value = null
    })

    document.querySelectorAll('.filterSelect').forEach(function (element) {
      element.value = 'All Cities'
    })
  }
  const [searchQuery, setSearchQuery] = useState('')

  const handlelistingStatus = (elm) => {
    setListingStatus((pre) => (pre === elm ? 'All' : elm))
  }

  const handlepropertyTypes = (elm) => {
    if (elm === 'All') {
      setPropertyTypes([])
    } else {
      setPropertyTypes((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el !== elm)] : [...pre, elm]
      )
    }
  }
  const handlepriceRange = (elm) => {
    setPriceRange(elm)
  }
  const handlebedrooms = (elm) => {
    setBedrooms(elm)
  }
  const handlebathroms = (elm) => {
    setBathroms(elm)
  }
  const handlelocation = (elm) => {
    console.log(elm)
    setLocation(elm)
  }
  const handlesquirefeet = (elm) => {
    setSquirefeet(elm)
  }
  const handleyearBuild = (elm) => {
    setyearBuild(elm)
  }
  const handlecategories = (elm) => {
    if (elm === 'All') {
      setCategories([])
    } else {
      setCategories((pre) =>
        pre.includes(elm) ? [...pre.filter((el) => el !== elm)] : [...pre, elm]
      )
    }
  }
  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlelocation,
    handlesquirefeet,
    handleyearBuild,
    handlecategories,
    priceRange,
    listingStatus,
    propertyTypes,
    resetFilter,

    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    setPropertyTypes,
    setSearchQuery
  }

  useEffect(() => {
    const refItems = rooms.filter((elm) => {
      if (listingStatus === 'All') {
        return true
      } else if (listingStatus === 'Buy') {
        return !elm.forRent
      } else if (listingStatus === 'Rent') {
        return elm.forRent
      }
      return true
    })

    let filteredArrays = []

    if (propertyTypes.length > 0) {
      const filtered = refItems.filter((elm) =>
        propertyTypes.includes(elm.propertyType)
      )
      filteredArrays = [...filteredArrays, filtered]
    }
    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => el.bed >= bedrooms)
    ]
    filteredArrays = [
      ...filteredArrays,
      refItems.filter((el) => el.bath >= bathroms)
    ]
    filteredArrays = [
      ...filteredArrays,
      refItems.filter(
        (el) =>
          el.city
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          el.location
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          el.title
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          el.features
            .join(' ')
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
      )
    ]

    filteredArrays = [
      ...filteredArrays,
      !categories.length
        ? [...refItems]
        : refItems.filter((elm) =>
          categories.every((elem) => elm.features.includes(elem))
        )
    ]

    if (location !== 'All Cities') {
      filteredArrays = [
        ...filteredArrays,
        refItems.filter((el) => el.city === location)
      ]
    }

    if (priceRange.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          Number(elm.price.split('$')[1].split(',').join('')) >=
            priceRange[0] &&
          Number(elm.price.split('$')[1].split(',').join('')) <= priceRange[1]
      )
      filteredArrays = [...filteredArrays, filtered]
    }
    if (squirefeet.length > 0 && squirefeet[1]) {
      const filtered = refItems.filter(
        (elm) => elm.sqft >= squirefeet[0] && elm.sqft <= squirefeet[1]
      )
      filteredArrays = [...filteredArrays, filtered]
    }
    if (yearBuild.length > 0) {
      const filtered = refItems.filter(
        (elm) =>
          elm.yearBuilding >= yearBuild[0] && elm.yearBuilding <= yearBuild[1]
      )
      filteredArrays = [...filteredArrays, filtered]
    }

    const commonItems = refItems.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    )

    setFilteredData(commonItems)
  }, [
    listingStatus,
    propertyTypes,
    priceRange,
    bedrooms,
    bathroms,
    location,
    squirefeet,
    yearBuild,
    categories,
    searchQuery
  ])

  useEffect(() => {
    setPageNumber(1)
    if (currentSortingOption === 'Newest') {
      const sorted = [...filteredData].sort(
        (a, b) => a.yearBuilding - b.yearBuilding
      )
      setSortedFilteredData(sorted)
    } else if (currentSortingOption.trim() === 'Price Low') {
      const sorted = [...filteredData].sort(
        (a, b) =>
          a.price.split('$')[1].split(',').join('') -
          b.price.split('$')[1].split(',').join('')
      )
      setSortedFilteredData(sorted)
    } else if (currentSortingOption.trim() === 'Price High') {
      const sorted = [...filteredData].sort(
        (a, b) =>
          b.price.split('$')[1].split(',').join('') -
          a.price.split('$')[1].split(',').join('')
      )
      setSortedFilteredData(sorted)
    } else {
      setSortedFilteredData(filteredData)
    }
  }, [filteredData, currentSortingOption])

  return (
    <WebLayout>
      <PageIntro title='Rooms' description='Find the perfect room for your stay' backgroundImage={RoomBackgroundImage} />

      <section className='pt0 pb90 bgc-f7'>
        <div className='container'>
          <div className='row gx-xl-5'>
            <div className='col-lg-4 d-none d-lg-block'>
              <ListingSidebar filterFunctions={filterFunctions} />
            </div>
            {/* End .col-lg-4 */}

            {/* start mobile filter sidebar */}
            <div
              className='offcanvas offcanvas-start p-0'
              tabIndex='-1'
              id='listingSidebarFilter'
              aria-labelledby='listingSidebarFilterLabel'
            >
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='listingSidebarFilterLabel'>
                  Listing Filter
                </h5>
                <button
                  type='button'
                  className='btn-close text-reset'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                />
              </div>
              <div className='offcanvas-body p-0'>
                <ListingSidebar filterFunctions={filterFunctions} />
              </div>
            </div>
            {/* End mobile filter sidebar */}

            <div className='col-lg-8'>
              <div className='row align-items-center mb20'>
                {/* <TopFilterBar
                  pageContentTrac={pageContentTrac}
                  colstyle={colstyle}
                  setColstyle={setColstyle}
                  setCurrentSortingOption={setCurrentSortingOption}
                /> */}
              </div>
              {/* End TopFilterBar */}

              <div className='row mt15'>
                {/* <FeaturedListings colstyle={colstyle} data={pageItems} /> */}
              </div>
              {/* End .row */}

              <div className='row'>
                {/* <PaginationTwo
                  pageCapacity={6}
                  data={sortedFilteredData}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                /> */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </WebLayout>
  )
}

export default Rooms
