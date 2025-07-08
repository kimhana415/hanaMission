import React from 'react';

export default function Test3() {
  const scores = [35, 28, 98, 34, 20, 50, 85, 74, 71, 7];

  // 오름차순으로 정렬
  const sorted = [...scores].sort((a, b) => a - b);
  console.log('오름차순 정렬', sorted);

  // 가장 높은 점수 삭제
  sorted.pop();
  console.log('가장 높은 점수 삭제', sorted);

  // 가장 낮은 점수 삭제
  sorted.shift();
  console.log('가장 낮은 점수 삭제', sorted);

  // 가장 높은 점수, 가장 낮은 점수를 제외한 점수의 합
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
  }

  // 평균
  const average = sum / sorted.length;
  console.log('평균', average);

  // 정수
  const result = Math.floor(average);

  return (
    <div>
      <h3>문제3. 체조 선수의 점수 구해주기</h3>
      <p>
        총 합계: {sum}점 / 평균: {result}점
      </p>
    </div>
  );
}

/*
입력 - scores = [35, 28, 98, 34, 20, 50, 85, 74, 71, 7]
출력 - 49
*/
