import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Create the PaginationContext
export const PaginationContext = createContext()

export const usePagination = () => useContext(PaginationContext)

// Create the PaginationContextProvider component
export const PaginationProvider = ({ presetData = [], defaultItemsPerPage = 5, elementIdToScroll, children, elementType }) => {
  // State variables
  const [data, setData] = useState(presetData)
  const [pageData, setPageData] = useState([])
  const itemsPerPage = useMemo(() => defaultItemsPerPage, [defaultItemsPerPage])
  const [currentPage, setCurrentPage] = useState(1)
  // Context value
  const contextValue = useMemo(() => ({
    data,
    setData,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
    pageData,
    elementIdToScroll,
    elementType
  }), [data, setData, itemsPerPage, currentPage, setCurrentPage, pageData])

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

PaginationProvider.propTypes = {
  presetData: PropTypes.array,
  defaultItemsPerPage: PropTypes.number,
  nodeRefToScroll: PropTypes.object,
  children: PropTypes.node.isRequired,
  elementType: PropTypes.string
}
