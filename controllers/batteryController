const batteryService = require('../services/batteryService')

// Store battery data
const storeBatteryData = (req, res) => {
  batteryService.storeBatteryData(req.body, (err, id) => {
    if (err) {
      return res.status(500).send('Error storing data')
    }
    res.status(201).send(`Data stored successfully with ID: ${id}`)
  })
}

// Retrieve battery data by ID
const getBatteryDataById = (req, res) => {
  batteryService.getBatteryDataById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send('Error retrieving data')
    }
    res.status(200).json(data)
  })
}

// Retrieve specific field for battery data
const getBatteryDataField = (req, res) => {
  const {id, field} = req.params
  batteryService.getBatteryDataField(id, field, (err, data) => {
    if (err) {
      return res.status(500).send('Error retrieving data')
    }
    res.status(200).json(data)
  })
}

// Retrieve specific field for battery data in a time range
const getBatteryDataFieldInRange = (req, res) => {
  const {id, field} = req.params
  const {start, end} = req.query
  batteryService.getBatteryDataFieldInRange(
    id,
    field,
    start,
    end,
    (err, data) => {
      if (err) {
        return res.status(500).send('Error retrieving data')
      }
      res.status(200).json(data)
    },
  )
}

module.exports = {
  storeBatteryData,
  getBatteryDataById,
  getBatteryDataField,
  getBatteryDataFieldInRange,
}
