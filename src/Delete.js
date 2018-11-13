import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: grey;
  color: white;
  font-size: 1em;
`

class Delete extends Component {
  render() {
    const { handleDelete } = this.props
    return <Button onClick={handleDelete}>x</Button>
  }
}

export default Delete
