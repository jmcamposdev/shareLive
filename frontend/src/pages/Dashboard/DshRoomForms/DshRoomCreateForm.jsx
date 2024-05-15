import DshRoomForm from '../../../components/common/Dashboard/DshRoomForm/DshRoomForm'
import RoomService from '../../../services/roomService'
import { roomFormInitialValues } from '../../../components/common/Dashboard/DshRoomForm/FormModel/roomFormInitialValues'
import { useAuth } from '../../../context/AuthContext'

const DshRoomCreateForm = () => {
  const { user } = useAuth()
  const title = 'Create Room'
  const subtitle = 'Here you can create your room'

  async function onSubmit (values, actions) {
    actions.setSubmitting(false)
    // Create the room
    try {
      values.user = user._id
      // Convert values to number
      values.price = Number(values.price)
      values.squareMeters = Number(values.squareMeters)
      values.bedrooms = Number(values.bedrooms)
      values.bathrooms = Number(values.bathrooms)
      values.yearBuilt = Number(values.yearBuilt)
      values.floor = Number(values.floor)
      values.garageNumber = Number(values.garageNumber)

      const room = await RoomService.createRoom(values)
      // Upload images
      await RoomService.uploadRoomImages(room._id, values.images)
    } catch (error) {
      console.error('Error creating room:', error.message)
      actions.setSubmitting(false)
    }
  }

  return (
    <DshRoomForm
      title={title}
      subtitle={subtitle}
      onSubmit={onSubmit}
      initialValues={roomFormInitialValues()}
    />
  )
}

export default DshRoomCreateForm
