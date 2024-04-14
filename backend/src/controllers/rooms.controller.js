import Room from '../models/Room.js'

/**
 * Get all rooms
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const getRooms = (req, res) => {
  Room.find()
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
const getRoom = (req, res) => {
  const { id } = req.params
  Room.findById(id)
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
        message: 'An error occurred while getting a room',
        error
      })
    })
}

/**
 * Create a new room
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const createRoom = (req, res) => {
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

export {
  getRooms,
  getRoom,
  createRoom,
  updateRoom
}
