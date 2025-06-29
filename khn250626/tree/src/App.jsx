import './App.css'
import ClassList from './pages/ClassList'
import OrganizationChart from './pages/OrganizationChart'
import Game from './pages/Game'

const science = [
  {
    title: '과학',
    children: [
      {
        title: '1단원: 지구와 달',
        children: [
          { title: '1-1 지구의 모습', children: [] },
          { title: '1-2 달의 변화', children: [] }
        ]
      },
      {
        title: '2단원: 물의 상태 변화',
        children: [
          { title: '2-1 증발과 응결', children: [] }
        ]
      }
    ]
  }
]

const chart = [
  {
    name: '김대표',
    position: 'CEO',
    children: [
      {
        name: '박팀장',
        position: '디자인팀장',
        children: [
          {
            name: '유디자이너',
            position: '디자이너',
            children: [],
          }
        ],
      },
      {
        name: '이팀장',
        position: '개발팀장',
        children: [
          {
            name: '홍개발자',
            position: '프론트엔드',
            children: [],
          },
          {
            name: '최개발자',
            position: '백엔드',
            children: [],
          }
        ],
      }
    ],
  }
]

const game = [
  {
    text: '캠프에서 무엇을 할까?',
    options: [
      {
        text: '고기를 굽는다',
        next: {
          text: ' 불이 너무 세다 어떻게 할까?',
          options: [
            {
              text: '물을 붓는다',
              next: {
                text: '불이 꺼졌다',
                options: []
              }
            },
            {
              text: '소화기 찾기',
              next: {
                text: '실패',
                options: []
              }
            }
          ]
        }
      },
      {
        text: '텐트를 친다',
        next: {
          text: '비가온다',
          options: []
        }
      }
    ]
  }
]

function App() {
  return (
    <>
      <h2>수업 차례(목차) 트리 실습</h2>
      <ClassList tree={science[0]} />

      <h2>회사 조직도 트리 실습</h2>
      <OrganizationChart tree={chart[0]} />

      <h2>게임 선택지 트리 실습</h2>
      <Game tree={game[0]} />
    </>
  )
}

export default App
