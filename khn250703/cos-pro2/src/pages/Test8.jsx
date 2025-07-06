import React from 'react'

export default function Test8() {

  function solution(sentence) {

    const cleanStr = sentence.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
  }

  return (
    <div>
      <h3>8. 팰린드롬 판단하기</h3>
      <p>결과: {JSON.stringify(solution("never odd or even."))}</p>
      <p>결과: {JSON.stringify(solution("palindrome"))}</p>
    </div>
  )
}

/*
.replace()는 기본적으로 첫번째만 변경함
str.replace(바꿀대상(문자, 문자열, 정규표현식), 교체할 내용(문자열, 함수))

.replace(/[^a-zA-Z ]/g, '')
알파벳과 숫자가 아닌 모든 문자(공백, 마침표, 쉼표 등) 제거

.toLowerCase() 모두 소문자로 바꿈
.split('') 문자열을 문자 배열로 만듦
.reverse() 배열을 역순으로 뒤집음
.join('') 문자 배열을 다시 문자열로 합침
*/
