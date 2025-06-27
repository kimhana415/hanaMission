// AppProvider.jsx

import React, { createContext, useContext, useState } from 'react'
const products = [
  {
    id: '1',
    name: '[사미헌] 갈비탕',
    img: 'https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/c4d41015-d188-4c68-b3e9-36968bf2110a.jpeg',
    originalPrice: 13000,
    percent: 15,
  },
]
const ProductContext = createContext();

export default function AppProvider({ children }) {
  const [productInfo, setProductInfo] = useState(products);
  const [cart, setCart] = useState([]);

  const value = {
    productInfo, setProductInfo,
    cart, setCart
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

function useAppContext() {
  return useContext(ProductContext);
}

export { AppProvider, useAppContext };
