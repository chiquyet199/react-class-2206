import React from 'react'
import {connect} from 'react-redux'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Checkout from './components/Checkout/Checkout'
import NavBar from './components/NavBar/NavBar'
import {navigate} from './redux/actions'
import './App.css'

class App extends React.Component {
  renderContent = () => {
    const {activePage} = this.props
    switch (activePage) {
      case 'home':
        return <Home />
      case 'products':
        return (
          <Products
            addToCart={() => {}}
            products={this.props.products}
          />
        )
      case 'contact':
        return <Contact />
      case 'checkout':
        return (
          <Checkout
            carts={this.props.shoppingCarts}
            changeQuantity={() => {}}
            deleteCartItem={this.deleteCartItem}
            checkout={() => {}}
          />
        )
      default:
        return <NotFound navigate={this.navigate} />
    }
  }

  render() {
    const {activePage} = this.props
    const shoppingCartLength = this.props.shoppingCarts.reduce(
      (sum, item) => {
        sum += item.quantity
        return sum
      },
      0
    )
    return (
      <div>
        <NavBar
          navigate={this.props.navigate}
          activePage={activePage}
          shoppingCartLength={shoppingCartLength}
        />
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

// Hàm này sẽ cung cấp application state của redux
// cho component App thông qua this.props
const mapStateToProps = appState => {
  const AppProps = {
    //this.props
    shoppingCarts: appState.shoppingCarts,
    activePage: appState.activePage,
    products: appState.products
  }
  return AppProps
}

// Hàm này sẽ cung cấp các actions trong redux
// cho component App thông qua this.props
const mapActionsToProps = dispatch => {
  const AppProps = {
    navigate: newPage => {
      dispatch(navigate(newPage))
    },
  }
  return AppProps
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)



/**
 *  React App 
 * Gặp phải 1 vấn đề, nếu component con muốn sử dụng 1 action, thì phải truyền xuống nhiều cấp, ko cần thiết
   <App> define rating function
      <Products rating>
        <ProductDetails rating>
          <Rating rating> connect(rating) props.rating()
        </ProductDetails>
      </Products>
    </App> 
 */

/**
 *  React Redux App 
 * <Redux>rating addproduct removeProduct checkout
 * Redux sẽ chia và quản lý các actions/reducers 1 cách hệ thống hơn, dễ quản lý, mở rộng và bảo trì
 * nếu component con muốn sử dụng 1 action, thì chỉ cần connect component đó với redux và xài
   <App> define rating function
      <Products rating>
        <ProductDetails rating>
          <Rating rating> connect(rating) props.rating()
        </ProductDetails>
      </Products>
    </App> 
 */

