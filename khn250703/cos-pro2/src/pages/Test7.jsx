import React from 'react'

export default function Test7() {
  function solution(scores, scoreslen) {
    let count = 0;
    for (let i = 0; i < scoreslen; i++) {
      if (scores[i] >= 600 && scores[i] < 800) {
        count++
      }
    }
    return count;
  }

  return (
    <div>
      <h3>7. 영어 수강 대상자 수 구하기</h3>
      <p>결과: {JSON.stringify(solution([650, 722, 914, 558, 714, 803, 650, 679, 669, 800], 10))}</p>
    </div>
  )
}
