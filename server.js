const express = require('express')
const App = express()
const delta_schema = require('./dbs/Schema')
require('./dbs/dbs')
const cors = require('cors')
const artist_schema = require('./dbs/schema2')
const bodyParser = require('body-parser')
const multer = require('multer')
App.use(cors())
App.use(express.json())

App.get('/', async (req, res) => {
  try {
    const delta = await delta_schema.find()
    res.json(delta)
  } catch (err) {
    console.log(err)
  }
})

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => [cb(null, file.originalname)],
})

const upload = multer({
  storage: Storage,
}).single('testImage')

App.post('/upload', async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
    } else {
      const newImage = new ImageModal({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: 'image/png',
        },
      })
      newImage
        .save()
        .then(() => res.send('successfully upload'))
        .catch((err) => console.log(err))
    }
  })
})

App.post('/song', async (req, res) => {
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
App.use(bodyParser.urlencoded({ extended: false }))

App.listen(Port, () => {
  console.log('hii from the server')
})
