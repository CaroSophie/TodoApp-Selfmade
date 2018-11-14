import React, { Component } from 'react'
import styled from 'styled-components'

const Togglebutton = styled.button`
  width: 100px;
  height: 40px;
  background: darkred;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }

  &.active {
    background: whitesmoke;
    color: black;
  }
`

class Button extends Component {
  state = { isDefault: this.props.isDefault }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state
    return (
      <Togglebutton
        className={isDefault ? '' : 'active'}
        onClick={this.handleToggle}
      >
        {isDefault ? defaultText : alternativeText}
      </Togglebutton>
    )
  }
}

export default Button
