//Action Types
export const NAVIGATE = 'NAVIGATE'
export const ADDTOCART = 'ADDTOCART'
export const REMOVECART = 'REMOVECART'
export const CHECKOUT = 'CHECKOUT'
export const CHANGEQUANTITY = 'CHANGEQUANTITY'

export function navigate(newPage){
  return {
    type: NAVIGATE,
    newPage: newPage
  }
}

export function changeQuantity(cartId, newQuantity){
  if(newQuantity === 0){
    return removeCart(cartId)
  }
  return {
    type: CHANGEQUANTITY,
    payload: {cartId, newQuantity}
  }
}

export function removeCart(cartId){
  return {
    type: REMOVECART,
    cartId,
  }
}

export function checkout(){
  return {
    type: CHECKOUT
  }
}

export function addToCart(product){
  return {
    type: ADDTOCART,
    product: product
  }
}