import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import axios from 'axios'
import 'reactjs-popup/dist/index.css'
import './song.css'
const contentStyle = { background: '#fff' }
const overlayStyle = { background: 'rgba(0,0,0,0.5)' }
const arrowStyle = { color: 'fff' }

function Pop() {
  function click_btn(e) {
    e.preventDefault()
  }

  const [name_artist, setname_artist] = useState('')
  const [date_artist, setdate_artist] = useState('')
  const [bio_artist, setbio_artist] = useState('')

  function submithandler(e) {
    e.preventDefault()
    console.log(name_artist, date_artist, bio_artist)
    axios
      .post('http://localhost:7000/song/artist', {
        Artist_name: name_artist,
        Artist_Date: date_artist,
        Artist_bio: bio_artist,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <span>You can add Artist </span>
      <Popup
        trigger={
          <button onClick={click_btn} className="add-btn">
            +Add
          </button>
        }
        position="right"
        {...{
          contentStyle,
          overlayStyle,
          arrowStyle,
        }}
      >
        <div className="pop_window">
          Add Artist
          <div className="pop-content">
            <input
              id="addname"
              type="text"
              onChange={(e) => setname_artist(e.target.value)}
              placeholder="Addname"
            ></input>
          </div>
          <div className="pop-content">
            <input
              id="adddate"
              type="date"
              onChange={(e) => setdate_artist(e.target.value)}
              placeholder="Add date of birth"
            ></input>
          </div>
          <div className="pop-content">
            <div id="addbio">Add bio</div>

            <textarea
              id="textarea"
              onChange={(e) => setbio_artist(e.target.value)}
              placeholder="Please add bio"
            ></textarea>
          </div>
          <button className="add-btn" onClick={submithandler}>
            save
          </button>
        </div>
      </Popup>
    </>
  )
}

export default Pop
