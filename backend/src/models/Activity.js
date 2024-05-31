import mongoose, { Schema } from 'mongoose'

export const ACTIVITY_TYPES = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

export const ACTIVITY_ENTITIES = {
  USER: 'USER',
  ROOM: 'ROOM',
  FAVORITE: 'FAVORITE',
  REVIEW: 'REVIEW'
}

const activitySchema = new Schema({
  type: { type: String, required: true, enum: Object.values(ACTIVITY_TYPES) }, // Tipo de acción realizada
  entity: { type: String, required: true, enum: Object.values(ACTIVITY_ENTITIES) }, // Entidad afectada por la acción
  entityId: { type: Schema.Types.ObjectId, required: true }, // ID de la entidad afectada
  user: {
    id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true }
  }, // Usuario que realizó la acción
  details: { type: String, required: true }, // Detalles adicionales sobre la acción
  timestamp: { type: Date, default: Date.now } // Marca de tiempo de la acción
})

const Activity = mongoose.model('Activity', activitySchema)

Activity.createActivity = async function (type, entity, entityId, user, details) {
  const activity = new Activity({
    type,
    entity,
    entityId,
    user,
    details
  })
  await activity.save()
}

Activity.createRoomActivity = async function (type, entityId, user) {
  let details = ''

  switch (type) {
    case ACTIVITY_TYPES.CREATE:
      details = `${user.name} created a new room`
      break
    case ACTIVITY_TYPES.UPDATE:
      details = `${user.name} updated a room`
      break
    case ACTIVITY_TYPES.DELETE:
      details = `${user.name} deleted a room`
      break
  }

  await Activity.createActivity(type, ACTIVITY_ENTITIES.ROOM, entityId, { id: user._id, name: user.name }, details)
}

Activity.createUserActivity = async function (type, entityId, user, modifiedBy) {
  const isSelf = user._id.toString() === modifiedBy._id.toString()
  let details = ''

  switch (type) {
    case ACTIVITY_TYPES.CREATE:
      details = isSelf ? `${user.name} created their profile` : `${modifiedBy.name} created the profile of ${user.name}`
      break
    case ACTIVITY_TYPES.UPDATE:
      details = isSelf ? `${user.name} updated their profile` : `${modifiedBy.name} updated the profile of ${user.name}`
      break
    case ACTIVITY_TYPES.DELETE:
      details = isSelf ? `${user.name} deleted their profile` : `${modifiedBy.name} deleted the profile of ${user.name}`
      break
    case ACTIVITY_TYPES.LOGIN:
      details = `${user.name} logged in`
      break
    case ACTIVITY_TYPES.LOGOUT:
      details = `${user.name} logged out`
      break
  }

  await Activity.createActivity(type, ACTIVITY_ENTITIES.USER, entityId, { id: user._id, name: user.name }, details)
}

Activity.createFavoriteActivity = async function (type, entityId, user, room) {
  let details = ''

  switch (type) {
    case ACTIVITY_TYPES.CREATE:
      details = `${user.name} added the room ${room.title} to favourites`
      break
    case ACTIVITY_TYPES.DELETE:
      details = `${user.name} removed the room ${room.title} from favourites`
      break
  }

  await Activity.createActivity(type, ACTIVITY_ENTITIES.FAVORITE, entityId, { id: user._id, name: user.name }, details)
}

Activity.createReviewActivity = async function (type, user, review) {
  let details = ''
  switch (type) {
    case ACTIVITY_TYPES.CREATE:
      details = `${user.name} wrote a review`
      break
    case ACTIVITY_TYPES.UPDATE:
      details = `${user.name} updated their review`
      break
    case ACTIVITY_TYPES.DELETE:
      details = `${user.name} deleted their review`
      break
  }

  await Activity.createActivity(type, ACTIVITY_ENTITIES.REVIEW, review._id, { id: user._id, name: user.name }, details)
}

export default Activity
