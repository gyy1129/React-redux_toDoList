import {ADD_TODO,DELETE_TODO,UPDATE_TODO,CLEAR_ALL_DONE,CHECK_ALL_TODO} from './constant'

// Header
export const addTodoAction = todoObj => ({ type: ADD_TODO, data: todoObj })
// Item
export const deleteTodoAction = todoId => ({ type: DELETE_TODO, data: todoId })
export const updateTodoAction = (todoId, todoDone) => ({ type: UPDATE_TODO, data: { todoId, todoDone } })
// Footer
export const clearAllDoneAction = ()=> ({type:CLEAR_ALL_DONE})
export const checkAllTodoAction = todoDone => ({ type: CHECK_ALL_TODO, data: todoDone })
