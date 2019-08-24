## React life cycle
only use in class component

## Home work
Hiện tại phần gọi API từ trong component Products chưa tối ưu,
Nếu mình move tất cả các code lấy products từ server về vào trong action thì code trong componentDidMount chỉ ntn
componentDidMount(){
  this.props.fetchProducts()
}

trong actions.js
function fetchProducts(){
  axios.get(url)
    .then(function(res){
      //Dispatch action setProducts
    })
}

Đọc document của `redux-thunk` để tìm cách làm việc này