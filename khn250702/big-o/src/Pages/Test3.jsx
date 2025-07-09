import React from 'react';

export default function Test3() {
  return (
    <div>
      <h3>실습문제 3: 🔍 검색어 추천 기능 비교 실험</h3>
    </div>
  );
}
/*
실습문제 3: 🔍 검색어 추천 기능 비교 실험
🎯 문제 설명
10000개의 랜덤 단어가 있는 배열이 있을 때:

선형 탐색(O(n))으로 검색어 "code" 포함 여부를 찾고

이진 탐색(O(log n))을 위해 정렬 후 찾아본다

각 탐색 방법의 실행 속도를 console.time()으로 비교하세요.

💡 출력 예시
console.time("linear");
linearSearch("code");
console.timeEnd("linear");

console.time("binary");
binarySearch("code");
console.timeEnd("binary");
💡 핵심 개념
실시간 검색, 자동완성에서 검색 방식에 따른 성능 차이 체험
O(n) vs O(log n)의 실전 비교
*/
