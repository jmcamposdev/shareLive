import { createContext, useEffect, useMemo, useState } from 'react'
import { ORDER_ROOMS_BY } from '../constants/rooms.constants'
import { toCamelCase } from '../utils/formatString'

export const RoomSearchContext = createContext()

export const RoomSearchProvider = ({ roomsData = [], defaultFilters, loading, children }) => {
  const [rooms, setRooms] = useState(roomsData)
  const [isGridView, setIsGridView] = useState(false)
  const [orderBy, setOrderBy] = useState(ORDER_ROOMS_BY.NEWEST)
  const [filters, setFilters] = useState(defaultFilters || {
    price: {
      min: 0,
      max: 0
    },
    structureType: 'all',
    bedrooms: 0,
    bathrooms: 0,
    location: 'all',
    sqft: {
      min: 0,
      max: 0
    },
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

  useEffect(() => {
    setRooms(roomsData)
  }, [roomsData])

  /**
   * ---------------------------------------------
   * Grid View and List View Handler
   * ---------------------------------------------
   */
  const onGridClick = () => {
    setIsGridView(true)
  }
  const onListClick = () => {
    setIsGridView(false)
  }

  /**
   * ---------------------------------------------
   * Order Rooms Function
   * ---------------------------------------------
   */
  useEffect(() => {
    switch (orderBy) {
      case ORDER_ROOMS_BY.NEWEST:
        orderByNewest()
        break
      case ORDER_ROOMS_BY.LOW_PRICE:
        orderByLowPrice()
        break
      case ORDER_ROOMS_BY.HIGH_PRICE:
        orderByHighPrice()
        break
      default:
        break
    }
  }, [orderBy])

  const orderRoomsBy = (order) => {
    setOrderBy(order)
  }

  const orderByNewest = () => {
    const roomsCopy = [...rooms]
    const orderedRooms = roomsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setRooms([...orderedRooms])
  }
  const orderByLowPrice = () => {
    const roomsCopy = [...rooms]
    const orderedRooms = roomsCopy.sort((a, b) => a.price - b.price)
    setRooms([...orderedRooms])
  }
  const orderByHighPrice = () => {
    const roomsCopy = [...rooms]
    const orderedRooms = roomsCopy.sort((a, b) => b.price - a.price)
    setRooms([...orderedRooms])
  }

  /**
   * ---------------------------------------------
   * Filter Rooms Function
   * ---------------------------------------------
   */
  useEffect(() => {
    const { price, bedrooms, bathrooms, structureType, location, sqft, amenities } = filters
    if (price.min === 0 && price.max === 0 && bedrooms === 0 && bathrooms === 0 && location === 'all' && sqft.min === 0 && sqft.max === 0 && structureType === 'all' && amenities.every((amenity) => !amenity.checked)) {
      setRooms([...roomsData])
      return
    }
    const filteredRooms = roomsData.filter((room) => {
      let isValid = true
      if (price.min !== 0 || price.max !== 0) { // Filter by price
        isValid = room.price >= price.min && room.price <= price.max
      }
      if (bedrooms !== 0 && isValid) { // Filter by bedrooms
        isValid = room.bedrooms >= bedrooms
      }
      if (bathrooms !== 0 && isValid) { // Filter by bathrooms
        isValid = room.bathrooms >= bathrooms
      }
      if (location !== 'all' && isValid) { // Filter by location
        isValid = room.state === location
      }
      if (structureType !== 'all' && isValid) { // Filter by structure type
        isValid = room.structureType === structureType
      }
      console.log(typeof sqft.max)
      if ((sqft.min !== 0 || sqft.max !== 0) && isValid) { // Filter by square meters
        // If is defined only min or max, then filter by only one value
        if (sqft.min !== 0 && sqft.max === 0) {
          isValid = room.squareMeters >= sqft.min
        } else if (sqft.min === 0 && sqft.max !== 0) {
          isValid = room.squareMeters <= sqft.max
        } else {
          isValid = room.squareMeters >= sqft.min && room.squareMeters <= sqft.max
        }
      }
      if (amenities.some((amenity) => amenity.checked) && isValid) { // Filter by amenities
        isValid = amenities.every((amenity) => {
          if (amenity.checked) {
            return room.amenities[toCamelCase(amenity.label)] === true
          }
          return true
        })
      }
      return isValid
    })
    setRooms([...filteredRooms])
  }, [filters])

  const filterByPriceRange = (min, max) => {
    setFilters({ ...filters, price: { min, max } })
  }
  const filterByBedrooms = (bedrooms) => {
    setFilters({ ...filters, bedrooms })
  }
  const filterByBathrooms = (bathrooms) => {
    setFilters({ ...filters, bathrooms })
  }
  const filterByStructureType = (structureType) => {
    setFilters({ ...filters, structureType })
  }
  const filterByLocation = (location) => {
    setFilters({ ...filters, location })
  }
  const filterBySquareMeters = (min, max) => {
    console.log(min, max)
    setFilters({
      ...filters,
      sqft: {
        min: min ? parseInt(min) : 0,
        max: max ? parseInt(max) : 0
      }
    })
  }
  const filterByAmenities = (amenities) => {
    setFilters({ ...filters, amenities })
  }
  const resetFilters = () => {
    setFilters({
      price: {
        min: 0,
        max: 0
      },
      bedrooms: 0,
      bathrooms: 0,
      structureType: 'all',
      location: 'all',
      sqft: {
        min: 0,
        max: 0
      },
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

  const contextValue = useMemo(() => ({
    rooms,
    setRooms,
    gridView: {
      isGridView,
      onGridClick,
      onListClick
    },
    orderBy: orderRoomsBy,
    orderByValue: orderBy,
    filterBy: {
      price: filterByPriceRange,
      bedrooms: filterByBedrooms,
      bathrooms: filterByBathrooms,
      structureType: filterByStructureType,
      location: filterByLocation,
      sqft: filterBySquareMeters,
      amenities: filterByAmenities
    },
    resetFilters,
    filters,
    loading
  }), [rooms, setRooms, isGridView, onGridClick, onListClick, orderRoomsBy, filterByPriceRange, filterByBedrooms, filterByBathrooms, filterByLocation, filterBySquareMeters, filterByAmenities, filterByStructureType, resetFilters, filters])

  return (
    <RoomSearchContext.Provider value={contextValue}>
      {children}
    </RoomSearchContext.Provider>
  )
}

export const RoomConsumer = RoomSearchContext.Consumer
