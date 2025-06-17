// MovieImg.jsx

import React from 'react'

export default function MovieImg({ movieNm, movieImg, ageLimit }) {
  return (
    <div className='movie-img-box'>
      <span className={`age-limit age-limit-${ageLimit}`}>{ageLimit}</span>
      <img
        src={movieImg}
        alt={movieNm}
        className='movie-img' />
    </div>
  )
}
