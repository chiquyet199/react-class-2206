import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store'

/** Thư viện ReactDOM sẽ lấy nội dụng của component App vẽ lên element có id = root  */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
