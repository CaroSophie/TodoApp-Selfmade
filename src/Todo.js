import React, { Component } from 'react'
import styled from 'styled-components'

const Toggle = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  & .Toggle {
    text-decoration: line-through;
    color: black;
  }
`

class Todo extends Component {
  render() {
    const { text, toggle, done } = this.props
    return (
      <Toggle onClick={toggle} className={done ? 'Toggle ' : ''}>
        {text}
      </Toggle>
    )
  }
}

export default Todo
