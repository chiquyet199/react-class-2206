/*
let initialApplicationState = {
  activePage: 'home',
  products: [],
  user: null,
  shoppingCart: []
} //Dinh nghia state ban dau cua application

render() //Render html from state

//Khi user tuong tac len page, thi minh lam 2 buoc.
//1 Update application state
//2 Redender

applicationState.products.push({name:'iPhone', price: 1000})
*/


let applicationState = {
  showBanner: true,
  activePage: 'product',
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
}
let stateHistory = [applicationState]
const renderNavbar = function(state){
  return `
    <nav>
      <ul>
        <li class="nav-home ${
          state.activePage === 'home' ? 'active' : ''
        }">Home</li>
        <li class="nav-products ${
          state.activePage === 'product' ? 'active' : ''
        }">Products</li>
        <li class="nav-contact ${
          state.activePage === 'contact' ? 'active' : ''
        }">contact</li>
      </ul>
      <span class="shopping-cart">Cart (0)</span>
    </nav>
  `
}

const renderAddForm = function(state){
  return `
  <div style="padding: 20px; display:flex; justify-content:center">
    <form>
      <label>
        Name
        <input type="text" name="phoneName" />
      </label>
      <label>
        Type
        <input type="text" name="phoneType" />
      </label>
      <label>
        Price
        <input type="number" name="phonePrice" />
      </label>
      <button class="addNew">Add</button>
    </form>
  </div>
  `
}

const renderProducts = function(state){
  return `
    <div class="page products">
      ${renderAddForm(state)}
      <div class="content">
        ${
          state.products.map(function(product){
            return `
              <div
                class="product"
                data-id="${product.id}"
                data-price="${product.price}"
                data-type="${product.os}"
              >
                <h3>${product.name}</h3>
                <span>${product.price}</span>
              </div>
            `
          }).join('')
      }
      </div>
    </div>
  `
}

const render = function(state) {
  const rootEl = document.querySelector('#root') // Get root element from  DOM
  rootEl.innerHTML = `
      ${renderNavbar(state)}
      ${renderPageContent(state)}
  `
  bindEventListeners()
}

const renderPageContent = function(state){
  if(state.activePage === 'product') return renderProducts(state)
  if(state.activePage === 'home') return renderHome(state)
  if(state.activePage === 'contact') return renderContact(state)
}

const renderHome = function(){
  return `<h1>HOME</h1>`
}

const renderContact = function(){
  return `<h1>Contact</h1>`
}

const bindEventListeners = function(){
  let navHomeEl = document.querySelector('.nav-home')
  let navProductEl = document.querySelector('.nav-products')
  let navContactEl = document.querySelector('.nav-contact')
  let addBtn = document.querySelector('.addNew')

  addBtn && addBtn.addEventListener('click', function(event){
    event.preventDefault()//Khong co refresh on submit
    const nameInput = document.querySelector('input[name="phoneName"]')
    const typeInput = document.querySelector('input[name="phoneType"]')
    const priceInput = document.querySelector('input[name="phonePrice"]')
    const product = {
      id: new Date().getTime(),//tra ve 1 so la miliseconds tinh tu 1-1-1970
      name: nameInput.value,//Lay gia tri tu input co name="phoneName"
      type: typeInput.value,
      price: priceInput.value,
    }

    // applicationState.products.push(product)
    const newProducts = [...applicationState.products, product]
    const newState = {
      ...applicationState,
      products: newProducts
    }
    setState(applicationState)
  })

  navHomeEl.addEventListener('click', function(){
    const newState = {...applicationState, activePage: 'home'}
    // ...applicationState  ||| copy tat ca key value cua object applicationState
    // activePage: 'home'   ||| overwrite gia tri cua key activePage trong applicationState 
    setState(newState)
  })
  navProductEl.addEventListener('click', function(){
    setState({...applicationState, activePage: 'product'})
  })
  navContactEl.addEventListener('click', function(){
    setState({...applicationState, activePage: 'contact'})
  })
}

const setState = function(newState){
  stateHistory.push(newState)
  console.clear()
  console.log(stateHistory)

  render(newState)
}

render(applicationState)



//Advanced Exercise
// 1 - Show filter bar on product page
// 2 - Create object filterProduct in applicationState
//     {
//       min: 0,
//       max: 1000,
//       os: 'ios'
//     }
// 3 - Show products based on filterProduct
//     applicationState.products.filter(function(product){
//       return product.price > applicationState.filterProduct.min 
//             && product.price < applicationState.filterProduct.max
//             &&  product.os == applicationState.filterProduct.os
//     }).map(.....render product item)
// 4 - When filter change, only change filterProducts then rerender.