import React, { useState, useEffect } from 'react'
import './MainArea.css'
import Poster_comp from './Poster_comp'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function MainArea() {
  const [songname, setsongname] = useState('')
  const [artiststate, setartiststate] = useState('')
  const data_choice = Array.from(artiststate)

  const navigate = useNavigate()

  function addsong() {
    navigate(`/song`)
  }

  useEffect(() => {
    axios
      .get('http://localhost:7000/song')
      .then((res) => {
        console.table(res.data)
        setartiststate(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    function init() {
      axios
        .get('http://localhost:7000/')
        .then((res) => {
          console.table(res.data)
          setsongname(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    init()
  }, [])

  return (
    <>
      <div className="heading">
        <div className="top10">Top 10 songs</div>
        <div>
          <button className="addsong" onClick={addsong}>
            Add song
          </button>
        </div>
      </div>

      <Poster_comp song={songname} />

      <div className="blank"></div>
      <div className="heading">
        <div className="top10">Top 10 Artist</div>
        <div></div>
      </div>
      <div className="uppardiv">
        {data_choice.map((data, i) => (
          <div className="mainarea" key={i}>
            <div className="divs">{data.Artist_name}</div>
            <div className="divs">{data.Artist_Date}</div>
            <div className="divs">{data.Artist_bio}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainArea
