import express, { Router } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'

// Import middlewares
import { handleJsonSyntaxError } from './middlewares/index.js'

// Import routes
import roomsRoutes from './routes/rooms.routes.js'
import usersRoutes from './routes/users.routes.js'
import reviewRoutes from './routes/reviews.routes.js'
import authRoutes from './routes/auth.routes.js'
import statsRoutes from './routes/stats.routes.js'
import connectDB from './database/db.js'

// Fake data
import { fakeRooms } from './faker/rooms.faker.js'
import { initialSetup } from './libs/initialSetup.js'

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

initialSetup()

// Routes
const apiV1Routes = Router()

// Mounting routes
apiV1Routes.use(roomsRoutes)
apiV1Routes.use(authRoutes)
apiV1Routes.use(usersRoutes)
apiV1Routes.use(reviewRoutes)
apiV1Routes.use(statsRoutes)

// Mount API v1 routes
app.use('/api/v1', apiV1Routes)

// Export Express app
export default app
