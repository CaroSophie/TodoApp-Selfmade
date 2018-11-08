import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todo from './Todo'

class App extends Component {
  todos = ['Geschenke', 'Deko', 'Silvester planen']

  render() {
    return (
      <div className="App">
        <Input />
        <div>
          {this.todos.map(todo => (
            <Todo text={todo} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
