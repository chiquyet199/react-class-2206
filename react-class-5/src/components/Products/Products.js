import React from 'react'
import {connect} from 'react-redux'
import {addToCart, fetchProducts} from '../../redux/actions'

class Products extends React.Component {
  componentDidMount(){
    this.props.fetchProducts()
  }
  render(){
    const props = this.props
    return (
      <div className="page products">
        <div className="content">
          {props.products.map(product => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <span>{product.price}</span>
              <button
                onClick={() => {
                  props.addToCart(product)
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = appState => {
  return {products: appState.products}
}

const mapActionsToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product))
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Products)

