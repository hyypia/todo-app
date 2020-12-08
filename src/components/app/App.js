import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItemPanel from '../add-item-panel';

import './App.css';

export default class App extends Component {
  state = {
    filter: '',
    text: '',
    todos: [
      { action: 'Learn ReactJS', important: false, done: false },
      { action: 'Drink coffee', important: false, done: false },
      { action: 'Read a Book', important: false, done: false },
      { action: 'Make Todo App', important: true, done: false },
    ],
  };

  onDelete = (action) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo) => {
        return todo.action !== action;
      }),
    });
  };

  handleSubmit = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  toggleProperty = (action, property) => {
    return this.state.todos.map((todo) =>
      todo.action === action ? { ...todo, [property]: !todo[property] } : todo
    );
  };

  onToggleDone = (action) => {
    this.setState({
      todos: this.toggleProperty(action, 'done'),
    });
  };

  onToggleImportant = (action) => {
    this.setState({
      todos: this.toggleProperty(action, 'important'),
    });
  };

  onChangeSearch = (text) => {
    this.setState({ text });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  search = (text, todos) => {
    if (text.length === 0) {
      return todos;
    } else {
      return todos.filter((todo) => {
        return todo.action.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
    }
  };

  filter = (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.done);
      case 'done':
        return todos.filter((todo) => todo.done);
      default:
        return todos.filter((todo) => !todo.done);
    }
  };

  render() {
    const { filter, text, todos } = this.state;
    const visibleTodos = this.filter(this.search(text, todos), filter);
    const doneTodosCounter = todos.filter((todo) => todo.done).length;
    const todosCounter = todos.length - doneTodosCounter;

    return (
      <div className="container">
        <Header todos={todosCounter} done={doneTodosCounter} />
        <SearchPanel
          filter={filter}
          onChangeSearch={this.onChangeSearch}
          onChangeFilter={this.onChangeFilter}
        />
        <TodoList
          todos={visibleTodos}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItemPanel handleSubmit={this.handleSubmit} />
        <p className="text-center">
          <a
            className="source text-secondary"
            href="https://github.com/hyypia/todo-app"
          >
            Source Code
            <i className="fa fa-github pl-1" />
          </a>
        </p>
      </div>
    );
  }
}
