import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const product = useSelector(state => state.products.products)
  // console.log(product)

  const render = product.map(product => (
    <ProductCard product={product} key={product.id} />
  ))

  return (
    <div className='card p-[3rem]'>{render}</div>
  )
}

export default Products


