const express = require('express')
const bodyParser = require('body-parser')
const {authenticateToken} = require('./middlewares/authMiddleware')
const batteryRoutes = require('./routes/batteryRoutes')
const logger = require('./middlewares/logger') // Import the logger

const app = express()

// Use the logging middleware
app.use(logger)

// Middleware to parse incoming JSON requests
app.use(bodyParser.json())

// Serve static files (like index.html) from the 'public' directory
app.use(express.static('public'))

// Mount the battery-related routes with authentication middleware
app.use('/api/battery', authenticateToken, batteryRoutes)

// Basic error handling for 404
app.use((req, res, next) => {
  res.status(404).json({error: 'Route not found'})
})

// Start the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
