import User from '../models/User.js'
import { CLOUDINARY_FOLDERS, checkAndDeleteFolder, handleDeleteImage } from '../storage/cloudinary.js'

const deleteAllImagesOfCloudinay = async (room) => {
  // Delete all images from Cloudinary
  const deletionPromises = room.images.map(async (img) => {
    return handleDeleteImage(img, `${CLOUDINARY_FOLDERS.ROOMS}/${room._id}`)
  })

  await Promise.all(deletionPromises)

  // Delete the folder
  await checkAndDeleteFolder(`${CLOUDINARY_FOLDERS.ROOMS}/${room._id}`)
}

const deleteRoomInFavourites = async (room) => {
  // Delete the id of the room from the favouriteRoomsIds array of all users
  await User.updateMany(
    { favouriteRoomsIds: room._id },
    { $pull: { favouriteRoomsIds: room._id } }
  )
}

export { deleteAllImagesOfCloudinay, deleteRoomInFavourites }
