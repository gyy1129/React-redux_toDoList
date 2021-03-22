import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import {addTodoAction} from '../../redux/actions.js'
import './index.css'

class Header extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
		addTodo:PropTypes.func.isRequired
  }
  
  handleKeyUp = (event) => {
    const { keyCode,target } = event
    // 如果不为回车键 就返回空
    if (keyCode !== 13) return
    // 不能添加空的事件
    if (target.value.trim() === '') {
      alert('输入内容不能为空！')
      return
    }
    // 准备好一个todo对象 
    const todoObj = { id: nanoid(), name: target.value, done: false }
    // 利用容器组件中的addTodo 添加todo
    this.props.addTodo(todoObj)
    // 输入完 设置为空
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入待办事项，按回车键确定"/>
      </div>
    )
  }
}

export default connect(
  state => ({ todos: state }),
  { addTodo: addTodoAction }
)(Header)
