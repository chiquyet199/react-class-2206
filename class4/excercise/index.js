const addNewBtn = document.querySelector('.addNew')
const nameInput = document.querySelector('input[name="phoneName"]')
const typeInput = document.querySelector('input[name="phoneType"]')
const priceInput = document.querySelector('input[name="phonePrice"]')

// addNewBtn.onclick = onAddClick
addNewBtn.addEventListener('click', onAddClick)

function onAddClick(event) {
  event.preventDefault()//Khong co refresh on submit
  const product = {
    id: new Date().getTime(),//tra ve 1 so la miliseconds tinh tu 1-1-1970
    name: nameInput.value,//Lay gia tri tu input co name="phoneName"
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
  let result = product.name  && product.type  && product.price 
  return result
}

function clearForm() {
  nameInput.value = ''
  typeInput.value = ''
  priceInput.value = ''
}

function addNewProduct(product) {
  const {type, name, price, id} = product // tuong duong voi code o dong 37 - 40
  // const type = product.type
  // const name = product.name
  // const price = product.price
  // const id= product.id
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
  const newProduct = createEl(template)// tao 1 html element tu 1 string
  const contentEl = document.querySelector('.content')
  contentEl.appendChild(newProduct)
}

function createEl(str) {
  const div = document.createElement('div') // tao ra 1 the div
  /** div = 
    <div></div>
   */
  div.innerHTML = str.trim() //gan innerHTML = str
  /** div =
    <div>
      <div
        class="product"
        data-id="${id}"
        data-price="${price}"
        data-type="${type}"
      >
        <h3>${name}</h3>
        <span>${price}</span>
      </div>
    </div>
   */
  return div.firstChild // tra ve firstChild, tra ve div co class product
}
