import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import Checkout from './components/Checkout/Checkout'
import NavBar from './components/NavBar/NavBar'
import NotFound from './components/NotFound/NotFound'
import './App.css'

const UserNav = () => <h1>User Nav</h1>
const UserLayout = () => {
  return (
    <div>
      <UserNav />
      {/* <UserSideBar/>
      <UserAdvertise/>
      <UserBanner/> */}
      <Switch>
        <Route path="/users" exact component={Users} />
        <Route path="/users/:userId" component={UserDetail} />
      </Switch>
      {/* <UserFooter/> */}
    </div>  
  )
}
const UserDetail = () => (
    <h1>Quyet</h1>
)
const Users = () => {
  return (
      <ul>
        <li>Quyet</li>
        <li>Lam</li>
        <li>Canh</li>
        <li>Bao</li>
        <li>Thach</li>
      </ul>
  )
}

const AddProduct = () => {
  return <h1> This is add products page</h1>
}

const AdBanner = () => {
  return <h1>THIS IS ADVERTISE</h1>
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/products" component={AdBanner} />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/add" component={AddProduct} />
            <Route path="/products" exact component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/users" component={UserLayout} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

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
