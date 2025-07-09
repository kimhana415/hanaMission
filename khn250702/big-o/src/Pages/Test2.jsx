import React from 'react';

export default function Test2() {
  const products = [
    { name: 'Keyboard', likes: 120 },
    { name: 'Mouse', likes: 85 },
    { name: 'Monitor', likes: 200 },
    { name: 'Laptop', likes: 150 },
  ];

  const merge = (left, right) => {
    let result = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i].likes > right[j].likes) {
        result.push(left[i]);
        i = i + 1;
      } else {
        result.push(right[j]);
        j = j + 1;
      }
    }
    return result.concat(left.slice(i).concat(right.slice(j)));
  };

  const mergeSort = arr => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const result = mergeSort(products);

  return (
    <div>
      <h3>실습문제 2: 🛍️ 상품 인기 순위 정렬 (O(n log n))</h3>
      <ul>
        {result.map((item, i) => (
          <li key={i}>
            {i + 1}위: {item.name} ({item.likes})
          </li>
        ))}
      </ul>
    </div>
  );
}
/*
실습문제 2: 🛍️ 상품 인기 순위 정렬 (O(n log n))
🎯 문제 설명
다음과 같은 상품 객체 배열이 있습니다.
likes 기준으로 병합 정렬을 직접 구현하여 내림차순 정렬하세요.

[
  { name: "Keyboard", likes: 120 },
  { name: "Mouse", likes: 85 },
  { name: "Monitor", likes: 200 },
  { name: "Laptop", likes: 150 }
]
출력 예시
1위: Monitor (200)
2위: Laptop (150)
3위: Keyboard (120)
4위: Mouse (85)
💡 핵심 개념
O(n log n) 병합 정렬로 객체 배열 정렬
속성 기준 정렬 = 실무에서 매우 자주 사용
*/
