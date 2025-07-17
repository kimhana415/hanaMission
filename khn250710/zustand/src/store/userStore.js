import { create } from 'zustand';

export const useUser = create((set, get) => ({
  isLoggedIn: false,
  currentUser: null,
  users: {
    1: { pw: '1111' },
    2: { pw: '2222' },
  },

  join: (userId, userPw) => {
    if (!userId.trim() || !userPw.trim()) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return false;
    }
    const { users } = get();

    if (users[userId]) {
      alert('이미 존재하는 아이디입니다.');
      return false;
    }

    set({
      users: {
        ...users,
        [userId]: { pw: userPw },
      },
    });

    alert('회원가입 성공!');
    return true;
  },

  login: (userId, userPw) => {
    if (!userId.trim() || !userPw.trim()) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return false;
    }
    const { users } = get();

    if (!users[userId]) {
      alert('존재하지 않는 아이디입니다.');
      return false;
    }

    if (users[userId].pw !== userPw) {
      alert('비밀번호가 틀렸습니다.');
      return false;
    }

    set({
      isLoggedIn: true,
      currentUser: { id: userId, pw: userPw },
    });

    alert('로그인 성공!');
    return true;
  },

  logout: () =>
    set({
      isLoggedIn: false,
      currentUser: null,
    }),
}));
