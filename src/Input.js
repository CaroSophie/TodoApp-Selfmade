import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { keyupfunction } = this.props
    return (
      <input
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
