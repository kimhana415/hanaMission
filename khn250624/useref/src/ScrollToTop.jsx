import React, { useEffect, useRef, useState } from 'react'

export default function ScrollToTop() {
  const topRef = useRef(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div ref={topRef}></div>

      <div className='scroll-section'>
        <h1>스크롤 투톱</h1>
      </div>

      {
        showBtn && (
          <button className='top-btn' onClick={scrollToTop}>
            위로
          </button>
        )
      }

    </>

  )
}
