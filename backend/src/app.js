import express, { Router } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

// Import middlewares
import { handleJsonSyntaxError } from './middlewares/index.js'

// Import routes
import roomsRoutes from './routes/rooms.routes.js'
import usersRoutes from './routes/users.routes.js'
import reviewRoutes from './routes/reviews.routes.js'
import authRoutes from './routes/auth.routes.js'
import statsRoutes from './routes/stats.routes.js'
import messagesRoutes from './routes/messages.routes.js'
import connectDB from './database/db.js'

// Fake data
import { fakeRooms } from './faker/rooms.faker.js'
import { initialSetup } from './libs/initialSetup.js'
import { socketMessages } from './listeners/socketMessages.js'

// InitialSetup
// Create Express app
const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

// Socket.io
socketMessages(io)

// ------------------------------------------
// Middlewares
// ------------------------------------------

// Cargar variables de entorno según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

// Configuración de Express
app.use(express.json()) // Parse JSON bodies (as sent by API clients)

// Configuración de CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',')
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))

// Middleware para verificar el Referer o Origin
app.use((req, res, next) => {
  const origin = req.get('Origin') || req.get('Referer');
  if (origin && allowedOrigins.includes(origin)) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
});

app.use(handleJsonSyntaxError) // Verify JSON
app.use(morgan('dev')) // Log requests to the console
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
apiV1Routes.use(messagesRoutes)

// Mount API v1 routes
app.use('/api/v1', apiV1Routes)

// Export Express app
export default server
