import React from 'react'
import Vote from '../components/Vote';

const posts = [
  { title: '게시글 1' },
  { title: '게시글 2' },
  { title: '게시글 3' },
  { title: '게시글 4' },
  { title: '게시글 5' }
]

export default function Board() {

  return (
    <div className='board'>
      <h2>좋아요/싫어요 게시물</h2>
      <div className="items">
        {
          posts.map((post, i) => (
            <Vote
              key={i}
              title={post.title}
            />
          ))
        }
      </div>
    </div>
  )
}
/*
실습 문제 1 - 좋아요/싫어요 게시물 시스템
  목표
  게시글마다 "좋아요", "싫어요" 버튼을 누르면 각각 개수가 올라가는
  UI를 만드세요.

  요구 조건
  useReducer로 likes, dislikes 상태 관리
  버튼을 누르면 count 증가
  초기값은 { likes: 0, dislikes: 0 }

  보너스
  “초기화” 버튼 추가하여 전체 0으로 초기화
  컴포넌트를 <Vote /> 로 분리해 재사용 가능하게 만들기
*/
