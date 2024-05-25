import Message from '../models/Message.js'

const getMessages = async (req, res) => {
  try {
    const { from, to } = req.params
    const messages = await Message.find({ users: { $all: [from, to] } }).sort({ createdAt: 1 })
    const projectMessages = messages.map(message => {
      return {
        _id: message._id,
        fromSelf: message.sender.toString() === from,
        message: message.message,
        createdAt: message.createdAt
      }
    })

    res.json(projectMessages)
  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    })
  }
}

const createMessage = async (req, res) => {
  const { from, to, message } = req.body
  try {
    const data = await Message.create({
      message,
      users: [from, to],
      sender: from
    })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    })
  }
}

export { createMessage, getMessages }
