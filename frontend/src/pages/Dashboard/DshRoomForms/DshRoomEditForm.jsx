import { useParams } from 'react-router-dom'
import DshRoomForm from '../../../components/common/Dashboard/DshRoomForm/DshRoomForm'
import { roomFormInitialValues } from '../../../components/common/Dashboard/DshRoomForm/FormModel/roomFormInitialValues'
import useRoom from '../../../hooks/useRoom'
import RoomService from '../../../services/roomService'

const DshRoomEditForm = () => {
  const { id } = useParams()
  const { loading, room } = useRoom(id)
  const title = 'Edit Room'
  const subtitle = 'Here you can edit your room'

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true)

    try {
      // Convert values to number
      values.price = Number(values.price)
      values.squareMeters = Number(values.squareMeters)
      values.bedrooms = Number(values.bedrooms)
      values.bathrooms = Number(values.bathrooms)
      values.yearBuilt = Number(values.yearBuilt)
      values.floor = Number(values.floor)
      values.garageNumber = Number(values.garageNumber)

      // Filter the new Files
      const newFiles = values.images.filter((file) => file instanceof File)
      // Filter the urls
      const urls = values.images.filter((file) => typeof file === 'string')
      // Get the deleted images comparing the urls with the initial images
      const deletedImages = room.images.filter((image) => !urls.includes(image))

      // Update the room
      const updatedRoomValues = {
        _id: id,
        ...values,
        images: urls
      }
      // Update the room
      const newRoomUpdate = await RoomService.updateRoom(updatedRoomValues)
      // Delete the images
      if (deletedImages.length > 0) {
        await RoomService.deleteRoomImages(id, deletedImages)
      }
      // Upload the new images
      if (newFiles.length > 0) {
        await RoomService.uploadRoomImages(id, newFiles)
      }

      return newRoomUpdate
    } catch (error) {
      console.error('Error updating room:', error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <>
      {loading
        ? (
          <p>Loading...</p>
          )
        : (
          <DshRoomForm
            title={title}
            subtitle={subtitle}
            initialValues={roomFormInitialValues(room)}
            onSubmit={onSubmit}
            isEdit
          />
          )}
    </>

  )
}

export default DshRoomEditForm
