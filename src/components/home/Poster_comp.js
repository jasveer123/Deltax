import React from 'react'
import Rating_comp from './Rating_comp'
import poster from './poster.jpg'

function Poster_cop(props) {
  const data = Array.from(props.song)

  return (
    <>
      {data.map((data, i) => {
        return (
          <div className="uppardiv" key={i}>
            <div className="mainarea">
              <div className="divs">
                <img
                  className="poster"
                  src={poster}
                  alt="image not found"
                ></img>
              </div>
              <div className="divs">{data.Songname}</div>
              <div className="divs">{data.Date}</div>
              <div className="divs">{data.Songname1}</div>
              <Rating_comp />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Poster_cop
