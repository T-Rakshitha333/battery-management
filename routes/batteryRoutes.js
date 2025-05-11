const express = require('express')
const batteryController = require('../controllers/batteryController')
const router = express.Router()

// Route to store battery data
router.post('/data', batteryController.storeBatteryData)

// Route to get all data for a specific battery
router.get('/:id', batteryController.getBatteryDataById)

// Route to get a specific field for a battery
router.get('/:id/:field', batteryController.getBatteryDataField)

// Route to get a specific field for a battery in a time range
router.get('/:id/:field', batteryController.getBatteryDataFieldInRange)

module.exports = router
