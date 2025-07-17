import React, { useState } from 'react';
import { useUser } from '../store/userStore';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const join = useUser((state) => state.join);
  const navigate = useNavigate();
  const handleJoin = (e) => {
    e.preventDefault();

    const success = join(userId, userPw);

    if (success) {
      navigate('/login');
    }
  };
  return (
    <div className="flex flex-col gap-3 max-w-[400px] m-auto py-5">
      <h3 className="text-2xl mb-5 font-semibold">회원가입</h3>
      <form
        onSubmit={handleJoin}
        className="flex flex-col gap-4
      "
      >
        <input
          type="text"
          placeholder="아이디 입력"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border border-gray-300 px-5 py-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
          className="border border-gray-300 px-5 py-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 rounded-lg cursor-pointer"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
