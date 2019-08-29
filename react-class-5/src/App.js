import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Checkout from './components/Checkout/Checkout'
import NavBar from './components/NavBar/NavBar'
import NotFound from './components/NotFound/NotFound'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/products"  component={Products} />
          <Route path="/contact"  component={Contact} />
          <Route path="/checkout"  component={Checkout} />
        </div>
      </BrowserRouter>
    )
  }
}

// Hàm này sẽ cung cấp application state của redux
// cho component App thông qua this.props
const mapStateToProps = appState => {
  const AppProps = {
    activePage: appState.activePage,
  }
  return AppProps
}

export default connect(
  mapStateToProps,
  null
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
