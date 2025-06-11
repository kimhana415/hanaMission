// ProductList.jsx

import React from 'react'
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import ProductBadge from './ProductBadge';

export default function ProductList() {
  const products = [
    {
      productImgSrc: food1,
      productName: '크루아상'
    },
    {
      productImgSrc: food2,
      productName: '쌍쌍츄로스'
    },
    {
      productImgSrc: food3,
      productName: '초코 티라미수 케이크'
    }
  ]
  return (
    <div className="recommended__slide">
      <ul className='recommended__products'>
        {
          products.map((product, index) => (
            <li key={index} className='recommended__product'>
              <ProductBadge />
              <img src={product.productImgSrc} alt={product.productName} className='recommended__product__img' />
              <div className="recommended__product__name">{product.productName}</div>
            </li>
          ))
        }
      </ul>
      <div className="btn-arrow btn-arrow-prev"></div>
      <div className="btn-arrow btn-arrow-next"></div>
    </div>
  )
}
