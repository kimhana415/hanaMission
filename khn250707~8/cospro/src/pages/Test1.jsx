import React from 'react';

export default function Test1() {
  const scores = [20, 60, 98, 59];
  const n = 3;

  // 1.  n번 학생의 점수를 변수에 저장
  const nScore = scores[n];

  // 2.점수를 내림차순으로 정렬
  const sorted = [...scores].sort((a, b) => b - a);
  console.log('내림차순 정렬', sorted);

  // 3. 배열의 첫번째부터 마지막까지 순회하며 n번의 학생의 점수를 찾음
  let rank;
  for (let i = 0; i < sorted.length; i++) {
    // 4. 1번 단계에 저장해둔 점수와 같은 점수를 찾으면 return
    if (sorted[i] === nScore) {
      rank = i + 1;
    }
  }

  return (
    <div>
      <h3>문제1. 학생의 등수 구하기</h3>
      <p>
        {n}번 학생의 점수: {nScore}점 / 등수: {rank}등
      </p>
    </div>
  );
}

/*
입력 - scores = [20, 60, 98, 59], n = 3
출력 - 3
*/
