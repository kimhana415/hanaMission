import React from 'react'

export default function Test9() {
  function solution(characters) {
    let result = characters[0];

    for (let i = 1; i < characters.length; i++) {
      if (characters[i] !== characters[i - 1]) {
        result += characters[i]
      }
    }
    return result;
  }

  return (
    <div>
      <h3>9. 중복문자 삭제하기</h3>
      <p>결과: {JSON.stringify(solution("senteeeencccccceeee"))}</p>
    </div>
  )
}
