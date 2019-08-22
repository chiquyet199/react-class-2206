import React from 'react'

const Products = props => {
  return (
    <div className="page products">
      <div className="content">
        {props.products.map(product => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            <button onClick={()=>{props.addToCart(product)}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
