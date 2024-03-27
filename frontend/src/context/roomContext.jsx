import { createContext, useState } from 'react'

export const RoomContext = createContext()

export const RoomProvider = ({ roomsData, children }) => {
  const [rooms, setRooms] = useState(roomsData)
  const [isGridView, setIsGridView] = useState(false)

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

  return (
    <RoomContext.Provider value={{
      rooms,
      setRooms,
      gridView: {
        isGridView,
        onGridClick,
        onListClick
      },
      orderBy: {
        newest: orderByNewest,
        lowPrice: orderByLowPrice,
        highPrice: orderByHighPrice
      }
    }}
    >
      {children}
    </RoomContext.Provider>
  )
}

export const RoomConsumer = RoomContext.Consumer
