import { Routes, Route } from 'react-router-dom';
import AppProvider from './pages/AppProvider';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AppProvider>
  )
}

export default App
