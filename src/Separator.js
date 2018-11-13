import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.h3`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0 10px;
  border-bottom: ${props => props.width || 2}px solid black;
`

const Text = styled.span`
  white-space: no wrap;
`

class Separator extends Component {
  render() {
    const { text } = this.props
    return (
      <Wrapper>
        <Line width={5} />
        <Text>{text}</Text>
        <Line width={2} />
      </Wrapper>
    )
  }
}

export default Separator
