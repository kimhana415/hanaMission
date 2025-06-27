// LoginForm.jsx

import React from 'react'
import SnsLogin from '../snsLogin/SnsLogin'

const loginFields = [
  {
    label: '아이디',
    type: 'text',
    name: 'id',
    placeholder: '아이디를 입력하세요',
  },
  {
    label: '비밀번호',
    type: 'password',
    name: 'pw',
    placeholder: '비밀번호를 입력하세요',
  },
]

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-5">
      <form className="flex flex-col gap-5 w-[360px]">
        {loginFields.map(field => (
          <div
            key={field.name}
            className="flex flex-col gap-1 text-sm"
          >
            <label className="text-xs text-gray-500">{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              className="w-full p-3 border border-gray-200 rounded-xl placeholder-gray-400"
            />
          </div>
        ))}

        <button className="w-full py-3 rounded-xl bg-blue-500 text-white cursor-pointer">
          로그인
        </button>
      </form>
      <SnsLogin />
    </div>
  )
}
