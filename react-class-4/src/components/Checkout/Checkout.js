import React from 'react'
import {connect} from 'react-redux'
import {removeCart, checkout, changeQuantity} from '../../redux/actions'

function EmptyCartMessage() {
  return <h2>You've buy nothing, go shopping more ^^</h2>
}

function Checkout(props) {
  const {carts, deleteCartItem, changeQuantity, checkout} = props
  const emptyCart = carts.length === 0
  const totalPrice = carts.reduce((total, item) => {
    total = total + item.price * item.quantity
    return total
  }, 0)
  return (
    <div>
      {emptyCart ? (
        <EmptyCartMessage />
      ) : (
        <ul>
          {carts.map(item => (
            <li className="product-item">
              <span>{item.name}</span>
              <span>{item.price}USD</span>
              <input
                onChange={e => {
                  changeQuantity(item.id, +e.target.value )
                }}
                className="quantity"
                type="number"
                defaultValue={item.quantity}
              />
              <button onClick={() => {deleteCartItem(item.id)}}>X</button>
            </li>
          ))}
        </ul>
      )}
      {!emptyCart && <h3>Total: {totalPrice}</h3>}
      {!emptyCart && (
        <button onClick={checkout}>Checkout</button>
      )}
    </div>
  )
}


const mapStateToProps = appState => {
  return {carts: appState.shoppingCarts,}
}

const mapActionsToProps = dispatch => {
  return {
    checkout: () => {
      dispatch(checkout())
    },
    removeCart: cartId => {
      dispatch(removeCart(cartId))
    },
    changeQuantity: (cartId, newQuantity) => {
      dispatch(changeQuantity(cartId, newQuantity))
    },
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Checkout)
