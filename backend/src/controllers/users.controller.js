import User from '../models/User.js'

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting users',
      error
    })
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting a user',
      error
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating a user',
      error
    })
  }
}

export { getUsers, getUser, updateUser }
