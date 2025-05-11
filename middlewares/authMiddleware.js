
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(403).json({error: 'Access denied'})
  }

  
  try {
  
    next()
  } catch (err) {
    return res.status(403).json({error: 'Invalid token'})
  }
}

module.exports = {authenticateToken}
