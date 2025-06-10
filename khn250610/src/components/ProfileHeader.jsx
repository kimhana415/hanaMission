// 파일명: ProfileHeader.jsx

import React from 'react'
import ProfileImage from './ProfileImage'

export default function ProfileHeader({ profile, name, time }) {
  return (
    <div className='profile-header'>
      <ProfileImage profile={profile} />
      <div className="text-box">
        <p className='name'>{name}</p>
        <p className='time'>{time}</p>
      </div>
    </div>
  )
}
