// 파일명: ArticleCard.jsx

import React from 'react'

import ProfileHeader from './ProfileHeader'
import ArticleContents from './ArticleContents'
import ArticleMeta from './ArticleMeta'
import ArticleImage from './ArticleImage'

export default function ArticleCard({ profile, name, time, title, content, image, likes, comments }) {
  return (
    <div className='article-card'>

      <div className="article-contents">
        <ProfileHeader profile={profile} name={name} time={time} />
        <ArticleContents title={title} content={content} />
        <ArticleMeta likes={likes} comments={comments} />
      </div>

      <ArticleImage image={image} />
    </div>
  )
}
