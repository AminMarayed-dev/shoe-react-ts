import React from 'react'
import products from '../../../database/Products'
import Card from './Card'




function CardProducts() {
  return (
    <div>
      {products.map((product)=> <Card product={product}/>)}
    </div>
  )
}

export default CardProducts