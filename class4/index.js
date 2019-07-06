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
  let productEls = Array.from(document.querySelectorAll('.product')) //1 mảng các element có class là product
  showAll(productEls) // remove class hide trên tất cả các item trong mảng này
  for (let i = 0; i < productEls.length; i++) {
    let productEl = productEls[i] // khai báo 1 biến để giữ giá trị cho phần tử thứ i của mảng các element
    if (!isIphone(productEl)) { //kiểm tra xem attribute data-type của element này có khác iPhone hay không
      hideElement(productEl) //Nếu khác, thì thêm class hide cho element đó để (display:none)
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



/*
//BÀI TẬP VỀ NHÀ
// UI đã có sẵn cho việc thêm mới 1 sản phẩm vào list product
// handle sự kiện click button , để thêm mới
// google cách tạo mới 1 thẻ html, có cấu trúc như sau

<div
  class="product"
  data-id="3"
  data-price="750"
  data-type="iPhone"
>
  <h3>iPhone7</h3>
  <span>750</span>
</div>

Sau khi tạo được 1 thẻ HTML như thế này, thì thêm nó vào list.(thêm làm sao , google luôn)
*/