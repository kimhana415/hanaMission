// 파일명: ArticleMeta.jsx

import React from 'react'

export default function ArticleMeta({ likes, comments }) {
  return (
    <div className='article-meta-box'>
      <span>공감 {likes}</span>
      <span>댓글 {comments}</span>
    </div>
  )
}
