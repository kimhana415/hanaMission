import React, { useState } from 'react'

export default function Test5() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handlePrint = () => {
    const num = Number(input);

    if (num < -1000 || num > 1000) {
      alert("-1000이상 1000이하 입력해 주세요.");
      return;
    }
    if (isNaN(Number(num))) {
      alert("숫자만 입력해 주세요.");
      return setInput('');
    }

    const abs = Math.abs(num); // Math.abs() 절대값 구하는 함수
    setResult(abs);
    setInput('');
  }
  return (
    <div className='wrap'>
      <h3>문제5</h3>

      <h5>
        숫자 한 개가 주어졌을 때 그 숫자의 절댓값을 구하려 합니다.<br />
        표준 입력으로 숫자 한 개를 입력받아, 그 수의 절댓값을 출력해주세요.
      </h5>

      <input
        type="text"
        placeholder='숫자 입력'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handlePrint()}
      />

      <button onClick={handlePrint}>절대값 출력하기</button>
      {
        result && (
          <p>절대값: {result}</p>
        )
      }
    </div>
  )
}
/*
문제5
숫자 한 개가 주어졌을 때 그 숫자의 절댓값을 구하려 합니다.
표준 입력으로 숫자 한 개를 입력받아, 그 수의 절댓값을 출력해주세요.

입력 설명
표준 입력으로 숫자 한 개가 주어집니다. - 입력되는 수는 -1,000 이상 1,000 이하인 정수입니다.

출력 설명
입력받은 수의 절댓값을 출력해주세요.

입출력 예 1
입력-13

출력
13
설명-13의 절댓값은 13이므로 13을 출력합니다.

입출력 예 2
입력
7

출력
7

설명
7의 절댓값은 7이므로 7을 출력합니다.
*/
