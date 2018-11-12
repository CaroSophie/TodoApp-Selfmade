import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, toggle, done } = this.props
    return (
      <li onClick={toggle} className={done ? 'Toggle Textstyle' : 'Textstyle'}>
        {text}
      </li>
    )
  }
}

export default Todo
