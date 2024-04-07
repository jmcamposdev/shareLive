import express, { Router } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'

// Import middlewares
import { handleJsonSyntaxError } from './middlewares/index.js'

// Import routes
import roomsRoutes from './routes/rooms.routes.js'
import connectDB from './database/db.js'

// Fake data
import { fakeRooms } from './faker/rooms.faker.js'

// InitialSetup
// Create Express app
const app = express()

// Middlewares
app.use(express.json()) // Parse JSON bodies (as sent by API clients)
app.use(cors()) // Enable CORS for all routes
app.use(handleJsonSyntaxError) // Verify JSON
app.use(morgan('dev')) // Log requests to the console
dotenv.config() // Enable Environment Variables

// Connect to MongoDB
connectDB()

// Fake data
fakeRooms(10)

// Routes
const apiV1Routes = Router()

// Mounting routes
apiV1Routes.use(roomsRoutes)

// Mount API v1 routes
app.use('/api/v1', apiV1Routes)

// Export Express app
export default app
