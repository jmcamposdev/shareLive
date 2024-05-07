import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

export const CLOUDINARY_FOLDERS = {
  ROOMS: 'rooms',
  USERS: 'users'
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function checkAndCreateFolder (folderName) {
  try {
    const folderExists = await cloudinary.api.resource(folderName, { type: 'upload' })
    if (!folderExists) {
      const createFolderResponse = await cloudinary.api.create_folder(folderName)
      return createFolderResponse
    }
    return folderExists
  } catch (error) {
    console.error('Error checking and creating folder:', error)
    throw error
  }
}

export async function checkAndDeleteFolder (folderName) {
  try {
    const deleteFolderResponse = await cloudinary.api.delete_folder(folderName)
    return deleteFolderResponse
  } catch (error) {
    console.error('Error checking and deleting folder:', error)
    throw error
  }
}

export async function handleUploadImage (image, path) {
  const b64 = Buffer.from(image.buffer).toString('base64')
  const dataURI = 'data:' + image.mimetype + ';base64,' + b64

  // Upload the image
  const res = await cloudinary.uploader.upload(dataURI, {
    folder: path,
    resource_type: 'auto'
  })
  return res
}

export async function handleDeleteImage (plublicUrl, path) {
  const publicId = path + '/' + plublicUrl.split('/').pop().split('.')[0]
  const res = await cloudinary.uploader.destroy(publicId)
  return res
}
