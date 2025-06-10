// 파일명: ArticleList.jsx

import React from 'react'
import ArticleCard from './ArticleCard'

export default function ArticleList() {
  const articls = [
    {
      id: 1,
      profile: 'https://t1.daumcdn.net/cfile/tistory/2305624B58C6C74B18',
      name: '우유헛간',
      time: '1시간 전',
      title: '도마치계곡에서 만난 인연이 일본 구주산 백패킹까지',
      content: '돌아가기전에 앞서 사진보단 영상 돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상',
      image: 'https://image.aladin.co.kr/product/18628/37/cover500/8952798260_1.jpg',
      likes: 14,
      comments: 0
    },
    {
      id: 2,
      profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcT4FVwEFO_03tWvFFS1C4qsmCIlt2vVYNA&s',
      name: '나비꿀생활',
      time: '2시간 전',
      title: '[보태니컬아트] 2025 상반기 문화교실 보태니컬아트 작품발표회 관람 후기 - 작품으로 피어난 10주의 시간',
      content: '돌아가기전에 앞서 사진보단 영상 돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상',
      image: 'https://sitem.ssgcdn.com/00/12/94/item/1000498941200_i1_750.jpg',
      likes: 84,
      comments: 22
    },
    {
      id: 3,
      profile: 'https://i.namu.wiki/i/xNDvmGKuWuiLth1LWmd7XbkZD94TZaqsBqntKORBVpsuspvaAlcCyrRFPRUW1QUfJqLgrthPTiHMbySK_syrsg.webp',
      name: '당구당',
      time: '3시간 전',
      title: '올화이트코디 정석, 이시안 여름패션 스타일링 팁',
      content: '돌아가기전에 앞서 사진보단 영상 돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상돌아가기전에 앞서 사진보단 영상',
      image: 'https://image.yes24.com/goods/70874471/XL',
      likes: 13,
      comments: 1
    }
    // 더 많은 글
  ]
  return (
    <div className='article-list'>

      {
        articls.map(articls => (
          <ArticleCard key={articls.id} {...articls} />
        ))
      }

    </div>
  )
}
