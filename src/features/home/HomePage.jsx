import React from 'react'
import ProductList from '../products/ProductList'
import Top5Product from '../products/Top5Product'

export default function HomePage() {
  return (
    <div>
      <Top5Product />

      <h1 className="text-center text-2xl font-bold mt-5 p-5">SHOP</h1>
      <ProductList />
    </div>
  )
}
