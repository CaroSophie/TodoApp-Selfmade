import React, { Component } from 'react'
import styled from 'styled-components'

const Writetodo = styled.input`
  background-color: white;
  font-size: 20px;
  height: 100px;
  width: 65%;
  border-radius: 10px 10px 10px;
  border: 2px solid grey;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`

class Input extends Component {
  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }
  render() {
    return (
      <Writetodo placeholder="Add todo here ..." onKeyUp={this.handleKeyUp} />
    )
  }
}

export default Input
