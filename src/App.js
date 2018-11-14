import React, { Component } from 'react'
import uid from 'uid'
import Header from './Header'
import Input from './Input'
import Counter from './Counter'
import Todo from './Todo'
import Delete from './Delete'

import Separator from './Separator'
import Progressbar from './Progressbar'

import styled from 'styled-components'

const Styleinput = styled.div`
  display: flex;
`

const Showtodos = styled.div`
  display: grid;
  grid-template-columns: 90fr 10fr;
  grid-template-rows: auto;
  grid-gap: 4em;
  margin: 10px;
  color: darkred;
  font-weight: bold;
  background: whitesmoke;
  opacity: 0.8;
  height: 40px;
`

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
        <Showtodos key={todo.id}>
          <Todo
            key={todo.id}
            text={todo.text}
            toggle={() => this.toggleDone(todo.id)}
            done={todo.done}
          />
          <Delete deletefunction={() => this.deleteToDo(todo.id)} />
        </Showtodos>
      ))
  }

  renderDoneList() {
    return this.state.todos
      .filter(item => item.done)
      .map(todo => (
        <Showtodos key={todo.id}>
          <Todo
            key={todo.id}
            text={todo.text}
            toggle={() => this.toggleDone(todo.id)}
            done={todo.done}
          />
          <Delete handleDelete={() => this.deleteToDo(todo.id)} />
        </Showtodos>
      ))
  }

  counterTodo() {
    return this.state.todos.filter(item => item.done).length
  }

  determineProgress() {
    const { todos } = this.state
    const doneTodos = todos.filter(t => t.done)
    return doneTodos.length / todos.length
  }

  render() {
    this.save()

    return (
      <div>
        <Header />
        <Styleinput>
          <Input handleKeyUp={this.addTodo} />
          <Counter num={this.counterTodo()} />
        </Styleinput>
        <Progressbar percentage={this.determineProgress()} />
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
