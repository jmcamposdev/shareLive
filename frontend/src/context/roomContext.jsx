import { createContext, useEffect, useState } from 'react'
import { ORDER_BY_HIGH_PRICE, ORDER_BY_LOW_PRICE, ORDER_BY_NEWEST } from '../constants/rooms.constants'

export const RoomContext = createContext()

export const RoomProvider = ({ roomsData, children }) => {
  const [rooms, setRooms] = useState(roomsData)
  const [isGridView, setIsGridView] = useState(false)
  const [orderBy, setOrderBy] = useState(ORDER_BY_NEWEST)
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 0
    },
    bedrooms: 0,
    bathrooms: 0,
    location: 'all',
    sqft: {
      min: 0,
      max: 0
    },
    amenities: []
  })

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
      case ORDER_BY_NEWEST:
        orderByNewest()
        break
      case ORDER_BY_LOW_PRICE:
        orderByLowPrice()
        break
      case ORDER_BY_HIGH_PRICE:
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
    const orderedRooms = rooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setRooms([...orderedRooms])
  }
  const orderByLowPrice = () => {
    const orderedRooms = rooms.sort((a, b) => a.price - b.price)
    setRooms([...orderedRooms])
  }
  const orderByHighPrice = () => {
    const orderedRooms = rooms.sort((a, b) => b.price - a.price)
    setRooms([...orderedRooms])
  }

  /**
   * ---------------------------------------------
   * Filter Rooms Function
   * ---------------------------------------------
   */
  useEffect(() => {
    const { price, bedrooms, bathrooms, location, sqft, amenities } = filters
    if (price.min === 0 && price.max === 0 && bedrooms === 0 && bathrooms === 0 && location === 'all' && sqft.min === 0 && sqft.max === 0 && amenities.length === 0) {
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
      if ((sqft.min !== 0 || sqft.max !== 0) && isValid) { // Filter by square meters
        // If is defined only min or max, then filter by only one value
        if (sqft.min !== 0 && sqft.max === 0) {
          isValid = room.size >= sqft.min
        } else if (sqft.min === 0 && sqft.max !== 0) {
          isValid = room.size <= sqft.max
        } else {
          isValid = room.size >= sqft.min && room.size <= sqft.max
        }
      }
      if (amenities.length > 0 && isValid) { // Filter by amenities
        isValid = amenities.every((amenity) => room.amenities.includes(amenity))
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
  const filterByLocation = (location) => {
    setFilters({ ...filters, location })
  }
  const filterBySquareMeters = (min, max) => {
    setFilters({ ...filters, sqft: { min, max } })
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
      location: 'all',
      sqft: {
        min: 0,
        max: 0
      },
      amenities: []
    })
  }

  return (
    <RoomContext.Provider value={{
      rooms,
      setRooms,
      gridView: {
        isGridView,
        onGridClick,
        onListClick
      },
      orderBy: orderRoomsBy,
      filterBy: {
        price: filterByPriceRange,
        bedrooms: filterByBedrooms,
        bathrooms: filterByBathrooms,
        location: filterByLocation,
        sqft: filterBySquareMeters,
        amenities: filterByAmenities
      },
      resetFilters,
      filters
    }}
    >
      {children}
    </RoomContext.Provider>
  )
}

export const RoomConsumer = RoomContext.Consumer
