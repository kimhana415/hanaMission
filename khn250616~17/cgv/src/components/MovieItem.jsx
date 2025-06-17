// MovieItem.jsx

import React from 'react'
import { Link } from 'react-router-dom'

import MovieImg from './MovieImg';
import Score from './Score';

export default function MovieItem({ movie, index, movieImg }) {
  const { movieCd, movieNm, rank, openDt } = movie;

  return (
    <li className="movie-item">
      <div className="movie__img">
        <div className={`movie__rank ${index < 3 ? 'movie__rank--high' : ''}`}>
          No.{rank}
        </div>

        <Link
          to={`moviedetail/${movieCd}`}
          state={{ movieImg }}>
          <MovieImg
            index={index}
            movieNm={movieNm}
            movieImg={movieImg.movieImg}
            ageLimit={movieImg.ageLimit} />
        </Link>
      </div>

      <div className="movie__content">
        <Link
          to={`moviedetail/${movieCd}`}
          state={{ movieImg }}
          className="movie__name">
          {movieNm}
        </Link>

        <Score />

        <div className="open-date">{openDt} 개봉</div>
        <Link to="/" className="btn-reservation">
          예매하기
        </Link>
      </div>
    </li >
  )
}
