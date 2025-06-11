import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import SubVisual from './components/SubVisual/SubVisual'
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';

function App() {

  return (
    <>
      <div className="wrap">
        <Header />
        <SubVisual />
        <Contents />
      </div>
    </>
  )
}

export default App
