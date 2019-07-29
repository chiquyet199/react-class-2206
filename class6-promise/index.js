/**
 * Use Callback
 */
// const url =
//   'https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2'
// const handleSuccess = function(responseObj) {
//   const productsFromServer = responseObj.data.map(function(p) {
//     return {
//       id: p.product_id,
//       name: p.name,
//       price: p.price,
//       os: 'ios',
//     }
//   })
//   const newState = {...applicationState, products: productsFromServer}
//   setState(newState)
// }
// const handleError = function(err) {
//   console.error(err)
// }
// getRequest(url, handleSuccess, handleError)

/**Promise */
// async function getProductsFromServer(){ //Vì trong function này có gọi await nên trước function keyword mình phải thêm chữ async
//   const url = 'https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2'
//   const responseObj = await getRequestAsync(url) // Khi code chạy tới đây, nó sẽ chờ kq trả về rồi mới chạy tiếp.

//   const productsFromServer = responseObj.data.map(function(p){
//     return {
//       id: p.product_id,
//       name: p.name,
//       price: p.price,
//       os: 'ios'
//     }
//   })
//   const newState = {...applicationState, products: productsFromServer}
//   setState(newState)
// }  

const sourceProducts = [
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
  {
    id: 5,
    name: 'Nokia',
    os: 'window',
    price: 200,
  },
  {
    id: 6,
    name: 'huaway',
    os: 'android',
    price: 1200,
  },
  {
    id: 7,
    name: 'xiaomi',
    os: 'android',
    price: 500,
  },
  {
    id: 8,
    name: 'samsung note 10',
    os: 'android',
    price: 1500,
  },
]

let applicationState = {
  showBanner: true,
  activePage: 'product',
  filter: {
    show: {
      ios: true,
      android: true,
    },
    price: {
      min: 0,
      max: Number.MAX_SAFE_INTEGER,
    },
  },
  displayProducts: [],
  products: sourceProducts,
}

let stateHistory = [applicationState]

const renderNavbar = function(state) {
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

const renderAddForm = function(state) {
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

const renderFilterBar = function(state) {
  const {min, max} = state.filter.price
  // const min = state.filter.price.min
  // const max = state.filter.price.max
  const selectedValue = `${min}-${max}`
  return `
  <div style="padding: 20px; display:flex; justify-content:center;align-items: center">
    <button class="filterIos ${
      state.filter.show.ios ? 'active' : ''
    }">Show iPhone</button>
    <button class="filterAndroid ${
      state.filter.show.android ? 'active' : ''
    }">Show Android</button>
    <select id="priceFilter">
      <option value="all">All</option>
      <option ${
        selectedValue === '0-500' ? 'selected' : ''
      } value="0-500">0 - 500</option>
      <option ${
        selectedValue === '500-1000' ? 'selected' : ''
      } value="500-1000">500 - 1000</option>
      <option ${
        selectedValue === '1000-1500' ? 'selected' : ''
      } value="1000-1500">1000 - 1500</option>
      <option ${
        selectedValue === '1500-2000' ? 'selected' : ''
      } value="1500-2000">1500 - 2000</option>
    </select>
  </div>
  `
}

const renderProducts = function(state) {
  let {displayProducts, products, filter} = state
  displayProducts = products.filter(function(product) {
    const showOs = filter.show[product.os]
    return (
      product.price >= filter.price.min &&
      product.price <= filter.price.max &&
      showOs
    )
  })
  return `
    <div class="page products">
      ${renderFilterBar(state)}
      ${renderAddForm(state)}
      <div class="content">
        ${displayProducts
          .map(function(product) {
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
          })
          .join('')}
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

const renderPageContent = function(state) {
  if (state.activePage === 'product') return renderProducts(state)
  if (state.activePage === 'home') return renderHome(state)
  if (state.activePage === 'contact') return renderContact(state)
}

const renderHome = function() {
  return `<h1>HOME</h1>`
}

const renderContact = function() {
  return `<h1>Contact</h1>`
}

const bindEventListeners = function() {
  let navHomeEl = document.querySelector('.nav-home')
  let navProductEl = document.querySelector('.nav-products')
  let navContactEl = document.querySelector('.nav-contact')
  let addBtn = document.querySelector('.addNew')
  let filterIosBtn = document.querySelector('.filterIos')
  let filterAndroidBtn = document.querySelector('.filterAndroid')
  let filterPriceOptions = document.querySelector('#priceFilter')

  if (filterPriceOptions) {
    filterPriceOptions.addEventListener('change', function() {
      const dataPrice = filterPriceOptions.value
      const price = {
        min: Number(dataPrice.split('-')[0]),
        max: Number(dataPrice.split('-')[1]),
      }
      if (dataPrice === 'all') {
        price.min = 0
        price.max = Number.MAX_SAFE_INTEGER
      }
      const newState = {...applicationState}
      newState.filter.price = price
      setState(newState)
    })
  }

  if (filterIosBtn) {
    filterIosBtn.addEventListener('click', function() {
      const isActive = applicationState.filter.show.ios
      const newState = {...applicationState}

      // newState.filter.show.ios = !isActive
      newState.filter.show.ios = isActive === true ? false : true
      setState(newState)
    })
  }

  if (filterAndroidBtn) {
    filterAndroidBtn.addEventListener('click', function() {
      const isActive = applicationState.filter.show.android
      const newState = {...applicationState}

      // newState.filter.show.android = !isActive
      newState.filter.show.android = isActive === true ? false : true
      setState(newState)
    })
  }

  addBtn &&
    addBtn.addEventListener('click', function(event) {
      event.preventDefault() //Khong co refresh on submit
      const nameInput = document.querySelector(
        'input[name="phoneName"]'
      )
      const typeInput = document.querySelector(
        'input[name="phoneType"]'
      )
      const priceInput = document.querySelector(
        'input[name="phonePrice"]'
      )
      const product = {
        id: new Date().getTime(), //tra ve 1 so la miliseconds tinh tu 1-1-1970
        name: nameInput.value, //Lay gia tri tu input co name="phoneName"
        os: typeInput.value,
        price: priceInput.value,
      }

      const newProducts = [...applicationState.products, product]
      const newState = {
        ...applicationState,
        products: newProducts,
      }
      setState(newState)
    })

  navHomeEl.addEventListener('click', function() {
    const newState = {...applicationState, activePage: 'home'}
    setState(newState)
  })
  navProductEl.addEventListener('click', function() {
    setState({...applicationState, activePage: 'product'})
  })
  navContactEl.addEventListener('click', function() {
    setState({...applicationState, activePage: 'contact'})
  })
}

const setState = function(newState) {
  stateHistory.push(newState)
  applicationState = {...newState}
  render(newState)
}

render(applicationState)
// getProductsFromServer()