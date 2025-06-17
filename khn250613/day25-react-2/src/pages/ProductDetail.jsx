// ProductDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // 초기값 null
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json')
      .then(res => res.json())
      .then(json => {
        setProduct(json[parseInt(id)]);  // 문자열을 숫자로 변환
      });
  }, [id]);

  // Uncaught TypeError: Cannot read properties of undefined (reading 'image')
  // product가 아직 undefind인데 .image에 접근하려고해서 에러남
  // 조건부 렌더링으로 해결
  // 첫번째 방법 if문으로 분기 처리
  if (!product) return <p>Loading...</p>;

  // 두번째 방법 옵셔널 체이닝
  // <img src={product?.image} alt={product?.name} />

  return (
    <div>
      <img src={product.image} />

      <div>
        <h5>{product.name} {product.description}</h5>

        <div>{product.coupon}</div>
        <div>{product.original_price}</div>
        <div>
          <span>{product.discount}</span>
          <span>{product.price}</span>
        </div>

        <div>{product.comments}</div>
      </div>
    </div>
  )
}
