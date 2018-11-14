import React, { Component } from 'react'
import styled from 'styled-components'

const Writetodo = styled.input`
  background-color: white;
  font-size: 15px;
  height: 100px;
  width: 65%;

  &:focus {
    outline: none;
  }
`

class Input extends Component {
  render() {
    const { handleKeyUp } = this.props
    return <Writetodo placeholder="Add todo here ..." onKeyUp={handleKeyUp} />
  }
}

export default Input
