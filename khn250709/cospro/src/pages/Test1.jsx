export default function test1() {
  const schedule = ['O', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X', 'X'];
  const no = 'X';
  let result = [];
  schedule.forEach((e, i) => {
    if (e === no) {
      result.push(i + 1);
    }
  });
  return (
    <div>
      <h3>문제1. 상담 선생님은 너무 바빠요</h3>
      <p>[{result.join(', ')}]</p>
    </div>
  );
}

/*
입력 - schedule = ['O', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X', 'X']
출력 - [2, 3, 7, 9, 10]
*/
