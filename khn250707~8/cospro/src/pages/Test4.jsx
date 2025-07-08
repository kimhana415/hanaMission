import React from 'react';

export default function Test4() {
  const words = ['CODE', 'COED', 'CDEO'];
  const word = 'CODE';

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (words[i][j] !== word[j]) {
        count++;
      }
    }
  }

  return (
    <div>
      <h3>문제4. 단어의 오타 수정하기</h3>
      <p>바꿔야하는 문자 수: {count}개</p>
    </div>
  );
}
/*
입력 - words = ['CODE', 'COED', 'CDEO'] / word = 'CODE';
출력 - 5
*/
