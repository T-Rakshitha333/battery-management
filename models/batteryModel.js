const db = require('../config/db')

// Create battery_data table
const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS battery_data (
      battery_id INTEGER PRIMARY KEY,
      current REAL NOT NULL,
      voltage REAL NOT NULL,
      temperature REAL NOT NULL,
      time TEXT NOT NULL
    )
  `
  db.run(query, err => {
    if (err) {
      console.error('Error creating table:', err)
    } else {
      console.log('Battery data table created')
    }
  })
}

// Insert battery data
const insertBatteryData = (batteryData, callback) => {
  const {battery_id, current, voltage, temperature, time} = batteryData
  const query = `
    INSERT INTO battery_data (battery_id, current, voltage, temperature, time)
    VALUES (?, ?, ?, ?, ?)
  `
  db.run(
    query,
    [battery_id, current, voltage, temperature, time],
    function (err) {
      callback(err, this.lastID) // Return last inserted row ID
    },
  )
}

// Retrieve battery data by ID
const getBatteryDataById = (battery_id, callback) => {
  const query = `SELECT * FROM battery_data WHERE battery_id = ? ORDER BY time DESC`
  db.all(query, [battery_id], (err, rows) => {
    callback(err, rows)
  })
}

// Retrieve specific field for battery data
const getBatteryDataField = (battery_id, field, callback) => {
  const query = `SELECT ${field} FROM battery_data WHERE battery_id = ? ORDER BY time DESC`
  db.all(query, [battery_id], (err, rows) => {
    callback(err, rows)
  })
}

// Retrieve specific field for battery data in a time range
const getBatteryDataFieldInRange = (
  battery_id,
  field,
  start,
  end,
  callback,
) => {
  const query = `
    SELECT ${field} FROM battery_data 
    WHERE battery_id = ? AND time BETWEEN ? AND ? 
    ORDER BY time DESC
  `
  db.all(query, [battery_id, start, end], (err, rows) => {
    callback(err, rows)
  })
}

module.exports = {
  createTable,
  insertBatteryData,
  getBatteryDataById,
  getBatteryDataField,
  getBatteryDataFieldInRange,
}
