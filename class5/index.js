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

const renderProducts = function(state){
  return `
    <div class="page products">
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
        ${state.showBanner ? '<h1>THIS IS BANNER . WILL HIDE IN 3 SECONDS</h1>' : ''}
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
  applicationState = newState
  render(applicationState)
}

render(applicationState)

//Hide banner after 3s
setTimeout(function(){
  setState({...applicationState, showBanner: false})
},3000)


//Add new product after 5s
setTimeout(function(){
  const newProduct = {
    id:5,
    name: 'Samsung',
    os: 'android',
    price: 1000
  }
  const newState = {
    ...applicationState, //Copy all key value from applicationState
    products: [...applicationState.products, newProduct] // modify applicationState.products, 
  }
  setState(newState)
},5000)