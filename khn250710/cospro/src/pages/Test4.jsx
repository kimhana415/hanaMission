import React, { useState } from 'react';

export default function Test4() {
  const m = 30;
  const [classes, setClasses] = useState('');
  const [result, setResult] = useState(null);

  const handleResult = () => {
    const students = classes
      .split(',')
      .map((s) => Number(s.trim()))
      .filter((num) => !isNaN(num));
    console.log(students);

    const result = [];

    for (let i = 0; i < students.length; i++) {
      result.push(Math.ceil(students[i] / m));
    }
    console.log(result);

    const total = result.reduce((acc, cur) => acc + cur, 0);
    setResult(total);
  };

  return (
    <div className="wrap">
      <h3>4. 조교의 수 구하기</h3>
      <input
        type="text"
        placeholder="80,45,33,20"
        value={classes}
        onChange={(e) => setClasses(e.target.value)}
      />
      <button onClick={handleResult}>결과</button>

      {result && <p>필요한 조교 수: {result}명</p>}
    </div>
  );
}
/*
내가 이해한 문제 요약
조교 1명이 30명의 학생을 담당
교실별 필요한 조교 수를 구한 후 합산

입력값
classes=[80,45,33,20]
m=30

출력값
8

중요한 데이터 라벨?
조교 1명이 학생 30명을 담당한다
*/
