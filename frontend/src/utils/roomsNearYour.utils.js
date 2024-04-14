export const roomsNearYouFilter = (rooms, location) => {
  if (!location) {
    return rooms
  }

  return rooms.filter(room => {
    let isValid = true

    isValid = room.city === location.city

    if (!isValid) {
      isValid = room.countryCode === location.country
    }

    return isValid
  })
}
