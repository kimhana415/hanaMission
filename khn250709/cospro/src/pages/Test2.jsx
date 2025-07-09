export default function test1() {
  const scores = [
    [90, 88, 70],
    [85, 90, 90],
    [100, 100, 70],
    [30, 90, 80],
    [40, 10, 20],
    [83, 88, 80],
  ];
  const events = [80, 88, 70];

  let count = 0;

  for (let i = 0; i < scores.length; i++) {
    let pass = 0;
    let fail = 0;

    for (let j = 0; j < scores[i].length; j++) {
      const score = scores[i][j];
      const event = events[j];
      // 통과한 종목이 몇개인지 센다
      if (score >= event) {
        pass++;
        console.log(pass);
      }
      // 통과 점수의 반을 넘기지 못한 종목이 몇 개인지 센다
      if (score < event / 2) {
        fail++;
        console.log(fail);
      }
    }
    // 통과한 종목이 하나보다 많고 통과 점수의 반을 넘기지 못한 종목이 없으면 통과
    if (pass >= 2 && fail === 0) {
      count++;
    }
  }

  return (
    <div>
      <h3>문제2. 시험 합격자가 몇명이지?</h3>
      <p>시험에 합격한 인원: {count}명</p>
    </div>
  );
}

/*
입력 - scores = [[90,88,70],[85,90,90],[100,100,70],[30,90,80],[40,10,20],[83,88,80]]
출력 - 4
*/
