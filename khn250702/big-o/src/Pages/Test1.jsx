import React, { useState } from 'react';

export default function Test1() {
  const hints = [
    'apple',
    'banana',
    'carrot',
    'grape',
    'melon',
    'orange',
    'peach',
  ];

  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const pwHintSearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid;
      } else if (target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };
  const handleSearch = () => {
    const idx = pwHintSearch(hints, input);
    setResult(idx);
  };

  return (
    <div>
      <h3> 실습문제 1: 🧭 비밀번호 힌트 찾기 (O(log n)) </h3>
      <p>힌트: {JSON.stringify(hints)}</p>

      <input
        type="text"
        placeholder="힌트 입력"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>찾기</button>

      {result !== null && <p>{result === -1 ? '힌트 없음' : `힌트 발견`}</p>}
    </div>
  );
}
/*
실습문제 1: 🧭 비밀번호 힌트 찾기 (O(log n))
문제 설명
정렬된 문자열 배열이 주어졌을 때,
사용자가 입력한 힌트 문자열이 있는지 이진 탐색으로 찾아보세요.

const hints = ["apple", "banana", "carrot", "grape", "melon", "orange", "peach"];
사용자가 "grape"를 입력하면 "힌트 발견!"

없으면 "힌트 없음!"

💡 핵심 개념
정렬된 배열 + 이진 탐색 = O(log n)

문자열에도 이진 탐색이 적용됨
*/
