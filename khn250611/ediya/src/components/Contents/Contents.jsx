// Contents.jsx

import React from 'react'
import ContentBreadcrumb from './ContentBreadcrumb'
import RecommendedProduct from './RecommendedProduct'



export default function Contents() {
  return (
    <div className='content__wrap'>
      <ContentBreadcrumb />
      <RecommendedProduct />

    </div>
  )
}
