// 파일명: ArticleContents.jsx

import React from 'react'

export default function ArticleContents({ title, content }) {
  return (
    <div className='article-contents-box'>
      <h3 className='title'>{title}</h3>
      <p className='content'>{content}</p>
    </div>
  )
}
