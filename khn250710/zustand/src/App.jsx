import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Mypage from './components/Mypage';
import Join from './components/Join';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}

export default App;
