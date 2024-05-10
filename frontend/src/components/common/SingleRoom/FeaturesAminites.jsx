import { toNormalCase } from '../../../utils/formatString'

const PropertyFeaturesAminites = ({ amenities }) => {
  if (!amenities) return null

  // Filtrar las comodidades activadas (true)
  const activatedAmenities = Object.entries(amenities)
    .filter(([amenity, activated]) => activated)
    .map(([amenity, activated]) => amenity)

  // Calcular la cantidad de elementos por columna
  const totalItems = activatedAmenities.length
  const itemsPerColumn = Math.ceil(totalItems / 3)

  // Dividir la lista en tres columnas
  const columns = []
  for (let i = 0; i < totalItems; i += itemsPerColumn) {
    columns.push(activatedAmenities.slice(i, i + itemsPerColumn))
  }

  // Dividir el array de amenities en grupos de 4
  // const columns = chunkArray(amenities, 4)
  return (
    <>
      {' '}
      {columns.length > 0
        ? (
            columns.map((column, index) => (
              <div key={index} className='col-sm-6 col-md-4 w-full sm:w-1/2 md:w-1/3'>
                <div className='pd-list'>
                  {column.map((amenity, i) => (
                    <p key={i} className='text mb-0 dark:text-white'>
                      <i className='fas fa-circle fz6 align-middle pe-2' />
                      {toNormalCase(amenity)}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )
        : (
          <p>No amenities available</p>
          )}
    </>
  )
}

export default PropertyFeaturesAminites
