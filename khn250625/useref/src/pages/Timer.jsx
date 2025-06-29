import React, { useEffect, useReducer } from 'react'
const initState = {
  seconds: 0,
  isRunning: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return {
        ...state, isRunning: true
      };

    case 'STOP':
      return {
        ...state, isRunning: false
      };

    case 'RESET':
      return {
        seconds: 0, isRunning: false
      };

    case 'TICK':
      return {
        ...state,
        seconds: state.seconds + 1
      };
  }
}

function formatTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hours} : ${mins} : ${secs}`;
}

export default function Timer() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    let interval;
    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <div className='timer'>
      <h2>스톱워치 타이머</h2>

      <div className="timer-inner">
        <div className="timer-box">
          <p className='timer-time'>{formatTime(state.seconds)}</p>
        </div>

        <div className="btn-box">
          <button onClick={() => dispatch({ type: 'START' })}>시작</button>
          <button onClick={() => dispatch({ type: 'STOP' })}>정지</button>
          <button onClick={() => dispatch({ type: 'RESET' })}>리셋</button>
        </div>

      </div>

    </div>
  )
}
/*
실습 문제 2 - 스톱워치 타이머 만들기
  목표
  시작/정지/리셋 가능한 간단한 스톱워치 만들기 (단위: 초)

  요구 조건
  useReducer로 상태 관리: seconds, isRunning

  버튼: 시작,정지, 리셋
  useEffect와 setInterval() 사용

  보너스
  시간이 60초가 되면 분 단위로 자동 변환 표시 (MM:SS)
*/
