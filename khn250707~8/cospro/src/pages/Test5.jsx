import React from 'react';

export default function Test5() {
  const memberAge = [25, 11, 27, 56, 7, 19, 52, 31, 77, 8];

  // 교통 수단별 금액
  const transport = {
    Bus: {
      adult: 40000,
      child: 15000,
    },
    Ship: {
      adult: 30000,
      child: 13000,
    },
    Airplane: {
      adult: 70000,
      child: 45000,
    },
  };

  // 사용할 교통 수단
  const transportType = 'Ship';

  // 20살 이상이면 어른 요금, 아니면 어린이 요금
  let adultCount = 0;
  let childCount = 0;
  for (let age of memberAge) {
    if (age >= 20) {
      adultCount++;
    } else {
      childCount++;
    }
  }
  console.log(`성인: ${adultCount} / 어린이: ${childCount}명`);

  // 사용할 교통 수단의 금액
  let adultFare = transport[transportType].adult;
  let childFare = transport[transportType].child;
  console.log(`성인 요금: ${adultFare} / 어린이 요금: ${childFare}`);

  // 10명 이상이면 할인 적용
  if (memberAge.length >= 10) {
    adultFare *= 0.9;
    childFare *= 0.8;
  }

  const result = adultCount * adultFare + childCount * childFare;

  return (
    <div>
      <h3>문제5. 여행객의 총 교통비 구하기</h3>
      <p>교통비 총액: {result.toLocaleString()}원</p>
    </div>
  );
}
/*
입력 - memberAge = [25, 11, 27, 56, 7, 19, 52, 31, 77, 8]
출력 - 203600
*/
