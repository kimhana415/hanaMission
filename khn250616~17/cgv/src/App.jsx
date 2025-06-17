
import './App.css'
import { Routes, Route } from 'react-router-dom';
import MovieView from './pages/MovieView'
import MovieDetail from './pages/MovieDetail';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MovieView />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App
