// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Resort from './pages/Resort'
import Booking from './pages/Booking'
import Dining from './pages/Dining'
import BestResorts from './pages/BestResorts'

function App() {


  return (
    <>
      <div className="flex flex-col gap-10 container m-auto mt-3 mb-10">
        <Header />
        <Routes>
          <Route path='/' element={<Resort />} />
          <Route path='/best' element={<BestResorts />} />
          <Route path='/dine' element={<Dining />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </div>
    </>
  )
}

export default App
