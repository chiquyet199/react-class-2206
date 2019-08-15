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

  renderContent = () => {
    const {activePage} = this.state
    switch (activePage) {
      case 'home':
        return <Home />
      case 'products':
        return <Products />
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
        <NavBar navigate={this.navigate} activePage={activePage} />
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
