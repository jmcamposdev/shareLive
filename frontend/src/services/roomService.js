import useAuth from '../hooks/useAuth'
import api from './api'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

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

  uploadRoomImages: async (id, images) => {
    const { token } = useAuth()

    try {
      const formData = new FormData()
      images.forEach((image) => {
        formData.append('images', image)
      })

      const imagesResponse = await fetch(`${BASE_URL}/rooms/${id}/upload`, {
        method: 'POST',
        headers: {
          'x-access-token': token
        },
        body: formData
      })
      return imagesResponse
    } catch (error) {
      console.error('Error uploading images:', error.message)
      throw error
    }
  },

  deleteRoomImages: async (id, images) => {
    try {
      const imagesResponse = api.delete(`rooms/${id}/upload`, { images })
      return imagesResponse
    } catch (error) {
      console.error('Error deleting images:', error.message)
      throw error
    }
  },

  updateRoom: async (room) => {
    try {
      const updatedRoom = await api.put(
        `rooms/${room._id}`,
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
  },

  getVisits: async (id) => {
    try {
      const visits = await api.get(`rooms/${id}/visits`)
      return visits || 0
    } catch (error) {
      console.error('Error getting visits:', error.message)
      throw error
    }
  }
}

export default RoomService
