import React, { Component } from 'react'
import uid from 'uid'
import './App.css'
import Header from './Header'
import Input from './Input'
import Todo from './Todo'
import Delete from './Delete'
import Counter from './Counter'
import Separator from './Separator'

class App extends Component {
  state = {
    todos: this.load()
  }

  addTodo = event => {
    if (event.key === 'Enter') {
      const newTodo = [
        { text: event.target.value, done: false, id: uid() },
        ...this.state.todos
      ]
      this.setState({
        todos: newTodo
      })
      event.target.value = ''
    }
  }

  toggleDone = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const toggleDone = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: toggleDone
    })
  }

  deleteToDo = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const deleteTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: deleteTodos
    })
  }

  renderTodoList() {
    return this.state.todos
      .filter(item => !item.done)
      .map(todo => (
        <div className="Showtodos">
          <Todo
            key={todo.id}
            text={todo.text}
            toggle={() => this.toggleDone(todo.id)}
            done={todo.done}
          />
          <Delete deletefunction={() => this.deleteToDo(todo.id)} />
        </div>
      ))
  }

  renderDoneList() {
    return this.state.todos
      .filter(item => item.done)
      .map(todo => (
        <div className="Showtodos">
          <Todo
            key={todo.id}
            text={todo.text}
            toggle={() => this.toggleDone(todo.id)}
            done={todo.done}
          />
          <Delete handleDelete={() => this.deleteToDo(todo.id)} />
        </div>
      ))
  }

  counterTodo() {
    return this.state.todos.filter(item => item.done).length
  }

  render() {
    this.save()
    return (
      <div>
        <Header />
        <div className="Styleinput">
          <Input handleKeyUp={this.addTodo} />
          <Counter num={this.counterTodo()} />
        </div>
        <Separator text="TODO" />
        {this.renderTodoList()}
        <Separator text="DONE" />
        {this.renderDoneList()}
      </div>
    )
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
