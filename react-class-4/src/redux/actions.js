//Action Types
export const NAVIGATE = 'NAVIGATE'
export const ADDTOCART = 'ADDTOCART'
export const REMOVECART = 'REMOVECART'
export const CHECKOUT = 'CHECKOUT'
export const CHANGEQUANTITY = 'CHANGEQUANTITY'
export const SETPRODUCTS = 'SETPRODUCTS'

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

export function setProducts(products){
  return {
    type: SETPRODUCTS,
    products
  }
}

export function fetchProducts(){
  axios.get('https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2')
    .then((res) => {
      const products = res.data.data.map(item => ({
        name: item.shop_name,
        id: item.id,
        price: item.final_price
      }))
      this.props.setProducts(products)
    })
  return {
    type: SETPRODUCTS,
    products
  }
}
