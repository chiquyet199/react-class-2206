import React from 'react'

const Products = props => {
  return (
    <div class="page products">
      <div class="content">
        {props.products.map(product => (
          <div class="product">
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
