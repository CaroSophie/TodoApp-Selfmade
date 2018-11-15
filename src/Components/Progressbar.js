import React, { Component } from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  height: 20px;
  background: lightgrey;
  margin-top: 20px;
  width: 100%;

  &::after {
    content: '';
    display: block;
    height: 20px;
    margin-top: 20px;
    width: ${props => props.percentage * 100}%;
    background: grey;
    transition: width 0.3s ease;
  }
`
class Progressbar extends Component {
  render() {
    return <Progress percentage={this.props.percentage} />
  }
}

export default Progressbar
