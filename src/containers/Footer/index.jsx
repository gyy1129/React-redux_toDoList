import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {clearAllDoneAction,checkAllTodoAction} from '../../redux/actions.js'
import './index.css'

class Footer extends Component {
  // 对props进行 类型、必要性的限制
  static propsTypes = {
    todos: PropTypes.array.isRequired,
    clearAllDone:PropTypes.func.isRequired,
    checkAllTodo:PropTypes.func.isRequired
  }
  // 全选checkBox设置
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  //  清除 所有已经完成的todos
  clearAllDone = () => {
    this.props.clearAllDone()
   }
   
  render () {
    const { todos } = this.props
    // 已经完成的个数
    const doneCount = todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    // 所有事情的总数
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span>/全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}

export default connect(state => ({ todos: state }), {
  clearAllDone: clearAllDoneAction,
  checkAllTodo: checkAllTodoAction
})(Footer)
