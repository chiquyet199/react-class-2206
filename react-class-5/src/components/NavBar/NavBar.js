import React from 'react'
import {Link} from 'react-router-dom'
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
        <li className={homeClass}>
          <Link to="/">home</Link>
        </li>
        <li className={productsClass}>
          <Link to="/products">products</Link>
        </li>
        <li className={contactClass}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <span className="shopping-cart">
          <Link to="/checkout">Cart ({props.shoppingCartLength})</Link>
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
