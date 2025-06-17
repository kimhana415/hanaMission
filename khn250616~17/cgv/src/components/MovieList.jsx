// MovieList.jsx

import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import MovieItem from './MovieItem';

export default function MovieList({ movieImgs }) {
  const movieKey = import.meta.env.VITE_MOVIE_API_KEY;
  const requestUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${movieKey}&targetDt=20250610`;
  const [movie, setMovie] = useState([]);
  console.log(movieKey)
  useEffect(() => {
    async function boxOffice() {
      const response = await fetch(requestUrl);
      if (!response.ok) return;

      const json = await response.json();
      setMovie(json.boxOfficeResult.dailyBoxOfficeList);

      console.log(json.boxOfficeResult.dailyBoxOfficeList);
      console.log('🔍 API 응답:', json);
    };

    boxOffice();

  }, []);

  return (
    <>
      <div className="movie-chart">
        <ul className='movie-items'>
          {movie.map((movie, index) => (
            <MovieItem
              key={movie.movieCd}
              movie={movie}
              index={index}
              movieImg={movieImgs[index]} />
          ))
          }
        </ul>
      </div>
      <Outlet />
    </>

  )
}

