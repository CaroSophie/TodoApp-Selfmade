import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todo from './Todo'

class App extends Component {
  state = {
    todos: []
  }

  toggleDone = index => {
    const { todos } = this.state
    const toggleDone = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]
    this.setState({
      todos: toggleDone
    })
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
          {this.state.todos.map((todo, index) => (
            <Todo
              key={todo.text}
              text={todo.text}
              toggle={() => {
                this.toggleDone(index)
              }}
              done={todo.done}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
