import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, toggle, done } = this.props
    return (
      <li
        onClick={index => {
          toggle(index)
        }}
        className={done ? 'Toggle' : ''}
      >
        {text}
      </li>
    )
  }
}

export default Todo
