import React, { useState } from 'react'

export default function Test4() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const hanldePrint = () => {
    if (input < 1 || input > 100) {
      alert("1자 이상 100자 이하 입력해 주세요.");
      return;
    }
    if (!isNaN(Number(input))) {
      alert("문자만 입력해 주세요.");
      return setInput('');
    }

    setResult(`"${input}"`);
    setInput('');
    console.log(input);
  }

  return (
    <div className='wrap'>
      <h3>문제4</h3>

      <h5>
        문자열 한 개가 주어졌을 때, 주어진 문자열 양 옆에 큰따옴표를 붙이려 합니다.<br />
        표준 입력으로 문자열 한 개를 입력받아, 입력받은 문자열 양 옆에 큰따옴표를 붙여 출력하도록 코드를 작성하려 합니다.<br />
        빈칸을 채워 전체 코드를 완성해주세요.
      </h5>

      <input
        type="text"
        placeholder='문자 입력'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && hanldePrint()}
      />
      <button onClick={hanldePrint}>큰 따옴표 붙여서 출력하기</button>

      {
        result && (
          <p>{result}</p>
        )
      }
    </div>
  )
}
/*
문제4
문자열 한 개가 주어졌을 때, 주어진 문자열 양 옆에 큰따옴표를 붙이려 합니다.
표준 입력으로 문자열 한 개를 입력받아, 입력받은 문자열 양 옆에 큰따옴표를 붙여 출력하도록 코드를 작성하려 합니다. 빈칸을 채워 전체 코드를 완성해주세요.

입력 설명
표준 입력으로 문자열 한 개가 주어집니다.
문자열은 알파벳 대문자와 소문자로만 이루어집니다.
문자열 길이는 1 이상 100 이하입니다.

출력 설명
입력받은 문자열 양 옆에 큰따옴표를 붙여 출력해주세요.

입출력 예 1
입력
HelloWorld

출력
"HelloWorld"

입출력 예 2
입력
Quote

출력
"Quote"
*/
