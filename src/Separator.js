import React, { Component } from 'react'
import './Separator.css'

class Separator extends Component {
  render() {
    const { text } = this.props
    return (
      <h3 className="Separator">
        <div className="hr" />
        <span>{text}</span>
        <div className="hr" />
      </h3>
    )
  }
}

export default Separator
