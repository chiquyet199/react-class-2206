import React from 'react'

function NavBar(props) {
  const homeClass = props.activePage === 'home' ? 'nav-home active' : ''
  const productsClass = props.activePage === 'products' ? 'nav-products active' : ''
  const contactClass = props.activePage === 'contact' ? 'nav-contact active' : ''
  return (
    <nav>
      <ul>
        <li onClick={() => {props.navigate('home')}} className={homeClass}>home</li>
        <li onClick={() => {props.navigate('products')}} className={productsClass}>products</li>
        <li onClick={() => {props.navigate('contact')}} className={contactClass}>contact</li>
      </ul>
      <span className="shopping-cart">Cart ({props.shoppingCartLength})</span>
    </nav>
  )
}

export default NavBar