import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Input from './Input'
import Todo from './Todo'
import Delete from './Delete'
import Counter from './Counter'
import Separator from './Separator'

class App extends Component {
  state = {
    todos: [
      { text: 'Silvester planen', done: false },
      { text: 'Geschenk Quentin Geb', done: true },
      { text: 'Weihnachtsgeschenke', done: false }
    ]
  }

  addTodo = event => {
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
    return this.state.todos
      .filter(item => !item.done)
      .map((todo, index) => (
        <div className="Showtodos" key={`Showtodos${index}`}>
          <Todo
            key={index}
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
            key={`btn${index}`}
          />
        </div>
      ))
  }

  renderDoneList() {
    return this.state.todos
      .filter(item => item.done)
      .map((todo, index) => (
        <div className="Showtodos" key={`Showtodos${index}`}>
          <Todo
            key={index}
            text={todo.text}
            toggle={() => this.toggleDone(index)}
            done={todo.done}
          />
          <Delete
            handleDelete={() => this.deleteToDo(index)}
            key={`btn${index}`}
          />
        </div>
      ))
  }

  counterTodo() {
    return this.state.todos.filter(item => item.done).length
  }

  render() {
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
}

export default App
