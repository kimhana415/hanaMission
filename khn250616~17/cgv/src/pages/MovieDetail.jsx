// MovieDetail.jsx

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Score from '../components/Score';
import MovieImg from '../components/MovieImg';
import axios from 'axios';

export default function MovieDetail() {
  const { id: movieCd } = useParams();
  const location = useLocation();
  const movieImg = location.state?.movieImg; // 전달 받은 이미지 정보
  const movieKey = import.meta.env.VITE_MOVIE_API_KEY;
  const requestUrl = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${movieKey}&movieCd=${movieCd}`;
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function movieInfo() {
      try {
        const response = await axios.get(requestUrl)  // 요청
        setMovieInfo(response.data.movieInfoResult.movieInfo);  // 데이터 저장

        console.log(response.data.movieInfoResult.movieInfo);

      } catch (err) {
        console.error(err);
      }
    };

    movieInfo();  // 실행
  }, [movieCd]); // 바뀔때 마다 실행

  return (
    <div className='movie-detail'>
      <div className="movie-img">
        <MovieImg
          movieNm={movieInfo?.movieNm}
          movieImg={movieImg?.movieImg}
          ageLimit={movieImg?.ageLimit} />
      </div>
      <div className="movie-info">
        <div className="movie-info-title-box">
          <div className="movie-info-title-top">
            <h2>{movieInfo?.movieNm}</h2>
            <div className='btn-now-show'>현재상영중</div>
          </div>

          <p className="movie-info-title-sub">{movieInfo?.movieNmEn}</p>
        </div>

        <Score />

        <div className="movie-info-text">
          <p>
            감독 : {movieInfo?.directors[0]?.peopleNm} /
            배우 : {movieInfo?.actors?.map(actor => actor.peopleNm).join(', ')}
          </p>
          <p>
            장르 : {movieInfo?.genres?.map(genre => genre.genreNm).join(', ')} /
            기본 정보 : {movieInfo?.audits[0]?.watchGradeNm}, {movieInfo?.showTm}분, {movieInfo?.nations[0]?.nationNm}
          </p>
          <p>
            개봉 : {movieInfo?.openDt}
          </p>
        </div>
        <div className="btn-box">
          <Link to="/" className="btn-egg">프리에그</Link>
          <Link to="/" className="btn-reservation">예매하기</Link>
        </div>

      </div>
    </div>
  );
}
