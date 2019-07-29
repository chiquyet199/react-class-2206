/** Đây là code dùng để lấy dữ liệu từ server bằng javascript thuần */
const request = new XMLHttpRequest() //Tạo mới đối tượng XMLHttpRequest để đảm nhận việc gọi request
//url là 1 public api, client chỉ việc gọi tới đó để lấy data về
const url = 'https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=2'
request.open('GET', url)//Đây là 1 request để lấy data về nên sẽ dùng phương thức GET. Chỗ này là config cho request

// Function này sẽ chạy, khi browser nhận được data từ server. Nó chỉ quan tâm là data đã được trả về, 
// còn chuyện validate data mình phải tự code. Kết quả trả về do phía server quy định
request.onload = function() { 
  if (request.status == 200) { //status do phía server gán và trả về, theo chuẩn thì 200 là success
    const responseObj = JSON.parse(request.response) // Vì server gán kiểu dữ liệu trả về là json string, nên mình muốn xài vs Javascript object thì phải parse về obj
    //Lấy ra mảng products setState lại để render data mới lấy từ server về lên page
    //Vì data từ server trả về có cấu trúc khác với data được dùng để render, nên phải map nó lại.
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
  } else {
    console.error('request success but something wrong in server.')
  }
}

// Function này sẽ chạy khi request gặp vấn đề, có thể do đường truyền,...
request.onerror = function() {
  console.error('fail to send request')
}
request.send() //send the request

/**
 * Nếu muốn xài request thuần này thì import file này vào index.html là được 
 */