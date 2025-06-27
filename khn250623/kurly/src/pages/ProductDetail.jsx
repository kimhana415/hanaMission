// ProductDetail.jsx

import React, { useState } from 'react'
import { useAppContext } from './AppProvider'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
  const { productInfo, setCart } = useAppContext();
  const [quantity, setQuantity] = useState(1) // 구매수량

  // 구매수량 변경
  const handleQuantityChange = (e) => {
    // const value = Number(e.target.value); 마이너스도 됨
    const value = Math.max(Number(e.target.value), 1)
    // Math.max(a, b) 두 숫자 중에 큰 값을 반환힘
    setQuantity(value);
  }

  const handleAddCart = (product) => {
    const discount = product.originalPrice * (product.percent / 100); // 상품할인금액
    const price = product.originalPrice - discount; // 상품금액

    const cartItem = {
      ...product,
      quantity,
      totalPrice: price * quantity
    };
    setCart(prev => [...prev, cartItem]);
  }

  return (
    <div className='py-10'>
      {
        productInfo.map(product => {
          const discount = product.originalPrice * (product.percent / 100);
          const price = product.originalPrice - discount;
          const totalPrice = price * quantity;

          return (
            <div
              key={product.id}
              className='flex gap-14 max-w-[1000px] m-auto'
            >
              <img src={product.img} className='rounded-xl' />

              <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-1">
                  <div className="text-gray-500 text-sm font-semibold">샛별배송 | 사미헌</div>
                  <h2 className='text-2xl'>{product.name}</h2>
                  <div className="text-gray-400 text-sm">진짜 갈비로 우려낸 전통 갈비탕</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 text-2xl font-bold">
                    <span className='text-orange-500'>
                      {product.percent}%
                    </span>

                    <span>
                      {price.toLocaleString()}
                      <strong className="text-sm"> 원~</strong>
                    </span>
                  </div>

                  <p className='line-through text-gray-400'>
                    {product.originalPrice.toLocaleString()}원
                  </p>
                  <div className="text-2xl">원산지: 상품설명/상세정보 참조</div>
                  <div className="bg-purple-50 rounded-sm px-4 py-3 text-xs">첫 구매라면 10,000원 즉시 할인</div>
                </div>

                <div className="flex justify-between items-center gap-10">
                  <p className='text-sm text-gray-500'>구매수량</p>
                  <input
                    type='number'
                    value={quantity}
                    onChange={handleQuantityChange}
                    className='border border-gray-300 px-4 py-2 w-20'
                  />
                </div>

                <div className="flex flex-col gap-5 items-end">
                  <div className="flex items-baseline gap-4">
                    <span className='text-xs'>총 상품금액:</span>
                    <span className='text-lg font-bold'>
                      <strong className='text-3xl'>{totalPrice.toLocaleString()}</strong> 원</span>
                  </div>
                  <Link to="/cart">
                    <button
                      onClick={() => handleAddCart(product)}
                      className='w-[400px] h-[50px] bg-purple-800 rounded-sm text-white cursor-pointer'>
                      장바구니 담기
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}
