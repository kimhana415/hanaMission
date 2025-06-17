// MovieView.jsx

import React from 'react'
import { Link } from 'react-router-dom'

import MovieList from '../components/MovieList';

export default function MovieView() {
  const movieImgs = [
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89671/89671_320.jpg',
      ageLimit: '15'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89315/89315_320.jpg',
      ageLimit: 'ALL'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89697/89697_320.jpg',
      ageLimit: '15'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89629/89629_320.jpg',
      ageLimit: '15'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89664/89664_320.jpg',
      ageLimit: '15'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89628/89628_320.jpg',
      ageLimit: 'ALL'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89674/89674_320.jpg',
      ageLimit: '19'
    },
    {
      movieImg: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22632_503_1.jpg',
      ageLimit: 'ALL'
    },
    {
      movieImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000089/89679/89679_320.jpg',
      ageLimit: '19'
    },
    {
      movieImg: 'https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202505/22536_503_1.jpg',
      ageLimit: '12'
    }
  ]
  return (
    <div className='movie-view'>
      <div className="title">
        <h2>무비차트</h2>
        <div className="submenu">
          <ul>
            <li className='on'>
              <Link to="/">무비차트</Link>
            </li>
            <li>
              <Link to="/">상영예정작</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="sorting">
        <div className="nowshow">
          <input type="checkbox" id='nowShowing' />
          <label htmlFor="nowShowing">현재 상영작만 보기</label>
        </div>

        <div className="sorting__right">
          <select>
            <option>예매율순</option>
            <option>평점순</option>
            <option>관람객순</option>
          </select>
          <button className='sorting__btn-go'>GO</button>
        </div>
      </div>

      <MovieList movieImgs={movieImgs} />
    </div>
  )
}
