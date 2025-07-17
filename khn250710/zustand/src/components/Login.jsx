import React, { useState } from 'react';
import { useUser } from '../store/userStore';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const login = useUser((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('handleLogin 실행됨!');
    const success = login(userId, userPw);

    if (success) {
      setUserId('');
      setUserPw('');
      navigate('/mypage');
    }
  };

  return (
    <div className="flex flex-col gap-3 max-w-[500px] m-auto py-5">
      <h3 className="text-2xl mb-5 font-semibold">로그인</h3>
      <form
        onSubmit={handleLogin}
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
          로그인
        </button>
      </form>

      <Link
        to="/join"
        className="py-2 w-full border border-blue-700 rounded-lg cursor-pointer text-center"
      >
        회원가입
      </Link>
    </div>
  );
}
