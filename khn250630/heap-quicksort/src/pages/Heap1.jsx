import React, { useState } from 'react'

export default function Heap1() {
  const [heap, setHeap] = useState([]);
  const [input, setInput] = useState('');

  const heapInsert = (arr) => {
    let i = arr.length - 1; // 마지막 인덱스
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2); // 부모 인덱스
      console.log("부모:", parent);

      if (arr[parent] <= arr[i]) { // 부모가 더 작으면 멈춤
        break
      }
      // 부모와 위치 바꾸기
      [arr[parent], arr[i]] = [arr[i], arr[parent]];
      i = parent; // 부모로 이동
    }
    console.log("변경된: ", arr)
    return arr;
  }

  const heapDown = (arr) => {
    let i = 0;
    const length = arr.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let small = i;

      if (left < length && arr[left] < arr[small]) {
        small = left;
      }
      if (right < length && arr[right] < arr[small]) {
        small = right;
      }
      if (small === i) break;
      [arr[i], arr[small]] = [arr[small], arr[i]];

      i = small;
    }
    return arr;
  }


  const insert = () => {
    const value = parseInt(input); // 숫자로 변환
    console.log(value);
    if (isNaN(value)) return; // 숫자가 아니면 무시

    const newHeap = heapInsert([...heap, value]); // 배열에 추가 + 정렬
    setHeap(newHeap) // 상태 업데이트
    setInput(''); // 입력 초기화
  }

  const extract = () => {
    if (heap.length === 0) return;

    const newHeap = [...heap];
    const min = newHeap[0]; // 가장 작은 값
    newHeap[0] = newHeap.pop(); // 마지막 값을 루트로 이동
    setHeap(heapDown(newHeap)); // 다시 정렬하기
    alert(`꺼낸 최소값:${min}`);

  }

  return (
    <div>
      <h3>문제 3. [Heap] 최소 힙 구현하기</h3>
      <input
        type="text"
        placeholder='숫자 입력'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={insert}>삽입</button>
      <button onClick={extract}>최소값</button>
      <p>{JSON.stringify(heap)}</p>
    </div>
  )
}
/*
  🔷 문제 3. [Heap] 최소 힙 구현하기
  📝 설명:
  숫자를 힙에 계속 추가하고, pop() 하면 항상 가장 작은 값이 나오도록 하세요.

  📥 입력 흐름:
  insert 7 → insert 3 → insert 5
  extract → 결과: 3
  insert 1 → extract → 결과: 1

  📤 힙 상태:
  남은 배열: [5, 7]
  💡 확장 아이디어:
  힙 구조를 트리 형태로 그려보는 시각화 구현
*/
