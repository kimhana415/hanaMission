import React, { useState } from 'react'

export default function Test3() {
  const [n, setN] = useState('');
  const [lines, setLines] = useState([]);

  // flatMap 사용하면 코드가 더 간단해짐
  // 예외 상황 하나로 합치고 + try catch문으로
  const handlePrint = () => {
    if (n < 1 || n > 100) {
      alert("1이상 100이하 입력해 주세요.");
      return;
    }
    if (isNaN(Number(n))) {
      alert("숫자만 입력해 주세요.");
      return setN('');
    }

    const stars = [];
    for (let i = n; i >= 1; i--) {
      stars.push('*'.repeat(i));
    }

    setLines(stars);
    setN('');
  }

  return (
    <div className='wrap'>
      <h3>문제3</h3>

      <h5>
        별("*")로 밑변과 높이가 N인 직각삼각형을 거꾸로 출력하려고 합니다.<br />
        표준 입력으로 자연수 N을 입력받아 밑변과 높이가 N인 직각삼각형을 거꾸로 출력해주세요.
      </h5>

      <input
        type="text"
        placeholder='숫자 입력'
        value={n}
        onChange={(e) => setN(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handlePrint()}
      />

      <button onClick={handlePrint}>직각삼각형 거꾸로 출력하기</button>

      <div className='star'>
        {
          lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))
        }
      </div>
    </div>
  )
}
/*
문제3
별("*")로 밑변과 높이가 N인 직각삼각형을 거꾸로 출력하려고 합니다.
예를 들어, N이 5일 때 다음과 같이 출력합니다.
*****
****
***
**
*
표준 입력으로 자연수 N을 입력받아 밑변과 높이가 N인 직각삼각형을 거꾸로 출력해주세요.

입력 설명
표준 입력으로 자연수 N이 주어집니다.
N은 1 이상 100 이하입니다.

출력 설명
별로 밑변과 높이가 N인 직각삼각형을 거꾸로 출력해주세요.

입출력 예
입력
5

출력
*****
****
***
**
*
*/
