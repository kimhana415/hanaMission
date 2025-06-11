// RecommendedProduct.jsx

import React from 'react'
import ProductList from './ProductList';

export default function RecommendedProduct() {
  return (
    <div className="recommended">
      <div className="recommended__title-box">
        <h3 className="recommended__title">추천 상품</h3>
      </div>
      <ProductList />
    </div>
  )
}
