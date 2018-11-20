import React, { Component } from 'react';
import './App.css';

class App extends Component {

  removeTodo(index) {
    let todos = this.state.todos;

    let todo = todos.find(function (todo) {
      return todo.counter === index
    });
    todos.splice(todo, 1);
    this.setState({
      todos: todos
    });
  }


  addTodo(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;

    let todo = {
      name,
      completed,
      counter
    };
    counter += 1;
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
      counter: counter
    });
    this.refs.todoForm.reset()
  }

  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      todos: [],
      title: 'hello this is crud',
      counter: 0
    }

  }
  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
        <h3> {title}</h3>
        <form ref="todoForm">
          <input type="text" ref="name" placeholder="name" />
          <input type="text" ref="completed" placeholder="last" />

          <button onClick={this.addTodo}>add todo</button>

        </form>
        {/* <pre>
          {JSON.stringify(todos)}
        </ pre> */}
        <ul>
          {todos.map((todo => <li key={todo.counter}>{todo.name} {todo.completed}
            <button onClick={this.removeTodo.bind(null, todo.counter)}>remove</button>

          </li>))}
        </ul>


      </div>
    );
  }
}

export default App;
