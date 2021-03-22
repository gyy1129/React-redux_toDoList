import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {deleteTodoAction,updateTodoAction} from '../../redux/actions'
import './index.css'

class Item extends Component {
  // 对props进行 类型、必要性的限制
  static propsTypes = {
    todo:PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    updateTodo:PropTypes.func.isRequired
  }
 // 鼠标移入移出 控制列表项高亮
 state = { mouse: false }

 // 处理鼠标移入高亮显示
 handleMouse = (flag) => {
   return () => {
     this.setState({mouse:flag})
   }  
 }

 handleDelete = (id) => {
   return () => {
     if (window.confirm('确定删除吗？')) {
       this.props.deleteTodo(id)
     }
   }
 }
 handleCheck = (id) => {
   return (event) => {
     this.props.updateTodo(id,event.target.checked)
   }
 }

  render () {
    const {id,name,done } = this.props.todo
    const { mouse } = this.state
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger">删除</button>
      </li>
    )
  }
}

export default connect(state => ({ todos: state }), {
  deleteTodo: deleteTodoAction,
  updateTodo:updateTodoAction
})(Item)