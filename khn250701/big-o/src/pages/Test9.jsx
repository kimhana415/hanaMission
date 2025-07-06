import React, { useState } from 'react'

export default function Test9() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handlePrint = () => {
    const num = Number(input);

    if (num < 1 || num > 100000000) {
      alert("1이상 100000000이하 입력해 주세요.");
      return;
    }
    if (isNaN(Number(num))) {
      alert("숫자만 입력해 주세요.");
      return setInput('');
    }

    const reversed = input.split('').reverse().join('');
    setResult(reversed);
    setInput('');
  }
  return (
    <div className='wrap'>
      <h3>문제9</h3>
      <h5>
        숫자 한 개를 입력받았을 때 숫자를 거꾸로 출력하려고 합니다.<br />
        예를 들어, 12345가 입력되면 54321을 출력합니다.<br />
        표준 입력으로 자연수 n을 입력받아 숫자 n을 거꾸로 출력하도록 코드를 작성하려 합니다.<br /> 빈칸을 채워 전체 코드를 완성해 주세요.
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
문제9
숫자 한 개를 입력받았을 때 숫자를 거꾸로 출력하려고 합니다.
예를 들어, 12345가 입력되면 54321을 출력합니다.
표준 입력으로 자연수 n을 입력받아 숫자 n을 거꾸로 출력하도록 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를 완성해 주세요.

입력 설명
표준 입력으로 자연수 n이 주어집니다.
n은 1 이상 100,000,000 이하입니다.
n은 0으로 끝나지 않습니다.

출력 설명
숫자 n을 거꾸로 출력해주세요.
입출력 예
입력
12345

출력
54321

설명
12345를 거꾸로 하면 54321이므로 54321을 출력합니다.
*/
