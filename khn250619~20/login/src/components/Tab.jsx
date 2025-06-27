// Tab.jsx

import React from 'react'

const tabs = [
  {
    tabName: 'login',
    label: '로그인',
  },
  {
    tabName: 'join',
    label: '회원가입'
  },
  {
    tabName: 'pwFind',
    label: '비밀번호 찾기'
  },
]

export default function Tab({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-between w-[360px] bg-gray-100 rounded-2xl p-1">
      {tabs.map(tab => (
        <button
          key={tab.tabName}
          onClick={() => setActiveTab(tab.tabName)}
          className={`py-2  rounded-xl transition text-gray-400 cursor-pointer w-1/3
            ${
              activeTab === tab.tabName
                ? 'bg-white text-gray-700 font-semibold' : ''
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
