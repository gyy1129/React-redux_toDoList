import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

ReactDOM.render(
  // 为所有容器组件传递store
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById("root"))