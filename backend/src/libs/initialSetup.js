import Role, { ROLES } from '../models/Role.js'
import User from '../models/User.js'

export const initialSetup = async () => {
  await createRoles()
  await createSuperAdminUser()
}

const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount()
    if (count > 0) return

    const values = await Promise.all([
      new Role({ name: 'user', id: ROLES.USER }).save(),
      new Role({ name: 'admin', id: ROLES.ADMIN }).save(),
      new Role({ name: 'superadmin', id: ROLES.SUPERADMIN }).save()
    ])

    console.log(values)
  } catch (error) {
    console.error(error)
  }
}

const createSuperAdminUser = async () => {
  try {
    const count = await User.estimatedDocumentCount()
    if (count > 0) return

    const roles = await Role.find()
    const superAdminRole = roles.find(role => role.name === 'superadmin')

    const user = new User({
      username: 'superadmin',
      email: 'superadmin@localhost',
      password: await User.encryptPassword('superadmin'),
      roles: [superAdminRole._id],
      joinDate: new Date()
    })

    await user.save()
  } catch (error) {
    console.error(error)
  }
}
