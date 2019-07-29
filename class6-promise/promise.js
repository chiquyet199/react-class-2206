/**
 * Nếu dùng callback thì code phải viết lồng vào trong hàm callback, dẫn đến khó nhìn
 * và khó debug.Nếu có nhiều request chờ kết qủa của nhau, thì sẽ có nhiều callback 
 * lồng vào nhau(đây gọi là callback hell) . Để giải quyết trường hợp này thì chúng ta xài 
 * promise.
 * Kết quả trả về của `new Promise()` là 1 promise object, nó là đại diện cho 1 giá trị trong tương
 * lai, vì sao trong tương lai, tại vì khi mình khai báo nó, kết quả chưa trả về (request lên server
 * phụ thuộc vào tốc độ internet,..). 
 * 
 */

 function getRequestAsync(url){ //Vì xài promise nên có thể bỏ đi 2 tham số callbacks
    return new Promise(function(resolve, reject){ //resolve tương đương vs succcessCallback, reject thì <=> errorCallback
      const request = new XMLHttpRequest() //Tạo mới đối tượng XMLHttpRequest để đảm nhận việc gọi request
      request.open('GET', url)//Đây là 1 request để lấy data về nên sẽ dùng phương thức GET. Chỗ này là config cho request
      
      request.onload = function() { 
        if (request.status == 200) { //status do phía server gán và trả về, theo chuẩn thì 200 là success
         const responseObj = JSON.parse(request.response) // Vì server gán kiểu dữ liệu trả về là json string, nên mình muốn xài vs Javascript object thì phải parse về obj
         resolve(responseObj)
        } else {
          reject('request success but something wrong in server.')
        }
      }
      
      // Function này sẽ chạy khi request gặp vấn đề, có thể do đường truyền,...
      request.onerror = function() {
        reject('fail to send request')
      }
      request.send() //send the request
    })
 }  
 

 /**
  * Nếu muốn xài promise thì import file này vào index.html
  * sau đó viết thêm đoạn code này vào index.js
  * ----------------
  * 
    async function getProductsFromServer(){ //Vì trong function này có gọi await nên trước function keyword mình phải thêm chữ async
      const url = 'https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2'
      const responseObj = await getRequestAsync(url) // Khi code chạy tới đây, nó sẽ chờ kq trả về rồi mới chạy tiếp.
    
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

    Sau đó gọi dòng code này sau hàm render(applicationState)
    getProductsFromServer()
  */
