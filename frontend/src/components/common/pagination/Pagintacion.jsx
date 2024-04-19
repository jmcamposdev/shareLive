import React from 'react'
import { usePagination } from '../../../context/PaginationContext'

const Pagination = () => {
  const {
    data,
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage
  } = usePagination()

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return
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
    <div className='mbp_pagination text-center'>
      <ul className='page_navigation'>
        {/* Botón para la página anterior */}
        <li className='page-item'>
          <span
            className='page-link pointer'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className='fas fa-angle-left dark:text-white' />
          </span>
        </li>

        {/* Números de página */}
        {renderPageNumbers()}

        {/* Botón para la página siguiente */}
        <li className='page-item'>
          <span
            className='page-link pointer dark:!text-white'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className='fas fa-angle-right dark:text-white' />
          </span>
        </li>
      </ul>
      <p className='mt10 pagination_page_count text-center'>
        {((currentPage - 1) * itemsPerPage) + 1}-{(currentPage * itemsPerPage) > data.length ? data.length : (currentPage * itemsPerPage)} of {data.length}+ property available
      </p>
    </div>
  )
}

export default Pagination
