import React, { useState } from 'react'

export default function Test6() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const handlePrint = () => {
    const numA = Number(a);
    const numB = Number(b);

    if (numA < 1 || numA > 100 || numB < 1 || numB > 100) {
      alert("1이상 100이하 입력해 주세요.");
      return;
    }
    if (isNaN(numA) || isNaN(numB)) {
      alert("숫자만 입력해 주세요.");
      return setA(''), setB('');
    }
    if (numA >= numB) {
      alert("두번째 숫자는 첫번째 숫자보다 크거나 같아야 합니다.");
      return;
    }

    let value;
    if (numA === numB) {
      value = numA + numB
    } else {
      value = numB - numA
    }

    setResult(value);
    setA('');
    setB('');
  }

  return (
    <div className='wrap'>
      <h3>문제6</h3>

      <h5>
        두 숫자가 같으면 두 숫자의 합을, 다르면 차를 구하려 합니다.<br />
        표준 입력으로 숫자 두 개를 입력받아 두 숫자가 같으면 두 숫자의 합을, 다르면 차를 출력해주세요.
      </h5>

      <input
        type="text"
        placeholder='숫자1 입력'
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="text"
        placeholder='숫자2 입력'
        value={b}
        onChange={(e) => setB(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handlePrint()}
      />

      <button onClick={handlePrint}>출력하기</button>
      {
        result && (
          <p>{result}</p>
        )
      }

    </div>
  )
}
/*
문제6
두 숫자가 같으면 두 숫자의 합을, 다르면 차를 구하려 합니다.
표준 입력으로 숫자 두 개를 입력받아 두 숫자가 같으면 두 숫자의 합을, 다르면 차를 출력해주세요.

입력 설명
표준 입력으로 숫자 두 개가 주어집니다.
두 숫자는 1 이상 100 이하인 자연수입니다.
두번째 숫자는 첫번째 숫자와 같거나 큽니다.

출력 설명
두 숫자가 같으면 두 숫자의 합을, 다르면 차를 출력해주세요.

입출력 예 1
입력
5
5

출력
10

설명
첫 번째 수와 두 번째 수가 같으므로 두 숫자를 합한 10을 출력합니다.

입출력 예 2
입력
7
10

출력
3

설명
첫 번째 수와 두 번째 수가 다르므로 두 숫자의 차인 3을 출력합니다.
*/
