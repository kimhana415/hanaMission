// JoinForm.jsx

import React from 'react';

const joinFields = [
  {
    label: '아이디',
    type: 'text',
    name: 'id',
    placeholder: '아이디를 입력하세요',
    idCheck: true,
  },
  {
    label: '비밀번호',
    type: 'password',
    name: 'pw',
    placeholder: '비밀번호를 입력하세요',
    idCheck: false,
  },
  {
    label: '비밀번호',
    type: 'password',
    name: 'pw-check',
    placeholder: '비밀번호를 확인하세요',
    idCheck: false,
  },
  {
    label: '이메일',
    type: 'text',
    name: 'email',
    placeholder: '이메일을 입력하세요',
    idCheck: false,
  },
];

export default function JoinForm() {
  return (
    <form className="flex flex-col gap-5 w-[360px]">
      {joinFields.map(field => (
        <div
          key={field.name}
          className="flex flex-col gap-1 text-sm"
        >
          <label className="text-xs text-gray-500">{field.label}</label>
          <div className="relative">
            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              className="w-full p-3 border border-gray-200 rounded-xl placeholder-gray-400"
            />
            {field.idCheck && (
              <div className="absolute top-3 right-2 text-blue-500 cursor-pointer">
                중복확인
              </div>
            )}
          </div>
        </div>
      ))}

      <button className="w-full py-3 rounded-xl bg-blue-500 text-white cursor-pointer">
        회원가입
      </button>
    </form>
  );
}
