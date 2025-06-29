import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Board from './pages/Board'
import Timer from './pages/Timer'
import LevelUp from './pages/LevelUp'
import EntryList from './pages/EntryList'

function App() {
  return (
    <>
      <nav>
        <Link to='/'>게시물</Link>
        <Link to='/timer'>타이머</Link>
        <Link to='/entrylist'>입장명단</Link>
        <Link to='/levelup'>레벨업</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Board />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/entrylist' element={<EntryList />} />
        <Route path='/levelup' element={<LevelUp />} />
      </Routes>
    </>
  )
}

export default App
