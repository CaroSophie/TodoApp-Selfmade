import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  render() {
    const { num } = this.props
    return <div className="Counter">Checked: {num}</div>
  }
}

export default Counter
