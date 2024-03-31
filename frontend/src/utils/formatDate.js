export function formatDate (dateString) {
  // Crear un objeto Date a partir de la cadena de fecha
  const date = new Date(dateString)

  // Obtener el nombre del mes
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const monthIndex = date.getMonth()
  const monthName = monthNames[monthIndex]

  // Obtener el día del mes
  const day = date.getDate()

  // Obtener el año
  const year = date.getFullYear()

  // Formatear la fecha en el formato deseado
  const formattedDate = `${monthName} ${day}, ${year}`

  return formattedDate
}
