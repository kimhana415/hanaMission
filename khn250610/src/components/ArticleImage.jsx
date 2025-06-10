// 파일명: ArticleImage.jsx

import React from 'react'

export default function ArticleImage({ image }) {
  return (
    <div className="article-img-box">
      <img className="article-img" src={image} alt="썸네일" />
      <button className='btn-plus'>+</button>
    </div>
  )
}
