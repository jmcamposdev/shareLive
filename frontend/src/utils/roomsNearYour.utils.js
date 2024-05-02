import { removeDiacritics } from './formatString'

const NUMBER_OF_ROOMS = 6

export const roomsNearYouFilter = (rooms, location) => {
  if (!location) {
    return rooms
  }

  const nearRooms = rooms.filter(room => {
    let isValid = true

    isValid = removeDiacritics(room.city) === removeDiacritics(location.city)

    if (!isValid) {
      isValid = removeDiacritics(room.countryCode) === removeDiacritics(location.country)
    }

    return isValid
  })

  let filteredRooms = []
  if (nearRooms.length > NUMBER_OF_ROOMS) {
    filteredRooms = nearRooms.slice(0, NUMBER_OF_ROOMS)
  } else {
    const additionalRooms = rooms.filter(room => !nearRooms.includes(room))
    const remainingRooms = NUMBER_OF_ROOMS - nearRooms.length
    nearRooms.push(...additionalRooms.slice(0, remainingRooms))
    filteredRooms = nearRooms
  }

  return filteredRooms
}
