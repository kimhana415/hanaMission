import React from 'react';

export default function Test2() {
  const currentGrade = [70, 100, 70, 80, 50, 95];
  const lastGrade = [35, 65, 80, 50, 20, 60];
  // 3-1. 이번 학기 성적이 80점 이상이면서 석차가 상위 10% 이내
  // 3-2. 이번 학기 성적이 80점 이상이면서 1등
  // 3-3. 직전 학기 대비 성적이 가장 많이 오른 학생

  // 1. 이번 학기 성적을 기준으로 학생별 석차 구하기
  const sorted = [...currentGrade]
    .map((score, i) => ({ score, i }))
    .sort((a, b) => b.score - a.score);
  console.log('석차: ', sorted);

  // 2. 각 학생의 (이번학기 성적 - 직전 학기 성적) 중 최댓값 구하기

  // 3.

  // 4. 장학생 수 return

  return (
    <div>
      <h3>문제2. 장학생 수 구하기</h3>
      {/* <p>장학생 수: {result}명</p> */}
    </div>
  );
}

/*
입력 - currentGrade = [70, 100, 70, 80, 50, 95] / lastGrade = [35, 65, 80, 50, 20, 60]
출력 - 3
*/
