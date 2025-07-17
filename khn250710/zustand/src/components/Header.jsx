import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../store/userStore';

export default function Header() {
  const { isLoggedIn, currentUser, logout } = useUser();
  const navigator = useNavigate();

  const handleLogout = () => {
    logout();
    navigator('/');
  };

  return (
    <div className="w-full bg-blue-100">
      <div className="flex justify-between items-center max-w-[500px] m-auto py-5">
        <Link to="/" className="font-extrabold text-2xl">
          Zustand
        </Link>
        {isLoggedIn ? (
          <div className="flex gap-2">
            <Link
              to="/mypage"
              className="text-blue-900 font-semibold underline"
            >
              {currentUser.id}
            </Link>
            <button onClick={handleLogout} className="cursor-pointer">
              | 로그아웃
            </button>
          </div>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
}
