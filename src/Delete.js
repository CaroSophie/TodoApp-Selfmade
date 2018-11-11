import React, { Component } from 'react'
import './Button.css'

class Delete extends Component {
  render() {
    const { deletefunction } = this.props
    return (
      <button onClick={deletefunction} className="Button">
        x
      </button>
    )
  }
}

export default Delete
