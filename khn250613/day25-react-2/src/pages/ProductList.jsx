// ProductList.jsx

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json')
      .then(response => response.json())
      .then(json => {
        setProducts(json)
        console.log(json)
      })
  }, [])

  return (
    <div>
      {
        products.map((product, index) => (
          <Link to={`/productlist/${index}`} key={index}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
          </Link>
        ))
      }
    </div>
  )
}
