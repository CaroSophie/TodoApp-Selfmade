import React, { Component } from 'react'
import './Delete.css'

class Delete extends Component {
  render() {
    return (
      <button onClick={this.props.deletefunction} className="Button">
        x
      </button>
    )
  }
}

export default Delete
