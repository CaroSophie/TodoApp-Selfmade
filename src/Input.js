import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    const { keyupfunction } = this.props
    return (
      <input
        className="Input"
        type="text"
        placeholder="Add todo here"
        onKeyUp={event => {
          keyupfunction(event)
        }}
      />
    )
  }
}

export default Input
