import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
// Cargar variables de entorno según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

export const sendEmail = async (to, subject, text, html) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  })

  // Create the email
  const mailOptions = {
    from: {
      name: 'Sharelive',
      address: process.env.EMAIL_USER
    },
    to,
    subject,
    text,
    html
  }

  // Send the email
  transporter.sendMail(mailOptions)
}
