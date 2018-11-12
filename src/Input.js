import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    const { handleKeyUp } = this.props
    return (
      <input
        className="Input"
        placeholder="Add todo here ..."
        onKeyUp={handleKeyUp}
      />
    )
  }
}

export default Input
