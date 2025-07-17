import React from 'react';

export default function Test9() {
  const day = 17;
  const numbers = [3285, 1724, 4438, 2988, 3131, 2998];
  const isOddDay = day % 2 !== 0; // 홀수인날

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const lastNum = numbers[i] % 10; // 차량 끝자리 (10으로 나누면 나머지가 끝자리만 남음)
    const isOddNum = lastNum % 2 !== 0; // 차량 끝자리 홀수

    if (isOddDay === isOddNum) {
      count++;
    }
  }

  return (
    <div>
      <h3>문제9. 주차장에 몇 대가 들어올 수 있는거야?</h3>
      <p>주차장에 들어올 수 있는 차량의 수: {count}대</p>
    </div>
  );
}

/*
입력 - day = 17, numbers = [3285, 1724, 4438, 2988, 3131, 2998]
출력 - 2
*/
