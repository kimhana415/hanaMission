import React from 'react'

export default function Test10() {

  function solution(data, datalen) {
    let sum = 0;

    for (let i = 0; i < datalen; i++) {
      sum += data[i]; // 배열 합
    }

    const average = sum / datalen // 평균

    let count = 0;
    for (let i = 0; i < datalen; i++) {
      if (data[i] <= average) {
        count++
      }
    }
    return count
  }

  return (
    <div>
      <h3>10. 평균 이하의 개수 구하기</h3>
      <p>결과: {JSON.stringify(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))}</p>
      <p>결과: {JSON.stringify(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 10], 10))}</p>
    </div>
  )
}
