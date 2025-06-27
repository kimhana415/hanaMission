// KakaoLogin.jsx

import React, { useEffect } from 'react'
import KakaoIcon from '../../assets/kakaoIcon.png'
export default function KakaoLogin() {
  const KakaoLoginKey = import.meta.env.VITE_KAKAO_LOGIN_KEY

  useEffect(() => {
    console.log(window.kakao)
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KakaoLoginKey);
      console.log('Kakao SDK 초기화 완료:', window.Kakao.isInitialized())
    }
  }, [])

  // 로그인 핸들러
  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      alert('카카오객체 정상적으로 만들어지지 않았습니다!');
      return //함수종료
    }

    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image',

      success: function (authObj) {
        console.log('로그인 성공!');
        console.log('응답받은 결과:', authObj);
        window.Kakao.API.request({
          url: '/v2/user/me',

          success: function (resp) {
            console.log(resp);
          },
          fail: function (err) {
            console.error(err);
          },
        })
      },
      fail: function (err) {
        console.error('로그인 실패!');
      }
    })
  }

  return (
    <img
      className="border border-gray-200 rounded-full w-10 h-10 cursor-pointer"
      src={KakaoIcon}
      onClick={handleKakaoLogin}
    />
  )
}
