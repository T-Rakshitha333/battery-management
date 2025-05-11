// Simple request logging middleware
const logger = (req, res, next) => {
  const start = Date.now()
  console.log(`${req.method} ${req.url} - Start`)

  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`)
  })

  next()
}

module.exports = logger
