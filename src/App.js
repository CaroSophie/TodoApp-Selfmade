import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todo from './Todo'
import Delete from './Delete'

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

  deleteToDo = index => {
    const { todos } = this.state
    const deleteTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: deleteTodos
    })
  }

  renderTodoList() {
    return this.state.todos.map((todo, index) => (
      <div className="Showtodos">
        <Todo
          key={todo.text}
          text={todo.text}
          toggle={() => {
            this.toggleDone(index)
          }}
          done={todo.done}
        />
        <Delete
          deletefunction={() => {
            this.deleteToDo(index)
          }}
        />
      </div>
    ))
  }

  render() {
    return (
      <div>
        <div className="Styleinput">
          <Input keyupfunction={this.addTodoArray} />{' '}
        </div>
        {this.renderTodoList()}
      </div>
    )
  }
}

export default App
