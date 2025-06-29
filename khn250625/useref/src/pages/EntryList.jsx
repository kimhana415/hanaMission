import React, { useReducer, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
const initState = [];

function reducer(state, action) {

  switch (action.type) {
    case 'ADD':
      console.log('추가:', action.name);
      return [...state, action.name];
    case 'DELETE':
      console.log('삭제:', action.name);
      return state.filter(name => name !== action.name);
    default:
      return state;
  }
}

export default function EntryList() {
  const [lists, dispatch] = useReducer(reducer, initState);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const name = input.trim();
    if (!name) return;

    if (lists.includes(name)) {
      alert("이미 등록된 이름입니다");
      return;
    }

    dispatch({ type: 'ADD', name });
    setInput('');
  }

  return (
    <div className='entrylist'>
      <h2>입장명단</h2>

      <div className="entrylist_inner">
        <div className="input-box">
          <input
            type='text'
            placeholder='이름 입력'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button onClick={handleAdd}>추가</button>
        </div>

        <h4>총 인원: {lists.length}명</h4>
        <ul className='list'>
          {
            lists.map(name => (
              <li
                className="list-item"
                key={name}
              >
                <p className='name'>{name}</p>
                <IoCloseOutline
                  onClick={() => dispatch({ type: "DELETE", name })}
                  size="24px"
                  className='icon-close'
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
/*
실습 문제 3 - 입장 명단 관리 시스템
  목표
  입장 인원들의 이름을 리스트로 저장하고 삭제할 수 있도록 하세요.

  요구 조건
  입력창 + 버튼: 이름 입력 후 추가
  리스트에 이름 표시
  이름 옆 :x: 버튼 클릭 시 해당 인원 삭제
  상태는 useReducer로 관리

  보너스
  현재 명단 총 인원 수 표시

  같은 이름을 중복 등록하면 “이미 등록된 이름입니다” 경고 띄우기
*/
