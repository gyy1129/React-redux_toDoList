// 专门暴露store对象

// 引入创建redux最为核心的store
import { createStore } from 'redux'
// 引入redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
//引入总的reducer
import reducers from './reducers'

export default createStore(reducers,composeWithDevTools())