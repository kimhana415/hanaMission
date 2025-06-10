//파일명: ProfileImage.jsx

import React from 'react'

export default function ProfileImage({ profile }) {
  return (
    <div className='profile-img-box'>
      <img className='profile-img' src={profile} alt="프로필" />
    </div>
  )
}
