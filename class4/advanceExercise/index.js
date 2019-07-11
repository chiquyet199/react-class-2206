const filterButtons = Array.from(
  document.querySelectorAll('.filterBtn')
)
const filterSelect = document.querySelector('#priceFilter')
let filter = {
  types: {android: true, iPhone: true},
  price: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
}

filterButtons.forEach(bindClickEvent)
filterSelect.addEventListener('change', handlePriceFilterChange)

function bindClickEvent(el) {
  el.addEventListener('click', handleFilterButtonClick)
}

function handlePriceFilterChange(e) {
  if (e.target.value === 'all') {
    filter.price.min = 0
    filter.price.max = Number.MAX_SAFE_INTEGER
    renderFilteredProduct()
    return
  }
  const min = Number(e.target.value.split('-')[0])
  const max = Number(e.target.value.split('-')[1])
  if (isNaN(min) || isNaN(max)) {
    e.preventDefault()
    return
  }
  filter.price.min = min
  filter.price.max = max
  renderFilteredProduct()
}

function handleFilterButtonClick(e) {
  const targetEl = e.target
  const filterType = targetEl.getAttribute('data-type')
  const typeHandlerFilter = {
    showIphone: toggleFilterIphone,
    showAndroid: toggleFilterAndroid,
  }
  const handler = typeHandlerFilter[filterType]
  if (!handler) return
  targetEl.classList.toggle('active')
  const isActive = targetEl.classList.contains('active')
  handler(isActive)
  renderFilteredProduct()
}

function toggleFilterIphone(isActive) {
  filter.types.iPhone = isActive
}
function toggleFilterAndroid(isActive) {
  filter.types.android = isActive
}

function renderFilteredProduct() {
  const products = Array.from(document.querySelectorAll('.product'))
  const shouldHideProducts = products.filter(product => {
    const typeMapper = {
      xiaomi: 'android',
      samsung: 'android',
      bphone: 'android',
      iPhone: 'iPhone',
    }
    const type = product.getAttribute('data-type')
    const price = Number(product.getAttribute('data-price'))
    products.forEach(showIt)
    return (
      !filter.types[typeMapper[type]] ||
      price < filter.price.min ||
      price > filter.price.max
    )
  })
  shouldHideProducts.forEach(hideIt)
  function hideIt(element) {
    element.classList.add('hide')
  }
  function showIt(element) {
    element.classList.remove('hide')
  }
}

renderFilteredProduct()
