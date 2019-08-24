import React from 'react'
import {connect} from 'react-redux'
import {navigate} from '../../redux/actions'

function NavBar(props) {
  const homeClass =
    props.activePage === 'home' ? 'nav-home active' : ''
  const productsClass =
    props.activePage === 'products' ? 'nav-products active' : ''
  const contactClass =
    props.activePage === 'contact' ? 'nav-contact active' : ''
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            props.navigate('home')
          }}
          className={homeClass}
        >
          home
        </li>
        <li
          onClick={() => {
            props.navigate('products')
          }}
          className={productsClass}
        >
          products
        </li>
        <li
          onClick={() => {
            props.navigate('contact')
          }}
          className={contactClass}
        >
          contact
        </li>
      </ul>
      <span
        onClick={() => {
          props.navigate('checkout')
        }}
        className="shopping-cart"
      >
        Cart ({props.shoppingCartLength})
      </span>
    </nav>
  )
}

const mapStateToProps = appState => {
  const shoppingCartLength = appState.shoppingCarts.reduce(
    (sum, item) => {
      sum += item.quantity
      return sum
    },
    0
  )
  return {activePage: appState.activePage, shoppingCartLength}
}

const mapActionsToProps = dispatch => {
  return {
    navigate: page => {
      dispatch(navigate(page))
    },
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NavBar)
