import {
  NAVIGATE,
  ADDTOCART,
  CHECKOUT,
  CHANGEQUANTITY,
  REMOVECART,
} from './actions'

const initialState = {
  activePage: 'sssss',
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

function navigate(state, action) {
  return {...state, activePage: action.newPage}
}

function addToCart(state, action) {
  let {product} = action
  let newCartItem
  let newShoppingCart
  const {shoppingCarts} = state
  const productInCartIndex = shoppingCarts.findIndex(
    item => item.id === product.id
  )
  if (productInCartIndex === -1) {
    newCartItem = {...product, quantity: 1}
    newShoppingCart = [...shoppingCarts, newCartItem]
  } else {
    newShoppingCart = [...shoppingCarts]
    newShoppingCart[productInCartIndex].quantity++
  }
  return {...state, shoppingCarts: newShoppingCart}
}

function checkout(state) {
  return {...state, shoppingCarts: []}
}

function removeCart(state, action) {
  const {shoppingCarts} = state
  const index = shoppingCarts.findIndex(
    item => item.id === action.cartId
  )
  const newShoppingCarts = [...shoppingCarts]
  newShoppingCarts.splice(index, 1)
  return {...state, shoppingCarts: newShoppingCarts}
}

function changeQuantity(state, action) {
  const {shoppingCarts} = state
  const {cartId, newQuantity} = action.payload
  const index = shoppingCarts.findIndex(
    item => item.id === cartId
  )
  const newShoppingCarts = [...shoppingCarts]
  newShoppingCarts[index].quantity = newQuantity
  return {...state, shoppingCarts: newShoppingCarts}
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case NAVIGATE:
      return navigate(state, action)
    case ADDTOCART:
      return addToCart(state, action)
    case CHECKOUT:
      return checkout(state)
    case REMOVECART:
      return removeCart(state, action)
    case CHANGEQUANTITY:
      return changeQuantity(state, action)
    default:
      return state
  }
}

// navigate = page => {
//   this.setState({activePage: page})
// }

// //addToCart là 1 action với mục đích làm thay đổi app state
// // cho nên function addToCart phải được định nghĩa ở App
// // vì muốn thay đổi appState phải viết trong component App
// addToCart = product => {
//   let newCartItem
//   let newShoppingCart
//   const {shoppingCarts} = this.state
//   const productInCartIndex = shoppingCarts.findIndex(item => item.id === product.id)
//   if(productInCartIndex === -1){
//     newCartItem = {...product, quantity: 1}
//     newShoppingCart = [...shoppingCarts, newCartItem]
//   }else{
//     newShoppingCart = [...shoppingCarts]
//     newShoppingCart[productInCartIndex].quantity++
//   }
//   this.setState({shoppingCarts: newShoppingCart})
// }

// changeQuantity = (id, newQuantity) => {
//   const {shoppingCarts} = this.state
//   const index = shoppingCarts.findIndex(item => item.id === id)
//   const newShoppingCarts = [...shoppingCarts]
//   newShoppingCarts[index].quantity = newQuantity
//   this.setState({shoppingCarts: newShoppingCarts})
// }

// deleteCartItem = id => {
//   const {shoppingCarts} = this.state
//   const index = shoppingCarts.findIndex(item => item.id === id)
//   const newShoppingCarts = [...shoppingCarts]
//   newShoppingCarts.splice(index,1)
//   this.setState({shoppingCarts: newShoppingCarts})
// }

// checkout = () => this.setState({shoppingCarts: []})
