import { createContext, useMemo, useState } from 'react'
import { ORDER_ROOMS_BY } from '../constants/rooms.constants'
import { toCamelCase } from '../utils/formatString'

export const RoomSearchContext = createContext()

export const RoomSearchProvider = ({ roomsData = [], defaultFilters, loading, children }) => {
  const [isGridView, setIsGridView] = useState(false)
  const [orderBy, setOrderBy] = useState(ORDER_ROOMS_BY.NEWEST)
  const [filters, setFilters] = useState(defaultFilters || {
    search: '',
    price: { min: 0, max: 0 },
    structureType: 'all',
    bedrooms: 0,
    bathrooms: 0,
    location: 'all',
    sqft: { min: 0, max: 0 },
    amenities: [
      { label: 'Washer', checked: false },
      { label: 'Dryer', checked: false },
      { label: 'Microwave', checked: false },
      { label: 'Dish Washer', checked: false },
      { label: 'Refrigerator', checked: false },
      { label: 'Furnace', checked: false },
      { label: 'Air Conditioning', checked: false },
      { label: 'TV', checked: false },
      { label: 'Wifi', checked: false },
      { label: 'Garage', checked: false },
      { label: 'Elevator', checked: false },
      { label: 'Electric Heater', checked: false }
    ]
  })

  /**
   * ---------------------------------------------
   * Grid View and List View Handler
   * ---------------------------------------------
   */
  const onGridClick = () => setIsGridView(true)
  const onListClick = () => setIsGridView(false)

  /**
   * ---------------------------------------------
   * Order Rooms Function
   * ---------------------------------------------
   */
  const orderRoomsBy = (order) => setOrderBy(order)

  const orderRooms = (roomsList) => {
    const orderedRooms = [...roomsList]
    switch (orderBy) {
      case ORDER_ROOMS_BY.NEWEST:
        orderedRooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      case ORDER_ROOMS_BY.LOW_PRICE:
        orderedRooms.sort((a, b) => a.price - b.price)
        break
      case ORDER_ROOMS_BY.HIGH_PRICE:
        orderedRooms.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }
    return orderedRooms
  }

  /**
   * ---------------------------------------------
   * Filter Rooms Function
   * ---------------------------------------------
   */
  const filterRooms = () => {
    const { price, bedrooms, bathrooms, structureType, location, sqft, amenities } = filters
    let filteredRooms = roomsData

    if (filters.search) {
      const search = filters.search.toLowerCase()
      filteredRooms = filteredRooms.filter(room =>
        room.title.toLowerCase().includes(search) ||
        room.excerpt?.toLowerCase().includes(search) ||
        room.description?.toLowerCase().includes(search) ||
        room.city.toLowerCase().includes(search) ||
        room.state.toLowerCase().includes(search) ||
        room.country.toLowerCase().includes(search)
      )
    }

    if (price.min !== 0 || price.max !== 0) {
      filteredRooms = filteredRooms.filter(room => room.price >= price.min && room.price <= price.max)
    }
    if (bedrooms !== 0) {
      filteredRooms = filteredRooms.filter(room => room.bedrooms >= bedrooms)
    }
    if (bathrooms !== 0) {
      filteredRooms = filteredRooms.filter(room => room.bathrooms >= bathrooms)
    }
    if (location !== 'all') {
      filteredRooms = filteredRooms.filter(room =>
        location.city?.includes(room.city) || location.state?.includes(room.state) || location.city?.includes(room.state) || location.state?.includes(room.city)
      )
    }
    if (structureType !== 'all') {
      filteredRooms = filteredRooms.filter(room => room.structureType === structureType)
    }
    if (sqft.min !== 0 || sqft.max !== 0) {
      filteredRooms = filteredRooms.filter(room =>
        (sqft.min === 0 || room.squareMeters >= sqft.min) &&
        (sqft.max === 0 || room.squareMeters <= sqft.max)
      )
    }
    if (amenities.some(amenity => amenity.checked)) {
      filteredRooms = filteredRooms.filter(room =>
        amenities.every(amenity => !amenity.checked || room.amenities[toCamelCase(amenity.label)])
      )
    }

    return orderRooms(filteredRooms)
  }

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }))
  }

  const resetFilters = () => {
    setFilters({
      price: { min: 0, max: 0 },
      bedrooms: 0,
      bathrooms: 0,
      structureType: 'all',
      location: 'all',
      sqft: { min: 0, max: 0 },
      amenities: [
        { label: 'Washer', checked: false },
        { label: 'Dryer', checked: false },
        { label: 'Microwave', checked: false },
        { label: 'Dish Washer', checked: false },
        { label: 'Refrigerator', checked: false },
        { label: 'Furnace', checked: false },
        { label: 'Air Conditioning', checked: false },
        { label: 'TV', checked: false },
        { label: 'Wifi', checked: false },
        { label: 'Garage', checked: false },
        { label: 'Elevator', checked: false },
        { label: 'Electric Heater', checked: false }
      ]
    })
  }

  const filteredRooms = useMemo(filterRooms, [filters, roomsData, orderBy])

  const contextValue = useMemo(() => ({
    rooms: filteredRooms,
    gridView: {
      isGridView,
      onGridClick,
      onListClick
    },
    orderBy: orderRoomsBy,
    orderByValue: orderBy,
    filterBy: {
      search: search => {
        handleFilterChange('search', search)
        // Reset location filter when searching
        handleFilterChange('location', 'all')
      },
      price: (min, max) => handleFilterChange('price', { min, max }),
      bedrooms: bedrooms => handleFilterChange('bedrooms', bedrooms),
      bathrooms: bathrooms => handleFilterChange('bathrooms', bathrooms),
      structureType: structureType => handleFilterChange('structureType', structureType),
      location: location => handleFilterChange('location', location),
      sqft: (min, max) => handleFilterChange('sqft', { min: min ? parseInt(min) : 0, max: max ? parseInt(max) : 0 }),
      amenities: amenities => handleFilterChange('amenities', amenities)
    },
    resetFilters,
    filters,
    loading
  }), [filteredRooms, isGridView, orderBy, filters, loading])

  return (
    <RoomSearchContext.Provider value={contextValue}>
      {children}
    </RoomSearchContext.Provider>
  )
}

export const RoomConsumer = RoomSearchContext.Consumer
