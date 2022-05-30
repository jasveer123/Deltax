import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Rating_comp() {
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
    console.log(rate)
  }
  return (
    <div className="divs">
      {' '}
      <Rating onClick={handleRating} ratingValue={rating} size="25px" />
    </div>
  )
}

export default Rating_comp
