const addNewBtn = document.querySelector('.addNew')
const nameInput = document.querySelector('input[name="phoneName"]')
const typeInput = document.querySelector('input[name="phoneType"]')
const priceInput = document.querySelector('input[name="phonePrice"]')

addNewBtn.onclick = onAddClick

function onAddClick(e) {
  e.preventDefault()
  const product = {
    id: new Date().getTime(),
    name: nameInput.value,
    type: typeInput.value,
    price: priceInput.value,
  }
  if(!isValidProduct(product)){
    alert('please enter valid data')
    return
  }
  addNewProduct(product)
  clearForm()
  nameInput.focus()
}

function isValidProduct(product){
  return product.name && product.type && product.price
}

function clearForm() {
  nameInput.value = ''
  typeInput.value = ''
  priceInput.value = ''
}

function addNewProduct(product) {
  const {type, name, price, id} = product
  const template = `
  <div
    class="product"
    data-id="${id}"
    data-price="${price}"
    data-type="${type}"
  >
    <h3>${name}</h3>
    <span>${price}</span>
  </div>
  `
  const newProduct = createEl(template)
  const contentEl = document.querySelector('.content')
  contentEl.appendChild(newProduct)
}

function createEl(str) {
  const div = document.createElement('div')
  div.innerHTML = str.trim()
  return div.firstChild
}
