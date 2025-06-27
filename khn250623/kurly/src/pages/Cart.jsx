// Cart.jsx

import React from 'react'
import { useAppContext } from './AppProvider'

export default function Cart() {
  const { cart, setCart } = useAppContext();

  // 구매수량 변경
  const handleNewQuantityChange = (e, product) => {
    const newValue = Math.max(Number(e.target.value), 1)
    const discount = product.originalPrice * (product.percent / 100);
    const unitPrice = product.originalPrice - discount;
    setCart(prev =>
      prev.map(item =>
        item.id === product.id
          ? {
            ...item,
            quantity: newValue,
            totalPrice: unitPrice * newValue,
          }
          : item
      )
    );
  }

  return (
    <div className='w-full h-lvh bg-indigo-50 py-10'>
      {
        cart.map(product => {
          const deliveryFee = 3000;
          const discount = product.originalPrice * (product.percent / 100); // 개당 할인액
          const price = product.originalPrice - discount;                   // 개당 할인가
          const totalOriginalPrice = product.originalPrice * product.quantity; // 총 정가
          const totalDiscount = discount * product.quantity;               // 총 할인액
          const totalPrice = price * product.quantity;                     // 총 할인가
          const total = totalPrice + deliveryFee;                          // 최종 결제금액

          return (
            <div
              key={product.id}
              className='flex gap-5 justify-between items-start max-w-[1000px] m-auto'
            >
              <div className="flex-1 flex flex-col gap-5 p-5 bg-white rounded-2xl">
                <h2>{product.name}</h2>

                <div className="flex gap-5">
                  <img src={product.img} className='w-20 rounded-xl' />

                  <div>
                    <div className="flex gap-1 items-center">
                      <span className='font-bold'>
                        {totalPrice.toLocaleString()}원
                      </span>

                      <span className='line-through text-gray-400 text-sm'>
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    </div>

                    <input
                      type='number'
                      value={product.quantity}
                      onChange={(e) => handleNewQuantityChange(e, product)}
                      className='border border-gray-300 px-4 py-2 w-20'
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center p-3 bg-indigo-50 rounded-xl font-semibold">
                  <p className='text-gray-500 text-sm'>
                    상품 {totalPrice.toLocaleString()}원 + 배송비 {deliveryFee.toLocaleString()}원
                  </p>

                  <p className='text-lg'>{total.toLocaleString()}원</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-[400px] p-5 bg-white rounded-2xl">
                <h3 className='font-bold'>결제금액</h3>

                <div className="flex justify-between">
                  <p>상품금액</p>
                  <p className='font-semibold'>{totalOriginalPrice.toLocaleString()}원</p>
                </div>

                <div className="flex justify-between">
                  <p>상품할인금액</p>
                  <p className='font-semibold text-orange-500'>-{totalDiscount.toLocaleString()}원</p>
                </div>

                <div className="flex justify-between">
                  <p>배송비</p>
                  <p className='font-semibold'>{deliveryFee.toLocaleString()}원</p>
                </div>

                <div className="flex justify-between">
                  <p>결제예정금액</p>
                  <p className='font-semibold'>{total.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
