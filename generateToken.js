const jwt = require('jsonwebtoken')

const JWT_SECRET = 'super_secure_secret_123'

// Sample payload
const user = {
  userId: 1,
  role: 'admin',
}

const token = jwt.sign(user, JWT_SECRET, {expiresIn: '1h'})

console.log('Your JWT token:\n')
console.log(token)
