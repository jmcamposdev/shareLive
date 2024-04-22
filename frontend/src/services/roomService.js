import api from './api'

const RoomService = {
  getAllRooms: async () => {
    try {
      const rooms = await api.get('rooms')
      return rooms
    } catch (error) {
      console.error('Error getting rooms:', error.message)
      throw error
    }
  },

  getRoom: async (id) => {
    try {
      const room = await api.get(`rooms/${id}`)
      return room
    } catch (error) {
      console.error('Error getting room:', error.message)
      throw error
    }
  },

  createRoom: async (room) => {
    try {
      const newRoom = await api.post('rooms', room)
      return newRoom
    } catch (error) {
      console.error('Error creating room:', error.message)
      throw error
    }
  },

  updateRoom: async (room) => {
    try {
      const updatedRoom = await api.put(
        `rooms/${room.id}`,
        room
      )
      return updatedRoom
    } catch (error) {
      console.error('Error updating room:', error.message)
      throw error
    }
  },

  deleteRoom: async (id) => {
    try {
      await api.delete(`rooms/${id}`)
    } catch (error) {
      console.error('Error deleting room:', error.message)
      throw error
    }
  }
}

export default RoomService
