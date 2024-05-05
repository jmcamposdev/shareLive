import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function handleUpload (image) {
  const b64 = Buffer.from(image.buffer).toString('base64')
  const dataURI = 'data:' + image.mimetype + ';base64,' + b64

  const res = await cloudinary.uploader.upload(dataURI, {
    resource_type: 'auto'
  })
  return res
}

export async function handleDelete (plublicUrl) {
  const publicId = plublicUrl.split('/').pop().split('.')[0]
  const res = await cloudinary.uploader.destroy(publicId)
  return res
}
