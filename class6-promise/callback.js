/**Trong 1 trang web sẽ có nhiều lần gọi request tới server, nếu mỗi lần gọi request
 * phải mất thời gian viết lại 1 mớ code như bên file xmlHttpRequest.js thì khá mất công
 * nên mình sẽ tách nó ra thành 1 function để reuse lại cho gọn
 */

const getRequest = function(url, successCallback, errorCallback) {
  const request = new XMLHttpRequest() //Tạo mới đối tượng XMLHttpRequest để đảm nhận việc gọi request
  request.open('GET', url) //Đây là 1 request để lấy data về nên sẽ dùng phương thức GET. Chỗ này là config cho request

  request.onload = function() {
    if (request.status == 200) {
      //status do phía server gán và trả về, theo chuẩn thì 200 là success
      const responseObj = JSON.parse(request.response) // Vì server gán kiểu dữ liệu trả về là json string, nên mình muốn xài vs Javascript object thì phải parse về obj
      successCallback(responseObj)
      /**
       * Đoạn code được comment dưới đây là code cụ thể cho từng tính năng, mình không reuse lại được
       * cho các tính năng khác, nên mình sẽ đặt nó là 1 function successCallback và gọi. Code của function
       * callback sẽ được viết ở nơi sử dụng hàm getRequest.
       * Mình sẽ truyền responseObj vào successCallback để nó thích làm j thì làm.
       */
      //  const productsFromServer = responseObj.data.map(function(p){
      //    return {
      //      id: p.product_id,
      //      name: p.name,
      //      price: p.price,
      //      os: 'ios'
      //    }
      //  })
      //  const newState = {...applicationState, products: productsFromServer}
      //  setState(newState)
    } else {
      /**
       * request đã được server nhận được và trả về response, nhưng vì 1 lý do j đó trên server
       * bị lỗi (database connection hỏng) (code bị ngu nên quăng error) thì thay vì nhận được kêts
       * qủa mong muốn, mình chỉ nhận được 1 message ntn (có thể là 1 data khác do server quyết định)
       * Nó khác với trường hợp request.onerrror . Nếu onerror có nghĩa là server ko nhận được request
       * */
      errorCallback('request success but something wrong in server.')
    }
  }

  // Function này sẽ chạy khi request gặp vấn đề, có thể do đường truyền,...
  request.onerror = function() {
    errorCallback('fail to send request')
  }
  request.send() //send the request
}

/**
  * Nếu muốn xài callback thì import file này vào index.html
  * sau đó viết thêm đoạn code này vào index.js
  * ----------------
   const url = 'https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2'
   const handleSuccess = function(responseObj){
      const productsFromServer = responseObj.data.map(function(p){
        return {
          id: p.product_id,
          name: p.name,
          price: p.price,
          os: 'ios'
        }
      })
      const newState = {...applicationState, products: productsFromServer}
      setState(newState)
   }
   const handleError = function(err){
     console.error(err)
   }
   getRequest()
  */
