import React, { useState } from 'react'

export default function QuickSort2() {
  const [arr, setArr] = useState(["hi", "hello", "a", "world"]);
  const [sorted, setSorted] = useState([]);

  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = arr.slice(1).filter(v =>
      v.length < pivot.length ||
      (v.legnth === pivot.length && v.localeCompare(pivot) < 0)
    );
    const right = arr.slice(1).filter(v =>
      v.length > pivot.length ||
      (v.length === pivot.length && v.localeCompare(pivot) > 0)
    );
    // a.localeCompare(b) 문자열 사전순으로 비교
    // < 0	a가 앞에 온다
    // > 0	b가 앞에 온다
    // === 0	같다

    return [...quickSort(left), pivot, ...quickSort(right)]
    /*
    hi    ->  l: ["a"]
              r:["hello","world"]
    a     ->  l: x
              r: x
    hello ->  l: x
              r: [world]  "world".localeCompare("hello") > 0  "world"는 뒤에 있으니까 오른쪽
    ->  ["a"],["hi"],["hello","world"] ->  ["a", "hi", "hello", "world"]
    */
  }

  const handleSort = () => {
    console.log(handleSort);
    const result = quickSort(arr);
    setSorted(result);
  }
  return (
    <div>
      <h3>문제 2. [Quick Sort] 문자열 길이로 정렬하기</h3>
      <p>정렬 전: {JSON.stringify(arr)}</p>
      <button onClick={handleSort}>정렬하기</button>
      <p>정렬 후:{JSON.stringify(sorted)}</p>
    </div>
  )
}
/*
  🔷 문제 2. [Quick Sort] 문자열 길이로 정렬하기
  📝 설명:
  문자열 배열을 받아서 글자 길이 기준으로 오름차순 정렬하세요.

  📥 입력 예시:
  ["hi", "hello", "a", "world"]
  📤 출력 예시:
  ["a", "hi", "hello", "world"]
  💡 확장 아이디어:
  길이가 같을 경우 사전순 정렬도 추가해보기
*/
