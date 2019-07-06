const showIphoneBtn = document.querySelector('.showIphone')
const showAndroidBtn = document.querySelector('.showAndroid')

function hideElement(element) {
  element.classList.add('hide') //classList là 1 thuộc tính có sẵn của 1 html element
}

function isIphone(element) {
  let type = element.getAttribute('data-type')
  return type === 'iPhone' // biểu thức điều kiện trả về kiểu boolean, có thể gán cho 1 biến, hoặc trả về trực tiếp
}

function isAndroid(element) {
  let androidTypes = ['samsung', 'xiaomi', 'bphone']
  let type = element.getAttribute('data-type')
  let result = androidTypes.indexOf(type) !== -1 // indexOf là 1 phương thức có sẵn trên mọi Array, nó trả về thứ tự index của phần tử đó trong mảng nếu có. Không có thì sẽ trả về -1
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
