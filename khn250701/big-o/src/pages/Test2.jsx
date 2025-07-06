import React, { useState } from 'react'

export default function Test2() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const handleCompare = () => {
    if (a.length < 1 || a.length > 100 || b.length < 1 || b.length > 100) {
      alert('입력 문자열은 1자 이상 100자 이하여야 합니다.');
      return;
    }
    if (!isNaN(Number(a)) || !isNaN(Number(b))) {
      alert("문자만 입력해 주세요.");
      return setA(''), setB('');
    }
    if (a.length === b.length) {
      alert("두 문자열의 길이가 같습니다.");
      return
    }

    if (a.length > b.length) {
      setResult(a);
    } else {
      setResult(b)
    };

    console.log(a.length, b.length);
    setA('');
    setB('');
  }

  return (
    <div className='wrap'>
      <h3>문제2</h3>
      <h5>
        두 문자열 중 더 긴 문자열을 찾고자 합니다.<br />
        표준 입력으로 문자열 두 개를 입력받아,<br />
        두 문자열 중 더 긴 문자열을 출력해주세요.
      </h5>

      <input
        type="text"
        placeholder='문자1 입력'
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="text"
        placeholder='문자2 입력'
        value={b}
        onChange={(e) => setB(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCompare()}
      />


      <button onClick={handleCompare}>문자열 길이 비교하기</button>

      {
        result && (
          <p>더 긴 문자열: {result}</p>
        )
      }
    </div>
  )
}

/*
문제2
두 문자열 중 더 긴 문자열을 찾고자 합니다.
표준 입력으로 문자열 두 개를 입력받아, 두 문자열 중 더 긴 문자열을 출력해주세요.

입력 설명
표준 입력으로 문자열 두 개가 주어집니다.
두 문자열의 길이는 1 이상 100 이하입니다.
두 문자열의 길이가 같은 경우는 없습니다.

출력 설명
두 문자열 중 더 긴 문자열을 출력해주세요.

입출력 예
입력
"HelloWorld"
"Programmingisfun"

출력
"Programmingisfun"

설명
첫 번째 입력받은 문자열의 길이는 10, 두 번째 문자열의 길이는 16입니다. 두 번째 문자열의 길이가 더 길므로
"Programmingisfun"을 출력합니다
*/
