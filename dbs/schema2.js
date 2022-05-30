const mongooose = require('mongoose')

const artist_schema = new mongooose.Schema({
  Artist_name: { type: String, require: true },
  Artist_Date: { type: String, require: true },
  Artist_bio: { type: String, require: true },
})

const artist_menu = new mongooose.model('Artist', artist_schema)

module.exports = artist_menu
