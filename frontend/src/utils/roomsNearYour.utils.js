import { removeDiacritics } from './formatString'

export const roomsNearYouFilter = (rooms, location) => {
  if (!location) {
    return rooms
  }

  return rooms.filter(room => {
    let isValid = true

    isValid = removeDiacritics(room.city) === removeDiacritics(location.city)

    if (!isValid) {
      isValid = removeDiacritics(room.countryCode) === removeDiacritics(location.country)
    }

    return isValid
  })
}
