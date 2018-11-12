import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { text, toggle, done } = this.props
    return (
      <li onClick={toggle} className={done ? 'Toggle' : ''}>
        {text}
      </li>
    )
  }
}

export default Todo
