// Carousel.jsx
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
const images = [
  'https://image.aladin.co.kr/product/18628/37/cover500/8952798260_1.jpg',
  'https://image.yes24.com/goods/70874471/XL',
  'https://sitem.ssgcdn.com/00/12/94/item/1000498941200_i1_750.jpg',
  'https://contents.sixshop.com/thumbnails/uploadedFiles/56785/blogPost/image_1599092709074_1500.png',

]
export default function Carousel() {
  const imgRef = useRef([]);
  const [index, setIndex] = useState(0);

  const slideImg = (i) => {
    imgRef.current[i].scrollIntoView({ behavior: 'smooth' })
  }

  const handlePrev = () => {
    // if (index > 0) {
    //   const newIndex = index - 1;
    //   setIndex(newIndex);
    //   slideImg(newIndex);
    // }

    const newIndex = (index - 1 + images.length) % images.length
    setIndex(newIndex);
    slideImg(newIndex);
  }

  const handleNext = () => {
    // if (index < images.length - 1) {
    //   const newIndex = index + 1;
    //   setIndex(newIndex);
    //   slideImg(newIndex);
    // }

    const newIndex = (index + 1) % images.length
    setIndex(newIndex);
    slideImg(newIndex);
  }

  // 무한루프 사용해야할 경우  % images.length 사용
  // 다음 버튼 예: (3 + 1) % 4 → 4 % 4 → 0
  // 이전 버튼의 경우 음수 방지를 위해 + length 써야함

  return (
    <div className='wrap'>
      <h1>이미지 캐러셀</h1>

      <div className='carousel'>
        {
          images.map((img, i) => (
            <div
              key={i}
              className='img-box'
              ref={(el) => imgRef.current[i] = el}
            >
              <img
                src={img}
                className='img'
              />
            </div>
          ))
        }
      </div>

      <div>
        <button onClick={handlePrev}>이전</button>
        <button onClick={handleNext}>다음</button>
      </div>
    </div >
  )
}
