// SnsLogin.jsx

import React from 'react'

import KakaoLogin from '../snsLogin/KakaoLogin'
import NaverLogin from '../snsLogin/NaverLogin'
import GoogleLogin from '../snsLogin/GoogleLogin'



export default function SnsLogin() {

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-gray-400">SNS로 계속하기</p>

      <div className="flex gap-4">
        <GoogleLogin/>
        <KakaoLogin/>
        <NaverLogin/>
      </div>
    </div>
  )
}
