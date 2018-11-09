import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { text } = this.props
    return <li>{text}</li>
  }
}

export default Todo
