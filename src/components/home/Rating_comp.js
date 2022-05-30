import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import axios from 'axios'
function Rating_comp(props) {
  const handleRating = (rate) => {
    console.log(rate)
    console.log(props.data2)
    axios
      .put('http://localhost:7000/update', {
        id: props.data2,
        Rating: rate,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="divs">
      {' '}
      <Rating onClick={handleRating} ratingValue={props.Rating} size="25px" />
    </div>
  )
}

export default Rating_comp
