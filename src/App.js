import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todo from './Todo'

class App extends Component {
  state = {
    todos: []
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newTodo = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newTodo
      })
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <Input keyupfunction={this.addTodoArray} />
        <div>
          {this.state.todos.map(todo => (
            <Todo key={todo.text} text={todo.text} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
