import React from 'react'

export default function Test5() {

  // 방법 1
  // reverse 사용 하면 원본 배열자체가 바뀜
  // const arr = [1, 4, 2, 3];
  // arr.reverse();

  function solution(arr, arr_len) {
    return [...arr].reverse(); // 배열 복사해서 뒤집기
  }

  // 방법 2
  // function solution(arr, arr_len) {
  //   const reversed = [];
  //   for (let i = arr_len - 1; i >= 0; i--) {
  //     reversed.push(arr[i])
  //   }
  //   return reversed;
  // }

  return (
    <div>
      <h3>5. 배열의 순서 뒤집기</h3>
      {/* <p>결과: {JSON.stringify(arr)}</p> */}
      <p>결과: {JSON.stringify(solution([1, 4, 2, 3], 4))}</p>
    </div>
  )
}
/*
요약
  - arrlen은 1이상 100이하의 자연수
  - arr의 원소는 -100 이상 100이하의 정수

입력값?
  arr[1,4,2,3]

출력값?
  arr 순서를 뒤집은 [3,2,4,1]

중요한 데이터 라벨은?
  arr[1,4,2,3]

입력이 출력을 결정할 수 있나?
  입력 배열을 뒤집으면 됨

문제에서 중요한 핵심?

*/
