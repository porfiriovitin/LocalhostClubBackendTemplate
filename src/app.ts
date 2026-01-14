import express from 'express'
import { errorHandling } from './middlewares/error-handling.js'
import { routes } from './routes/index.js'
import cors from 'cors'
import { env } from './env.js' 

const app = express()

const allowedOrigins = env.FRONTEND_ORIGINS.split(',')

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true) 
      return allowedOrigins.includes(origin)
        ? cb(null, true)
        : cb(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true,
  })
)

app.use(express.json())
app.use(routes)
app.use(errorHandling)

export default app