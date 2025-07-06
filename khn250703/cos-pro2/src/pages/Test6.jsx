import React from 'react'

export default function Test6() {
  function solution(number) {
    let count = 0;

    for (let i = 1; i < number; i++) { // 1부터 number까지 반복
      const str = String(i); // 문자열로 바꿈

      for (let char of str) {
        if ("369".includes(char)) {
          count++
        }
      }

    }
    return count;
  }
  return (
    <div>
      <h3>6. 369게임 박수의 갯수 구하기</h3>
      <p>결과: {JSON.stringify(solution(40))}</p>
    </div>
  )
}
/*
  for (let element of iterable) { } 반복하면서 element에 하나씩 들어옴
*/
