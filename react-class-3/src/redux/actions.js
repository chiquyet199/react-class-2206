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