import React, { Component } from 'react'
import styled from 'styled-components'

const Counting = styled.div`
  text-align: end;
  color: lightgrey;
  font-style: italic;
  font-weight: bold;
  font-size: 130%;
  display: flex;
  align-items: center;
  margin-left: auto;
`

class Counter extends Component {
  render() {
    const { num } = this.props
    return <Counting className="Counter">Checked: {num}</Counting>
  }
}

export default Counter
