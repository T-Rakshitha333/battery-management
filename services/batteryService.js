const batteryModel = require('../models/batteryModel')

const storeBatteryData = (data, callback) => {
  // Validate data
  if (
    !data.battery_id ||
    !data.current ||
    !data.voltage ||
    !data.temperature ||
    !data.time
  ) {
    return callback(new Error('Invalid data'))
  }

  batteryModel.insertBatteryData(data, callback)
}

const getBatteryDataById = (id, callback) => {
  batteryModel.getBatteryDataById(id, callback)
}

const getBatteryDataField = (id, field, callback) => {
  batteryModel.getBatteryDataField(id, field, callback)
}

const getBatteryDataFieldInRange = (id, field, start, end, callback) => {
  batteryModel.getBatteryDataFieldInRange(id, field, start, end, callback)
}

module.exports = {
  storeBatteryData,
  getBatteryDataById,
  getBatteryDataField,
  getBatteryDataFieldInRange,
}
