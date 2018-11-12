import React, { Component } from 'react'
import './Button.css'

class Delete extends Component {
  render() {
    const { handleDelete } = this.props
    return (
      <button onClick={handleDelete} className="Button">
        x
      </button>
    )
  }
}

export default Delete
