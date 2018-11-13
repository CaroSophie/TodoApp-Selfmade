import React, { Component } from 'react'
import styled from 'styled-components'

const Lined = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  &.toggle {
    text-decoration: line-through;
    color: black;
  }
`

class Todo extends Component {
  render() {
    const { text, toggle, done } = this.props
    return (
      <Lined onClick={toggle} className={done ? 'toggle' : ''}>
        {text}
      </Lined>
    )
  }
}

export default Todo
