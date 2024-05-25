const onlineUsers = new Map()

export const socketMessages = (io) => {
  io.on('connection', (socket) => {
    socket.on('add-user', (userId) => onlineUsers.set(userId, socket.id))

    socket.on('send-message', (data) => {
      const sendUserSocket = onlineUsers.get(data.to)
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit('msg-recieve', { _id: data._id, message: data.msg })
      }
    })

    socket.on('disconnect', () => {
      // Cleanup the user from the map
      for (const [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId)
          break
        }
      }
    })
  })
}
