import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../home/Navbar'
import './song.css'
import Pop from './Pop'

function Song() {
  const [song, setsong] = useState('')
  const [date, setdate] = useState('')
  const [song1, setsong1] = useState('')
  const [Artist, setartist] = useState('')
  const [choice, setchoice] = useState('')
  const data_choice = Array.from(choice)

  function submitform(e) {
    e.preventDefault()
    axios
      .post('http://localhost:7000/song', {
        song: song,
        date: date,
        song1: song1,
        Artist: Artist,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:7000/song')
      .then((res) => {
        console.table(res.data)
        setchoice(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="heading2">Adding a new song</div>

      <div className="form">
        <form onSubmit={submitform}>
          <div id="songform">
            <input
              className="form_content"
              type="text"
              placeholder="songname"
              onChange={(e) => setsong(e.target.value)}
            ></input>
            <input
              className="form_content"
              type="text"
              placeholder="Date Released"
              onChange={(e) => setdate(e.target.value)}
            ></input>
            <input
              className="form_content"
              type="file"
              placeholder="songname"
              onChange={(e) => setsong1(e.target.value)}
            ></input>
          </div>
          <div id="selct_options">
            <label id="artist" className="lower_form" for="cars">
              Choose a Artist:
            </label>
            <select
              name="Artist"
              id="cars"
              form="songform"
              onChange={(e) => setartist(e.target.value)}
            >
              {data_choice.map((data, i) => {
                return (
                  <option key={i} className="option_select">
                    {data.Artist_name}
                  </option>
                )
              })}
            </select>
          </div>

          <div id="btn-flex">
            <button className="lower_form" id="submit" type="submit">
              save
            </button>
            <button className="lower_form" id="cancel" type="submit">
              cancel
            </button>
          </div>
        </form>

        <div className="pop">
          <Pop />
        </div>
      </div>
    </>
  )
}

export default Song
