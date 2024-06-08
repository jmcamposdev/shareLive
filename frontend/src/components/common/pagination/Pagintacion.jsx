import React from 'react'
import { usePagination } from '../../../context/PaginationContext'

const Pagination = () => {
  const {
    data,
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage,
    elementIdToScroll,
    pageData,
    elementType
  } = usePagination()

  // Función para desplazarse al elemento #roomListing
  const scrollToRoomListing = () => {
    if (elementIdToScroll) {
      setTimeout(() => {
        const element = document.getElementById(elementIdToScroll)
        const headerHeight = 90 // Adjust this value according to your header height
        const scrollPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
      }, 200)
    }
  }

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return
    scrollToRoomListing()
    setCurrentPage(pageNumber)
  }

  // Función para generar los números de página
  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPageNumbersToShow = 6 // Máximo de números de página a mostrar
    const middlePage = Math.ceil(maxPageNumbersToShow / 2)

    // Calculamos el rango de números de página a mostrar
    let startPageNumber = 1
    let endPageNumber = totalPages

    if (totalPages > maxPageNumbersToShow) {
      if (currentPage <= middlePage) {
        endPageNumber = maxPageNumbersToShow
      } else if (currentPage > totalPages - middlePage) {
        startPageNumber = totalPages - maxPageNumbersToShow + 1
      } else {
        startPageNumber = currentPage - middlePage + 1
        endPageNumber = currentPage + middlePage - 1
      }
    }

    // Generamos los números de página
    for (let i = startPageNumber; i <= endPageNumber; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers.map(number => (
      <li
        key={number}
        className={currentPage === number ? 'active page-item' : 'page-item'}
        onClick={() => handlePageChange(number)}
      >
        <span className='page-link pointer dark:text-white'>{number}</span>
      </li>
    ))
  }

  // Renderizamos el componente de paginación
  return (
    <>
      {pageData.length !== 0 && (
        <div className='mbp_pagination text-center'>
          <ul className='page_navigation'>
            {/* Botón para la página anterior */}
            <li className='page-item overflow-hidden dark:!bg-midnight'>
              <span
                className='page-link pointer dark:bg-midnight'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className='fas fa-angle-left dark:text-white' />
              </span>
            </li>

            {/* Números de página */}
            {renderPageNumbers()}

            {/* Botón para la página siguiente */}
            <li className='page-item overflow-hidden dark:!bg-midnight'>
              <span
                className='page-link pointer dark:!text-white dark:bg-midnight'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className='fas fa-angle-right dark:text-white' />
              </span>
            </li>
          </ul>
          <p className='mt10 pagination_page_count text-center dark:text-white'>
            {((currentPage - 1) * itemsPerPage) + 1}-{(currentPage * itemsPerPage) > data.length ? data.length : (currentPage * itemsPerPage)} of {data.length}+ {elementType} available
          </p>
        </div>
      )}
    </>

  )
}

export default Pagination
