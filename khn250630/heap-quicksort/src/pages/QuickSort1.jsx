import React, { useState } from 'react'

export default function QuickSort1() {
  const [arr, setArr] = useState([5, 2, 8, 1, 9]);
  const [sorted, setSorted] = useState([]);

  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    console.log("pivot", pivot);

    // 위아래 출력 같음 부등호 바꾸거나 left, right 순서 바꾸거나 하지만 왼쪽을 먼저 쓰는게 암묵적인 룰
    const left = arr.slice(1).filter(v => v > pivot); // pivot보다 큰 수
    const right = arr.slice(1).filter(v => v < pivot); // pivot보다 작거나 같은 수
    return [...quickSort(left), pivot, ...quickSort(right)];

    // const left = arr.slice(1).filter(v => v < pivot);
    // const right = arr.slice(1).filter(v => v > pivot);
    // return [...quickSort(right), pivot, ...quickSort(left)];
    /*
    5 ->  l:[2,1]
          r:[8,9]
    2 ->  l:[1]
          r:X
      ->  [x,2,1]
    8 ->  l:x
          r:[9]
      ->  [9,8,x]
    ->  [9,8],[5],[2,1] -> [9,8,5,2,1]
    */
  }

  const handleSort = () => {
    console.log(handleSort);
    const result = quickSort(arr);
    setSorted(result);
  }

  return (
    <div>
      <h3>문제 1. [Quick Sort] 숫자 정렬기 만들기 (기초)</h3>
      <p>정렬 전: {JSON.stringify(arr)}</p>
      <button onClick={handleSort}>정렬하기</button>
      <p>정렬 후:{JSON.stringify(sorted)}</p>
    </div>
  )
}
/*
  🔷 문제 1. [Quick Sort] 숫자 정렬기 만들기 (기초)
  📝 설명:
  사용자가 입력한 숫자 배열을 Quick Sort로 내림차순 정렬하세요.

  📥 입력 예시:
  [5, 2, 8, 1, 9]

  📤 출력 예시:
  [9,8,5,2,1]
*/
