// Login.jsx
import React, { useState } from 'react'
import img from '../assets/img.jpg'
import Tab from '../components/Tab'
import LoginForm from '../components/form/LoginForm'
import JoinForm from '../components/form/JoinForm'
import PwFindForm from '../components/form/PwFindForm'

export default function Login() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex rounded-3xl overflow-hidden w-[1100px] h-[850px]">
        <div className="flex-1 bg-white flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-4 w-[360px]">
            <h2 className="text-3xl font-semibold whitespace-pre-line">
              서비스에 오신 것을
              <br />
              환영합니다
            </h2>
            <p className="text-sm text-gray-500 whitespace-pre-line">
              매일 새롭게 업데이트 되는 다양한
              <br />
              UIUX 디자인을 저작권 걱정 없이 무료로 사용해 보세요
            </p>
          </div>

          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === 'login' && <LoginForm />}
          {activeTab === 'join' && <JoinForm />}
          {activeTab === 'pwfind' && <PwFindForm />}
        </div>

        <div className="flex-1 [h-850px] overflow-hidden">
          <img src={img} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
