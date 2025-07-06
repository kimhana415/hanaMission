import React, { useState } from 'react'

export default function Test7() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handlePrint = () => {
    const num = Number(input);

    if (num < 1 || num > 1000) {
      alert("1이상 1000이하 입력해 주세요.");
      return;
    }
    if (isNaN(Number(num))) {
      alert("숫자만 입력해 주세요.");
      return setInput('');
    }


  }

  return (
    <div className='wrap'>
      <h3>문제7</h3>
      <h5>
        1부터 n까지의 숫자를 출력하려고 합니다.<br />
        표준 입력으로 자연수 n을 받아 1부터 n까지의 정수를 출력하는 코드를 작성하려 합니다.<br />빈칸을 채워 전체 코드를 완성해 주세요.<br />
      </h5>

      <input
        type="text"
        placeholder='숫자 입력'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handlePrint()}
      />

      <button onClick={handlePrint}>자연수 출력하기</button>
      {
        result && (
          <p>{result}</p>
        )
      }

    </div>
  )
}
/*
문제7
1부터 n까지의 숫자를 출력하려고 합니다.
표준 입력으로 자연수 n을 받아 1부터 n까지의 정수를 출력하는 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를 완성해 주세요.

입력 설명
표준 입력으로 자연수 n이 주어집니다. * n은 1 이상 1,000 이하입니다.

출력 설명
1부터 n까지의 자연수를 출력해주세요.
입출력 예
입력
5

출력
1
2
3
4
5
*/
