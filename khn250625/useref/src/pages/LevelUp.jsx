import React, { useReducer } from 'react'

const initState = {
  level: 1,
  exp: 0,
  msg: '',
}

function reducer(state, action) {
  console.log(state);
  if (action.type === 'EXPUP') {
    const newExp = state.exp + 10;
    const levelUp = newExp >= 30;

    return {
      level: levelUp ? state.level + 1 : state.level,
      exp: levelUp ? 0 : newExp,
      msg: levelUp ? '레벨업!!!!!!' : '',
    }
  }
}

export default function LevelUp() {
  const [up, dispatch] = useReducer(reducer, initState);

  return (
    <div className='levelup'>
      <h2>레벨업</h2>

      <div className="levelup-inner">
        <div className="exp">
          <span>Level: {up.level}</span>
          <span>Exp: {up.exp}</span>
        </div>

        <button
          onClick={() => dispatch({ type: 'EXPUP' })}
          className='exp-up-btn'
          disabled={up.level >= 5}
        >
          경험치 +10
        </button>
      </div>

      <p className='msg'>{up.msg}</p>
    </div>
  )
}
/*
실습 문제 4 - 레벨업 RPG 캐릭터 시스템
  목표
  경험치를 쌓아 캐릭터가 레벨업할 수 있는 시스템 만들기

  요구 조건
  상태: { level: 1, exp: 0 }

  버튼: “경험치 +10”
  경험치가 100 이상이면 level +1, exp 0으로 리셋

  보너스
  현재 상태에 따라 “레벨업!” 메시지 띄우기
  5레벨 이상이면 버튼을 비활성화 시키기 (disabled)
*/
