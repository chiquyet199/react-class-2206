const showIphoneBtn = document.querySelector('.showIphone')

function hideElement(element) {
  element.classList.add('hide')
}

function isIphone(element) {
  let type = element.getAttribute('data-type')
  return type === 'iPhone'
}

function isAndroid(element) {
  let type = element.getAttribute('data-type')
  return type === 'android'
}

showIphoneBtn.addEventListener('click', function() {
  let productEls = Array.from(document.querySelectorAll('.product'))
  for (let i = 0; i < productEls.length; i++) {
    let productEl = productEls[i]
    if (!isIphone(productEl)) {
      hideElement(productEl)
    }
  }

})
