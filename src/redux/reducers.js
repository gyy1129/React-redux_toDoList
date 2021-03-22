import {ADD_TODO,DELETE_TODO,UPDATE_TODO,CLEAR_ALL_DONE,CHECK_ALL_TODO} from './constant'

// 初始化状态
const initState = [{ id: '001', name: '学习代码', done: false },
                   { id: '002', name: '微博反黑', done: true },
                   { id: '003', name: '锻炼身体', done: true }]

// 加工状态
export default function modifyTodo (preState=initState,action) {
  const { type, data } = action

  switch (type) {
    // 添加一个todo
    case ADD_TODO:
      return [data, ...preState]
    
    // 删除一个todo
    case DELETE_TODO:
      const newDeletedTodos = preState.filter((todoObj) => {
        console.log(todoObj)
        return todoObj.id !== data
      })
      return newDeletedTodos
    
    // 更新一个todo
    case UPDATE_TODO:
      const newUpdateTodo = preState.map((todoObj) => {
        if (todoObj.id === data.todoId) {
          todoObj.done = data.todoDone
          return { ...todoObj }
        }
        else return todoObj
      })
      return newUpdateTodo
    
    // 删除所有已经完成todos
    case CLEAR_ALL_DONE:
      const newAllTodos = preState.filter((todoObj) => {
        return !todoObj.done
      }) 
      return newAllTodos
    
    // 勾选或取消勾选所有的todos
    case CHECK_ALL_TODO:
      const newCheck = preState.map((todoObj) => {
        todoObj.done = data /* 这里的data就是true或false值 */
        return {...todoObj}
      })
      return newCheck
    
    default:
      return preState
  }
}
