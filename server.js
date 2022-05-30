const express = require('express')
const App = express()
const delta_schema = require('./dbs/Schema')
require('./dbs/dbs')
const cors = require('cors')
const artist_schema = require('./dbs/schema2')
App.use(cors())
App.use(express.json())

App.get('/', async (req, res) => {
  try {
    const delta = await delta_schema.find().sort({ Rating: -1 })
    res.json(delta)
  } catch (err) {
    console.log(err)
  }
})

App.get('/song', async (req, res) => {
  try {
    const data = await artist_schema.find()
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

App.put('/update', async (req, res) => {
  console.log('------------>>', req.body)
  try {
    const data = await delta_schema.findByIdAndUpdate(req.body.id, {
      Rating: req.body.Rating,
    })
    res.json(data)
  } catch (err) {
    console.log('Error' + err)
  }
})

App.post('/song/artist', async (req, res) => {
  const artist = new artist_schema({
    Artist_name: req.body.Artist_name,
    Artist_Date: req.body.Artist_Date,
    Artist_bio: req.body.Artist_bio,
  })

  try {
    const data = await artist.save()
    res.json(data)
  } catch (err) {
    console.log('Error' + err)
  }
})

App.post('/song', async (req, res) => {
  console.log(req.body)
  const delta = new delta_schema({
    Songname: req.body.song,
    Date: req.body.date,
    Songname1: req.body.song1,
    Artist: req.body.Artist,
  })

  try {
    const data = await delta.save()
    res.json(data)
  } catch (err) {
    console.log('Error' + err)
  }
})

const Port = '7000'

App.listen(Port, () => {
  console.log('hii from the server')
})
