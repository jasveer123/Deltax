const mongooose = require('mongoose')

const delta_schema = new mongooose.Schema({
  Songname: { type: String, require: true, unique: true },
  Date: { type: String, require: true },
  Songname1: { type: String, require: true },
  Artist: { type: String, require: true },
  Rating: { type: Number },
  id: { type: String },
})

const delta_menu = new mongooose.model('Delta', delta_schema)

module.exports = delta_menu
