
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import './App.css'
function App() {

  return (
    <>
      {/* 실습
      1. 리액트 라우트 라이브러리 다운받기
      2. 경로 설정
        - / Home 페이지
        - / ProductList 페이지 (경로는 소문자)
        - / ProductDetail 페이지 설정
      3. 각각의 라우트 설정만 해보세요
        만약 시간이 남는다면 fetch를 이용해서 제품의 정보를 가져와서 제목들만 출력
        https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json
      */}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/productlist">전체상품</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/productlist/:id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
