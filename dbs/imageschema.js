const mongooose = require('mongoose')

const image_schema = new mongooose.Schema({
  name: { type: String, require: true },
  Image: { data: Buffer, contentType: String },
})

const image_menu = new mongooose.model('Artist', image_schema)

module.exports = image_menu
