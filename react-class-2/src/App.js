import React from 'react'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import './App.css'

class App extends React.Component {
  state = {
    activePage: 'home',
    products: [
      {
        id: 1,
        name: 'iphone1',
        os: 'ios',
        price: 500,
      },
      {
        id: 2,
        name: 'iphone2',
        os: 'ios',
        price: 1000,
      },
      {
        id: 3,
        name: 'iphone10',
        os: 'ios',
        price: 1500,
      },
      {
        id: 4,
        name: 'iphone11',
        os: 'ios',
        price: 2500,
      },
    ],
    shoppingCarts: [],
  }

  navigate = page => {
    this.setState({activePage: page})
  }

  //addToCart là 1 action với mục đích làm thay đổi app state
  // cho nên function addToCart phải được định nghĩa ở App
  // vì muốn thay đổi appState phải viết trong component App
  addToCart = product => {
    debugger
    let newCartItem
    let newShoppingCart
    const {shoppingCarts} = this.state
    const productInCartIndex = shoppingCarts.findIndex(item => item.id === product.id)
    if(productInCartIndex === -1){
      newCartItem = {...product, quantity: 1}
      newShoppingCart = [...shoppingCarts, newCartItem]
    }else{
      newShoppingCart = [...shoppingCarts]
      newShoppingCart[productInCartIndex].quantity++
    }
    console.log('newShoppingCart',newShoppingCart)
    this.setState({shoppingCarts: newShoppingCart})
  }

  renderContent = () => {
    const {activePage} = this.state
    switch (activePage) {
      case 'home':
        return <Home />
      case 'products':
        return <Products addToCart={this.addToCart} products={this.state.products} />
      case 'contact':
        return <Contact />
      default:
        return <NotFound navigate={this.navigate} />
    }
  }

  render() {
    const {activePage} = this.state
    return (
      <div>
        <NavBar navigate={this.navigate} activePage={activePage} shoppingCartLength={this.state.shoppingCarts.length} />
        {this.renderContent()}
      </div>
    )
  }
}

function NotFound(props) {
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <button
        onClick={() => {
          props.navigate('home')
        }}
      >
        BACK TO HOME
      </button>
    </div>
  )
}

export default App
