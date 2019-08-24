import React from 'react'
import {connect} from 'react-redux'
import {addToCart, setProducts} from '../../redux/actions'
import axios from 'axios'

class Products extends React.Component {
  componentDidMount(){
    axios.get('https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2')
      .then((res) => {
        const products = res.data.data.map(item => ({
          name: item.shop_name,
          id: item.id,
          price: item.final_price
        }))
        this.props.setProducts(products)
      })
  }
  render(){
    const props = this.props
    return (
      <div className="page products">
        <button onClick={()=>{this.setState({counter:110})}}>change</button>
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
    setProducts: products => {
      dispatch(setProducts(products))
    },
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Products)
