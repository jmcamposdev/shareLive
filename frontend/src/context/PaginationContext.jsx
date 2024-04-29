import React, { createContext, useContext, useEffect, useState } from 'react'

// Create the PaginationContext
export const PaginationContext = createContext()

export const usePagination = () => useContext(PaginationContext)

// Create the PaginationContextProvider component
export const PaginationProvider = ({ presetData = [], defaultItemsPerPage = 5, anchor, children }) => {
  // State variables
  const [data, setData] = useState(presetData)
  const [pageData, setPageData] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  // Context value
  const contextValue = {
    data,
    setData,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
    pageData
  }

  // Cada vez que cambia el currentPage redirect a un ancla en la página
  useEffect(() => {
    if (currentPage > 1) {
      scrollToRoomListing()
    }
  }, [currentPage])

  // Función para desplazarse al elemento #roomListing
  const scrollToRoomListing = () => {
    const roomListingElement = document.getElementById(anchor)
    if (roomListingElement) {
      roomListingElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    contextValue.totalPages = Math.ceil(data.length / itemsPerPage)
  }, [data, itemsPerPage])

  useEffect(() => {
    setData(presetData)
  }, [presetData])

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    setPageData(data.slice(start, end))
  }, [data, currentPage, itemsPerPage])

  // Render the children components with the context value
  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  )
}
