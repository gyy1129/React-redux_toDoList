import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

class List extends Component {
    // 对props进行 类型、必要性的限制
  static propsTypes = {
    todos: PropTypes.array.isRequired,
  }
  
  render () {
    const { todos } = this.props
    return (
      <ul className="todo-main">
        	{
					todos.map( todoObj =>{
            return <Item key={todoObj.id} todo={todoObj}/>
					})
				}
      </ul>
    )
  }
}

export default connect(state => ({ todos: state }))(List)