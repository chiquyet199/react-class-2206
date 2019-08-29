import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import appState from './reducers'

const store = createStore(appState, applyMiddleware(thunk))

export default store



/**
 * REDUX
 * 
 * Store:     Lưu Application State
 * Actions:   Muốn thay đổi Application State thì phải gọi(dispatch) action
 * Reducers:  Lắng nghe các action, và dựa vào type của từng action để xử lý logic 
 *              và trả về new Application State
 * 
 * REACT-REDUX
 * Provider:  Cung cấp Application State cho React app
 * Connect:   Kết nối 1 react component tới redux 
 */