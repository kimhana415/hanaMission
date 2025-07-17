import React, { useState } from 'react';

export default function Test3() {
  const [n, setN] = useState('');
  const [bundle, setBundle] = useState('');
  const [result, setResult] = useState(null);

  const scoreMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };

  const handleResult = () => {
    const count = Number(n);
    const cards = bundle.slice(0, count * 2).split('');

    let aScore = 0;
    let bScore = 0;

    cards.forEach((card, i) => {
      const score = scoreMap[card];
      if (i % 2 === 0) {
        aScore += score;
      } else {
        bScore += score;
      }
    });
    console.log(`A: ${aScore} B: ${bScore}`);

    let winner = 0;
    let winnerScore = aScore;

    if (aScore > bScore) {
      winner = 1;
      winnerScore = aScore;
    } else if (bScore > aScore) {
      winner = 2;
      winnerScore = bScore;
    }

    setResult([winner, winnerScore]);
  };

  return (
    <div className="wrap">
      <h3>3. 획득 점수 구하기 도박은 안돼요</h3>
      <input
        type="number"
        placeholder="뽑을 카드 수 입력"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <input
        type="text"
        placeholder="cacdbdedccbb"
        value={bundle}
        onChange={(e) => setBundle(e.target.value)}
      />
      <button onClick={handleResult}>결과</button>

      {result && (
        <div>
          <p>{JSON.stringify(result)}</p>
          <p>0 = 무승부 / 1 = A승 / 2 = B승</p>
        </div>
      )}
    </div>
  );
}
/*
내가 이해한 문제 요약
  - a와 b가 번갈아가면서 카드를 뽑고  뽑아야하는 카드 갯수만큼 소유한 카드의 점수를 합산한다
  - 획득한 점수가 큰사람과 획득한 점수를 순서대로 배열에 담는다
  - a가 이겼을 경우 1, b가 이겼을 경우에는 2, 무승부일 경우에는 0
  

입력값
n=4
bundle='cacdbdedccbb'

출력값
[0,13]

중요한 데이터 라벨?
a = 1점, b = 2점, c = 3점, d = 5점, e = 5점
a가 이겼을 경우 1, b가 이겼을 경우에는 2, 무승부일 경우에는 0
*/
