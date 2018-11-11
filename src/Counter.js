import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  render() {
    return <div className="Counter">Checked: {this.props.num}</div>
  }
}

export default Counter
