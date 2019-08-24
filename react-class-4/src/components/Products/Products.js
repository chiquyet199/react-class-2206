import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../../redux/actions'

class Products extends React.Component {
  state={counter: 1}
  componentDidMount(){
    console.log('Se duoc goi sau khi component duoc render len DOM')
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Se duoc goi khi component update xong')
    console.log('newState', this.state.counter)
    console.log('oldState', prevState.counter)
  }
  componentWillUnmount(){
    console.log('Se duoc goi khi component chuan bi bi remove khoi DOM')
  }
  shouldComponentUpdate(newProps, newState){
    console.log(this.state.counter)
    if(newState.counter > 10){
      return false
    }
    return true
  }
  render(){
    const props = this.props
    return (
      <div className="page products">
        <h1>Products</h1>
        <h2>{this.state.counter}</h2>
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
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Products)
