import Room from '../models/Room.js'
import User from '../models/User.js'
import { handleDelete, handleUpload } from '../storage/cloudinary.js'
/**
 * Get all rooms
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const getRooms = (req, res) => {
  Room.find().sort({ createdAt: -1 }).populate('user')
    .then((rooms) => {
      res.json(rooms)
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error occurred while getting rooms',
        error
      })
    })
}

/**
 * Get a room by id
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const getRoom = async (req, res) => {
  try {
    const { id } = req.params
    const room = await Room.findById(id).populate('user')
    // Populate the reviews of the user
    await room.populate('user.reviews')
    if (!room) {
      return res.status(404).json({
        message: 'Room not found'
      })
    }
    res.json(room)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting a room',
      error
    })
  }
}

/**
 * Create a new room
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const createRoom = async (req, res) => {
  // Clean the images array
  req.body.images = []
  // Assing the user
  const user = await User.findById(req.body.user)
  req.body.user = user._id

  const room = new Room(req.body)
  room.save()
    .then((room) => {
      res.json(room)
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error occurred while creating a room',
        error
      })
    })
}

const uploadImages = async (req, res) => {
  const { id } = req.params

  const uploadedImages = []
  try {
    // Subir cada imagen a Cloudinary y guardar la URL en uploadedImages
    for (const image of req.files) {
      const cldRes = await handleUpload(image)
      uploadedImages.push(cldRes.secure_url)
    }
  } catch (error) {
    console.error('Error uploading images:', error)
    return res.status(500).json({
      message: 'An error occurred while uploading images',
      error
    })
  }

  // Save the image URLs in the room
  const room = await Room.findById(id)
  room.images = uploadedImages
  await room.save()

  // Guardar las URLs en la base de datos o realizar cualquier otra acción necesaria
  console.log('Imágenes subidas:', uploadedImages)

  res.send(uploadedImages)
}

const deleteImages = async (req, res) => {
  const { id } = req.params
  const { images } = req.body

  try {
    const room = await Room.findById(id)
    room.images = room.images.filter((img) => !images.includes(img))
    await room.save()
    // Delete the images from Cloudinary
    for (const img of images) {
      await handleDelete(img)
    }
  } catch (error) {
    console.error('Error deleting images:', error)
    return res.status(500).json({
      message: 'An error occurred while deleting images',
      error
    })
  }

  res.send({
    message: 'Images deleted'
  })
}

/**
 * Update a room
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const updateRoom = (req, res) => {
  const { id } = req.params
  Room.findByIdAndUpdate(id, req.body, { new: true })
    .then((room) => {
      if (!room) {
        return res.status(404).json({
          message: 'Room not found'
        })
      }

      res.json(room)
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error occurred while updating a room',
        error
      })
    })
}

const deleteRoom = (req, res) => {
  const { id } = req.params
  Room.findByIdAndDelete(id)
    .then((room) => {
      if (!room) {
        return res.status(404).json({
          message: 'Room not found'
        })
      }

      res.json(room)
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error occurred while deleting a room',
        error
      })
    })
}

export {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  uploadImages,
  deleteImages
}
