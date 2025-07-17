import React, { useEffect } from 'react';
import { useUser } from '../store/userStore';

export default function Mypage() {
  const { isLoggedIn, currentUser } = useUser();

  if (!isLoggedIn) return null;
  return (
    <div className="max-w-[500px] m-auto py-5">
      <h3 className="text-2xl mb-5 font-semibold">마이페이지</h3>
      <p>아이디: {currentUser.id} </p>
      <p>비밀번호: {currentUser.pw}</p>
    </div>
  );
}
