const showIphoneBtn = document.querySelector('.showIphone')
const showAndroidBtn = document.querySelector('.showAndroid')

function hideElement(element) {
  element.classList.add('hide')
}

function isIphone(element) {
  let type = element.getAttribute('data-type')
  return type === 'iPhone'
}

function isAndroid(element) {
  let androidTypes = ['samsung', 'xiaomi', 'bphone']
  let type = element.getAttribute('data-type')
  let result = androidTypes.indexOf(type) !== -1
  return result 
}

function showAll(productEls){
  let i = 0
  while(i < productEls.length){
    productEls[i].classList.remove('hide')
    i++
  }
}

showIphoneBtn.addEventListener('click', function() {
  let productEls = Array.from(document.querySelectorAll('.product'))
  showAll(productEls)
  for (let i = 0; i < productEls.length; i++) {
    let productEl = productEls[i]
    if (!isIphone(productEl)) {
      hideElement(productEl)
    }
  }
})

showAndroidBtn.addEventListener('click', function() {
  let productEls = Array.from(document.querySelectorAll('.product'))
  showAll(productEls)
  for (let i = 0; i < productEls.length; i++) {
    let productEl = productEls[i]
    if (!isAndroid(productEl)) {
      hideElement(productEl)
    }
  }
})
